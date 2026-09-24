#!/usr/bin/env node
// 商品の栄養成分値（kcal・タンパク質・脂質）が、以下の3箇所で一致しているかを確認する:
//   1. src/main.js の FOODS 配列（診断ロジック・おすすめ表示に使用）
//   2. public/products/compare/finder/index.html の PRODUCTS 配列（比較ツール）
//   3. public/products/<slug>/index.html 内の var kcal/protein/fat（商品詳細ページの個別化ロジック）
// 手作業で3箇所に同じ数値を書いているため、修正漏れによる数値のズレを検知する。

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => readFileSync(path.join(root, p), 'utf-8')

function parseEntries(source, withSlug) {
  const entries = new Map()
  const re = /name:'([^']+)'[^}]*?kcal:([\d.]+)[^}]*?protein:([\d.]+)[^}]*?fat:([\d.]+)(?:[^}]*?slug:'([^']+)')?/g
  let m
  while ((m = re.exec(source))) {
    entries.set(m[1], { kcal: Number(m[2]), protein: Number(m[3]), fat: Number(m[4]), slug: m[5] || null })
  }
  return entries
}

function parseProductSlugs(source) {
  const map = new Map()
  const re = /'([^']+)':\s*'([a-z0-9-]+)'/g
  const block = source.match(/const PRODUCT_SLUGS = \{[\s\S]*?\n\}/)
  if (!block) return map
  let m
  while ((m = re.exec(block[0]))) map.set(m[1], m[2])
  return map
}

function parseDetailPageValues(slug) {
  let src
  try {
    src = read(`public/products/${slug}/index.html`)
  } catch {
    return null
  }
  const m = src.match(/var kcal\s*=\s*([\d.]+),\s*protein\s*=\s*([\d.]+),\s*fat\s*=\s*([\d.]+)/)
  if (!m) return null
  return { kcal: Number(m[1]), protein: Number(m[2]), fat: Number(m[3]) }
}

const mainJs = read('src/main.js')
const finderHtml = read('public/products/compare/finder/index.html')

const foods = parseEntries(mainJs)
const products = parseEntries(finderHtml)
const productSlugs = parseProductSlugs(mainJs)

const problems = []

// FOODS (main.js) と PRODUCTS (finder) の突き合わせ
for (const [name, f] of foods) {
  const p = products.get(name)
  if (!p) {
    problems.push(`[finder未掲載] "${name}" が main.js の FOODS にはあるが、finder の PRODUCTS に見つかりません`)
    continue
  }
  for (const key of ['kcal', 'protein', 'fat']) {
    if (f[key] !== p[key]) {
      problems.push(`[finderとの不一致] "${name}" の ${key}: main.js=${f[key]} / finder=${p[key]}`)
    }
  }
}
for (const name of products.keys()) {
  if (!foods.has(name)) {
    problems.push(`[main.js未掲載] "${name}" が finder の PRODUCTS にはあるが、main.js の FOODS に見つかりません`)
  }
}

// FOODS (main.js) と 商品詳細ページ の突き合わせ（PRODUCT_SLUGS 経由）
for (const [name, f] of foods) {
  const slug = productSlugs.get(name)
  if (!slug) {
    problems.push(`[スラッグ未設定] "${name}" に対応する PRODUCT_SLUGS のエントリがありません`)
    continue
  }
  const detail = parseDetailPageValues(slug)
  if (!detail) {
    problems.push(`[詳細ページ読取不可] "${name}"（slug: ${slug}）の商品ページから kcal/protein/fat を読み取れません`)
    continue
  }
  for (const key of ['kcal', 'protein', 'fat']) {
    if (f[key] !== detail[key]) {
      problems.push(`[詳細ページとの不一致] "${name}" の ${key}: main.js=${f[key]} / ${slug}/index.html=${detail[key]}`)
    }
  }
}

if (problems.length) {
  console.error(`商品データの不一致が ${problems.length} 件見つかりました:\n`)
  problems.forEach((p) => console.error(' - ' + p))
  console.error('\nsrc/main.js の FOODS、finder の PRODUCTS、該当する商品詳細ページの3箇所をすべて揃えてください。')
  process.exit(1)
} else {
  console.log(`OK: ${foods.size}商品の kcal / タンパク質 / 脂質 が FOODS・finder・商品詳細ページ間ですべて一致しています。`)
}
