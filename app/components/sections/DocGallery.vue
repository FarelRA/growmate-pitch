<script setup lang="ts">
import DokPost from '~/components/DokPost.vue'
import DokRoute from '~/components/DokRoute.vue'

const stops = [
  { src: '/photos/gt-expo.webp', alt: 'Stan edukasi GrowMate di Bantul Creative Expo', label: 'Stan edukasi di Bantul Creative Expo' },
  { src: '/photos/gt-mulyo.webp', alt: 'Penandatanganan konsinyasi bersama Mulyo Tani', label: 'Penandatanganan konsinyasi Mulyo Tani' },
  { src: '/photos/mitra-matra.webp', alt: 'Kemitraan produksi bersama Matra 3D', label: 'Kemitraan produksi Matra 3D' },
  { src: '/photos/mitra-toolsku.webp', alt: 'Kemitraan fabrikasi bersama Toolsku', label: 'Kemitraan fabrikasi Toolsku' },
  { src: '/photos/prod-solder.webp', alt: 'Perakitan dan penyolderan unit GrowMate', label: 'Perakitan dan penyolderan unit' },
  { src: '/photos/prod-printer.webp', alt: 'Cetak bodi unit dengan printer 3D', label: 'Cetak bodi dengan printer 3D' },
]

const tilts = [-1.2, 0.8, -0.6, 1, -0.9, 0.5]

const hot = ref(0)
const { pause, resume } = useIntervalFn(() => {
  hot.value = (hot.value + 1) % stops.length
}, 4000)
onMounted(resume)
onUnmounted(pause)
</script>

<template>
  <DeckShell section="dokumentasi">
    <div class="relative mx-auto w-full max-w-4xl overflow-x-clip rounded-3xl border border-gm-line bg-gm-amberbg/50 py-2.5 pl-9 pr-2.5 md:p-3">
      <DokRoute />
      <div class="absolute right-2.5 top-2.5 z-10 grid size-9 place-items-center rounded-full border border-gm-line bg-white/90 shadow-sm md:size-10" role="img" aria-label="Kompas peta ekspedisi">
        <svg viewBox="0 0 24 24" class="size-5 md:size-6" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#faf6ec" stroke="#b7791f" stroke-width="1.5" />
          <path d="M 12 5 L 14.5 12 L 12 19 L 9.5 12 Z" fill="#b7791f" />
          <circle cx="12" cy="12" r="1.8" fill="#ffffff" />
        </svg>
      </div>
      <div class="relative z-[1] grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-3">
        <Reveal v-for="(s, i) in stops" :key="s.src" :delay="0.1 + i * 0.08" :y="24" class="h-full">
          <DokPost
            :src="s.src"
            :alt="s.alt"
            :no="i + 1"
            :label="s.label"
            :tilt="tilts[i] ?? 0"
            :active="hot === i"
          />
        </Reveal>
      </div>
    </div>
  </DeckShell>
</template>
