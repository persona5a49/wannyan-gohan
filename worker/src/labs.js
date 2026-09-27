// 健診値19項目の正規化。Phase AのOCR実地テストで検証したロジックをそのまま移植。
// 値・単位・項目名を推測で確定しない：ここはラベル文字列の表記ゆれ吸収のみを行い、
// 数値そのものの妥当性判断（範囲外フラグ等）は呼び出し側（購入者確認UI）に委ねる。

export const CANONICAL_LAB_KEYS = [
  'bun', 'cre', 'sdma', 'alt', 'alp', 'glu', 'tg', 'tcho',
  'alb', 'tp', 'na', 'k', 'ca', 'rbc', 'hct', 'wbc', 'plt', 'usg', 'upc'
]

export const LAB_LABEL_JA = {
  bun: 'BUN', cre: 'Cre', sdma: 'SDMA', alt: 'ALT', alp: 'ALP',
  glu: 'GLU', tg: 'TG', tcho: 'T-Cho', alb: 'ALB', tp: 'TP',
  na: 'Na', k: 'K', ca: 'Ca', rbc: 'RBC', hct: 'HCT', wbc: 'WBC',
  plt: 'PLT', usg: '尿比重', upc: 'UPC'
}

const ALIASES = {
  bun: ['bun'],
  cre: ['cre', 'crea', 'creatinine'],
  sdma: ['sdma'],
  alt: ['alt', 'gpt'],
  alp: ['alp'],
  glu: ['glu', 'gluc', 'glucose'],
  tg: ['tg', 'trig', 'triglyceride'],
  tcho: ['tcho', 'tchol', 'chol', 'cholesterol', 'totalcholesterol', 'tcho.'],
  alb: ['alb', 'albumin'],
  tp: ['tp', 'totalprotein'],
  na: ['na', 'sodium'],
  k: ['k', 'potassium'],
  ca: ['ca', 'calcium'],
  rbc: ['rbc'],
  hct: ['hct', 'ht', 'pcv', 'hematocrit'],
  wbc: ['wbc'],
  plt: ['plt', 'platelet', 'plat'],
  usg: ['usg', 'urinespecificgravity', 'specificgravity', '尿比重'],
  upc: ['upc']
}

const REVERSE = {}
for (const key of Object.keys(ALIASES)) {
  for (const alias of ALIASES[key]) REVERSE[alias] = key
}

// ラベル文字列 -> 正規化キー（対象19項目に一致しなければnull。ここで新しい項目名を作らない）
export function normalizeLabLabel(raw) {
  if (!raw) return null
  let s = String(raw).trim().toLowerCase()
  s = s.replace(/[\s\-_./（）()]/g, '')
  return REVERSE[s] || null
}

// OCR候補構造の型（JSDocコメントのみ。実行時バリデーションはWorker側で行う）
// {
//   key: 'bun',                 // 正規化済みキー（19項目のいずれか）
//   rawLabel: 'BUN',            // OCRが実際に読んだラベル文字列（購入者確認UIでの透明性のため保持）
//   candidates: [                // 複数測定日時列がある場合は候補を複数持つ。OCRは1つに絞らない。
//     { value: '18', dateLabel: '2024/02/18 14:03', confidence: 82 },
//     { value: '—',  dateLabel: '2024/02/18 11:35', confidence: 40 }
//   ],
//   status: 'ok' | 'low_confidence' | 'not_detected'
// }
