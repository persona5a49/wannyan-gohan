// Stripe REST APIを直接fetchで叩く（Node向けstripe SDKはWorkers環境と相性が悪いため使わない）。
// 秘密鍵はすべてWorkerのsecretsから読み、クライアントには一切渡さない。

const STRIPE_API = 'https://api.stripe.com/v1'

function formEncode(obj, prefix = '') {
  const parts = []
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue
    const key = prefix ? `${prefix}[${k}]` : k
    if (typeof v === 'object' && !Array.isArray(v)) {
      parts.push(formEncode(v, key))
    } else {
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
    }
  }
  return parts.join('&')
}

export async function createCheckoutSession(env, { orderId, priceId, successUrl, cancelUrl }) {
  const body = formEncode({
    mode: 'payment',
    'line_items[0][price]': priceId,
    'line_items[0][quantity]': 1,
    client_reference_id: orderId,
    'metadata[order_id]': orderId,
    success_url: successUrl,
    cancel_url: cancelUrl
  })
  const res = await fetch(`${STRIPE_API}/checkout/sessions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`stripe_checkout_create_failed: ${res.status} ${errText}`)
  }
  return res.json()
}

// Stripeの既存Payment Linkに紐づくPriceをコードから特定するためのヘルパー。
// STRIPE_SECRET_KEY設定後、一度だけ手動で呼んでPrice IDを確認し、以降はSTRIPE_PDF_PRICE_ID固定値を使う想定。
export async function findPriceFromPaymentLink(env, paymentLinkUrl) {
  const paymentLinkId = paymentLinkUrl.split('/').pop()
  const res = await fetch(`${STRIPE_API}/payment_links/${paymentLinkId}?expand[]=line_items`, {
    headers: { Authorization: `Bearer ${env.STRIPE_SECRET_KEY}` }
  })
  if (!res.ok) throw new Error(`stripe_payment_link_lookup_failed: ${res.status} ${await res.text()}`)
  return res.json()
}

// Webhook署名検証：Stripe-Signatureヘッダーは "t=timestamp,v1=signature" 形式。
// 生のリクエストボディ（パース前の文字列）に対して計算する必要があるため、呼び出し側は必ずraw bodyを渡すこと。
export async function verifyStripeSignature(rawBody, signatureHeader, webhookSecret, toleranceSeconds = 300) {
  if (!signatureHeader) return { valid: false, reason: 'missing_signature_header' }
  const parts = Object.fromEntries(
    signatureHeader.split(',').map(kv => {
      const [k, v] = kv.split('=')
      return [k, v]
    })
  )
  const timestamp = parts.t
  const v1 = parts.v1
  if (!timestamp || !v1) return { valid: false, reason: 'malformed_signature_header' }

  const signedPayload = `${timestamp}.${rawBody}`
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(webhookSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sigBuffer = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signedPayload))
  const computed = [...new Uint8Array(sigBuffer)].map(b => b.toString(16).padStart(2, '0')).join('')

  if (computed !== v1) return { valid: false, reason: 'signature_mismatch' }

  const age = Math.abs(Date.now() / 1000 - Number(timestamp))
  if (age > toleranceSeconds) return { valid: false, reason: 'timestamp_too_old' }

  return { valid: true }
}
