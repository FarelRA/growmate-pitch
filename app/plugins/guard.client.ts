// Global tamper deterrent: blocks context menu and devtools shortcuts
// on every page. Slide navigation itself lives in DeckStage.
export default defineNuxtPlugin(() => {
  const onMenu = (e: MouseEvent) => {
    e.preventDefault()
  }
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'F12') {
      e.preventDefault()
      return
    }
    const mod = e.ctrlKey || e.metaKey
    if (mod && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key.toUpperCase())) {
      e.preventDefault()
      return
    }
    if (mod && ['U', 'S'].includes(e.key.toUpperCase())) {
      e.preventDefault()
    }
  }
  window.addEventListener('contextmenu', onMenu)
  window.addEventListener('keydown', onKey)
  window.addEventListener('copy', onMenu)
  window.addEventListener('cut', onMenu)
  window.addEventListener('dragstart', onMenu)
})
