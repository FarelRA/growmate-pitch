<script setup lang="ts">
import DokPost from '~/components/DokPost.vue'
import DokRoute from '~/components/DokRoute.vue'

interface Stop { src: string; alt: string; label: string; ratio: string }

const tabs: Array<{ name: string; stops: Stop[] }> = [
  {
    name: 'Pra-Produksi',
    stops: [
      { src: '/images/process/pra-brain.webp', alt: 'Tim berdiskusi tentang gagasan awal produk GrowMate', label: 'Diskusi awal gagasan produk', ratio: '4 / 3' },
      { src: '/images/process/pra-wawancara.webp', alt: 'Wawancara untuk menggali masalah calon pengguna', label: 'Wawancara untuk menggali masalah pengguna', ratio: '4 / 3' },
      { src: '/images/process/pra-coding.webp', alt: 'Penulisan firmware di VS Code', label: 'Penulisan firmware di VS Code', ratio: '4 / 3' },
      { src: '/images/process/pra-blender.webp', alt: 'Desain bodi Pods di Blender', label: 'Desain bodi Pods di Blender', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Produksi',
    stops: [
      { src: '/images/process/prod-solder.webp', alt: 'Founder menolder dan merakit unit GrowMate', label: 'Perakitan dan penyolderan unit', ratio: '4 / 3' },
      { src: '/images/process/dok-printer.webp', alt: 'Printer 3D mencetak bodi putih GrowMate', label: 'Cetak bodi dengan printer 3D', ratio: '4 / 3' },
      { src: '/images/process/prod-rakit.webp', alt: 'Perakitan fisik unit di meja produksi', label: 'Perakitan fisik unit', ratio: '4 / 3' },
      { src: '/images/packaging/prod-kemas.webp', alt: 'Pengemasan unit sebelum dikirim', label: 'Pengemasan unit sebelum dikirim', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Acara',
    stops: [
      { src: '/images/events/gt-expo.webp', alt: 'Founder melayani pengunjung di stan bazar GrowMate', label: 'Penjelasan produk untuk pengunjung di stan bazar', ratio: '4 / 3' },
      { src: '/images/events/acara-bazar.webp', alt: 'Demo unit di stan bazar sekolah Bantul', label: 'Demo unit di stan bazar sekolah', ratio: '4 / 3' },
      { src: '/images/events/acara-jelas.webp', alt: 'Penjelasan produk ke pengunjung luar ruang', label: 'Penjelasan produk kepada pengunjung di luar ruang', ratio: '4 / 3' },
      { src: '/images/events/acara-serah.webp', alt: 'Penyerahan unit dan brosur ke pengguna baru', label: 'Penyerahan unit ke pengguna', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Kemitraan',
    stops: [
      { src: '/images/events/gt-mulyo.webp', alt: 'Penandatanganan dokumen konsinyasi dengan Mulyo Tani', label: 'Penandatanganan konsinyasi dengan Mulyo Tani', ratio: '4 / 3' },
      { src: '/images/events/mitra-matra.webp', alt: 'Penandatanganan kemitraan produksi dengan Matra', label: 'Kemitraan produksi dengan Matra 3D', ratio: '4 / 3' },
      { src: '/images/events/mitra-toolsku.webp', alt: 'Penandatanganan kemitraan fabrikasi dengan Toolsku', label: 'Kemitraan fabrikasi dengan Toolsku', ratio: '4 / 3' },
      { src: '/images/events/mitra-qinjeng.webp', alt: 'Serah dokumen kemitraan kardus dengan Qinjeng', label: 'Kemitraan kardus dengan Qinjeng', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Uji dan Serah',
    stops: [
      { src: '/images/events/uji-presentasi.webp', alt: 'Presentasi produk ke penilai dinas', label: 'Presentasi produk ke penilai', ratio: '4 / 3' },
      { src: '/images/events/uji-sistem.webp', alt: 'Uji fungsi unit bersama pejabat DKPP Bantul', label: 'Uji fungsi unit di DKPP', ratio: '4 / 3' },
      { src: '/images/events/uji-komposit.webp', alt: 'Rekap foto uji kelayakan sistem GrowMate', label: 'Rekap foto uji kelayakan', ratio: '4 / 3' },
      { src: '/images/events/uji-serah.webp', alt: 'Serah terima unit di DKPP Kabupaten Bantul', label: 'Serah terima unit di DKPP', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Uji Lapangan',
    stops: [
      { src: '/images/field/lahan-pasang.webp', alt: 'Tim memasang unit GrowMate di tepi lahan', label: 'Pemasangan unit di tepi lahan', ratio: '4 / 3' },
      { src: '/images/field/lahan-unit.webp', alt: 'Unit GrowMate berdiri di pematang sawah', label: 'Unit terpasang di pematang', ratio: '4 / 3' },
      { src: '/images/field/lahan-probe.webp', alt: 'Sensor kelembapan tanah dicolokkan ke media tanam', label: 'Pemasangan sensor kelembapan', ratio: '4 / 3' },
      { src: '/images/field/lahan-ukur.webp', alt: 'Pembacaan kondisi unit saat pengecekan lapangan', label: 'Pengecekan unit di lapangan', ratio: '4 / 3' },
    ],
  },
  {
    name: 'Legalitas & Kontrak',
    stops: [
      { src: '/images/events/mitra-honeycomb.webp', alt: 'Penandatanganan nota kesepahaman dengan Honeycomb', label: 'Nota kesepahaman dengan Honeycomb', ratio: '4 / 3' },
      { src: '/images/bukti/nib-surat.webp', alt: 'Surat keterangan pernyataan NIB GrowMate', label: 'Surat keterangan NIB', ratio: '4 / 3' },
      { src: '/images/bukti/kti-artikel.webp', alt: 'Halaman awal publikasi karya ilmiah GrowMate', label: 'Publikasi karya ilmiah', ratio: '4 / 3' },
      { src: '/images/bukti/desain-pods.webp', alt: 'Berkas draf pendaftaran desain industri GrowMate Pods', label: 'Pendaftaran desain industri', ratio: '4 / 3' },
    ],
  },
]

const tilts = [-1.2, 0.8, -0.6, 1]

const total = computed(() => tabs.reduce((n, t) => n + t.stops.length, 0))

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
      <div class="absolute right-3 top-3 z-10 grid size-11 place-items-center rounded-full border border-gm-line bg-white/90 shadow-sm lg:size-12" role="img" aria-label="Peta dokumentasi">
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
        <span class="ml-1 text-left font-mono text-base font-bold text-gm-muted">{{ tab * 4 + 1 }} sampai {{ tab * 4 + 4 }} dari {{ total }}</span>
      </div>
      <div class="relative z-[1] grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-4">
        <Reveal v-for="(s, i) in tabs[tab]!.stops" :key="s.label" :delay="0.1 + i * 0.08" :y="24" class="h-full w-full">
          <DokPost
            :src="s.src"
            :alt="s.alt"
            :no="tab * 4 + i + 1"
            :pos="i"
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
