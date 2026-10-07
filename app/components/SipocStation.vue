<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  items: string[]
  hero?: boolean
  slotLabel?: string
  slotSpec?: string
  scene?: string
  src?: string
  alt?: string
}>()
</script>

<template>
  <article
    class="sipoc-station relative flex h-full min-w-0 flex-1 flex-col justify-between overflow-hidden rounded-2xl border-2 p-3 text-left lg:p-4"
    :class="hero ? 'border-gm-primary bg-gm-primary text-white shadow-md' : 'border-gm-line bg-white'"
  >
    <div
      class="sipoc-scene relative mb-2 h-12 w-full shrink-0 overflow-hidden rounded-xl border lg:h-14"
      :class="hero ? 'hot border-white/25 bg-white/10' : 'border-gm-line bg-gm-panel'"
      aria-hidden="true"
    >
      <svg v-if="scene === 'supplier'" viewBox="0 0 200 44" class="absolute inset-0 h-full w-full" fill="none">
        <line x1="8" y1="40" x2="192" y2="40" style="stroke:var(--sc-line)" stroke-width="2" stroke-linecap="round" opacity="0.3" />
        <polygon points="14,16 50,5 86,16" style="fill:var(--sc-line)" opacity="0.9" />
        <rect x="20" y="16" width="60" height="22" rx="2" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.6" />
        <rect x="44" y="26" width="12" height="12" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.4" />
        <line x1="24" y1="22" x2="38" y2="22" style="stroke:var(--sc-line)" stroke-width="1.4" stroke-linecap="round" opacity="0.6" />
        <rect x="102" y="26" width="22" height="12" rx="1" style="fill:var(--sc-box);stroke:var(--sc-accent)" stroke-width="1.5" />
        <line x1="102" y1="30" x2="124" y2="30" style="stroke:var(--sc-accent)" stroke-width="1" opacity="0.7" />
        <rect x="126" y="20" width="22" height="18" rx="1" style="fill:var(--sc-box);stroke:var(--sc-accent)" stroke-width="1.5" />
        <line x1="137" y1="20" x2="137" y2="38" style="stroke:var(--sc-accent)" stroke-width="1" opacity="0.7" />
        <rect x="150" y="28" width="16" height="10" rx="1" style="fill:var(--sc-box);stroke:var(--sc-accent)" stroke-width="1.5" />
        <circle cx="176" cy="14" r="5" style="fill:var(--sc-soft)" opacity="0.5" />
        <circle cx="186" cy="22" r="3" style="fill:var(--sc-soft)" opacity="0.35" />
      </svg>
      <svg v-else-if="scene === 'input'" viewBox="0 0 200 44" class="absolute inset-0 h-full w-full" fill="none">
        <line x1="8" y1="40" x2="192" y2="40" style="stroke:var(--sc-line)" stroke-width="2" stroke-linecap="round" opacity="0.3" />
        <path d="M58 18 L142 18 L132 38 L68 38 Z" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.6" stroke-linejoin="round" />
        <rect x="76" y="22" width="17" height="10" rx="1" style="fill:var(--sc-line)" opacity="0.9" />
        <rect x="99" y="22" width="17" height="10" rx="1" style="fill:var(--sc-deep)" opacity="0.9" />
        <rect x="122" y="23" width="11" height="8" rx="1" style="fill:var(--sc-soft)" />
        <line x1="84" y1="32" x2="84" y2="36" style="stroke:var(--sc-accent)" stroke-width="1.2" />
        <line x1="107" y1="32" x2="107" y2="36" style="stroke:var(--sc-accent)" stroke-width="1.2" />
        <circle cx="150" cy="16" r="2" style="fill:var(--sc-accent)" class="sipoc-tw" />
        <circle cx="160" cy="12" r="2.6" style="fill:var(--sc-accent)" opacity="0.6" class="sipoc-tw t2" />
        <path d="M150 26 A12 12 0 0 1 168 20" style="stroke:var(--sc-soft)" stroke-width="1.6" stroke-linecap="round" />
        <path d="M148 31 A18 18 0 0 1 174 22" style="stroke:var(--sc-soft)" stroke-width="1.4" stroke-linecap="round" opacity="0.55" />
      </svg>
      <svg v-else-if="scene === 'process'" viewBox="0 0 200 44" class="absolute inset-0 h-full w-full" fill="none">
        <line x1="8" y1="40" x2="192" y2="40" style="stroke:var(--sc-line)" stroke-width="2" stroke-linecap="round" opacity="0.35" />
        <rect x="86" y="10" width="11" height="14" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.5" />
        <rect x="28" y="20" width="72" height="18" rx="2" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.6" />
        <polygon points="28,20 40,12 52,20 64,12 76,20 88,12 100,20" style="fill:var(--sc-line)" opacity="0.9" />
        <rect x="44" y="27" width="10" height="11" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.3" />
        <rect x="58" y="27" width="10" height="11" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.3" />
        <g class="sipoc-gear-a">
          <circle cx="126" cy="26" r="9" style="stroke:var(--sc-accent)" stroke-width="2" />
          <circle cx="126" cy="26" r="3" style="fill:var(--sc-accent)" />
          <path d="M126 14 V19 M126 33 V38 M114 26 H119 M133 26 H138 M118 18 L121 21 M131 31 L134 34 M134 18 L131 21 M121 31 L118 34" style="stroke:var(--sc-accent)" stroke-width="1.8" stroke-linecap="round" />
        </g>
        <g class="sipoc-gear-b">
          <circle cx="152" cy="29" r="6.5" style="stroke:var(--sc-line)" stroke-width="1.8" />
          <circle cx="152" cy="29" r="2.2" style="fill:var(--sc-line)" />
          <path d="M152 20 V24 M152 34 V38 M143 29 H147 M157 29 H161" style="stroke:var(--sc-line)" stroke-width="1.6" stroke-linecap="round" />
        </g>
        <circle cx="170" cy="24" r="2" style="fill:var(--sc-soft)" class="sipoc-tw" />
        <circle cx="178" cy="30" r="1.6" style="fill:var(--sc-soft)" opacity="0.7" class="sipoc-tw t2" />
      </svg>
      <svg v-else-if="scene === 'output'" viewBox="0 0 200 44" class="absolute inset-0 h-full w-full" fill="none">
        <line x1="8" y1="40" x2="192" y2="40" style="stroke:var(--sc-line)" stroke-width="2" stroke-linecap="round" opacity="0.3" />
        <rect x="18" y="22" width="26" height="16" rx="1.5" style="fill:var(--sc-box);stroke:var(--sc-accent)" stroke-width="1.5" />
        <line x1="31" y1="22" x2="31" y2="38" style="stroke:var(--sc-accent)" stroke-width="1" opacity="0.8" />
        <rect x="48" y="16" width="24" height="22" rx="1.5" style="fill:var(--sc-box);stroke:var(--sc-accent)" stroke-width="1.5" />
        <line x1="48" y1="22" x2="72" y2="22" style="stroke:var(--sc-accent)" stroke-width="1" opacity="0.8" />
        <rect x="118" y="8" width="62" height="28" rx="3" style="fill:var(--sc-deep)" opacity="0.92" />
        <rect x="118" y="8" width="62" height="28" rx="3" style="stroke:var(--sc-line)" stroke-width="1.5" />
        <polyline points="126,24 134,24 138,16 144,28 148,21 154,21 158,26 170,26" style="stroke:var(--sc-spark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="186" cy="12" r="2.4" style="fill:var(--sc-spark)" class="sipoc-tw" />
        <line x1="148" y1="36" x2="148" y2="40" style="stroke:var(--sc-line)" stroke-width="1.6" stroke-linecap="round" />
        <line x1="138" y1="40" x2="158" y2="40" style="stroke:var(--sc-line)" stroke-width="1.6" stroke-linecap="round" />
      </svg>
      <svg v-else viewBox="0 0 200 44" class="absolute inset-0 h-full w-full" fill="none">
        <line x1="8" y1="40" x2="192" y2="40" style="stroke:var(--sc-line)" stroke-width="2" stroke-linecap="round" opacity="0.3" />
        <rect x="22" y="23" width="36" height="11" rx="5.5" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.6" />
        <rect x="142" y="23" width="36" height="11" rx="5.5" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.6" />
        <circle cx="66" cy="28" r="6" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.6" />
        <circle cx="134" cy="28" r="6" style="fill:var(--sc-fill);stroke:var(--sc-line)" stroke-width="1.6" />
        <g class="sipoc-sway">
          <line x1="100" y1="30" x2="100" y2="14" style="stroke:var(--sc-line)" stroke-width="1.8" stroke-linecap="round" />
          <path d="M100 22 C92 22 88 17 87 12 C94 13 99 16 100 22 Z" style="fill:var(--sc-soft)" />
          <path d="M100 22 C108 22 112 17 113 12 C106 13 101 16 100 22 Z" style="fill:var(--sc-soft)" opacity="0.75" />
          <circle cx="100" cy="10" r="2.4" style="fill:var(--sc-accent)" class="sipoc-tw" />
        </g>
        <circle cx="176" cy="12" r="5" style="fill:var(--sc-accent)" opacity="0.55" />
        <circle cx="30" cy="12" r="3" style="fill:var(--sc-soft)" opacity="0.5" />
      </svg>
      <span v-if="scene === 'process'" class="sipoc-steams" aria-hidden="true">
        <i class="s1" /><i class="s2" /><i class="s3" />
      </span>
      <span v-else-if="scene === 'supplier'" class="sipoc-steams lite" aria-hidden="true">
        <i class="s1" />
      </span>
    </div>
    <div class="relative flex items-center justify-start gap-2.5">
      <span class="grid size-10 shrink-0 place-items-center rounded-full lg:size-11" :class="hero ? 'bg-white/15' : 'bg-gm-mist'">
        <Icon :name="icon" class="size-6" :class="hero ? 'text-white' : 'text-gm-primary'" aria-hidden="true" />
      </span>
      <h3
        class="font-headline text-base font-extrabold uppercase tracking-wide"
        :class="hero ? 'text-white' : 'text-gm-primary'"
      >
        {{ title }}
      </h3>
    </div>
    <ul
      class="relative mt-2 space-y-1 border-t pt-2"
      :class="hero ? 'border-white/20' : 'border-gm-line'"
    >
      <li
        v-for="it in items"
        :key="it"
        class="flex items-start justify-start gap-1.5 text-left text-base leading-tight"
        :class="hero ? 'text-white/90' : 'text-gm-ink'"
      >
        <span
          class="mt-2 size-1.5 shrink-0 rounded-full"
          :class="hero ? 'bg-white/70' : 'bg-gm-soft'"
          aria-hidden="true"
        />
        <span class="min-w-0">{{ it }}</span>
      </li>
    </ul>
    <UiPhotoFigure
      v-if="src"
      :src="src"
      :alt="alt ?? title"
      ratio="16 / 10"
      class="sipoc-slot mb-0 mt-auto pt-2"
    />
    <UiPhotoSlot
      v-else-if="slotLabel"
      ratio="16 / 10"
      :label="slotLabel"
      :spec="slotSpec"
      class="sipoc-slot mb-0 mt-auto pt-2"
    />
  </article>
