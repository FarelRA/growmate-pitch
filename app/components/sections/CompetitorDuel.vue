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
    tag: 'Perangkat lokal dengan agen AI',
    price: 'Rp803 rb hingga Rp2.409 jt',
    score: '7 dari 7',
    hero: true,
    cells: [
      { label: 'Agen AI', ok: true },
      { label: 'Data tropis', ok: true },
      { label: 'Mode luring', ok: true },
      { label: 'Surya dan SIM', ok: true },
      { label: 'Layanan servis lokal', ok: true },
      { label: 'Harga terjangkau', ok: true },
    ],
  },
  {
    name: 'Tuya',
    brand: 'tuya',
    tag: 'Platform IoT umum',
    price: 'harga bervariasi',
    score: '2 dari 7',
    cells: [
      { label: 'Agen AI', ok: false },
      { label: 'Data tropis', ok: false },
      { label: 'Mode luring', ok: true },
      { label: 'Surya dan SIM', ok: false },
      { label: 'Layanan servis lokal', ok: false },
      { label: 'Harga terjangkau', ok: true },
    ],
  },
  {
    name: 'Click & Grow',
    brand: 'clickgrow',
    tag: 'Kebun pintar impor',
    price: 'harga premium impor',
    score: '2 dari 7',
    cells: [
      { label: 'Agen AI', ok: false },
      { label: 'Data tropis', ok: false },
      { label: 'Mode luring', ok: true },
      { label: 'Surya dan SIM', ok: false },
      { label: 'Layanan servis lokal', ok: false },
      { label: 'Harga terjangkau', ok: false },
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
    <div ref="root" class="flex min-h-full w-full flex-col justify-center gap-1 text-left">
      <DuelArena class="w-full" />
      <UiCalloutBanner icon="lucide:crown" tone="brand" class="banner-fix w-full">
        Agen AI, komunitas, dan marketplace hanya ada di GrowMate.
      </UiCalloutBanner>
      <div class="price-round w-full rounded-3xl border-2 border-gm-line bg-gm-panel p-1 text-left">
        <div class="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
          <p class="min-w-0 truncate font-headline text-base font-extrabold uppercase tracking-[0.14em] text-gm-muted">
            Ronde 2 • Harga dan fitur
          </p>
          <p class="shrink-0 text-base text-gm-muted">
            6 fitur yang menentukan pilihan
          </p>
        </div>
        <div class="mt-1 grid grid-cols-1 gap-1.5 md:grid-cols-3">
          <article
            v-for="c in cards"
            :key="c.name"
            class="price-card rounded-2xl border-2 p-1 text-left"
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
                  class="size-5 shrink-0"
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
  padding: 0.25rem 0.75rem !important;
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
