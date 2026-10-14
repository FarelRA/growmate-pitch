<script setup lang="ts">
import { Motion } from 'motion-v'

const props = withDefaults(defineProps<{
  src?: string
  alt?: string
  no: number
  /** Posisi di dalam tab (0-based); menentukan jeda animasi PIN. */
  pos?: number
  label: string
  slotSpec?: string
  tilt?: number
  active?: boolean
  ratio?: string
}>(), { src: '', alt: '', slotSpec: '', tilt: 0, active: false, ratio: '16 / 10', pos: 0 })

const reduced = usePreferredReducedMotion()

function pinTransition(delay: number) {
  if (reduced.value === 'reduce') return { duration: 0, delay: 0 }
  return { type: 'spring' as const, stiffness: 300, damping: 18, delay }
}
</script>

<template>
  <article
    class="flex h-full flex-col justify-between rounded-2xl border border-gm-line bg-white p-2.5 text-left shadow-[0_8px_24px_rgba(26,28,28,0.08)] transition-shadow duration-300 lg:p-3"
    :class="props.active ? 'shadow-[0_10px_28px_rgba(183,121,31,0.25)] ring-2 ring-gm-amber ring-offset-2 ring-offset-white' : ''"
    :style="{ transform: `rotate(${props.tilt}deg)` }"
  >
    <UiPhotoFigure v-if="props.src" :src="props.src" :alt="props.alt || props.label" :ratio="props.ratio" />
    <UiPhotoSlot v-else :ratio="props.ratio" :label="props.label" :spec="props.slotSpec" class="dok-slot" />
    <div class="relative mt-auto flex items-center justify-start gap-2.5 px-1 pb-1 pt-2.5">
      <Motion
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="pinTransition(0.45 + props.pos * 0.1)"
        class="grid size-10 shrink-0 place-items-center rounded-full bg-gm-primary font-headline text-lg font-extrabold tabular-nums text-white max-md:absolute max-md:-left-[44px] max-md:top-1/2 max-md:-translate-y-1/2"
      >
        {{ props.no }}
      </Motion>
      <p class="text-left font-headline text-base font-bold leading-snug text-gm-ink">
        {{ props.label }}
      </p>
    </div>
  </article>
</template>

<style scoped>
:deep(.dok-slot) {
  padding: 0.625rem;
  gap: 0.375rem;
  border-radius: 0.75rem;
}
:deep(.dok-slot p) {
  line-height: 1.25;
}
</style>
