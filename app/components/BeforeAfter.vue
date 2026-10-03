<script setup lang="ts">
defineProps<{ stock: string; stock2?: string }>()

const pos = ref(50)
const wrap = ref<HTMLElement | null>(null)
const dragging = ref(false)

function setFromEvent(e: PointerEvent) {
  const el = wrap.value
  if (!el) return
  const r = el.getBoundingClientRect()
  pos.value = Math.max(2, Math.min(98, ((e.clientX - r.left) / r.width) * 100))
}
function down(e: PointerEvent) {
  dragging.value = true
  ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  setFromEvent(e)
}
function move(e: PointerEvent) {
  if (dragging.value) setFromEvent(e)
}
</script>

<template>
  <div
    ref="wrap"
    class="ba-wrap relative h-full min-h-[220px] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border-2 border-gm-line md:rounded-[20px]"
    @pointerdown="down"
    @pointermove="move"
    @pointerup="dragging = false"
    @pointercancel="dragging = false"
  >
    <img :src="stock" alt="Tanaman demo, segar" class="absolute inset-0 h-full w-full object-cover" draggable="false" loading="lazy" decoding="async" />
    <span class="absolute right-3 top-3 rounded-full bg-gm-primary px-3 py-1.5 font-headline text-xs font-bold text-white md:text-[14px]">Pranata Mangsa • segar</span>
    <div class="absolute inset-0 overflow-hidden" :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }">
      <img :src="stock2 ?? stock" alt="Tanaman demo, stres" class="absolute inset-0 h-full w-full object-cover" draggable="false" loading="lazy" decoding="async" :style="stock2 ? undefined : 'filter: sepia(0.55) saturate(0.55) brightness(0.9);'" />
      <span class="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1.5 font-headline text-xs font-bold text-white md:text-[14px]">Jadwal tetap • stres</span>
    </div>
    <div class="absolute inset-y-0 w-[5px] -translate-x-1/2 bg-white" :style="{ left: `${pos}%` }" />
    <div
      class="ba-handle absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white md:h-[64px] md:w-[64px]"
      :style="{ left: `${pos}%` }"
    >
      <Icon name="lucide:chevrons-left-right" class="h-6 w-6 text-gm-primary md:h-[30px] md:w-[30px]" />
    </div>
  </div>
</template>
