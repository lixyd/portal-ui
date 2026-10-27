#!/usr/bin/env node
// Fails when a portal page hides its nav, promises a blog, or points at a missing id.
import { readFileSync } from 'node:fs'

const [htmlPath, ...cssPaths] = process.argv.slice(2)
if (!htmlPath) {
  console.error('usage: node scripts/check.mjs <index.html> [style.css ...]')
  process.exit(2)
}
const html = readFileSync(htmlPath, 'utf8')
const css = cssPaths.map((p) => readFileSync(p, 'utf8')).join('\n')
const fails = []
const bad = (m) => fails.push(m)

if (/class="tabs"/.test(html) && /\.tabs\{[^}]*display:\s*none/.test(css) && !/class="nav-toggle"/.test(html)) {
  bad('nav is display:none and the page has no .nav-toggle')
}
if (/<title>[^<]*博客/.test(html) && !/id="sec-blog"|<article[\s>]/.test(html)) {
  bad('title says 博客 but the page has no #sec-blog or article')
}
if (!/<h1[\s>]/.test(html)) bad('missing h1')
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
const seen = new Set()
for (const m of html.matchAll(/href="#([^"]+)"/g)) {
  const id = m[1]
  if (seen.has(id)) continue
  seen.add(id)
  if (!ids.has(id)) bad('missing target #' + id)
}
if (fails.length) {
  for (const f of fails) console.error('FAIL ' + f)
  process.exit(1)
}
console.log('ok')
