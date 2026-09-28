import {
  createDraftOrder, setCheckoutSession, getOrderBySessionId, getOrderById,
  markPaidIfNotAlready, saveOcrCandidates, confirmLabs, addOrderFile, listOrderFiles,
  claimForSubmit, claimForProcessing, markGenerated, markDelivered, markFailed,
  findRetryable, findExpiredDrafts, findPurgeable, purgeOrderData, nowIso
} from './db.js'
import { createCheckoutSession, verifyStripeSignature } from './stripe.js'
import { mergeConfirmedLabs, buildRenderableHtml, renderPdf } from './pdf.js'
import { sendPdfDeliveryEmail, sendAdminAlert } from './email.js'
import { CANONICAL_LAB_KEYS } from './labs.js'
import { presignR2PutUrl } from './r2-presign.js'

const MAX_FILES = 5
const MAX_FILE_BYTES = 10 * 1024 * 1024
const MAX_TOTAL_BYTES = 30 * 1024 * 1024
const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Job-Secret',
    'Access-Control-Max-Age': '86400'
  }
}

function json(data, status, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(env) }
  })
}

function badRequest(msg, env) { return json({ success: false, error: msg }, 400, env) }
function notFound(env) { return json({ success: false, error: 'not_found' }, 404, env) }

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const { pathname } = url

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(env) })
    }

    try {
      if (pathname === '/api/pdf/create-checkout' && request.method === 'POST') {
        return await handleCreateCheckout(request, env)
      }
      if (pathname === '/api/stripe/webhook' && request.method === 'POST') {
        return await handleStripeWebhook(request, env, ctx)
      }
      if (pathname === '/api/pdf/order-status' && request.method === 'GET') {
        return await handleOrderStatus(url, env)
      }
      if (pathname === '/api/pdf/upload-url' && request.method === 'POST') {
        return await handleUploadUrl(request, env)
      }
      if (pathname === '/api/pdf/upload-complete' && request.method === 'POST') {
        return await handleUploadComplete(request, env)
      }
      if (pathname === '/api/pdf/confirm-labs' && request.method === 'POST') {
        return await handleConfirmLabs(request, env)
      }
      if (pathname === '/api/pdf/submit' && request.method === 'POST') {
        return await handleSubmit(request, env, ctx)
      }
      if (pathname === '/api/pdf/process' && request.method === 'POST') {
        return await handleProcess(request, env)
      }
      if (pathname === '/api/pdf/download' && request.method === 'GET') {
        return await handleDownload(url, env)
      }
      return notFound(env)
    } catch (err) {
      // diagnosis JSON / 健康情報を含めないよう、エラーメッセージは自前の例外文字列のみログに出す
      console.error('worker_error', err && err.message)
      return json({ success: false, error: 'internal_error' }, 500, env)
    }
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runCron(env))
  }
}

// ---- Handlers ----

async function handleCreateCheckout(request, env) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body.diagnosisJson !== 'string') {
    return badRequest('diagnosisJson (string) is required', env)
  }
  // サイズ上限（診断JSONは実測1〜2万文字程度。異常に大きい入力は拒否）
  if (body.diagnosisJson.length > 200000) return badRequest('diagnosisJson too large', env)
  try {
    JSON.parse(body.diagnosisJson)
  } catch {
    return badRequest('diagnosisJson is not valid JSON', env)
  }

  const orderId = await createDraftOrder(env.DB, {
    diagnosisJson: body.diagnosisJson,
    diagnosisVersion: body.diagnosisVersion || '1'
  })

  const successUrl = `${env.ALLOWED_ORIGIN}/pdf-karute/thanks/?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${env.ALLOWED_ORIGIN}/pdf-karute/`

  const session = await createCheckoutSession(env, {
    orderId,
    priceId: env.STRIPE_PDF_PRICE_ID,
    successUrl,
    cancelUrl
  })

  await setCheckoutSession(env.DB, orderId, { sessionId: session.id, priceId: env.STRIPE_PDF_PRICE_ID })

  return json({ success: true, checkoutUrl: session.url }, 200, env)
}

