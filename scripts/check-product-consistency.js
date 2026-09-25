#!/usr/bin/env node
// 商品データ（kcal・タンパク質・脂質・価格）が、以下の3箇所で一致しているかを確認する:
//   1. src/main.js の FOODS 配列（診断ロジック・おすすめ表示に使用）
//   2. public/products/compare/finder/index.html の PRODUCTS 配列（比較ツール）
//   3. public/products/<slug>/index.html 内の var kcal/protein/fat と価格表示メタ情報
// 手作業で3箇所に同じ数値を書いているため、修正漏れによるズレを検知する。

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => readFileSync(path.join(root, p), 'utf-8')

function parseScalarObject(body) {
  const out = {}
  const keys = ['name', 'slug', 'kcal', 'protein', 'fat', 'priceKg', 'priceUnverified', 'priceBasis', 'packageSize', 'checkedAt', 'priceCheckedAt', 'priceSourceUrl', 'priceNote']
  for (const key of keys) {
    const str = body.match(new RegExp(`${key}:'([^']*)'`))
    if (str) {
      out[key] = str[1]
      continue
    }
    const num = body.match(new RegExp(`${key}:([\\d.]+)`))
    if (num) {
      out[key] = Number(num[1])
      continue
    }
    const bool = body.match(new RegExp(`${key}:(true|false)`))
    if (bool) out[key] = bool[1] === 'true'
  }
  if (out.priceBasis === undefined) out.priceBasis = out.priceUnverified ? 'estimated' : undefined
  if (out.checkedAt === undefined && out.priceCheckedAt) out.checkedAt = out.priceCheckedAt
  return out
}

function parseEntries(source) {
  const entries = new Map()
  const re = /\{name:'[^']+'[^\n]*?priceKg:[^}]+\}/g
  let m
  while ((m = re.exec(source))) {
    const entry = parseScalarObject(m[0])
    if (entry.name) entries.set(entry.name, entry)
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
  const detail = { kcal: Number(m[1]), protein: Number(m[2]), fat: Number(m[3]) }
  const priceMetric = src.match(/<div class="metric"([^>]*)>\s*<strong>(?:約)?([\d,]+|価格は販売ページで確認)(?:円\/kg)?<\/strong><br>kg単価目安[\s\S]*?<\/div>/)
  if (priceMetric) {
    const attrs = priceMetric[1]
    const display = priceMetric[2]
    const attr = (name) => {
      const mm = attrs.match(new RegExp(`${name}="([^"]*)"`))
      return mm ? mm[1] : undefined
    }
    detail.priceKg = attr('data-price-kg') !== undefined ? Number(attr('data-price-kg')) : (display === '価格は販売ページで確認' ? undefined : Number(display.replace(/,/g, '')))
    detail.priceBasis = attr('data-price-basis')
    detail.checkedAt = attr('data-checked-at')
    detail.priceDisplay = display
  }
  return detail
}

const mainJs = read('src/main.js')
const finderHtml = read('public/products/compare/finder/index.html')

const foods = parseEntries(mainJs)
const products = parseEntries(finderHtml)
const productSlugs = parseProductSlugs(mainJs)

const problems = []

function compareValue(scope, name, key, aLabel, a, bLabel, b) {
  if (a !== b) problems.push(`[${scope}] "${name}" の ${key}: ${aLabel}=${a} / ${bLabel}=${b}`)
}

// FOODS (main.js) と PRODUCTS (finder) の突き合わせ
for (const [name, f] of foods) {
  const p = products.get(name)
  if (!p) {
    problems.push(`[finder未掲載] "${name}" が main.js の FOODS にはあるが、finder の PRODUCTS に見つかりません`)
    continue
  }
  for (const key of ['kcal', 'protein', 'fat', 'priceKg']) compareValue('finderとの不一致', name, key, 'main.js', f[key], 'finder', p[key])
  for (const key of ['priceBasis', 'checkedAt']) {
    if (f[key] !== undefined || p[key] !== undefined) compareValue('finderとの価格メタ不一致', name, key, 'main.js', f[key], 'finder', p[key])
  }
}
for (const name of products.keys()) {
  if (!foods.has(name)) problems.push(`[main.js未掲載] "${name}" が finder の PRODUCTS にはあるが、main.js の FOODS に見つかりません`)
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
  for (const key of ['kcal', 'protein', 'fat']) compareValue('詳細ページとの不一致', name, key, 'main.js', f[key], `${slug}/index.html`, detail[key])
  if (detail.priceKg !== undefined) compareValue('詳細ページとの価格不一致', name, 'priceKg', 'main.js', f.priceKg, `${slug}/index.html`, detail.priceKg)
  if (detail.priceBasis !== undefined) compareValue('詳細ページとの価格メタ不一致', name, 'priceBasis', 'main.js', f.priceBasis, `${slug}/index.html`, detail.priceBasis)
  if (detail.checkedAt !== undefined) compareValue('詳細ページとの価格メタ不一致', name, 'checkedAt', 'main.js', f.checkedAt, `${slug}/index.html`, detail.checkedAt)
  if ((f.priceUnverified || f.priceBasis === 'estimated') && detail.priceDisplay && detail.priceDisplay !== '価格は販売ページで確認') {
    problems.push(`[未確認価格表示] "${name}"（slug: ${slug}）は estimated/priceUnverified ですが、商品詳細で数値表示されています`)
  }
}

if (problems.length) {
  console.error(`商品データの不一致が ${problems.length} 件見つかりました:\n`)
  problems.forEach((p) => console.error(' - ' + p))
  console.error('\nsrc/main.js の FOODS、finder の PRODUCTS、該当する商品詳細ページの3箇所をすべて揃えてください。')
  process.exit(1)
} else {
  console.log(`OK: ${foods.size}商品の kcal / タンパク質 / 脂質 / priceKg / 価格メタ情報 が FOODS・finder・商品詳細ページ間で整合しています。`)
}
