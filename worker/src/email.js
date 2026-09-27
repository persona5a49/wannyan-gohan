// Resend REST APIでメール送信。添付ではなく、期限付きdownload URLをメール本文に載せる方針
// （設計メモPDF_PAYMENT_FLOW_DESIGN/AUTOMATED_PDF_ARCHITECTUREの通り）。

export async function sendPdfDeliveryEmail(env, { to, downloadUrl, expiresAt }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: env.RESEND_FROM,
      to: [to],
      subject: '【わんにゃんごはんカルテ】詳細ごはんカルテPDFが完成しました',
      text: [
        'お申込みいただいた詳細ごはんカルテPDFが完成しました。',
        '',
        `ダウンロードはこちら（${expiresAt}まで有効）：`,
        downloadUrl,
        '',
        '本カルテは診断・治療・療法食の指示ではありません。持病・症状・服薬中・療法食利用中・健診で異常があった場合は、内容の実行前に必ず主治医にご相談ください。',
        '',
        'わんにゃんごはんカルテ'
      ].join('\n')
    })
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`resend_send_failed: ${res.status} ${errText}`)
  }
  return res.json()
}

export async function sendAdminAlert(env, subject, message) {
  if (!env.ADMIN_ALERT_EMAIL) return
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: env.RESEND_FROM,
      to: [env.ADMIN_ALERT_EMAIL],
      subject: `[要確認] ${subject}`,
      // 健康情報・診断データ本文は含めない。注文IDと種別のみ。
      text: message
    })
  })
}
