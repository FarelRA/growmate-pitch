import { useDeckStore } from '~/stores/deck'

/** Shared deck navigation: keyboard, swipe, desktop click, hash sync. */
export function useDeckNav(stage: Ref<HTMLElement | null>, scroller: Ref<HTMLElement | null>) {
  const store = useDeckStore()
  const { toggle: toggleFullscreen } = useFullscreen(stage)
  provide('toggleFullscreen', toggleFullscreen)

  // Sentuh: tekan-tahan membuka dan menutup lapisan detail.
  const lp = useLongPress(() => stage.value)

  onKeyStroke(['ArrowRight', 'PageDown', ' '], (e) => {
    if (store.hidden) return
    e.preventDefault()
    store.next()
  })
  onKeyStroke(['ArrowLeft', 'PageUp'], (e) => {
    if (store.hidden) return
    e.preventDefault()
    store.prev()
  })
  onKeyStroke(['Home'], (e) => {
    if (store.hidden) return
    e.preventDefault()
    store.go(0)
  })
  onKeyStroke(['End'], (e) => {
    if (store.hidden) return
    e.preventDefault()
    store.go(store.total - 1)
  })
  onKeyStroke(['o', 'O'], () => {
    if (store.hidden) store.hOverview = !store.hOverview
    else store.toggleOverview()
  })
  onKeyStroke(['f', 'F'], () => toggleFullscreen())
  // Satu-satunya gerbang ke lapisan rahasia: tombol H.
  onKeyStroke(['h', 'H'], () => store.toggleHidden())
  onKeyStroke(['Escape'], () => {
    if (store.hOverview) store.hOverview = false
    else if (store.hidden) store.exitHidden()
    else if (store.overview) store.overview = false
  })

  useSwipe(stage, {
    threshold: 60,
    onSwipeEnd(_e, dir) {
      if (store.overview || store.hidden) return
      if (dir === 'left') store.next()
      if (dir === 'right') store.prev()
    },
  })

  // Desktop pointer navigation: right click advances, left click goes back.
  // Interactive elements (buttons, links, sliders, carousels, 3D) are ignored.
  const NAV_IGNORE = 'a, button, input, select, textarea, [role="button"], canvas, .embla, .ba-wrap'
  function onPointerNav(e: MouseEvent) {
    if (lp.blocked()) return
    if (!window.matchMedia('(pointer: fine)').matches || store.overview) return
    if (store.hidden) return
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return
    const t = e.target as HTMLElement | null
    if (t?.closest?.(NAV_IGNORE)) return
    if (e.type === 'contextmenu') store.next()
    else if (e.type === 'click' && e.button === 0) store.prev()
  }

  function readHash() {
    if (store.hidden) return
    const m = window.location.hash.match(/#\/(\d+)/)
    if (m) store.go(Number(m[1]))
  }

  const timers: ReturnType<typeof setTimeout>[] = []
  onMounted(() => {
    readHash()
    window.addEventListener('hashchange', readHash)
    stage.value?.addEventListener('click', onPointerNav)
    stage.value?.addEventListener('contextmenu', onPointerNav)
    // Fast static boots may expose location.hash a tick after mount.
    timers.push(setTimeout(readHash, 400))
    timers.push(setTimeout(readHash, 1500))
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange', readHash)
    stage.value?.removeEventListener('click', onPointerNav)
    stage.value?.removeEventListener('contextmenu', onPointerNav)
    timers.forEach(t => clearTimeout(t))
  })
  watch(
    () => store.index,
    (i) => {
      if (store.hidden) return
      window.history.replaceState(null, '', `#/${i}`)
      scroller.value?.scrollTo({ top: 0 })
    },
  )

  return { store }
}