async function handleStripeWebhook(request, env, ctx) {
  const rawBody = await request.text()
  const signature = request.headers.get('Stripe-Signature')
  const verification = await verifyStripeSignature(rawBody, signature, env.STRIPE_WEBHOOK_SECRET)
  if (!verification.valid) {
    console.error('webhook_signature_invalid', verification.reason)
    return json({ success: false, error: 'invalid_signature' }, 400, env)
  }

  const event = JSON.parse(rawBody)
  if (event.type !== 'checkout.session.completed') {
    return json({ success: true, ignored: event.type }, 200, env)
  }

  const session = event.data.object
  // 対象Price・支払い状態を確認してからpaid化する（success画面だけを信用しない）
  if (session.payment_status !== 'paid') {
    return json({ success: true, ignored: 'not_paid_yet' }, 200, env)
  }

  const result = await markPaidIfNotAlready(env.DB, session.id, {
    paymentIntentId: session.payment_intent,
    email: session.customer_details?.email || session.customer_email || null,
    amountTotal: session.amount_total,
    currency: session.currency
  })

  if (!result.updated && result.reason === 'order_not_found') {
    console.error('webhook_order_not_found', session.id)
  }

  return json({ success: true }, 200, env)
}

async function handleOrderStatus(url, env) {
  const sessionId = url.searchParams.get('session_id')
  if (!sessionId) return badRequest('session_id is required', env)
  const order = await getOrderBySessionId(env.DB, sessionId)
  if (!order) return notFound(env)
  const files = await listOrderFiles(env.DB, order.id)
  // diagnosis_json / confirmed_labs_json / private pathは返さない（安全な要約のみ）
  const base = {
    success: true,
    status: order.status,
    canUpload: order.status === 'paid',
    hasHealthFiles: files.length > 0,
    labsConfirmed: !!order.labs_confirmed_at
  }
  // delivered後の再ダウンロード導線用。毎回新しい署名付きURLをその場で発行する（保存はしない）。
  if (order.status === 'delivered' && order.pdf_storage_path) {
    const { url: downloadUrl, expiresAt } = await buildSignedDownloadUrl(env, order.pdf_storage_path)
    base.downloadUrl = downloadUrl
    base.downloadExpiresAt = expiresAt
  }
  return json(base, 200, env)
}

async function requirePaidOrder(env, sessionId) {
  if (!sessionId) return { error: 'session_id is required' }
  const order = await getOrderBySessionId(env.DB, sessionId)
  if (!order) return { error: 'order_not_found' }
  if (order.status !== 'paid' && order.status !== 'submitted') return { error: `invalid_status:${order.status}` }
  return { order }
}

// ブラウザ→R2直接アップロード方式。Workerは「誰が・どこへ・何を」発行するかだけを決め、
// 画像バイト自体はブラウザからR2へ直接PUTされるためWorkerを中継しない。
async function handleUploadUrl(request, env) {
  const body = await request.json().catch(() => null)
  if (!body || !body.sessionId) return badRequest('sessionId is required', env)
  const { order, error } = await requirePaidOrder(env, body.sessionId)
  if (error) return badRequest(error, env)

  const mimeType = body.mimeType || ''
  if (!ALLOWED_MIME.includes(mimeType)) return badRequest('unsupported_mime_type', env)

  const existing = await listOrderFiles(env.DB, order.id)
  if (existing.length >= MAX_FILES) return badRequest('max_files_exceeded', env)

  // パスは常にサーバー側で生成する（クライアント指定のファイル名は使わない）
  const ext = mimeType === 'application/pdf' ? 'pdf' : mimeType.split('/')[1]
  const r2Key = `health/${order.id}/${crypto.randomUUID()}.${ext}`

  const uploadUrl = await presignR2PutUrl(env, {
    bucket: env.HEALTH_BUCKET_NAME,
    key: r2Key,
    expiresSeconds: 600
  })

  return json({ success: true, uploadUrl, r2Key, mimeType }, 200, env)
}

