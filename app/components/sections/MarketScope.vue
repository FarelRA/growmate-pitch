<script setup lang="ts">
const TAM_TARGET = 6183009
const SAM_TARGET = 57006
const SOM_TARGET = 80

const tamSrc = ref(0)
const samSrc = ref(0)
const somSrc = ref(0)
const ready = ref(false)

const tamVal = useTransition(tamSrc, { duration: 1200 })
const samVal = useTransition(samSrc, { duration: 1200 })
const somVal = useTransition(somSrc, { duration: 1200 })

const fmtID = (n: number) => Math.round(n).toLocaleString('id-ID')
const tamText = computed(() => fmtID(tamVal.value))
const samText = computed(() => fmtID(samVal.value))
const somText = computed(() => String(Math.round(somVal.value)))

const tracks = [
  { label: 'Pijakan hari ini', pct: '0,14%', w: '4px', c: 'bg-gm-muted/50' },
  { label: 'Target operasional', pct: '5%', w: '5%', c: 'bg-gm-amber' },
  { label: 'SAM DIY', pct: '100%', w: '100%', c: 'bg-gm-primary' },
]

onMounted(() => {
  window.setTimeout(() => { tamSrc.value = TAM_TARGET }, 250)
  window.setTimeout(() => { samSrc.value = SAM_TARGET }, 600)
  window.setTimeout(() => { somSrc.value = SOM_TARGET }, 950)
  window.setTimeout(() => { ready.value = true }, 550)
})
</script>

