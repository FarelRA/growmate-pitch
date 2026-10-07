<script setup lang="ts">
import gsap from 'gsap'

type Cell = {
  id: string
  title: string
  sub: string
  icon: string
  items: string[]
  hero?: boolean
  place: string
}

const cells: Cell[] = [
  {
    id: 'kp',
    title: 'Mitra Kunci',
    sub: 'Key Partners',
    icon: 'lucide:truck',
    items: [
      'Pemasok komponen elektronik dan sensor IoT',
      'Pemasok kemasan ramah lingkungan',
      'Penyedia cloud dan API AI',
      'DKPP Kab. Bantul',
      'DKUMPP Kab. Bantul',
      'Balai Tekkomdik DIY',
      'Komunitas tech farmer',
      'Mitra ritel dan distributor',
    ],
    place: 'md:col-start-1 md:row-start-1 md:row-span-2',
  },
  {
    id: 'ka',
    title: 'Aktivitas Kunci',
    sub: 'Key Activities',
    icon: 'lucide:factory',
    items: ['Riset dan pengembangan', 'Produksi dan perakitan', 'Pemasaran dan edukasi', 'Perawatan web'],
    place: 'md:col-start-2 md:row-start-1',
  },
  {
    id: 'kr',
    title: 'Sumber Daya Kunci',
    sub: 'Key Resources',
    icon: 'lucide:cpu',
    items: ['Modal', 'Dataset pertanian', 'Tenaga kompeten', 'Web GrowMate', 'Peralatan'],
    place: 'md:col-start-2 md:row-start-2',
  },
  {
    id: 'vp',
    title: 'Proposisi Nilai',
    sub: 'Value Propositions',
    icon: 'lucide:sprout',
    hero: true,
    items: [
      'AI agen',
      'Perawatan otomatis',
      'Pemantauan cerdas',
      'Fleksibilitas kustom',
      'Komunitas terintegrasi',
      'Harga terjangkau',
    ],
    place: 'md:col-start-3 md:row-start-1 md:row-span-2',
  },
  {
    id: 'cr',
    title: 'Hubungan Pelanggan',
    sub: 'Customer Relationships',
    icon: 'lucide:heart-handshake',
    items: [
      'Interaksi AI agen',
      'Komunitas GrowMate',
      'Garansi 3 bulan ganti baru',
      'Konsultasi daring',
      'Purnajual',
    ],
    place: 'md:col-start-4 md:row-start-1',
  },
  {
    id: 'ch',
    title: 'Kanal',
    sub: 'Channels',
    icon: 'lucide:store',
    items: ['Daring Shopee dan website', 'Luring ritel, distributor, hotel, kafe, kantor'],
    place: 'md:col-start-4 md:row-start-2',
  },
  {
    id: 'cs',
    title: 'Segmen Pelanggan',
    sub: 'Customer Segments',
    icon: 'lucide:users',
    items: ['Tech farmer', 'Pengembang properti dan perkantoran'],
    place: 'md:col-start-5 md:row-start-1 md:row-span-2',
  },
  {
    id: 'cost',
    title: 'Struktur Biaya',
    sub: 'Cost Structure',
    icon: 'lucide:coins',
    items: ['Riset AI IoT', 'Produksi', 'Server', 'Gaji'],
    place: 'md:col-start-1 md:col-span-2 md:row-start-3',
  },
  {
    id: 'rev',
    title: 'Arus Pendapatan',
    sub: 'Revenue Streams',
    icon: 'lucide:banknote',
    items: ['Penjualan Pods', 'Penjualan Tech', 'Langganan AI'],
    place: 'md:col-start-3 md:col-span-3 md:row-start-3',
  },
]

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  ctx = gsap.context(() => {
    gsap.fromTo(
      '.kanvas-plot',
      { scale: 0.7, y: 24, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out' },
    )
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="bmc">
    <div ref="root" class="relative w-full overflow-hidden rounded-2xl bg-gm-cream p-2 sm:p-3 md:p-3">
      <svg aria-hidden="true" class="pointer-events-none absolute inset-0 size-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <g fill="none" stroke="#e5e8e3" stroke-width="2" opacity="0.55">
          <path d="M -20 120 C 220 100, 420 150, 700 120 S 950 140, 1030 120" />
          <path d="M -20 260 C 240 240, 460 290, 720 260 S 960 280, 1030 260" />
          <path d="M -20 400 C 240 380, 470 430, 720 400 S 960 420, 1030 400" />
          <path d="M -20 520 C 260 500, 480 550, 730 520 S 960 540, 1030 520" />
          <path d="M 200 -20 C 220 150, 170 350, 210 620" />
          <path d="M 520 -20 C 540 150, 490 360, 530 620" />
          <path d="M 810 -20 C 830 160, 780 360, 820 620" />
        </g>
      </svg>

      <div class="relative grid w-full grid-cols-1 content-center gap-1.5 md:grid-cols-5 md:gap-2">
        <div v-for="c in cells" :key="c.id" class="min-w-0" :class="c.place">
          <KanvasPlot :title="c.title" :sub="c.sub" :icon="c.icon" :items="c.items" :hero="c.hero" />
        </div>
      </div>
    </div>
  </DeckShell>
</template>
