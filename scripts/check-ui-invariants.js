#!/usr/bin/env node
// UI・導線改善（PR #3, 2026-10）で直した点が、以後の変更で静かに巻き戻っていないかを
// ソース文字列ベースで確認する軽量な回帰チェック。ブラウザは起動しない。
// ここでのPASSは「コードが壊れていない」ことの確認であり、実機・実ブラウザでの
// 見た目確認（スモークテスト）の代わりにはならない。

import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => readFileSync(path.join(root, p), 'utf-8')
const readBin = (p) => readFileSync(path.join(root, p))
const hash = (buf) => createHash('sha1').update(buf).digest('hex')

const problems = []
const check = (ok, msg) => { if (!ok) problems.push(msg) }

const mainJs = read('src/main.js')
const styleCss = read('src/style.css')
const pdfPage = read('public/pdf-karute/index.html')

// 結果画面：STEP1〜4のラベルが揃っている
for (const n of [1, 2, 3, 4]) {
  check(mainJs.includes(`STEP ${n} ・`), `結果画面に STEP ${n} のラベルが見つかりません（src/main.js）`)
}

// 結果画面：STEP1の「結果画像を保存」ミニボタンは削除済みのはず
check(!mainJs.includes('res-save-mini'), 'STEP1の res-save-mini ボタンが復活しています（src/main.js）。保存操作はSTEP2に一本化する前提です')
check((mainJs.match(/class="primary save-share"/g) || []).length === 1, '.save-share ボタンの定義数が1個ではありません（STEP2に一本化されているはずです）')

// ホーム：「診断だけじゃない」4カードは診断履歴ベースで出し分ける
check(
  mainJs.includes('hasDiagnosisHistory && step < QUESTIONS.length'),
  'discover-v2セクションの表示条件が `hasDiagnosisHistory && step < QUESTIONS.length` になっていません（初回/診断済みユーザーの出し分けが壊れている可能性）'
)

// ノイズ混入が見つかった旧paw素材を参照していないこと（hero側はSVG化、diagnosis装飾側はdata URI SVG化済み）
check(!mainJs.includes('paw-01.png') && !mainJs.includes('paw-02.png'), 'src/main.js がノイズ混入済みの paw-01.png / paw-02.png をまだ参照しています')
check(!styleCss.includes('paw-01.png') && !styleCss.includes('paw-02.png'), 'src/style.css がノイズ混入済みの paw-01.png / paw-02.png をまだ参照しています')

// PDFページ：ページ数表記は実テンプレート（p1-p6, p5は条件付き）に合わせて「5〜6ページ」
check(!pdfPage.includes('13ページ'), 'public/pdf-karute/index.html に古い「13ページ」表記が残っています')
check(!/[^〜]6ページ/.test(pdfPage), 'public/pdf-karute/index.html に「5〜」を伴わない単独の「6ページ」表記があります')
check(pdfPage.includes('5〜6ページ'), 'public/pdf-karute/index.html に「5〜6ページ」表記が見つかりません')
check(!pdfPage.includes('1枚に整理するPDF'), 'public/pdf-karute/index.html のProduct JSON-LD descriptionが古い「1枚に整理するPDF」のままです')
check(pdfPage.includes('まず無料診断をする'), 'public/pdf-karute/index.html に未診断ユーザー向けCTA文言「まず無料診断をする」が見つかりません')

// ホーム3アイコン・診断設問アイコン：ファイル名と中身の対応が正しいこと（snapshotハッシュ比較）。
// 2026-10に発生した事故は「3ファイルの中身が重複していた」のではなく「正しい3枚の画像が
// ファイル名の対応だけ入れ替わっていた」（food.pngが健診アイコン、checkup.pngがおやつアイコン
// になっていた等）ため、重複チェックでは検知できない。各ファイルごとに「今の正しい画像」の
// SHA1を期待値として固定し、1枚ずつ一致を確認する。
// 意図的に画像を差し替えた場合は、差し替え時にこの期待値（sha1sumの出力）も更新すること。
const EXPECTED_ICON_SHA1 = {
  'public/assets/icons/food.png': '890decee083a7892c09aca0c00bd5fdabcb0529a', // ごはん皿（ごはん量アイコン）
  'public/assets/icons/treat.png': '0251a7400e4f6a4326a78ff3b3ef73f6a420e538', // 骨型おやつ（おやつ上限アイコン）
  'public/assets/icons/checkup.png': '00a842c0fe0197d5013e944804e629d338eb5239', // 健診クリップボード（健診結果アイコン）
}
for (const [file, expected] of Object.entries(EXPECTED_ICON_SHA1)) {
  const actual = hash(readBin(file))
  check(actual === expected, `${file} の中身が想定スナップショットと一致しません（期待値 ${expected} / 実際 ${actual}）。意図的な差し替えでなければ、他のアイコンとファイル名の対応が入れ替わっていないか確認してください。意図的な差し替えであれば、このスクリプトの期待値を新しいsha1sumで更新してください`)
}

if (problems.length) {
  console.error(`UI不変条件のチェックで ${problems.length} 件の問題が見つかりました:\n`)
  problems.forEach((p) => console.error(' - ' + p))
  process.exit(1)
} else {
  console.log('OK: STEP1-4構成・シェアボタン一本化・診断履歴ベースの表示切替・paw素材排除・PDFページ数表記・アイコン画像の正しい対応（snapshot確認）を確認しました。')
}