<template>
  <DeckShell section="tamsamsom">
    <div class="flex w-full min-w-0 flex-col gap-2 md:gap-2.5">
      <div class="grid w-full min-w-0 gap-2 md:grid-cols-[240px_minmax(0,1fr)] md:gap-3 lg:grid-cols-[260px_minmax(0,1fr)]">
        <Reveal class="w-full min-w-0 md:h-full" :y="16">
          <div class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gm-line bg-white p-2 text-left md:p-2.5">
            <p class="font-headline text-[11px] font-extrabold uppercase tracking-[0.1em] text-gm-primary">Indonesia</p>
            <p class="mt-0.5 text-[11px] leading-snug text-gm-muted">Fokus DIY di dalam pasar nasional.</p>
            <div class="relative mt-1 w-full min-w-0 flex-1">
              <svg viewBox="0 0 220 118" class="h-16 w-full md:h-[104px] lg:h-[118px]" aria-hidden="true">
                <g fill="#e9f4ea" stroke="#006e1c" stroke-width="1.5" stroke-linejoin="round">
                  <path d="M14 62 C22 48 34 36 46 30 C50 28 53 31 49 36 C41 46 30 62 24 72 C21 77 16 76 14 70 Z" />
                  <path d="M62 78 L118 74 C122 74 122 80 118 80 L62 84 C58 84 58 78 62 78 Z" />
                  <path d="M118 40 C128 32 144 34 148 44 C151 52 146 64 136 66 C126 68 116 62 116 52 Z" />
                  <path d="M158 44 C162 44 163 50 161 56 C160 62 162 70 158 74 C155 77 152 73 153 67 C154 60 152 50 154 46 Z" />
                  <path d="M176 62 C186 56 200 56 206 62 C210 67 204 74 194 75 C184 76 174 70 176 62 Z" />
                  <circle cx="128" cy="81" r="2.5" />
                  <circle cx="141" cy="83" r="2" />
                </g>
                <g fill="none" stroke="#4caf50" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
                  <path class="anim-flow" d="M112 70 C140 68 170 60 216 50" />
                  <path class="anim-flow" d="M112 76 C140 78 170 78 216 74" />
                  <path class="anim-flow" d="M112 82 C140 88 170 94 216 98" />
                </g>
              </svg>
              <span class="absolute" style="left: 45%; top: 60%;">
                <span class="relative flex size-3">
                  <span class="absolute inline-flex size-full animate-ping rounded-full bg-gm-amber opacity-60" />
                  <span class="anim-pulse-dot relative inline-flex size-3 rounded-full border-2 border-white bg-gm-amber" />
                </span>
              </span>
              <span class="absolute font-headline text-[10px] font-extrabold text-gm-amber" style="left: calc(45% + 18px); top: calc(60% - 3px);">DIY</span>
            </div>
            <p class="mt-1 border-t border-gm-line pt-1 text-[11px] leading-snug text-gm-muted">Teras menyempit dari nasional ke DIY ke pijakan awal.</p>
          </div>
        </Reveal>

        <div class="flex w-full min-w-0 flex-col items-stretch gap-1.5">
          <Reveal :delay="0.08" :x="-30" class="w-full min-w-0">
            <div class="w-full rounded-2xl border border-gm-line bg-white px-3 py-1.5 text-left md:py-2">
              <div class="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                <span class="rounded-lg bg-gm-ink px-2 py-0.5 font-headline text-xs font-extrabold text-white">TAM</span>
                <span class="text-[11px] font-semibold text-gm-muted md:text-xs">Total pasar nasional</span>
                <span class="ml-auto font-headline text-xl font-extrabold tabular-nums text-gm-primary md:text-2xl">{{ tamText }}</span>
                <span class="text-[11px] font-semibold text-gm-ink md:text-xs">petani + 770 properti</span>
              </div>
              <div class="mt-1 flex items-center gap-1" aria-hidden="true">
                <span v-for="d in 12" :key="d" class="size-1.5 rounded-full bg-gm-ink/15" />
              </div>
            </div>
          </Reveal>

          <Reveal :delay="0.18" :x="-30" class="w-full min-w-0 md:mx-10 md:w-auto">
            <div class="w-full rounded-2xl border border-gm-line bg-white px-3 py-1.5 text-left md:py-2">
              <div class="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                <span class="rounded-lg bg-gm-primary/10 px-2 py-0.5 font-headline text-xs font-extrabold text-gm-primary">SAM</span>
                <span class="text-[11px] font-semibold text-gm-muted md:text-xs">Terjangkau di DIY</span>
                <span class="ml-auto font-headline text-xl font-extrabold tabular-nums text-gm-primary md:text-2xl">{{ samText }}</span>
                <span class="text-[11px] font-semibold text-gm-ink md:text-xs">petani + 27 properti aktif</span>
              </div>
              <div class="mt-1 flex items-center gap-1" aria-hidden="true">
                <span v-for="d in 6" :key="d" class="size-1.5 rounded-full bg-gm-soft/60" />
              </div>
            </div>
          </Reveal>

          <Reveal :delay="0.28" :x="-30" class="w-full min-w-0 md:mx-20 md:w-auto">
            <div class="w-full rounded-2xl bg-gm-primary px-3 py-2 text-left text-white shadow-[0_16px_44px_rgba(0,110,28,0.4)] md:py-2.5">
              <div class="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                <span class="rounded-lg bg-white/15 px-2 py-0.5 font-headline text-xs font-extrabold text-white">SOM</span>
                <span class="text-[11px] font-semibold text-white/80 md:text-xs">Pijakan awal 2026</span>
                <span class="ml-auto font-headline text-xl font-extrabold tabular-nums text-white md:text-2xl">{{ somText }} + 3</span>
                <span class="text-[11px] font-semibold text-white/90 md:text-xs">tech farmer + properti</span>
              </div>
              <div class="mt-1 flex items-center gap-1" aria-hidden="true">
                <span class="size-1.5 rounded-full bg-gm-deep ring-1 ring-white/60" />
                <span class="size-1.5 rounded-full bg-gm-deep ring-1 ring-white/60" />
                <span class="size-1.5 rounded-full bg-gm-amber shadow-[0_0_8px_rgba(250,243,227,0.9)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal :delay="0.38" :y="16" class="w-full min-w-0">
        <div class="w-full min-w-0 rounded-2xl border border-gm-line bg-white px-3 py-1.5 text-left md:py-2">
          <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
            <p class="font-headline text-xs font-extrabold text-gm-ink md:text-sm">Jalan menuju 5% SAM</p>
            <p class="text-[11px] text-gm-muted">Skala 0 hingga 100% SAM</p>
          </div>
          <div class="mt-1.5 space-y-1">
            <div v-for="t in tracks" :key="t.label" class="flex items-center gap-2.5">
              <span class="w-32 shrink-0 text-[11px] font-semibold text-gm-muted">{{ t.label }}</span>
              <span class="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-gm-panel">
                <span class="block h-full rounded-full transition-all duration-1000" :class="t.c" :style="{ width: ready ? t.w : '0px' }" />
              </span>
              <span class="w-12 shrink-0 text-right font-headline text-[11px] font-extrabold tabular-nums text-gm-ink">{{ t.pct }}</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal :delay="0.46" :y="16" class="w-full">
        <UiCalloutBanner icon="lucide:map-pin" tone="brand">
          Pijakan 0,14% DIY hari ini, target operasional 2.850 tech farmer atau 5% SAM, lalu ekspansi nasional bertahap.
        </UiCalloutBanner>
      </Reveal>
    </div>
  </DeckShell>
</template>
