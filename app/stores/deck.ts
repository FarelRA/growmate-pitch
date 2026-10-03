import { defineStore } from 'pinia'
import { SECTIONS } from '~/data/deck'

export const useDeckStore = defineStore('deck', () => {
  const index = ref(0)
  const total = computed(() => SECTIONS.length)
  const overview = ref(false)

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

  return { index, total, overview, next, prev, go, toggleOverview }
})