</template>

<style scoped>
.sipoc-scene {
  --sc-line: #006e1c;
  --sc-deep: #004d13;
  --sc-soft: #4caf50;
  --sc-fill: #e9f4ea;
  --sc-box: #faf3e3;
  --sc-accent: #b7791f;
  --sc-spark: #b7791f;
}
.sipoc-scene.hot {
  --sc-line: #ffffff;
  --sc-deep: rgba(255, 255, 255, 0.16);
  --sc-soft: #c9efcb;
  --sc-fill: rgba(255, 255, 255, 0.14);
  --sc-box: rgba(255, 255, 255, 0.16);
  --sc-accent: #ffd98a;
  --sc-spark: #ffd98a;
}
.sipoc-slot {
  margin-top: auto;
  transform: translateY(2px);
}
:deep(.sipoc-slot) {
  padding: 0.5rem;
  gap: 0.375rem;
  border-radius: 0.75rem;
  margin-top: 0.5rem;
}
:deep(.sipoc-slot p) {
  line-height: 1.25;
}
:deep(.sipoc-slot .size-8) {
  width: 2.5rem;
  height: 2.5rem;
}
:deep(.sipoc-slot .size-4) {
  width: 1.5rem;
  height: 1.5rem;
}
.sipoc-gear-a,
.sipoc-gear-b {
  transform-box: fill-box;
  transform-origin: center;
  animation: sipoc-spin 12s linear infinite;
}
.sipoc-gear-b {
  animation-direction: reverse;
}
@keyframes sipoc-spin {
  to { transform: rotate(360deg); }
}
.sipoc-tw {
  animation: sipoc-tw 2.2s ease-in-out infinite;
}
.sipoc-tw.t2 {
  animation-delay: 1.1s;
}
@keyframes sipoc-tw {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
}
.sipoc-sway {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: sipoc-sway 3.6s ease-in-out infinite;
}
@keyframes sipoc-sway {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}
.sipoc-steams {
  position: absolute;
  right: 46%;
  top: 0;
  width: 30px;
  height: 18px;
  pointer-events: none;
}
.sipoc-steams.lite {
  right: 8%;
}
.sipoc-steams i {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background: var(--sc-line);
  opacity: 0;
  animation: sipoc-steam 2.6s ease-out infinite;
}
.sipoc-steams .s1 { left: 12px; }
.sipoc-steams .s2 { left: 5px; animation-delay: 0.85s; }
.sipoc-steams .s3 { left: 19px; animation-delay: 1.7s; }
@keyframes sipoc-steam {
  0% { transform: translateY(2px) scale(0.7); opacity: 0; }
  30% { opacity: 0.85; }
  100% { transform: translateY(-13px) scale(1.25); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .sipoc-gear-a,
  .sipoc-gear-b,
  .sipoc-tw,
  .sipoc-sway,
  .sipoc-steams i {
    animation: none !important;
  }
  .sipoc-steams { display: none; }
}
</style>
