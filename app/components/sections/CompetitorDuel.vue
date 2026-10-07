<script setup lang="ts">
import gsap from 'gsap'

interface PriceCell {
  label: string
  ok: boolean
}

interface PriceCard {
  name: string
  brand: 'tuya' | 'clickgrow' | 'growmate'
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
    brand: 'growmate',
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
    brand: 'tuya',
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
    brand: 'clickgrow',
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
          <div class="flex h-full w-full flex-col justify-between text-left">
            <div class="relative w-full">
              <span aria-hidden="true" class="absolute left-0 top-0 h-5 w-5 rounded-tl-xl border-l-4 border-t-4 border-gm-primary" />
              <span aria-hidden="true" class="absolute right-0 top-0 h-5 w-5 rounded-tr-xl border-r-4 border-t-4 border-gm-primary" />
              <span aria-hidden="true" class="absolute bottom-0 left-0 h-5 w-5 rounded-bl-xl border-b-4 border-l-4 border-gm-primary" />
              <span aria-hidden="true" class="absolute bottom-0 right-0 h-5 w-5 rounded-br-xl border-b-4 border-r-4 border-gm-primary" />
              <UiPhotoFigure
                src="/photos/tech-field.webp"
                alt="Perangkat GrowMate Tech terpasang di sawah"
                ratio="16 / 9"
              />
            </div>
            <UiCalloutBanner icon="lucide:crown" tone="brand" class="banner-fix mt-1">
              AI Agen, komunitas, marketplace: hanya di GrowMate.
            </UiCalloutBanner>
          </div>
        </template>
      </DeckSplitPanel>

      <div class="price-round mt-1 w-full rounded-3xl border-2 border-gm-line bg-gm-panel p-1.5 text-left">
        <div class="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
          <p class="min-w-0 truncate font-headline text-base font-extrabold uppercase tracking-[0.14em] text-gm-muted">
            Ronde 2 • Kartu harga dan fitur
          </p>
          <p class="shrink-0 text-base text-gm-muted">
            6 fitur penentu pilihan
          </p>
        </div>
        <div class="mt-1 grid grid-cols-1 gap-1.5 md:grid-cols-3">
          <article
            v-for="c in cards"
            :key="c.name"
            class="price-card rounded-2xl border-2 p-1.5 text-left"
            :class="c.hero ? 'border-gm-primary/50 bg-gm-mist' : 'border-gm-line bg-white'"
          >
            <div class="flex flex-wrap items-center gap-1.5">
              <span aria-hidden="true" class="size-2.5 shrink-0 rounded-full" :class="c.hero ? 'bg-gm-primary' : 'bg-gm-muted'" />
              <p
                class="min-w-0 flex-1 break-words font-headline text-base font-extrabold uppercase tracking-wide"
                :class="c.hero ? 'text-gm-primary' : 'text-gm-ink'"
              >
                {{ c.name }}
              </p>
              <BrandMark :brand="c.brand" />
              <span
                class="shrink-0 rounded-full px-2.5 py-0.5 font-headline text-base font-extrabold tabular-nums"
                :class="c.hero ? 'bg-gm-primary text-white' : 'border border-gm-line bg-gm-panel text-gm-muted'"
              >
                {{ c.score }}
              </span>
            </div>
            <p class="truncate text-base leading-tight text-gm-muted">
              {{ c.tag }} • {{ c.price }}
            </p>
            <ul class="mt-1 grid grid-cols-2 gap-x-2 gap-y-0.5">
              <li v-for="f in c.cells" :key="f.label" class="flex min-w-0 items-center gap-1.5">
                <Icon
                  :name="f.ok ? 'lucide:check' : 'lucide:x'"
                  class="size-6 shrink-0"
                  :class="f.ok ? 'text-gm-primary' : 'text-red-500'"
                  aria-hidden="true"
                />
                <span class="truncate text-base leading-none" :class="f.ok ? 'text-gm-ink' : 'text-gm-muted'">
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

<style scoped>
:deep(.banner-fix) {
  justify-content: flex-start !important;
  text-align: left !important;
  padding: 0.375rem 0.75rem !important;
}
:deep(.banner-fix svg) {
  width: 1.25rem !important;
  height: 1.25rem !important;
}
:deep(.banner-fix p) {
  font-size: 1rem !important;
  line-height: 1.4;
  text-align: left !important;
}
</style>
