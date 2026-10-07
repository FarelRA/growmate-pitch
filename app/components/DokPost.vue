<script setup lang="ts">
import { Motion } from 'motion-v'

const props = withDefaults(defineProps<{
  src?: string
  alt?: string
  no: number
  label: string
  slotSpec?: string
  tilt?: number
  active?: boolean
}>(), { src: '', alt: '', slotSpec: '', tilt: 0, active: false })

const reduced = usePreferredReducedMotion()

function pinTransition(delay: number) {
  if (reduced.value === 'reduce') return { duration: 0, delay: 0 }
  return { type: 'spring' as const, stiffness: 300, damping: 18, delay }
}
</script>

<template>
  <article
    class="h-full rounded-2xl border border-gm-line bg-white p-1.5 text-left shadow-[0_8px_24px_rgba(26,28,28,0.08)] transition-shadow duration-300"
    :class="props.active ? 'shadow-[0_10px_28px_rgba(183,121,31,0.25)] ring-2 ring-gm-amber ring-offset-2 ring-offset-white' : ''"
    :style="{ transform: `rotate(${props.tilt}deg)` }"
  >
    <UiPhotoFigure v-if="props.src" :src="props.src" :alt="props.alt || props.label" ratio="16 / 10" />
    <UiPhotoSlot v-else ratio="16 / 10" :label="props.label" :spec="props.slotSpec" class="dok-slot" />
    <div class="relative mt-1 flex items-center justify-start gap-1.5 px-0.5 pb-0.5">
      <Motion
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="pinTransition(0.45 + (props.no - 1) * 0.1)"
        class="grid size-5 shrink-0 place-items-center rounded-full bg-gm-primary font-headline text-[11px] font-extrabold tabular-nums text-white md:size-6 md:text-xs max-md:absolute max-md:-left-[30px] max-md:top-1/2 max-md:-translate-y-1/2"
      >
        {{ props.no }}
      </Motion>
      <p class="text-left font-headline text-[10px] font-bold leading-snug text-gm-ink md:text-[11px]">
        {{ props.label }}
      </p>
    </div>
  </article>
</template>

<style scoped>
:deep(.dok-slot) {
  padding: 0.375rem;
  gap: 0.125rem;
  border-radius: 0.75rem;
}
:deep(.dok-slot p) {
  line-height: 1.25;
}
</style>
