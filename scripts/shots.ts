import { chromium } from 'playwright'

const BASE = 'http://100.85.143.61:4321'
const OUT = '/tmp/opencode/shots'

const browser = await chromium.launch()

async function shoot(w: number, h: number, prefix: string, fullPage: boolean) {
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(`pageerror: ${String(e).slice(0, 160)}`))
  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning')
      errors.push(`${m.type()}: ${m.text().slice(0, 160)}`)
  })
  for (let i = 0; i < 18; i++) {
    errors.length = 0
    await page.goto(`${BASE}/#/${i}`, { waitUntil: 'networkidle', timeout: 60000 })
    // Same-document hash navs don't reload: force a full reload so the deck boots on slide i.
    await page.reload({ waitUntil: 'networkidle', timeout: 60000 })
    await page.waitForTimeout(2200)
    await page.screenshot({ path: `${OUT}/${prefix}${i}.png`, fullPage })
    const uniq = [...new Set(errors)].slice(0, 6)
    console.log(`shot ${prefix}${i}${uniq.length ? ` | ${uniq.join(' || ')}` : ''}`)
  }
  await page.close()
}

const only = process.argv.slice(2).filter(a => /^[dms]\d+$/.test(a))

async function shootOne(tag: string) {
  const prefix = tag[0] as 'd' | 'm' | 's'
  const i = Number(tag.slice(1))
  const w = prefix === 'd' ? 1920 : prefix === 's' ? 1280 : 390
  const h = prefix === 'd' ? 1080 : prefix === 's' ? 720 : 844
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  await page.goto(`${BASE}/#/${i}`, { waitUntil: 'networkidle', timeout: 60000 })
  await page.reload({ waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(2200)
  await page.screenshot({ path: `${OUT}/${tag}.png`, fullPage: prefix === 'm' })
  console.log(`shot ${tag}`)
  await page.close()
}

if (only.length) {
  for (const tag of only) await shootOne(tag)
}
else {
  await shoot(1920, 1080, 'd', false)
  await shoot(390, 844, 'm', true)
}
await browser.close()
console.log('done')
