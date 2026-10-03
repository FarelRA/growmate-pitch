import { chromium } from 'playwright'

const BASE = 'http://100.85.143.61:4321'
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  hasTouch: true,
  isMobile: true,
})
const page = await ctx.newPage()
await page.goto(`${BASE}/#/0`, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(2000)
await page.evaluate(() => {
  (window as any).__t = { start: 0, move: 0, end: 0 }
  for (const t of ['touchstart', 'touchmove', 'touchend'] as const) {
    document.addEventListener(t, () => { (window as any).__t[t.replace('touch', '')]++ }, { passive: true })
  }
})
const cdp = await ctx.newCDPSession(page)
await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 320, y: 500, id: 1 }] })
for (let s = 1; s <= 8; s++) {
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 320 - (220 * s) / 8, y: 500, id: 1 }] })
  await page.waitForTimeout(30)
}
await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
await page.waitForTimeout(500)
console.log('touch events seen at document:', await page.evaluate(() => (window as any).__t))
await browser.close()
