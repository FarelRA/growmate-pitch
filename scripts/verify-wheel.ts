import { chromium } from 'playwright'

const BASE = 'http://100.85.143.61:4321'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
const errs: string[] = []
page.on('pageerror', e => errs.push(`pageerror: ${String(e).slice(0, 120)}`))
const counter = () => page.evaluate(() =>
  [...document.querySelectorAll('span')].map(x => x.textContent?.trim()).find(x => x && /^\d+ \/ 16$/.test(x)),
)
await page.goto(`${BASE}/#/0`, { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(2500)
console.log('boot:', await counter())
await page.mouse.wheel(0, 600)
await page.waitForTimeout(1600)
console.log('after wheel down:', await counter())
await page.mouse.wheel(0, 600)
await page.waitForTimeout(1600)
console.log('after wheel down x2 (locked once, then next):', await counter())
await page.mouse.wheel(0, -600)
await page.waitForTimeout(1600)
console.log('after wheel up:', await counter())
const chrome = await page.evaluate(() => ({
  nav: document.querySelectorAll('button').length,
  dots: document.querySelectorAll('[aria-label]').length,
}))
console.log('buttons on slide:', chrome.nav, '| aria-labelled controls:', chrome.dots)
await page.screenshot({ path: '/tmp/opencode/shots/wheel.png' })
console.log('errs:', errs.length ? errs : 'none')
await browser.close()
