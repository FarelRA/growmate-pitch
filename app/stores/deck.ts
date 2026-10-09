import { defineStore } from 'pinia'
import { SECTIONS } from '~/data/deck'
import { HIDDEN_SECTIONS } from '~/data/hidden'

export const useDeckStore = defineStore('deck', () => {
  const index = ref(0)
  const total = computed(() => SECTIONS.length)
  const overview = ref(false)

  // Lapisan rahasia: hanya terbuka lewat tombol H, tidak pernah lewat hash.
  const hidden = ref(false)
  const hIndex = ref(0)
  const hOverview = ref(false)
  const hTotal = computed(() => HIDDEN_SECTIONS.length)

  function clamp(i: number) {
    return Math.max(0, Math.min(SECTIONS.length - 1, i))
  }
  function next() {
    index.value = clamp(index.value + 1)
  }
  function prev() {
    index.value = clamp(index.value - 1)
  }
  function go(i: number) {
    index.value = clamp(i)
    overview.value = false
  }
  function toggleOverview() {
    overview.value = !overview.value
  }

  function hClamp(i: number) {
    return Math.max(0, Math.min(HIDDEN_SECTIONS.length - 1, i))
  }
  function hNext() {
    hIndex.value = hClamp(hIndex.value + 1)
  }
  function hPrev() {
    hIndex.value = hClamp(hIndex.value - 1)
  }
  function hGo(i: number) {
    hIndex.value = hClamp(i)
    hOverview.value = false
  }
  function toggleHidden() {
    hidden.value = !hidden.value
    hOverview.value = false
    overview.value = false
  }
  function exitHidden() {
    hidden.value = false
    hOverview.value = false
  }

  return {
    index,
    total,
    overview,
    hidden,
    hIndex,
    hTotal,
    hOverview,
    next,
    prev,
    go,
    toggleOverview,
    hNext,
    hPrev,
    hGo,
    toggleHidden,
    exitHidden,
  }
})
