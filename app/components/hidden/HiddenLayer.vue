<script setup lang="ts">
import { useDeckStore } from '~/stores/deck'
import { HIDDEN_SECTIONS, type HiddenKind } from '~/data/hidden'
import HiddenCover from './HiddenCover.vue'
import ProductDetail from './ProductDetail.vue'
import AppDetail from './AppDetail.vue'
import GraphPage from './GraphPage.vue'
import HiddenOverview from './HiddenOverview.vue'

const store = useDeckStore()
const root = ref<HTMLElement | null>(null)
const scroller = ref<HTMLElement | null>(null)

// Sentuh: tekan-tahan membuka dan menutup lapisan ini (padanan H di desktop).
const lp = useLongPress(() => root.value)

// Keyboard untuk arsip: panah dan spasi memindahkan halaman arsip.
// Deck menahan diri selama lapisan ini terbuka (lihat useDeckNav).
onKeyStroke(['ArrowRight', 'PageDown', ' '], (e) => {
  e.preventDefault()
  store.hNext()
})
onKeyStroke(['ArrowLeft', 'PageUp'], (e) => {
  e.preventDefault()
  store.hPrev()
})
onKeyStroke(['Home'], (e) => {
  e.preventDefault()
  store.hGo(0)
})
onKeyStroke(['End'], (e) => {
  e.preventDefault()
  store.hGo(store.hTotal - 1)
})

const section = computed(() => HIDDEN_SECTIONS[store.hIndex]!)

const registry: Record<HiddenKind, Component> = {
  cover: HiddenCover,
  product: ProductDetail,
  app: AppDetail,
  graph: GraphPage,
}

const current = computed(() => registry[section.value.kind])
const hNo = computed(() => String(store.hIndex + 1).padStart(2, '0'))
const hTotal = computed(() => String(store.hTotal).padStart(2, '0'))

useSwipe(root, {
  threshold: 60,
  onSwipeEnd(_e, dir) {
    if (store.hOverview) return
    if (dir === 'left') store.hNext()
    if (dir === 'right') store.hPrev()
  },
})

// Klik desktop: kanan lanjut, kiri mundur, sama seperti deck.
const NAV_IGNORE = 'a, button, input, select, textarea, [role="button"], canvas, .graph-canvas, .embla, .ba-wrap'

function onPointerNav(e: MouseEvent) {
  if (lp.blocked()) return
  if (!window.matchMedia('(pointer: fine)').matches || store.hOverview) return
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return
  const t = e.target as HTMLElement | null
  if (t?.closest?.(NAV_IGNORE)) return
  if (e.type === 'contextmenu') store.hNext()
  else if (e.type === 'click' && e.button === 0) store.hPrev()
}

onMounted(() => {
  root.value?.addEventListener('click', onPointerNav)
  root.value?.addEventListener('contextmenu', onPointerNav)
})

onUnmounted(() => {
  root.value?.removeEventListener('click', onPointerNav)
  root.value?.removeEventListener('contextmenu', onPointerNav)
})

watch(
  () => store.hIndex,
  () => scroller.value?.scrollTo({ top: 0 }),
)
</script>

<template>
  <div ref="root" class="fixed inset-0 z-50 flex flex-col bg-white">
    <header class="flex shrink-0 items-center justify-between gap-3 border-b-2 border-gm-line px-4 py-2 sm:px-6 md:px-10">
      <div class="flex min-w-0 items-center gap-2.5 md:gap-4">
        <span class="grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gm-primary md:size-11 md:rounded-2xl">
          <img src="/logo.svg" alt="Logo GrowMate" class="size-full object-cover" draggable="false" />
        </span>
        <span class="min-w-0 truncate font-headline text-sm font-bold uppercase leading-tight tracking-[0.08em] text-gm-primary md:text-lg md:leading-normal">
          {{ section.kicker }}
        </span>
      </div>
      <span class="shrink-0 font-headline text-sm font-bold tabular-nums text-gm-ink/30 md:text-lg">
        {{ hNo }} / {{ hTotal }}
      </span>
    </header>

    <main ref="scroller" class="nice-scroll min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain">
      <div class="mx-auto flex min-h-full w-full max-w-[1600px] flex-col px-4 py-3 sm:px-6 md:px-10">
        <div class="shrink-0">
          <h1 class="font-headline text-2xl font-extrabold tracking-tight text-gm-ink md:text-4xl">
            {{ section.title }}
          </h1>
          <p class="mt-1.5 max-w-4xl text-base leading-snug text-gm-muted md:text-lg">
            {{ section.sub }}
          </p>
        </div>
        <div class="mt-3 grid min-h-0 w-full flex-1 place-items-stretch">
          <Transition name="archive" mode="out-in">
            <div :key="section.id" class="flex h-full w-full min-w-0 flex-col">
              <component :is="current" :section="section" />
            </div>
          </Transition>
        </div>
      </div>
    </main>

    <HiddenOverview v-if="store.hOverview" />
  </div>
</template>