// ブラウザが直接R2へPUTし終えた後、その事実をWorkerに通知するための確定登録エンドポイント。
// サイズ・存在確認はクライアント自己申告を信用せず、R2へのhead()で実測して行う。
async function handleUploadComplete(request, env) {
  const body = await request.json().catch(() => null)
  if (!body || !body.sessionId || !body.r2Key) return badRequest('sessionId and r2Key are required', env)
  const { order, error } = await requirePaidOrder(env, body.sessionId)
  if (error) return badRequest(error, env)

  if (!body.r2Key.startsWith(`health/${order.id}/`)) return badRequest('r2Key_mismatch', env)

  const head = await env.HEALTH_BUCKET.head(body.r2Key)
  if (!head) return badRequest('upload_not_found', env)

  if (head.size > MAX_FILE_BYTES) {
    await env.HEALTH_BUCKET.delete(body.r2Key).catch(() => {})
    return badRequest('file_too_large', env)
  }

  const existing = await listOrderFiles(env.DB, order.id)
  if (existing.length >= MAX_FILES) {
    await env.HEALTH_BUCKET.delete(body.r2Key).catch(() => {})
    return badRequest('max_files_exceeded', env)
  }
  const existingTotal = existing.reduce((sum, f) => sum + f.size_bytes, 0)
  if (existingTotal + head.size > MAX_TOTAL_BYTES) {
    await env.HEALTH_BUCKET.delete(body.r2Key).catch(() => {})
    return badRequest('total_size_exceeded', env)
  }

  await addOrderFile(env.DB, order.id, {
    kind: 'health_check',
    r2Key: body.r2Key,
    mimeType: head.httpMetadata?.contentType || 'application/octet-stream',
    sizeBytes: head.size,
    measuredAtLabel: body.measuredAtLabel || null
  })

  return json({ success: true }, 200, env)
}

// OCRはブラウザ側（購入者のthanksページ）で実行し、購入者が確認・修正した「確定値」だけをここで受け取る。
// OCR候補（ocrCandidates）は参考記録として保存するのみで、confirmedLabsのみがPDF生成の一次ソースになる。
async function handleConfirmLabs(request, env) {
  const body = await request.json().catch(() => null)
  if (!body || !body.sessionId) return badRequest('sessionId is required', env)
  const order = await getOrderBySessionId(env.DB, body.sessionId)
  if (!order) return notFound(env)
  if (order.status !== 'paid' && order.status !== 'submitted') return badRequest('invalid_status', env)

  const confirmedLabs = body.confirmedLabs || {}
  const invalidKeys = Object.keys(confirmedLabs).filter(k => !CANONICAL_LAB_KEYS.includes(k))
  if (invalidKeys.length) return badRequest(`unknown_lab_keys:${invalidKeys.join(',')}`, env)

  if (body.ocrCandidates) {
    await saveOcrCandidates(env.DB, order.id, JSON.stringify(body.ocrCandidates))
  }
  await confirmLabs(env.DB, order.id, JSON.stringify(confirmedLabs))

  return json({ success: true }, 200, env)
}

async function handleSubmit(request, env, ctx) {
  const body = await request.json().catch(() => null)
  if (!body || !body.sessionId) return badRequest('sessionId is required', env)
  const order = await getOrderBySessionId(env.DB, body.sessionId)
  if (!order) return notFound(env)

  const claim = await claimForSubmit(env.DB, order.id)
  if (!claim.ok) return badRequest(claim.reason, env)

  // 202を即返し、生成処理はwaitUntilで継続。ただしこれだけに依存せずCronでも回収する（findRetryable）。
  ctx.waitUntil(processOrder(env, claim.order.id))
  return json({ success: true, status: 'submitted' }, 202, env)
}

// 内部専用（Cronからの再試行、またはsubmit直後のwaitUntilから呼ばれる）。secret必須。
async function handleProcess(request, env) {
  const secret = request.headers.get('X-Job-Secret')
  if (!secret || secret !== env.PDF_JOB_SECRET) return json({ success: false, error: 'forbidden' }, 403, env)
  const body = await request.json().catch(() => null)
  if (!body || !body.orderId) return badRequest('orderId is required', env)
  await processOrder(env, body.orderId)
  return json({ success: true }, 200, env)
}

