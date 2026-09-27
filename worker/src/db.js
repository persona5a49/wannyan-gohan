// D1操作のヘルパー。生SQLを1箇所にまとめ、Worker本体からは意味のある関数名で呼べるようにする。

export function nowIso() {
  return new Date().toISOString()
}

export async function createDraftOrder(db, { diagnosisJson, diagnosisVersion }) {
  const id = crypto.randomUUID()
  await db.prepare(
    `INSERT INTO pdf_orders (id, status, diagnosis_version, diagnosis_json, retry_count, created_at)
     VALUES (?, 'draft', ?, ?, 0, ?)`
  ).bind(id, diagnosisVersion || '1', diagnosisJson, nowIso()).run()
  return id
}

export async function setCheckoutSession(db, orderId, { sessionId, priceId }) {
  await db.prepare(
    `UPDATE pdf_orders SET status='checkout_created', stripe_checkout_session_id=?, stripe_price_id=?, checkout_created_at=?
     WHERE id=?`
  ).bind(sessionId, priceId, nowIso(), orderId).run()
}

export async function getOrderBySessionId(db, sessionId) {
  return db.prepare(`SELECT * FROM pdf_orders WHERE stripe_checkout_session_id=?`).bind(sessionId).first()
}

export async function getOrderById(db, id) {
  return db.prepare(`SELECT * FROM pdf_orders WHERE id=?`).bind(id).first()
}

// Webhookは同じイベントを複数回配送し得るため、既にpaid以降の状態なら何もしない（冪等性）。
export async function markPaidIfNotAlready(db, sessionId, { paymentIntentId, email, amountTotal, currency }) {
  const order = await getOrderBySessionId(db, sessionId)
  if (!order) return { updated: false, reason: 'order_not_found' }
  if (order.status !== 'checkout_created' && order.status !== 'draft') {
    return { updated: false, reason: 'already_processed', order }
  }
  await db.prepare(
    `UPDATE pdf_orders SET status='paid', stripe_payment_intent_id=?, customer_email=?, amount_total=?, currency=?, paid_at=?
     WHERE stripe_checkout_session_id=?`
  ).bind(paymentIntentId, email, amountTotal, currency, nowIso(), sessionId).run()
  return { updated: true }
}

export async function saveOcrCandidates(db, orderId, ocrCandidatesJson) {
  await db.prepare(`UPDATE pdf_orders SET ocr_candidates_json=? WHERE id=?`)
    .bind(ocrCandidatesJson, orderId).run()
}

// 購入者確認後の確定値。PDF生成はこの値だけを一次ソースにする（OCR候補を直接は使わない）。
export async function confirmLabs(db, orderId, confirmedLabsJson) {
  await db.prepare(
    `UPDATE pdf_orders SET confirmed_labs_json=?, labs_confirmed_at=? WHERE id=?`
  ).bind(confirmedLabsJson, nowIso(), orderId).run()
}

export async function addOrderFile(db, orderId, { kind, r2Key, mimeType, sizeBytes, measuredAtLabel }) {
  const id = crypto.randomUUID()
  await db.prepare(
    `INSERT INTO pdf_order_files (id, order_id, kind, r2_key, mime_type, size_bytes, measured_at_label, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).bind(id, orderId, kind, r2Key, mimeType, sizeBytes, measuredAtLabel || null, nowIso()).run()
  return id
}

export async function listOrderFiles(db, orderId) {
  const { results } = await db.prepare(`SELECT * FROM pdf_order_files WHERE order_id=?`).bind(orderId).all()
  return results || []
}

// submit: 冪等 — 既にsubmitted以降なら二重投入しない
export async function claimForSubmit(db, orderId) {
  const order = await getOrderById(db, orderId)
  if (!order) return { ok: false, reason: 'not_found' }
  if (order.status !== 'paid') return { ok: false, reason: `invalid_status:${order.status}` }
  await db.prepare(`UPDATE pdf_orders SET status='submitted', submitted_at=? WHERE id=? AND status='paid'`)
    .bind(nowIso(), orderId).run()
  const after = await getOrderById(db, orderId)
  if (after.status !== 'submitted') return { ok: false, reason: 'race_lost' }
  return { ok: true, order: after }
}

// process: 同時実行/Cronリトライで二重処理しないよう、generating状態への遷移をatomicに行う。
export async function claimForProcessing(db, orderId) {
  await db.prepare(
    `UPDATE pdf_orders SET status='generating' WHERE id=? AND status IN ('submitted','generation_failed')`
  ).bind(orderId).run()
  const after = await getOrderById(db, orderId)
  return after && after.status === 'generating' ? after : null
}

export async function markGenerated(db, orderId, pdfStoragePath) {
  await db.prepare(`UPDATE pdf_orders SET status='generated', pdf_storage_path=?, generated_at=? WHERE id=?`)
    .bind(pdfStoragePath, nowIso(), orderId).run()
}

export async function markDelivered(db, orderId) {
  // 保存期間はプライバシーポリシーの記載と一致させる前提（今回はdelivered+30日を初期値としてpurge_atに設定）
  const purgeAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  await db.prepare(`UPDATE pdf_orders SET status='delivered', delivered_at=?, purge_at=? WHERE id=?`)
    .bind(nowIso(), purgeAt, orderId).run()
}

export async function markFailed(db, orderId, stage, errorCode) {
  const status = stage === 'generation' ? 'generation_failed' : 'delivery_failed'
  await db.prepare(
    `UPDATE pdf_orders SET status=?, retry_count=retry_count+1, last_error_code=? WHERE id=?`
  ).bind(status, errorCode, orderId).run()
}

export async function findRetryable(db, limit = 20) {
  const { results } = await db.prepare(
    `SELECT * FROM pdf_orders
     WHERE (status IN ('submitted','generation_failed','delivery_failed') AND retry_count < 3)
        OR (status='generating' AND datetime(created_at) < datetime('now','-10 minutes'))
     LIMIT ?`
  ).bind(limit).all()
  return results || []
}

export async function findExpiredDrafts(db) {
  const { results } = await db.prepare(
    `SELECT id FROM pdf_orders WHERE status='draft' AND datetime(created_at) < datetime('now','-24 hours')`
  ).all()
  return results || []
}

export async function findPurgeable(db) {
  const { results } = await db.prepare(
    `SELECT id FROM pdf_orders WHERE purge_at IS NOT NULL AND datetime(purge_at) < datetime('now')`
  ).all()
  return results || []
}

export async function purgeOrderData(db, orderId) {
  // 機微データ（診断JSON・健診値・PDFパス）だけをnull化し、注文ログ自体（id/status/日時等）は最小限残す。
  await db.prepare(
    `UPDATE pdf_orders SET diagnosis_json=NULL, ocr_candidates_json=NULL, confirmed_labs_json=NULL, pdf_storage_path=NULL
     WHERE id=?`
  ).bind(orderId).run()
}
