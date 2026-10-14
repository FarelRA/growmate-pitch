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
    cols?: 1 | 2
    art?: 'none' | 'segments' | 'channels' | 'cost' | 'revenue' | 'partners' | 'activities' | 'resources' | 'relations' | 'value'
  }>(),
  { sub: '', hero: false, hue: 'brand', index: 0, cols: 1, art: 'none' },
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
    class="kanvas-plot relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border-2 p-0.5 text-left"
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

    <div class="relative flex min-w-0 items-center gap-2 text-left">
      <span
        class="plot-tile plot-float relative grid size-7 shrink-0 place-items-center overflow-hidden rounded-xl"
        :class="tileBg"
        :style="{ boxShadow: tileShadow, animationDelay: floatDelay }"
      >
        <span aria-hidden="true" class="absolute inset-0 bg-gradient-to-br from-white/30 via-white/0 to-black/25" />
        <Icon :name="icon" class="relative size-4 text-white drop-shadow-sm" />
      </span>
      <div class="min-w-0 text-left">
        <h3
          class="text-left font-headline text-base font-extrabold uppercase leading-tight tracking-wide"
          :class="hero ? 'text-white' : 'text-gm-primary'"
        >
          {{ title }}
        </h3>
        <p
          v-if="sub"
          class="text-left text-base font-bold uppercase leading-tight tracking-wide"
          :class="hero ? 'text-white/75' : 'text-gm-primary/60'"
        >
          {{ sub }}
        </p>
      </div>
    </div>
    <ul class="relative mt-0.5 space-y-0 text-left" :class="cols === 2 ? 'grid grid-cols-2 gap-x-2' : ''">
      <li
        v-for="item in items"
        :key="item"
        class="flex items-start gap-1.5 text-left text-base leading-tight"
        :class="hero ? 'text-white/95' : 'text-gm-ink'"
      >
        <span aria-hidden="true" class="mt-[7px] size-1.5 shrink-0 rounded-full" :class="dotBg" />
        <span class="min-w-0 break-words">{{ item }}</span>
      </li>
    </ul>
    <div v-if="art === 'segments' || art === 'channels' || art === 'cost' || art === 'revenue' || art === 'partners'" aria-hidden="true" class="pointer-events-none relative mt-auto pt-1.5">
      <svg
        v-if="art === 'segments'"
        class="h-16 w-full opacity-90 2xl:h-28"
        viewBox="0 0 200 56"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="seg-podium" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffffff" />
            <stop offset="1" stop-color="#dfe9dc" />
          </linearGradient>
          <linearGradient id="seg-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#8fc3e8" />
            <stop offset="1" stop-color="#4a8ab5" />
          </linearGradient>
          <linearGradient id="seg-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#0e7a2e" />
            <stop offset="1" stop-color="#0a4a1e" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="50" rx="52" ry="4.5" fill="#0a3d1a" opacity="0.12" />
        <rect x="58" y="40" width="84" height="10" rx="4" fill="#0a3d1a" opacity="0.28" />
        <rect x="58" y="38" width="84" height="10" rx="4" fill="url(#seg-podium)" stroke="#cfd8cc" stroke-width="1.2" />
        <rect x="58" y="38" width="84" height="4" rx="2" fill="#ffffff" opacity="0.8" />
        <circle cx="80" cy="22" r="9.5" fill="#0a3d1a" opacity="0.22" />
        <circle cx="79" cy="21" r="9.5" fill="url(#seg-a)" />
        <circle cx="79" cy="21" r="9.5" fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.7" />
        <path d="M68 42 C68 33 73 30 79 30 C85 30 90 33 90 42 Z" fill="#0a3d1a" opacity="0.22" />
        <path d="M67 41 C67 32 72 29 78 29 C84 29 89 32 89 41 Z" fill="url(#seg-a)" stroke="#ffffff" stroke-width="1" opacity="1" />
        <circle cx="122" cy="19" r="10.5" fill="#0a3d1a" opacity="0.22" />
        <circle cx="121" cy="18" r="10.5" fill="url(#seg-b)" />
        <circle cx="121" cy="18" r="10.5" fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.7" />
        <path d="M109 42 C109 32 115 28.5 121 28.5 C127 28.5 133 32 133 42 Z" fill="#0a3d1a" opacity="0.22" />
        <path d="M108 41 C108 31 114 27.5 120 27.5 C126 27.5 132 31 132 41 Z" fill="url(#seg-b)" stroke="#ffffff" stroke-width="1" opacity="1" />
        <g stroke="#0e7a2e" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.85">
          <path d="M36 48 v-8 M32 42 q4 -4 8 0" />
          <path d="M164 48 v-8 M160 42 q4 -4 8 0" />
        </g>
        <g fill="none" stroke="#0e7a2e" stroke-width="1.6" stroke-linecap="round" opacity="0.7">
          <path d="M52 8v8M48 12h8" />
          <path d="M148 6v8M144 10h8" />
        </g>
      </svg>
      <svg
        v-else-if="art === 'channels'"
        class="h-10 w-full opacity-90 2xl:h-20"
        viewBox="0 0 200 56"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="ch-box" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#fff7e8" />
            <stop offset="1" stop-color="#f0dfbe" />
          </linearGradient>
          <linearGradient id="ch-globe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#9fd0ef" />
            <stop offset="1" stop-color="#4a8ab5" />
          </linearGradient>
          <linearGradient id="ch-amber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#e7b45a" />
            <stop offset="1" stop-color="#b7791f" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="50" rx="56" ry="4.5" fill="#0a3d1a" opacity="0.12" />
        <rect x="46" y="22" width="62" height="26" rx="5" fill="#0a3d1a" opacity="0.22" />
        <rect x="45" y="20" width="62" height="26" rx="5" fill="url(#ch-box)" stroke="#d8c9a6" stroke-width="1.2" />
        <rect x="45" y="20" width="62" height="9" rx="4.5" fill="url(#ch-amber)" />
        <path d="M52 20v9M60 20v9M68 20v9M76 20v9M84 20v9M92 20v9M100 20v9" stroke="#ffffff" stroke-width="2" opacity="0.85" />
        <rect x="46" y="28" width="60" height="3" rx="1.5" fill="#0a3d1a" opacity="0.18" />
        <rect x="66" y="32" width="18" height="14" rx="2" fill="#0e7a2e" opacity="0.9" />
        <rect x="66" y="32" width="18" height="5" rx="2" fill="#ffffff" opacity="0.35" />
        <rect x="48" y="33" width="12" height="9" rx="1.5" fill="#8fc3e8" opacity="0.9" />
        <rect x="90" y="33" width="12" height="9" rx="1.5" fill="#8fc3e8" opacity="0.9" />
        <ellipse cx="148" cy="48" rx="20" ry="3.5" fill="#0a3d1a" opacity="0.18" />
        <rect x="144" y="40" width="8" height="7" rx="1.5" fill="#0a3d1a" opacity="0.25" />
        <circle cx="149" cy="26" r="15" fill="#0a3d1a" opacity="0.2" />
        <circle cx="148" cy="24.5" r="15" fill="url(#ch-globe)" stroke="#ffffff" stroke-width="1.2" />
        <ellipse cx="148" cy="24.5" rx="7" ry="15" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="0.8" />
        <path d="M133.5 24.5h29M135 17c7 3.5 19 3.5 26 0M135 32c7-3.5 19-3.5 26 0" stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.8" />
        <rect x="113" y="36" width="18" height="12" rx="2.5" fill="#0a3d1a" opacity="0.22" />
        <rect x="112" y="34.5" width="18" height="12" rx="2.5" fill="#e7b45a" stroke="#ffffff" stroke-width="1" />
        <path d="M112 40.5h18M121 34.5v12" stroke="#ffffff" stroke-width="1.2" opacity="0.9" />
        <path d="M170 8 l1.4 3 3 1.4 -3 1.4 -1.4 3 -1.4 -3 -3 -1.4 3 -1.4 Z" fill="#b7791f" opacity="0.9" />
      </svg>
      <svg
        v-else-if="art === 'cost'"
        class="h-8 w-full opacity-90 2xl:h-16"
        viewBox="0 0 200 56"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="co-coin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#f6d488" />
            <stop offset="1" stop-color="#c08a24" />
          </linearGradient>
          <linearGradient id="co-gear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3f7a52" />
            <stop offset="1" stop-color="#0a3d1a" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="50" rx="56" ry="4.5" fill="#0a3d1a" opacity="0.12" />
        <g>
          <rect x="52" y="38" width="52" height="9" rx="4.5" fill="#7a5416" opacity="0.9" />
          <ellipse cx="78" cy="38" rx="26" ry="7" fill="#7a5416" />
          <ellipse cx="78" cy="36.5" rx="26" ry="7" fill="url(#co-coin)" stroke="#ffffff" stroke-width="1" />
          <rect x="52" y="31" width="52" height="9" rx="4.5" fill="#8a611c" opacity="0.95" />
          <ellipse cx="78" cy="31" rx="26" ry="7" fill="#8a611c" />
          <ellipse cx="78" cy="29.5" rx="26" ry="7" fill="url(#co-coin)" stroke="#ffffff" stroke-width="1" />
          <rect x="52" y="24" width="52" height="9" rx="4.5" fill="#9a6f22" opacity="0.95" />
          <ellipse cx="78" cy="24" rx="26" ry="7" fill="#9a6f22" />
          <ellipse cx="78" cy="22.5" rx="26" ry="7" fill="url(#co-coin)" stroke="#ffffff" stroke-width="1" />
          <ellipse cx="78" cy="22.5" rx="14" ry="3.8" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="0.8" />
        </g>
        <g>
          <circle cx="142" cy="30" r="16" fill="#0a3d1a" opacity="0.22" />
          <g fill="url(#co-gear)" stroke="#ffffff" stroke-width="1">
            <rect x="138.5" y="12" width="7" height="36" rx="2" />
            <rect x="124" y="26.5" width="36" height="7" rx="2" />
            <rect x="128" y="16.5" width="28" height="7" rx="2" transform="rotate(45 142 20)" />
            <rect x="128" y="36.5" width="28" height="7" rx="2" transform="rotate(-45 142 40)" />
            <circle cx="143" cy="28.5" r="13" fill="url(#co-gear)" />
          </g>
          <circle cx="143" cy="28.5" r="6.5" fill="#fff7e8" stroke="#0a3d1a" stroke-width="1.4" />
          <circle cx="143" cy="28.5" r="2.4" fill="#0a3d1a" opacity="0.8" />
          <ellipse cx="112" cy="42" rx="9" ry="9" fill="url(#co-coin)" stroke="#ffffff" stroke-width="1" />
          <ellipse cx="112" cy="42" rx="4.5" ry="4.5" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.8" />
        </g>
      </svg>
      <svg
        v-else-if="art === 'revenue'"
        class="h-8 w-full opacity-90 2xl:h-16"
        viewBox="0 0 200 56"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="rv-note" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#e9f4e7" />
            <stop offset="1" stop-color="#bcd8b8" />
          </linearGradient>
          <linearGradient id="rv-arrow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#0e7a2e" />
            <stop offset="1" stop-color="#37b24d" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="50" rx="56" ry="4.5" fill="#0a3d1a" opacity="0.12" />
        <rect x="44" y="26" width="76" height="20" rx="5" fill="#0a3d1a" opacity="0.22" />
        <rect x="43" y="24" width="76" height="20" rx="5" fill="url(#rv-note)" stroke="#0e7a2e" stroke-width="1.3" />
        <rect x="49" y="28" width="64" height="12" rx="3" fill="none" stroke="#0e7a2e" stroke-width="1" opacity="0.6" />
        <circle cx="81" cy="34" r="7.5" fill="#0a3d1a" opacity="0.2" />
        <circle cx="80" cy="33" r="7.5" fill="url(#rv-arrow)" stroke="#ffffff" stroke-width="1.2" />
        <circle cx="80" cy="33" r="3" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="0.9" />
        <path d="M134 44 L134 22 M134 22 L124 31 M134 22 L144 31" fill="none" stroke="#0a3d1a" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity="0.2" />
        <path d="M132.5 42.5 L132.5 20.5 M132.5 20.5 L122.5 29.5 M132.5 20.5 L142.5 29.5" fill="none" stroke="url(#rv-arrow)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M132.5 20.5 L122.5 29.5 M132.5 20.5 L142.5 29.5" fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
        <rect x="126" y="42" width="15" height="4" rx="2" fill="#0e7a2e" opacity="0.35" />
        <ellipse cx="40" cy="46" rx="12" ry="3.6" fill="#0a3d1a" opacity="0.15" />
        <ellipse cx="37" cy="43" rx="10" ry="5" fill="#e7b45a" stroke="#ffffff" stroke-width="1" />
        <ellipse cx="47" cy="41" rx="10" ry="5" fill="#f6d488" stroke="#ffffff" stroke-width="1" />
        <path d="M164 8 l1.6 3.4 3.4 1.6 -3.4 1.6 -1.6 3.4 -1.6 -3.4 -3.4 -1.6 3.4 -1.6 Z" fill="#0e7a2e" opacity="0.7" />
      </svg>
      <svg
        v-else-if="art === 'partners'"
        class="h-10 w-full opacity-90 2xl:h-20"
        viewBox="0 0 200 56"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="pt-box" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffffff" />
            <stop offset="1" stop-color="#d7e8d4" />
          </linearGradient>
          <linearGradient id="pt-cab" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#e7b45a" />
            <stop offset="1" stop-color="#b7791f" />
          </linearGradient>
          <linearGradient id="pt-crate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#c9a06a" />
            <stop offset="1" stop-color="#8a5f2e" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="50" rx="62" ry="4.5" fill="#0a3d1a" opacity="0.12" />
        <rect x="52" y="20" width="66" height="24" rx="4" fill="#0a3d1a" opacity="0.22" />
        <rect x="50" y="18" width="66" height="24" rx="4" fill="url(#pt-box)" stroke="#cfd8cc" stroke-width="1.2" />
        <rect x="50" y="18" width="66" height="7" rx="3.5" fill="#ffffff" opacity="0.7" />
        <path d="M64 18v24M78 18v24M92 18v24M104 18v24" stroke="#cfd8cc" stroke-width="1.4" />
        <rect x="118" y="28" width="26" height="16" rx="3" fill="#0a3d1a" opacity="0.22" />
        <rect x="116" y="26" width="26" height="16" rx="3" fill="url(#pt-cab)" stroke="#ffffff" stroke-width="1" />
        <rect x="128" y="29" width="11" height="7" rx="1.5" fill="#9fd0ef" />
        <circle cx="68" cy="44" r="6" fill="#1a1c1c" />
        <circle cx="68" cy="44" r="2.4" fill="#cfd8cc" />
        <circle cx="98" cy="44" r="6" fill="#1a1c1c" />
        <circle cx="98" cy="44" r="2.4" fill="#cfd8cc" />
        <circle cx="131" cy="44" r="6" fill="#1a1c1c" />
        <circle cx="131" cy="44" r="2.4" fill="#cfd8cc" />
        <rect x="152" y="34" width="20" height="12" rx="2" fill="#0a3d1a" opacity="0.22" />
        <rect x="151" y="32.5" width="20" height="12" rx="2" fill="url(#pt-crate)" stroke="#ffffff" stroke-width="1" />
        <path d="M151 38.5h20M161 32.5v12" stroke="#ffffff" stroke-width="1.1" opacity="0.85" />
        <rect x="156" y="22" width="14" height="10" rx="2" fill="#0a3d1a" opacity="0.22" />
        <rect x="155" y="20.5" width="14" height="10" rx="2" fill="url(#pt-crate)" stroke="#ffffff" stroke-width="1" />
        <path d="M30 12 l1.4 3 3 1.4 -3 1.4 -1.4 3 -1.4 -3 -3 -1.4 3 -1.4 Z" fill="#0e7a2e" opacity="0.75" />
      </svg>
      
      <div class="mt-1 hidden 2xl:block" aria-hidden="true">
        <svg v-if="art === 'activities'" class="h-16 w-full opacity-90" viewBox="0 0 200 56" preserveAspectRatio="xMidYMax meet">
          <ellipse cx="100" cy="50" rx="58" ry="4.5" fill="#0a3d1a" opacity="0.12" />
          <circle cx="46" cy="40" r="11" fill="#0a3d1a" opacity="0.2" />
          <g fill="#3f7a52">
            <rect x="43.5" y="28" width="5" height="24" rx="1.8" />
            <rect x="34" y="37.5" width="24" height="5" rx="1.8" />
            <circle cx="46" cy="40" r="8.5" />
          </g>
          <circle cx="46" cy="40" r="4" fill="#fff7e8" />
          <rect x="72" y="12" width="52" height="38" rx="5" fill="#0a3d1a" opacity="0.22" />
          <rect x="70" y="10" width="52" height="38" rx="5" fill="#fff7e8" stroke="#d8c9a6" stroke-width="1.2" />
          <rect x="88" y="5" width="16" height="9" rx="3" fill="#8a5f2e" />
          <path d="M78 26h22M78 33h22M78 40h14" stroke="#8a7a5c" stroke-width="2" stroke-linecap="round" opacity="0.7" />
          <path d="M110 24 l3 3 6 -7" fill="none" stroke="#0e7a2e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M110 31 l3 3 6 -7" fill="none" stroke="#0e7a2e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          <rect x="138" y="16" width="8" height="26" rx="2.5" fill="#e7b45a" stroke="#ffffff" stroke-width="1" transform="rotate(18 142 29)" />
        </svg>
        <svg v-if="art === 'resources'" class="h-16 w-full opacity-90" viewBox="0 0 200 56" preserveAspectRatio="xMidYMax meet">
          <ellipse cx="100" cy="51" rx="58" ry="4" fill="#0a3d1a" opacity="0.12" />
          <circle cx="102" cy="30" r="22" fill="#0e7a2e" opacity="0.12" />
          <g stroke="#8a9389" stroke-width="2" stroke-linecap="round">
            <path d="M86 20v-8M96 20v-8M106 20v-8M116 20v-8" />
            <path d="M86 42v8M96 42v8M106 42v8M116 42v8" />
            <path d="M80 24h-8M80 32h-8M80 40h-8" />
            <path d="M124 24h8M124 32h8M124 40h8" />
          </g>
          <rect x="80" y="18" width="42" height="24" rx="6" fill="#14632f" stroke="#ffffff" stroke-width="1.2" />
          <circle cx="101" cy="30" r="8" fill="#f6d488" stroke="#ffffff" stroke-width="1.2" />
          <ellipse cx="48" cy="43" rx="10" ry="5" fill="#e7b45a" stroke="#ffffff" stroke-width="1" />
          <ellipse cx="58" cy="41" rx="10" ry="5" fill="#f6d488" stroke="#ffffff" stroke-width="1" />
          <g stroke="#0e7a2e" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.85">
            <path d="M152 48 v-9 M148 41 q4 -4 8 0" />
          </g>
        </svg>
        <svg v-if="art === 'relations'" class="h-16 w-full opacity-90" viewBox="0 0 200 56" preserveAspectRatio="xMidYMax meet">
          <ellipse cx="100" cy="51" rx="58" ry="4" fill="#0a3d1a" opacity="0.12" />
          <rect x="36" y="24" width="68" height="22" rx="9" fill="#eef7ee" stroke="#0e7a2e" stroke-width="1.2" />
          <polygon points="52,46 58,54 64,46" fill="#eef7ee" stroke="#0e7a2e" stroke-width="1.2" />
          <path d="M46 31h30M46 37h22" stroke="#0e7a2e" stroke-width="2" stroke-linecap="round" opacity="0.55" />
          <rect x="96" y="24" width="68" height="22" rx="9" fill="#fff7e8" stroke="#d8c9a6" stroke-width="1.2" />
          <polygon points="142,46 148,54 154,46" fill="#fff7e8" stroke="#d8c9a6" stroke-width="1.2" />
          <path d="M130 33 c-4.5 -6 -14 -3 -12.5 3.5 c1 4.5 7 8 12.5 11 c5.5 -3 11.5 -6.5 12.5 -11 c1.5 -6.5 -8 -9.5 -12.5 -3.5z" fill="#c0392b" stroke="#ffffff" stroke-width="1.2" />
          <path d="M62 8 l1.4 3 3 1.4 -3 1.4 -1.4 3 -1.4 -3 -3 -1.4 3 -1.4 Z" fill="#0e7a2e" opacity="0.7" />
        </svg>
      </div>
    </div>
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
