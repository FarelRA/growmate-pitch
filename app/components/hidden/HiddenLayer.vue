<script setup lang="ts">
import { useDeckStore } from '~/stores/deck'
import { HIDDEN_SECTIONS, type HiddenKind } from '~/data/hidden'
import ProductDetail from './ProductDetail.vue'
import AppDetail from './AppDetail.vue'
import WebsiteDetail from './WebsiteDetail.vue'
import ConsignDetail from './ConsignDetail.vue'
import RiskMitigationDetail from './RiskMitigationDetail.vue'
import RiskMatrixDetail from './RiskMatrixDetail.vue'
import GraphPage from './GraphPage.vue'
import UnitEconDetail from './UnitEconDetail.vue'
import InvestDetail from './InvestDetail.vue'
import KalibrasiDetail from './KalibrasiDetail.vue'
import OrderOrang from './OrderOrang.vue'
import OrderWaktu from './OrderWaktu.vue'
import OrderCampuran from './OrderCampuran.vue'
import OrderCara from './OrderCara.vue'
import MonthDetail from './MonthDetail.vue'
import SupplyDetail from './SupplyDetail.vue'
import AiEconDetail from './AiEconDetail.vue'

/**
 * Lapisan detail: kerangkanya identik dengan DeckStage (main yang sama,
 * max-w 1600, DeckShell bernomor, ikhtisar bersama) sehingga tata letak,
 * tipografi, dan komponen rekursifnya persis seperti slide biasa.
 * Gerbang: tombol H (desktop) atau tekan-tahan (sentuh).
 */
const store = useDeckStore()
const root = ref<HTMLElement | null>(null)
const scroller = ref<HTMLElement | null>(null)

// Sentuh: tekan-tahan membuka dan menutup lapisan ini (padanan H di desktop).
const lp = useLongPress(() => root.value)

// Keyboard untuk lapisan: panah dan spasi memindahkan halaman.
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
  product: ProductDetail,
  app: AppDetail,
  website: WebsiteDetail,
  dist: ConsignDetail,
  risk: RiskMatrixDetail,
  graph: GraphPage,
  // Satu kind bisa melayani beberapa halaman: entri default menangani
  // kasus yang mengalihkan sendiri lewat ref (h-econ-month/econ-sales).
  econ: MonthDetail,
  order: OrderOrang,
  lab: KalibrasiDetail,
  resilience: SupplyDetail,
  ai: AiEconDetail,
}

/** Halaman yang dibedakan lewat id, bukan kind (empat halaman satu kind). */
const byId: Record<string, Component> = {
  'h-econ-unit': UnitEconDetail,
  'h-econ-invest': InvestDetail,
  'h-order-waktu': OrderWaktu,
  'h-order-campuran': OrderCampuran,
  'h-order-cara': OrderCara,
  'h-risk-mitigasi': RiskMitigationDetail,
}

const current = computed(() => byId[section.value.id] ?? registry[section.value.kind])

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
  <div ref="root" data-layer="detail" class="fixed inset-0 flex flex-col overflow-hidden bg-white">
    <main ref="scroller" class="nice-scroll slide-scroll min-h-0 flex-1 overflow-y-auto overscroll-x-hidden overscroll-contain">
      <div class="mx-auto flex min-h-full w-full max-w-[1600px] flex-col">
        <Transition name="archive" mode="out-in">
          <DeckShell
            :key="section.id"
            :meta="section"
            :index="store.hIndex"
            :total="store.hTotal"
          >
            <component :is="current" :section="section" />
          </DeckShell>
        </Transition>
      </div>
    </main>
    <DeckOverview
      v-if="store.hOverview"
      :sections="HIDDEN_SECTIONS"
      :active-index="store.hIndex"
      title="Semua halaman"
      @close="store.hOverview = false"
      @pick="store.hGo"
    />
  </div>
</template>
