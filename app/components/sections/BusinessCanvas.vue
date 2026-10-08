<script setup lang="ts">
import gsap from 'gsap'

type Hue = 'sky' | 'amber' | 'brand' | 'deep'

type Cell = {
  id: string
  title: string
  sub: string
  icon: string
  items: string[]
  hero?: boolean
  hue: Hue
  place: string
  art?: 'none' | 'segments' | 'channels' | 'cost' | 'revenue' | 'partners' | 'activities' | 'resources' | 'relations' | 'value'
}

const topCells: Cell[] = [
  {
    id: 'kp',
    title: 'Mitra Kunci',
    sub: 'Key Partners',
    icon: 'lucide:truck',
    hue: 'sky',
    art: 'partners',
    items: [
      'Komponen IoT',
      'Kemasan hijau',
      'Cloud dan AI',
      'DKPP Bantul',
      'DKUMPP Bantul',
      'Tekkomdik DIY',
      'Petani teknologi',
      'Ritel distributor',
    ],
    place: 'md:col-start-1 md:row-start-1 md:row-span-2',
  },
  {
    id: 'ka',
    title: 'Aktivitas Kunci',
    sub: 'Key Activities',
    icon: 'lucide:factory',
    hue: 'amber',
    art: 'activities',
    items: ['Riset produk', 'Produksi', 'Edukasi pasar', 'Perawatan web'],
    place: 'md:col-start-2 md:row-start-1',
  },
  {
    id: 'kr',
    title: 'Sumber Daya Kunci',
    sub: 'Key Resources',
    icon: 'lucide:cpu',
    hue: 'deep',
    art: 'resources',
    items: ['Modal', 'Data tani', 'Tim ahli', 'Web GrowMate', 'Alat kerja'],
    place: 'md:col-start-2 md:row-start-2',
  },
  {
    id: 'vp',
    title: 'Proposisi Nilai',
    sub: 'Value Propositions',
    icon: 'lucide:sprout',
    hero: true,
    hue: 'brand',
    items: [
      'Agen AI',
      'Rawat otomatis',
      'Pantau cerdas',
      'Kustom fleksibel',
      'Komunitas aktif',
      'Harga hemat',
    ],
    place: 'md:col-start-3 md:row-start-1 md:row-span-2',
  },
  {
    id: 'cr',
    title: 'Hubungan Pelanggan',
    sub: 'Customer Relationships',
    icon: 'lucide:heart-handshake',
    hue: 'sky',
    art: 'relations',
    items: [
      'AI interaktif',
      'Komunitas GrowMate',
      'Garansi ganti baru',
      'Konsultasi daring',
      'Layan purnajual',
    ],
    place: 'md:col-start-4 md:row-start-1',
  },
  {
    id: 'ch',
    title: 'Kanal',
    sub: 'Channels',
    icon: 'lucide:store',
    hue: 'amber',
    items: ['Shopee dan web', 'Luring mitra usaha'],
    place: 'md:col-start-4 md:row-start-2',
    art: 'channels',
  },
  {
    id: 'cs',
    title: 'Segmen Pelanggan',
    sub: 'Customer Segments',
    icon: 'lucide:users',
    hue: 'deep',
    items: ['Petani teknologi', 'Properti kantor'],
    place: 'md:col-start-5 md:row-start-1 md:row-span-2',
    art: 'segments',
  },
]

const bottomCells: Cell[] = [
  {
    id: 'cost',
    title: 'Struktur Biaya',
    sub: 'Cost Structure',
    icon: 'lucide:coins',
    hue: 'deep',
    items: ['Riset AI IoT', 'Produksi', 'Server', 'Gaji'],
    place: '',
    art: 'cost',
  },
  {
    id: 'rev',
    title: 'Arus Pendapatan',
    sub: 'Revenue Streams',
    icon: 'lucide:banknote',
    hue: 'amber',
    items: ['Jual Pods', 'Jual Tech', 'Langganan AI'],
    place: '',
    art: 'revenue',
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
      { scale: 1, y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'power2.out' },
    )
    gsap.fromTo(
      '.plot-tile',
      { scale: 0, rotation: -12, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: 'back.out(2)', delay: 0.15 },
    )
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="bmc">
    <div ref="root" class="relative flex min-h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-gm-cream p-2 text-left md:p-2">
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

      <div class="relative grid w-full flex-1 grid-cols-1 content-stretch gap-1 md:grid-cols-5 md:gap-1">
        <div v-for="(c, i) in topCells" :key="c.id" class="min-w-0" :class="c.place">
          <KanvasPlot :title="c.title" :sub="c.sub" :icon="c.icon" :items="c.items" :hero="c.hero" :hue="c.hue" :index="i" :art="c.art ?? 'none'" />
        </div>
      </div>

      <div class="relative mt-1 grid w-full grid-cols-1 gap-1 md:mt-1 md:grid-cols-2 md:gap-1">
        <div v-for="(c, i) in bottomCells" :key="c.id" class="min-w-0">
          <KanvasPlot :title="c.title" :sub="c.sub" :icon="c.icon" :items="c.items" :hue="c.hue" :index="topCells.length + i" :art="c.art ?? 'none'" />
        </div>
      </div>
    </div>
  </DeckShell>
</template>
