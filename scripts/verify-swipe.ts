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
await page.waitForTimeout(2500)

const title = () => page.evaluate(() => document.querySelector('h1')?.textContent?.trim().slice(0, 40))
console.log('boot:', await title())

async function swipe(x0: number, x1: number) {
  const cdp = await ctx.newCDPSession(page)
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x0, y: 500, id: 1 }] })
  for (let s = 1; s <= 8; s++) {
    const x = x0 + ((x1 - x0) * s) / 8
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: 500, id: 1 }] })
    await page.waitForTimeout(30)
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  await cdp.detach()
}

await swipe(320, 100) // finger moves left => next slide
await page.waitForTimeout(1500)
console.log('after swipe-left:', await title())
await swipe(100, 320) // finger moves right => prev slide
await page.waitForTimeout(1500)
console.log('after swipe-right:', await title())
await browser.close()
