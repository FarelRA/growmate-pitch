<script setup lang="ts">
import { Motion } from 'motion-v'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  no: number
  label: string
  tilt?: number
  active?: boolean
}>(), { tilt: 0, active: false })

const reduced = usePreferredReducedMotion()

function pinTransition(delay: number) {
  if (reduced.value === 'reduce') return { duration: 0, delay: 0 }
  return { type: 'spring' as const, stiffness: 300, damping: 18, delay }
}
</script>

<template>
  <article
    class="h-full rounded-2xl border border-gm-line bg-white p-1.5 text-left shadow-[0_8px_24px_rgba(26,28,28,0.08)] transition-shadow duration-300 md:p-2"
    :class="props.active ? 'shadow-[0_10px_28px_rgba(183,121,31,0.25)] ring-2 ring-gm-amber ring-offset-2 ring-offset-white' : ''"
    :style="{ transform: `rotate(${props.tilt}deg)` }"
  >
    <UiPhotoFigure :src="props.src" :alt="props.alt" ratio="16 / 10" />
    <div class="relative mt-1.5 flex items-center justify-start gap-1.5 px-0.5 pb-0.5 md:mt-2">
      <Motion
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="pinTransition(0.45 + (props.no - 1) * 0.1)"
        class="grid size-6 shrink-0 place-items-center rounded-full bg-gm-primary font-headline text-xs font-extrabold tabular-nums text-white max-md:absolute max-md:-left-[30px] max-md:top-1/2 max-md:-translate-y-1/2"
      >
        {{ props.no }}
      </Motion>
      <p class="text-left font-headline text-[11px] font-bold leading-snug text-gm-ink md:text-xs">
        {{ props.label }}
      </p>
    </div>
  </article>
</template>
