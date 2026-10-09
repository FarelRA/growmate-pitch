import { useDeckStore } from '~/stores/deck'

const LONG_PRESS_MS = 600
const MOVE_TOL = 10
const COOLDOWN_MS = 900
const CONTEXT_GUARD_MS = 1500

/**
 * Tekan-tahan dengan jari (sentuh) untuk membuka dan menutup lapisan detail.
 * Hanya bereaksi pada pointer non-mouse; melewati tombol, tautan, dan kanvas
 * grafik; batal saat jari bergeser lebih dari MOVE_TOL (swipe tetap milik
 * navigasi). Dipasang di DeckStage dan di HiddenLayer, sebab lapisan detail
 * menutupi stage sehingga sentuhan keduanya tidak pernah sampai ke stage.
 */
export function useLongPress(el: () => HTMLElement | null) {
  const store = useDeckStore()

  let timer: ReturnType<typeof setTimeout> | null = null
  let sx = 0
  let sy = 0
  let cooldownUntil = 0
  let lastTouchAt = 0

  function clear() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  function fire() {
    clear()
    cooldownUntil = Date.now() + COOLDOWN_MS
    store.toggleHidden()
    try {
      navigator.vibrate?.(25)
    } catch {
      /* getaran tidak tersedia, abaikan */
    }
  }

  function onDown(e: PointerEvent) {
    if (e.pointerType === 'mouse') return
    const t = e.target as HTMLElement | null
    if (t?.closest?.('button, a, input, select, textarea, .graph-canvas')) return
    lastTouchAt = Date.now()
    clear()
    sx = e.clientX
    sy = e.clientY
    timer = setTimeout(fire, LONG_PRESS_MS)
  }

  function onMove(e: PointerEvent) {
    if (!timer) return
    if (Math.hypot(e.clientX - sx, e.clientY - sy) > MOVE_TOL) clear()
  }

  function onUp() {
    clear()
  }

  function onContextMenu(e: MouseEvent) {
    // Sentuh menembakkan contextmenu bawaan saat tekan-tahan; serahkan pada
    // lapisan kami selama jari masih menekan atau tepat setelah memicu.
    if (Date.now() - lastTouchAt < CONTEXT_GUARD_MS || Date.now() < cooldownUntil) {
      e.preventDefault()
    }
  }

  const HANDLERS: [string, EventListener][] = [
    ['pointerdown', onDown as EventListener],
    ['pointermove', onMove as EventListener],
    ['pointerup', onUp as EventListener],
    ['pointercancel', onUp as EventListener],
    ['contextmenu', onContextMenu as EventListener],
  ]

  onMounted(() => {
    const node = el()
    for (const [type, fn] of HANDLERS) node?.addEventListener(type, fn)
  })

  onUnmounted(() => {
    clear()
    const node = el()
    for (const [type, fn] of HANDLERS) node?.removeEventListener(type, fn)
  })

  /** true selama jendela singkat setelah tekan-tahan memicu; abaikan klik. */
  const blocked = () => Date.now() < cooldownUntil

  return { blocked }
}
