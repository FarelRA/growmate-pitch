import { chromium } from 'playwright'

const BASE = 'http://100.85.143.61:4321'
const browser = await chromium.launch()

for (const i of [4, 9, 14]) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
  const problems: string[] = []
  page.on('pageerror', e => problems.push(`pageerror: ${String(e).slice(0, 140)}`))
  page.on('console', (m) => {
    if (m.type() === 'error') problems.push(`console.error: ${m.text().slice(0, 140)}`)
  })
  await page.goto(`${BASE}/#/${i}`, { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(3000)
  await page.screenshot({ path: `/tmp/opencode/shots/prod${i}.png` })
  console.log(`slide ${i}: ${problems.length ? problems.slice(0, 5).join(' || ') : 'CLEAN'}`)
  await page.close()
}
await browser.close()
console.log('done')