async function handleDownload(url, env) {
  const key = url.searchParams.get('key')
  const sig = url.searchParams.get('sig')
  const exp = url.searchParams.get('exp')
  if (!key || !sig || !exp) return badRequest('invalid_link', env)
  if (Date.now() > Number(exp)) return json({ success: false, error: 'expired' }, 410, env)
  const expectedSig = await signDownload(env, key, exp)
  if (sig !== expectedSig) return json({ success: false, error: 'invalid_signature' }, 403, env)

  const obj = await env.OUTPUT_BUCKET.get(key)
  if (!obj) return notFound(env)
  return new Response(obj.body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="karute.pdf"',
      ...corsHeaders(env)
    }
  })
}

async function signDownload(env, key, exp) {
  const data = `${key}.${exp}`
  const cryptoKey = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(env.PDF_JOB_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  const sigBuffer = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(data))
  return [...new Uint8Array(sigBuffer)].map(b => b.toString(16).padStart(2, '0')).join('')
}

async function buildSignedDownloadUrl(env, key, ttlMs = 7 * 24 * 60 * 60 * 1000) {
  const exp = String(Date.now() + ttlMs)
  const sig = await signDownload(env, key, exp)
  return {
    // WORKER_BASE_URLはこのWorker自身のURL（初期状態は<name>.<subdomain>.workers.dev、
    // 太郎さんが独自ドメインのルートを設定したらそちらに変更する）。ここではドメイン構成を仮定しない。
    url: `${env.WORKER_BASE_URL}/api/pdf/download?key=${encodeURIComponent(key)}&exp=${exp}&sig=${sig}`,
    expiresAt: new Date(Number(exp)).toISOString()
  }
}

// ---- Core processing (PDF生成〜納品) ----

async function processOrder(env, orderId) {
  const order = await claimForProcessing(env.DB, orderId)
  if (!order) return // 既に他プロセスが処理中/完了済み（冪等）

  try {
    const diagnosisJson = JSON.parse(order.diagnosis_json)
    const confirmedLabs = order.confirmed_labs_json ? JSON.parse(order.confirmed_labs_json) : null
    const merged = mergeConfirmedLabs(diagnosisJson, confirmedLabs)
    const html = buildRenderableHtml(merged)
    const pdfBytes = await renderPdf(env, html)

    const outputKey = `pdf/${order.id}/karute.pdf`
    await env.OUTPUT_BUCKET.put(outputKey, pdfBytes, { httpMetadata: { contentType: 'application/pdf' } })
    await markGenerated(env.DB, order.id, outputKey)

    if (order.customer_email) {
      const { url: downloadUrl, expiresAt } = await buildSignedDownloadUrl(env, outputKey)
      await sendPdfDeliveryEmail(env, { to: order.customer_email, downloadUrl, expiresAt })
    }
    await markDelivered(env.DB, order.id)
  } catch (err) {
    console.error('process_order_failed', order.id, err && err.message)
    const stage = err && err.message && err.message.startsWith('browser_rendering') ? 'generation' : 'delivery'
    await markFailed(env.DB, order.id, stage, String(err && err.message).slice(0, 200))
    if (order.retry_count >= 2) {
      await sendAdminAlert(env, 'PDF自動生成が3回失敗しました', `order_id=${order.id} stage=${stage}\n（健診情報・診断内容は含めていません）`)
    }
  }
}

// ---- Cron: retry + cleanup ----

async function runCron(env) {
  const retryable = await findRetryable(env.DB)
  for (const order of retryable) {
    await processOrder(env, order.id)
  }

  const expiredDrafts = await findExpiredDrafts(env.DB)
  for (const row of expiredDrafts) {
    await purgeOrderData(env.DB, row.id)
  }

  const purgeable = await findPurgeable(env.DB)
  for (const row of purgeable) {
    // R2オブジェクトを実際に削除してからDB側の機微データもnull化する
    const files = await listOrderFiles(env.DB, row.id)
    for (const f of files) {
      await env.HEALTH_BUCKET.delete(f.r2_key).catch(() => {})
    }
    const order = await getOrderById(env.DB, row.id)
    if (order?.pdf_storage_path) {
      await env.OUTPUT_BUCKET.delete(order.pdf_storage_path).catch(() => {})
    }
    await purgeOrderData(env.DB, row.id)
  }
}
