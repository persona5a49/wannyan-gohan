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

// ホーム3アイコン・診断設問アイコン：3ファイルが誤って同じ画像の使い回しに戻っていないこと
// （2026-10、ファイル名と中身が入れ替わっていた事故の再発防止）
const iconFiles = ['public/assets/icons/food.png', 'public/assets/icons/treat.png', 'public/assets/icons/checkup.png']
const iconHashes = iconFiles.map((p) => hash(readBin(p)))
check(new Set(iconHashes).size === iconFiles.length, 'アイコン画像（food/treat/checkup.png）のうち中身が重複しているものがあります。誤って同じ画像を複製していないか確認してください')

if (problems.length) {
  console.error(`UI不変条件のチェックで ${problems.length} 件の問題が見つかりました:\n`)
  problems.forEach((p) => console.error(' - ' + p))
  process.exit(1)
} else {
  console.log('OK: STEP1-4構成・シェアボタン一本化・診断履歴ベースの表示切替・paw素材排除・PDFページ数表記・アイコン画像の重複なしを確認しました。')
}
