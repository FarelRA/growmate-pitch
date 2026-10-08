<script setup lang="ts">
import DokPost from '~/components/DokPost.vue'
import DokRoute from '~/components/DokRoute.vue'

interface Stop { src: string; alt: string; label: string; ratio: string }

const tabs: Array<{ name: string; stops: Stop[] }> = [
  {
    name: 'Pra-Produksi',
    stops: [
      { src: '/photos/pra-brain.webp', alt: 'Tim diskusi awal gagasan produk GrowMate', label: 'Diskusi awal gagasan produk', ratio: '4 / 3' },
      { src: '/photos/pra-wawancara.webp', alt: 'Wawancara gali masalah ke calon pengguna', label: 'Wawancara gali masalah pengguna', ratio: '4 / 3' },
      { src: '/photos/pra-coding.webp', alt: 'Penulisan firmware di VS Code', label: 'Penulisan firmware di VS Code', ratio: '4 / 3' },
      { src: '/photos/pra-blender.webp', alt: 'Desain bodi Pods di Blender', label: 'Desain bodi Pods di Blender', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Produksi',
    stops: [
      { src: '/photos/prod-solder.webp', alt: 'Penyolderan dan perakitan unit GrowMate oleh founder', label: 'Perakitan dan penyolderan unit', ratio: '4 / 3' },
      { src: '/photos/dok-printer.webp', alt: 'Printer 3D mencetak bodi putih GrowMate', label: 'Cetak bodi dengan printer 3D', ratio: '4 / 3' },
      { src: '/photos/prod-rakit.webp', alt: 'Perakitan fisik unit di meja produksi', label: 'Perakitan fisik unit', ratio: '4 / 3' },
      { src: '/photos/prod-kemas.webp', alt: 'Pengemasan unit siap kirim', label: 'Pengemasan unit siap kirim', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Acara',
    stops: [
      { src: '/photos/gt-expo.webp', alt: 'Founder melayani pengunjung di stan bazar GrowMate', label: 'Edukasi pengunjung di stan bazar', ratio: '4 / 3' },
      { src: '/photos/acara-bazar.webp', alt: 'Demo unit di stan bazar sekolah Bantul', label: 'Demo unit di stan bazar sekolah', ratio: '4 / 3' },
      { src: '/photos/acara-jelas.webp', alt: 'Penjelasan produk ke pengunjung luar ruang', label: 'Penjelasan produk di luar ruang', ratio: '4 / 3' },
      { src: '/photos/acara-serah.webp', alt: 'Penyerahan unit dan brosur ke pengguna baru', label: 'Penyerahan unit ke pengguna', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Kemitraan',
    stops: [
      { src: '/photos/gt-mulyo.webp', alt: 'Penandatanganan dokumen konsinyasi bersama Mulyo Tani', label: 'Penandatanganan konsinyasi Mulyo Tani', ratio: '4 / 3' },
      { src: '/photos/mitra-matra.webp', alt: 'Penandatanganan kemitraan produksi bersama Matra', label: 'Kemitraan produksi Matra 3D', ratio: '4 / 3' },
      { src: '/photos/mitra-toolsku.webp', alt: 'Penandatanganan kemitraan fabrikasi bersama Toolsku', label: 'Kemitraan fabrikasi Toolsku', ratio: '4 / 3' },
      { src: '/photos/mitra-qinjeng.webp', alt: 'Serah dokumen kemitraan kardus bersama Qinjeng', label: 'Kemitraan kardus Qinjeng', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Uji dan Serah',
    stops: [
      { src: '/photos/uji-presentasi.webp', alt: 'Presentasi produk ke penilai dinas', label: 'Presentasi produk ke penilai', ratio: '4 / 3' },
      { src: '/photos/uji-sistem.webp', alt: 'Uji fungsi unit bersama pejabat DKPP Bantul', label: 'Uji fungsi unit di DKPP', ratio: '4 / 3' },
      { src: '/photos/uji-komposit.webp', alt: 'Rekap foto uji kelayakan sistem GrowMate', label: 'Rekap foto uji kelayakan', ratio: '4 / 3' },
      { src: '/photos/uji-serah.webp', alt: 'Serah terima unit di DKPP Kabupaten Bantul', label: 'Serah terima unit di DKPP', ratio: '4 / 3' },
    ],
  },
]

const tilts = [-1.2, 0.8, -0.6, 1]

const tab = ref(0)
const hot = ref(-1)
const { pause, resume } = useIntervalFn(() => {
  if (typeof document !== 'undefined' && document.hidden) return
  tab.value = (tab.value + 1) % tabs.length
}, 4000)
onMounted(resume)
onUnmounted(pause)

function selectTab(i: number) {
  tab.value = i
  pause()
  resume()
}
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
      <div class="relative z-[1] mb-2 flex w-full flex-wrap items-center justify-start gap-1.5" role="tablist" aria-label="Kategori dokumentasi">
        <button
          v-for="(t, i) in tabs"
          :key="t.name"
          role="tab"
          :aria-selected="tab === i"
          class="rounded-full border-2 px-3 py-1 text-left font-headline text-base font-extrabold transition-all"
          :class="tab === i ? 'border-gm-primary bg-gm-primary text-white shadow-md' : 'border-gm-line bg-white text-gm-muted hover:border-gm-primary/50'"
          @click="selectTab(i)"
        >
          {{ t.name }}
        </button>
        <span class="ml-1 text-left font-mono text-base font-bold text-gm-muted">{{ tab * 4 + 1 }} sampai {{ tab * 4 + 4 }} dari 20</span>
      </div>
      <div class="relative z-[1] grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-4">
        <Reveal v-for="(s, i) in tabs[tab]!.stops" :key="s.label" :delay="0.1 + i * 0.08" :y="24" class="h-full w-full">
          <DokPost
            :src="s.src"
            :alt="s.alt"
            :no="tab * 4 + i + 1"
            :label="s.label"
            slot-spec=""
            :tilt="tilts[i] ?? 0"
            :active="hot === i"
            :ratio="s.ratio"
          />
        </Reveal>
      </div>
    </div>
  </DeckShell>
</template>
