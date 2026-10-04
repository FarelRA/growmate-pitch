<script setup lang="ts">
import gsap from 'gsap'

type Plot = { title: string; icon: string; items: string[]; hero?: boolean; ribbon?: string }

const plots: Plot[] = [
  { title: 'Mitra Kunci', icon: 'lucide:truck', items: ['Komponen IoT', 'Kemasan hijau', 'Cloud dan AI', 'DKPP Bantul dan ritel tani'] },
  { title: 'Aktivitas Kunci', icon: 'lucide:factory', items: ['Riset', 'Produksi', 'Pemasaran', 'Platform web'] },
  { title: 'Hubungan Pelanggan', icon: 'lucide:heart-handshake', items: ['AI yang hidup', 'Komunitas', 'Garansi 3 bulan', 'Layanan purnajual'] },
  { title: 'Sumber Daya Utama', icon: 'lucide:cpu', items: ['Modal usaha', 'Dataset tani', 'Tenaga ahli', 'Web dan alat'] },
  { title: 'Proposisi Nilai', icon: 'lucide:sprout', hero: true, ribbon: 'Bintang utama', items: ['Floral Assistant', 'Rawat otomatis', 'Pantau cerdas', 'Komunitas dan harga terjangkau'] },
  { title: 'Segmen Pelanggan', icon: 'lucide:users', items: ['Tech farmer DIY', 'Properti', 'Kantor hijau'] },
  { title: 'Struktur Biaya', icon: 'lucide:coins', items: ['Riset AI', 'Produksi', 'Server', 'Gaji tim'] },
  { title: 'Kanal', icon: 'lucide:store', items: ['Shopee dan website', 'Ritel, kafe, kantor'] },
  { title: 'Arus Pendapatan', icon: 'lucide:banknote', items: ['Pods', 'Tech', 'Langganan AI'] },
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
    gsap.fromTo(
      '.kanvas-ribbon',
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 1.15, ease: 'back.out(2.2)' },
    )
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="bmc">
    <div ref="root" class="relative w-full overflow-hidden rounded-2xl bg-gm-cream p-2 sm:p-3 md:p-4">
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

      <svg aria-hidden="true" class="pointer-events-none absolute inset-0 hidden size-full sm:block" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <path
          d="M 150 105 H 470 V 295 H 840"
          fill="none"
          stroke="#4caf50"
          stroke-width="4"
          stroke-linecap="round"
          opacity="0.6"
          class="anim-flow"
        />
        <g fill="#4caf50" opacity="0.6">
          <circle cx="150" cy="105" r="7" />
          <circle cx="470" cy="105" r="7" />
          <circle cx="470" cy="295" r="7" />
          <circle cx="840" cy="295" r="7" />
        </g>
      </svg>

      <div aria-hidden="true" class="anim-float pointer-events-none absolute left-6 top-2 h-5 w-16 rounded-full bg-white/80 shadow-sm" />
      <div aria-hidden="true" class="anim-float pointer-events-none absolute right-8 top-5 h-4 w-12 rounded-full bg-white/70 shadow-sm" style="animation-delay: -2.5s" />

      <div class="relative grid w-full grid-cols-2 content-center gap-1.5 md:grid-cols-3 md:gap-2.5">
        <div
          v-for="p in plots"
          :key="p.title"
          class="kanvas-plot min-w-0"
          :class="p.hero ? 'order-first col-span-2 md:order-none md:col-span-1' : 'col-span-1'"
        >
          <KanvasPlot :title="p.title" :icon="p.icon" :items="p.items" :hero="p.hero" :ribbon="p.ribbon" />
        </div>
      </div>
    </div>
  </DeckShell>
</template>
