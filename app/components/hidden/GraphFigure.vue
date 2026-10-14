<script setup lang="ts">
import type { DgFlow } from '~/data/graphs/types'
import WebDiagram from './WebDiagram.vue'

/**
 * Penampil diagram: SVG buatan sendiri di dalam kanvas zoom dan geser.
 * Tombol perbesar, pas-pasan, dan 1:1 sengaja disediakan sebagai klik utilitas.
 */
const props = defineProps<{ flow: DgFlow }>()

const canvas = ref<HTMLElement | null>(null)
const scale = ref(1)
const tx = ref(0)
const ty = ref(0)
const touched = ref(false)

function clampScale(s: number) {
  return Math.max(0.08, Math.min(4, s))
}

function fit() {
  const c = canvas.value
  if (!c) return
  const s = Math.min(c.clientWidth / props.flow.w, c.clientHeight / props.flow.h) * 0.96
  scale.value = clampScale(s)
  tx.value = 0
  ty.value = 0
  touched.value = false
}

function reset() {
  scale.value = 1
  tx.value = 0
  ty.value = 0
  touched.value = false
}

function zoom(f: number) {
  scale.value = clampScale(scale.value * f)
  touched.value = true
}

function onWheel(e: WheelEvent) {
  zoom(e.deltaY < 0 ? 1.12 : 1 / 1.12)
}

let dragging = false
let px = 0
let py = 0

function onDown(e: PointerEvent) {
  dragging = true
  px = e.clientX
  py = e.clientY
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onMove(e: PointerEvent) {
  if (!dragging) return
  tx.value += e.clientX - px
  ty.value += e.clientY - py
  px = e.clientX
  py = e.clientY
  touched.value = true
}

function onUp() {
  dragging = false
}

function onResize() {
  if (!touched.value) fit()
}

onMounted(() => {
  fit()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => window.removeEventListener('resize', onResize))

watch(() => props.flow, () => {
  touched.value = false
  nextTick(fit)
})
</script>

<template>
  <div
    ref="canvas"
    class="graph-canvas relative min-h-0 w-full flex-1 touch-none overflow-hidden rounded-2xl border-2 border-gm-line bg-gm-panel/40"
    @wheel.prevent="onWheel"
    @pointerdown="onDown"
    @pointermove="onMove"
    @pointerup="onUp"
    @pointercancel="onUp"
  >
    <div
      class="absolute left-1/2 top-1/2 origin-center"
      :style="{ width: `${flow.w}px`, height: `${flow.h}px`, transform: `translate(-50%, -50%) translate(${tx}px, ${ty}px) scale(${scale})` }"
    >
      <WebDiagram :flow="flow" />
    </div>

    <div class="absolute right-2 top-2 flex items-center gap-1.5">
      <button
        type="button"
        aria-label="Perkecil"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="zoom(1 / 1.25)"
      >
        <Icon name="lucide:zoom-out" class="size-5" />
      </button>
      <button
        type="button"
        aria-label="Perbesar"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="zoom(1.25)"
      >
        <Icon name="lucide:zoom-in" class="size-5" />
      </button>
      <button
        type="button"
        aria-label="Pas-pasan seluruh diagram"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="fit()"
      >
        <Icon name="lucide:maximize" class="size-5" />
      </button>
      <button
        type="button"
        aria-label="Ukuran asli"
        class="grid size-9 place-items-center rounded-xl border-2 border-gm-line bg-white/95 text-base font-bold tabular-nums text-gm-ink transition-colors hover:border-gm-primary"
        @pointerdown.stop
        @click.stop="reset()"
      >
        1:1
      </button>
    </div>

    <span
      class="pointer-events-none absolute bottom-2 left-2 rounded-full border-2 border-gm-line bg-white/95 px-2.5 py-0.5 font-mono text-base font-bold tabular-nums text-gm-muted"
    >
      {{ Math.round(scale * 100) }}%
    </span>
  </div>
</template>
