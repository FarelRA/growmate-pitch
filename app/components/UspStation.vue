<script setup lang="ts">
import { Motion } from 'motion-v'

const props = withDefaults(defineProps<{
  variant: 'ink' | 'mist' | 'amber'
  num: string
  eyebrow: string
  title: string
  desc: string
  src: string
  alt: string
  proofMain: string
  proofSub: string
  countTo?: number
  slotLabel?: string
  slotSpec?: string
}>(), { countTo: 0, src: '', alt: '', slotLabel: '', slotSpec: '' })

const cardClass = computed(() => (
  props.variant === 'ink'
    ? 'border-gm-ink bg-gm-ink text-white'
    : props.variant === 'mist'
      ? 'border-gm-line bg-gm-mist text-gm-ink'
      : 'border-gm-line bg-gm-amberbg text-gm-ink'
))

const numeralClass = computed(() => (
  props.variant === 'ink' ? 'text-white/10' : 'text-gm-ink/10'
))

const iconWrapClass = computed(() => (
  props.variant === 'ink'
    ? 'bg-white/10 text-emerald-300'
    : props.variant === 'mist'
      ? 'bg-white text-gm-primary'
      : 'bg-white text-gm-amber'
))

const proofClass = computed(() => (
  props.variant === 'ink'
    ? 'bg-white/10 text-white'
    : 'border border-gm-line bg-white text-gm-ink'
))

const heroIcon = computed(() => (
  props.variant === 'ink' ? 'lucide:brain' : props.variant === 'mist' ? 'lucide:ruler' : 'lucide:wifi-off'
))

const heroIconColor = computed(() => (
  props.variant === 'ink' ? 'text-white' : props.variant === 'mist' ? 'text-gm-primary' : 'text-gm-amber'
))

const shown = ref(0)

onMounted(() => {
  if (!props.countTo || props.countTo <= 0) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = props.countTo
    return
  }
  const target = props.countTo
  const dur = 900
  const t0 = performance.now()
  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / dur)
    shown.value = Math.round(target * (1 - Math.pow(1 - p, 3)))
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
})
</script>

<template>
  <Motion :whileHover="{ y: -6 }" :transition="{ duration: 0.25, ease: 'easeOut' }" class="h-full">
    <article class="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 p-4 text-left md:p-5" :class="cardClass">
      <span aria-hidden="true" class="pointer-events-none absolute -top-3 right-1 select-none font-headline text-[56px] font-extrabold leading-none md:text-[64px]" :class="numeralClass">{{ num }}</span>

      <div class="relative flex items-center gap-2.5">
        <span class="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl" :class="iconWrapClass">
          <svg v-if="variant === 'ink'" viewBox="0 0 40 40" fill="none" class="usp-wheel absolute inset-0 size-full" aria-hidden="true">
            <circle cx="20" cy="20" r="15.5" stroke="currentColor" stroke-opacity="0.5" stroke-width="2.4" stroke-dasharray="4.7 3.4" />
            <circle cx="20" cy="20" r="9.5" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" />
            <circle cx="20" cy="20" r="2" fill="currentColor" fill-opacity="0.9" stroke="none" />
          </svg>
          <svg v-else-if="variant === 'mist'" viewBox="0 0 96 32" fill="none" class="absolute inset-0 size-full" aria-hidden="true">
            <rect x="6" y="18" width="84" height="9" rx="2.5" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.6" />
            <path d="M14 18v4M22 18v4M30 18v4M38 18v4M46 18v4M54 18v4M62 18v4M70 18v4M78 18v4" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4" />
            <path d="M10 8h76M10 8l6 -3M10 8l6 3M86 8l-6 -3M86 8l-6 3" stroke="currentColor" stroke-opacity="0.7" stroke-width="1.6" stroke-linecap="round" />
          </svg>
          <svg v-else viewBox="0 0 96 32" fill="none" class="absolute inset-0 size-full" aria-hidden="true">
            <g stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 16 L17 8 L26 16" />
              <path d="M11 15v7h12v-7" />
              <circle cx="23" cy="8" r="2.4" fill="currentColor" stroke="none" />
              <rect x="38" y="11" width="20" height="11" rx="2" />
              <line x1="60" y1="15" x2="63" y2="16.5" />
              <path d="M70 15a9 9 0 0 1 14 0" />
              <path d="M73 18.5a5 5 0 0 1 8 0" />
              <line x1="68" y1="9" x2="86" y2="25" />
            </g>
            <circle cx="77" cy="22" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          <Icon :name="heroIcon" class="anim-float relative size-7" :class="heroIconColor" />
        </span>
        <div class="relative min-w-0">
          <p class="font-headline text-base font-extrabold uppercase tracking-[0.08em] opacity-70">{{ eyebrow }}</p>
          <h3 class="truncate font-headline text-lg font-extrabold">{{ title }}</h3>
        </div>
      </div>

      <div class="relative mt-2.5 flex-1">
        <UiPhotoSlot v-if="slotLabel" ratio="16 / 10" :label="slotLabel" :spec="slotSpec" />
        <UiPhotoFigure v-else :src="src" :alt="alt" ratio="16 / 10" />
      </div>

      <p class="relative mt-2.5 text-base leading-snug" :class="variant === 'ink' ? 'text-white/80' : 'text-gm-muted'">{{ desc }}</p>

      <div class="relative mt-auto pt-2.5">
        <div class="flex items-center gap-2.5 rounded-xl px-4 py-2.5 font-headline text-base font-extrabold" :class="proofClass">
          <Icon name="lucide:badge-check" class="size-6 shrink-0" :class="variant === 'amber' ? 'text-gm-amber' : variant === 'mist' ? 'text-gm-primary' : 'text-emerald-300'" />
          <span v-if="countTo > 0" class="truncate"><span class="tabular-nums">{{ shown }}</span> {{ proofSub }}</span>
          <span v-else class="truncate">{{ proofMain }}</span>
        </div>
      </div>
    </article>
  </Motion>
</template>

<style scoped>
@keyframes usp-spin {
  to { transform: rotate(360deg); }
}
.usp-wheel {
  animation: usp-spin 26s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .usp-wheel { animation: none; }
}
</style>
