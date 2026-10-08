<script setup lang="ts">
import DokPost from '~/components/DokPost.vue'
import DokRoute from '~/components/DokRoute.vue'

const stops: Array<{ src: string; alt: string; label: string; spec?: string; ratio: string }> = [
  { src: '/photos/gt-expo.webp', alt: 'Founder menjelaskan produk GrowMate ke pengunjung stan', label: 'Edukasi pengunjung di stan pameran', ratio: '16 / 9' },
  { src: '/photos/gt-mulyo.webp', alt: 'Penandatanganan dokumen konsinyasi bersama Mulyo Tani', label: 'Penandatanganan konsinyasi Mulyo Tani', ratio: '4 / 3' },
  { src: '/photos/mitra-matra.webp', alt: 'Penandatanganan kemitraan produksi bersama Matra', label: 'Kemitraan produksi Matra 3D', ratio: '3 / 4' },
  { src: '/photos/mitra-toolsku.webp', alt: 'Penandatanganan kemitraan fabrikasi bersama Toolsku', label: 'Kemitraan fabrikasi Toolsku', ratio: '3 / 4' },
  { src: '/photos/prod-solder.webp', alt: 'Penyolderan dan perakitan unit GrowMate oleh founder', label: 'Perakitan dan penyolderan unit', ratio: '16 / 9' },
  { src: '/photos/dok-printer.webp', alt: 'Printer 3D mencetak bodi putih GrowMate', label: 'Cetak bodi dengan printer 3D', ratio: '16 / 10' },
  { src: '/photos/dok-pengguna.webp', alt: 'Pengguna memegang Pods dengan grow light', label: 'Pods di tangan pengguna', ratio: '16 / 10' },
  { src: '/photos/dok-demo.webp', alt: 'Demo unit GrowMate ke pengunjung', label: 'Demo unit ke pengunjung', ratio: '16 / 10' },
]

const tilts = [-1.2, 0.8, -0.6, 1, -0.9, 0.5, -0.7, 0.9]

const hot = ref(0)
const { pause, resume } = useIntervalFn(() => {
  hot.value = (hot.value + 1) % stops.length
}, 3000)
onMounted(resume)
onUnmounted(pause)
</script>

<template>
  <DeckShell section="dokumentasi">
    <div class="relative mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center overflow-x-clip rounded-3xl border border-gm-line bg-gm-amberbg/50 py-3 pl-11 pr-3 md:p-3 lg:p-3">
      <DokRoute />
      <div class="absolute right-3 top-3 z-10 grid size-11 place-items-center rounded-full border border-gm-line bg-white/90 shadow-sm lg:size-12" role="img" aria-label="Kompas peta ekspedisi">
        <svg viewBox="0 0 24 24" class="size-7" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#faf6ec" stroke="#b7791f" stroke-width="1.5" />
          <path d="M 12 5 L 14.5 12 L 12 19 L 9.5 12 Z" fill="#b7791f" />
          <circle cx="12" cy="12" r="1.8" fill="#ffffff" />
        </svg>
      </div>
      <div class="relative z-[1] grid grid-cols-1 gap-1.5 md:grid-cols-4">
        <Reveal v-for="(s, i) in stops" :key="s.label" :delay="0.1 + i * 0.08" :y="24" :class="(i === 2 || i === 3) ? 'mx-auto h-full w-full max-w-[190px]' : 'h-full w-full'">
          <DokPost
            :src="s.src"
            :alt="s.alt"
            :no="i + 1"
            :label="s.label"
            :slot-spec="s.spec ?? ''"
            :tilt="tilts[i] ?? 0"
            :active="hot === i"
            :ratio="s.ratio"
          />
        </Reveal>
      </div>
    </div>
  </DeckShell>
</template>
