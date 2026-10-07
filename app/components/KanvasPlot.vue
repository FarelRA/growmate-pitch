<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    sub?: string
    icon: string
    items: string[]
    hero?: boolean
    hue?: 'sky' | 'amber' | 'brand' | 'deep'
    index?: number
  }>(),
  { sub: '', hero: false, hue: 'brand', index: 0 },
)

const tileBg = computed(() => {
  if (props.hue === 'sky') return 'bg-gm-sky'
  if (props.hue === 'amber') return 'bg-gm-amber'
  if (props.hue === 'deep') return 'bg-gm-deep'
  return 'bg-gm-primary'
})

const dotBg = computed(() => {
  if (props.hero) return 'bg-gm-amberbg'
  if (props.hue === 'sky') return 'bg-gm-sky'
  if (props.hue === 'amber') return 'bg-gm-amber'
  if (props.hue === 'deep') return 'bg-gm-deep'
  return 'bg-gm-primary'
})

const floatDelay = computed(() => `${(props.index % 9) * 0.28}s`)

const tileShadow
  = '0 3px 0 rgba(0,0,0,0.35), 0 7px 14px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.25)'
</script>

<template>
  <article
    class="kanvas-plot relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border-2 p-2 text-left"
    :class="hero
      ? 'plot-hero border-gm-primary bg-gradient-to-br from-gm-primary to-gm-deep text-white shadow-xl'
      : 'border-gm-line bg-white text-gm-ink'"
  >
    <svg
      v-if="hero"
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 size-full opacity-[0.16]"
      viewBox="0 0 300 220"
      preserveAspectRatio="xMidYMax slice"
    >
      <circle cx="252" cy="34" r="26" fill="#ffffff" opacity="0.9" />
      <circle cx="252" cy="34" r="36" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6" />
      <circle cx="52" cy="46" r="7" fill="none" stroke="#ffffff" stroke-width="2.5" />
      <path d="M52 39v14M45 46h14" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="96" cy="30" r="5" fill="none" stroke="#ffffff" stroke-width="2.5" />
      <path d="M96 25v10M91 30h10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
      <ellipse cx="150" cy="212" rx="130" ry="34" fill="#ffffff" opacity="0.55" />
      <ellipse cx="150" cy="204" rx="92" ry="22" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.8" />
      <path
        d="M150 196 C 150 160, 148 132, 150 104 M150 150 C 132 144, 122 130, 120 114 M150 138 C 168 132, 178 120, 180 104"
        fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.9"
      />
      <path d="M150 104 c -10 -12 -10 -26 0 -34 c 10 8 10 22 0 34 Z" fill="#ffffff" opacity="0.9" />
      <circle cx="216" cy="96" r="9" fill="none" stroke="#ffffff" stroke-width="2.5" />
      <path d="M216 91v10M211 96h10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
    </svg>

    <div class="relative flex min-w-0 items-center gap-2">
      <span
        class="plot-tile plot-float relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-2xl"
        :class="tileBg"
        :style="{ boxShadow: tileShadow, animationDelay: floatDelay }"
      >
        <span aria-hidden="true" class="absolute inset-0 bg-gradient-to-br from-white/30 via-white/0 to-black/25" />
        <Icon :name="icon" class="relative size-4 text-white drop-shadow-sm md:size-[18px]" />
      </span>
      <div class="min-w-0">
        <h3
          class="font-headline text-[11px] font-extrabold uppercase leading-tight tracking-wide md:text-xs"
          :class="hero ? 'text-white' : 'text-gm-primary'"
        >
          {{ title }}
        </h3>
        <p
          v-if="sub"
          class="text-[9px] font-bold uppercase leading-tight tracking-[0.14em]"
          :class="hero ? 'text-white/75' : 'text-gm-primary/60'"
        >
          {{ sub }}
        </p>
      </div>
    </div>
    <ul class="relative mt-1.5 space-y-1">
      <li
        v-for="item in items"
        :key="item"
        class="flex items-start gap-1.5 text-[11px] leading-snug"
        :class="hero ? 'text-white/95' : 'text-gm-ink'"
      >
        <span aria-hidden="true" class="mt-[5px] size-1.5 shrink-0 rounded-full" :class="dotBg" />
        <span class="min-w-0 break-words">{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<style scoped>
@keyframes plot-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2.5px); }
}
.plot-float {
  animation: plot-float 3.2s ease-in-out infinite;
}
@keyframes plot-glow {
  0%, 100% { box-shadow: 0 12px 28px rgba(0, 110, 28, 0.35), 0 0 0 0 rgba(183, 121, 31, 0); }
  50% { box-shadow: 0 12px 32px rgba(0, 110, 28, 0.5), 0 0 26px 2px rgba(183, 121, 31, 0.35); }
}
.plot-hero {
  animation: plot-glow 3.6s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .plot-float, .plot-hero { animation: none !important; }
}
</style>
