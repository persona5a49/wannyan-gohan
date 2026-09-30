import templateHtml from './pdf-template.html'

// diagnosisJson（無料診断のresult）に、購入者が確認・確定した健診値をマージする。
// answers.labs のキーは既存テンプレート側（loadDiagnosisData）がそのまま読む19項目キーと同じにする。
// ここで新しい判定・計算は行わない（確定値をそのまま転記するだけ）。
export function mergeConfirmedLabs(diagnosisJson, confirmedLabs) {
  if (!confirmedLabs) return diagnosisJson
  const merged = JSON.parse(JSON.stringify(diagnosisJson))
  merged.answers = merged.answers || {}
  merged.answers.labs = { ...(merged.answers.labs || {}), ...confirmedLabs }
  return merged
}

// テンプレートに診断データを注入した「実行可能な」HTML文字列を作る。
// 重要：ここではJSを実行しない・DOMを操作しない。Cloudflare Browser Renderingが
// 実際のヘッドレスブラウザでこのHTMLを開いた時に、テンプレート自身のscriptが
// 一度だけ正しく走ってrender()が実データで完了する（PhaseAのPoCで検証済みの方式）。
export function buildRenderableHtml(diagnosisJson) {
  const json = JSON.stringify(JSON.stringify(diagnosisJson)) // 二重エンコードでscriptタグ内に安全に埋め込む
  const injected = `<script>window.__AUTO_DIAGNOSIS_JSON__ = ${json};</script>`
  return templateHtml.replace('</head>', `${injected}</head>`)
}

export async function renderPdf(env, html) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/browser-rendering/pdf`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.CF_BROWSER_RENDERING_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        html,
        gotoOptions: { waitUntil: 'networkidle0' },
        // Zen Maru Gothicの半角英数字グリフのcold-start読み込み漏れ対策。
        // テンプレート側がdocument.fonts.load()完了後にdata-pdf-ready="true"を立てるので、
        // それを明示的に待ってからPDFを生成する（networkidle0だけでは間に合わないケースがあった）。
        waitForSelector: { selector: '[data-pdf-ready="true"]', timeout: 15000 },
        emulateMediaType: 'print',
        pdfOptions: {
          format: 'a4',
          preferCSSPageSize: true,
          printBackground: true,
          scale: 1,
          margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' }
        }
      })
    }
  )
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`browser_rendering_pdf_failed: ${res.status} ${errText}`)
  }
  return res.arrayBuffer()
}
