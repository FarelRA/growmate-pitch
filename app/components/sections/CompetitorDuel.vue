<script setup lang="ts">
import gsap from 'gsap'

interface PriceCell {
  label: string
  ok: boolean
}

interface PriceCard {
  name: string
  tag: string
  price: string
  score: string
  hero?: boolean
  cells: PriceCell[]
}

// Ronde 2 memakai skor duel 7 lawan 2 dari Ronde 1.
// GrowMate memakai harga lini Rp803 rb hingga Rp2.409 jt.
// Tuya dan Click dan Grow memakai label kualitatif karena PDF tidak memuat angka rupiah.
const cards: PriceCard[] = [
  {
    name: 'GrowMate',
    tag: 'Hero lokal cerdas',
    price: 'Rp803 rb hingga Rp2.409 jt',
    score: '7 dari 7',
    hero: true,
    cells: [
      { label: 'AI Agen', ok: true },
      { label: 'Data tropis', ok: true },
      { label: 'Mode offline', ok: true },
      { label: 'Surya dan SIM', ok: true },
      { label: 'Servis lokal', ok: true },
      { label: 'Harga ramah', ok: true },
    ],
  },
  {
    name: 'Tuya',
    tag: 'Platform IoT umum',
    price: 'harga bervariasi',
    score: '2 dari 7',
    cells: [
      { label: 'AI Agen', ok: false },
      { label: 'Data tropis', ok: false },
      { label: 'Mode offline', ok: true },
      { label: 'Surya dan SIM', ok: false },
      { label: 'Servis lokal', ok: false },
      { label: 'Harga ramah', ok: true },
    ],
  },
  {
    name: 'Click & Grow',
    tag: 'Kebun pintar impor',
    price: 'harga premium impor',
    score: '2 dari 7',
    cells: [
      { label: 'AI Agen', ok: false },
      { label: 'Data tropis', ok: false },
      { label: 'Mode offline', ok: true },
      { label: 'Surya dan SIM', ok: false },
      { label: 'Servis lokal', ok: false },
      { label: 'Harga ramah', ok: false },
    ],
  },
]

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    gsap.fromTo(
      '.price-card',
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.09, delay: 0.9, ease: 'power2.out' },
    )
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="kompetitor">
    <div ref="root" class="w-full text-left">
      <DeckSplitPanel>
        <template #primary>
          <DuelArena class="w-full" />
        </template>
        <template #secondary>
          <div class="flex w-full flex-col text-left">
            <div class="relative w-full px-3 pb-1 pt-3 md:px-4 md:pt-4">
              <span aria-hidden="true" class="absolute left-0 top-0 h-7 w-7 rounded-tl-xl border-l-4 border-t-4 border-gm-primary" />
              <span aria-hidden="true" class="absolute right-0 top-0 h-7 w-7 rounded-tr-xl border-r-4 border-t-4 border-gm-primary" />
              <span aria-hidden="true" class="absolute bottom-0 left-0 h-7 w-7 rounded-bl-xl border-b-4 border-l-4 border-gm-primary" />
              <span aria-hidden="true" class="absolute bottom-0 right-0 h-7 w-7 rounded-br-xl border-b-4 border-r-4 border-gm-primary" />
              <UiPhotoFigure
                src="/photos/tech-field.webp"
                alt="Perangkat GrowMate Tech terpasang di sawah"
                ratio="16 / 7"
              />
            </div>
            <UiCalloutBanner icon="lucide:crown" tone="brand" class="mt-2 md:mt-2.5">
              AI Agen, komunitas, dan marketplace: hanya ada di GrowMate.
            </UiCalloutBanner>
          </div>
        </template>
      </DeckSplitPanel>

      <div class="price-round mt-2.5 w-full rounded-3xl border-2 border-gm-line bg-gm-panel p-2.5 text-left md:mt-3 md:p-3">
        <div class="flex items-center justify-between gap-2">
          <p class="font-headline text-[10px] font-extrabold uppercase tracking-[0.14em] text-gm-muted md:text-[11px]">
            Ronde 2 • Kartu harga dan fitur
          </p>
          <p class="shrink-0 text-[10px] text-gm-muted md:text-[11px]">
            6 fitur penentu pilihan
          </p>
        </div>
        <div class="mt-1.5 grid grid-cols-1 gap-1.5 md:mt-2 md:grid-cols-3 md:gap-2">
          <article
            v-for="c in cards"
            :key="c.name"
            class="price-card rounded-2xl border-2 p-2 text-left md:p-2.5"
            :class="c.hero ? 'border-gm-primary/50 bg-gm-mist' : 'border-gm-line bg-white'"
          >
            <div class="flex items-center gap-1.5">
              <span aria-hidden="true" class="size-2 shrink-0 rounded-full" :class="c.hero ? 'bg-gm-primary' : 'bg-gm-muted'" />
              <p
                class="truncate font-headline text-xs font-extrabold uppercase tracking-wide md:text-sm"
                :class="c.hero ? 'text-gm-primary' : 'text-gm-ink'"
              >
                {{ c.name }}
              </p>
              <span
                class="ml-auto shrink-0 rounded-full px-1.5 py-px font-headline text-[9px] font-extrabold tabular-nums md:text-[10px]"
                :class="c.hero ? 'bg-gm-primary text-white' : 'border border-gm-line bg-gm-panel text-gm-muted'"
              >
                {{ c.score }}
              </span>
            </div>
            <p class="mt-0.5 truncate text-[10px] leading-snug text-gm-muted md:text-[11px]">
              {{ c.tag }} • {{ c.price }}
            </p>
            <ul class="mt-1.5 grid grid-cols-2 gap-x-2 gap-y-1">
              <li v-for="f in c.cells" :key="f.label" class="flex min-w-0 items-center gap-1">
                <Icon
                  :name="f.ok ? 'lucide:check' : 'lucide:x'"
                  class="size-3.5 shrink-0"
                  :class="f.ok ? 'text-gm-primary' : 'text-red-500'"
                  aria-hidden="true"
                />
                <span class="truncate text-[10px] leading-tight md:text-[11px]" :class="f.ok ? 'text-gm-ink' : 'text-gm-muted'">
                  {{ f.label }}
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </DeckShell>
</template>
