import { chromium } from 'playwright'

const BASE = 'http://100.85.143.61:4321'
const browser = await chromium.launch()

const viewArg = process.argv[2] ?? '1920x1080'
const [VW, VH] = viewArg.split('x').map(Number)
const page = await browser.newPage({ viewport: { width: VW, height: VH } })
for (let i = 0; i < 18; i++) {
  await page.goto(`${BASE}/#/${i}`, { waitUntil: 'networkidle', timeout: 60000 })
  await page.reload({ waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(2000)
  const r = await page.evaluate(() => {
    const el = document.querySelector('main')
    if (!el) return { err: 'no main' }
    return {
      scrollH: el.scrollHeight,
      clientH: el.clientHeight,
      over: el.scrollHeight - el.clientHeight,
    }
  })
  console.log(`slide ${i}:`, JSON.stringify(r))
}
await browser.close()
