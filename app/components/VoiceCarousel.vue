<script setup lang="ts">
const emit = defineEmits<{ select: [index: number] }>()

const voices = [
  { photo: '/photos/testi-wabup.webp', name: 'Aris Suharyanto', role: 'Wakil Bupati Bantul', quote: 'Modernisasi pertanian bukan lagi impian. Pemerintah Kabupaten Bantul mendukung penuh adopsi inovasi ini di lapangan.' },
  { photo: '/photos/testi-dkpp.webp', name: 'Joko Waluyo', role: 'Kepala DKPP Bantul', quote: 'Satu solusi untuk dua ekosistem. Tech mengotomatiskan lahan luas, Pods mengurus tanaman indoor secara mandiri.' },
  { photo: '/photos/testi-dkumpp.webp', name: 'Praptanugraha', role: 'Kepala DKUMPP Bantul', quote: 'Tech berjalan tanpa listrik PLN berkat surya. Pods mengurus air dan cahaya indoor. Semua terintegrasi Floral Assistant.' },
  { photo: '/photos/testi-bunda.webp', name: 'Emi Masruroh Halim', role: 'Bunda Literasi Bantul', quote: 'Langkah nyata memodernkan pertanian sekaligus menarik kembali minat bertani generasi muda.' },
  { photo: '/photos/testi-kemenperin.webp', name: 'Benedictus Hermasto', role: 'Kemenperin', quote: 'Solusi nyata efisiensi lahan luas dan modernisasi usaha indoor. Mendongkrak daya saing agroindustri lokal.' },
  { photo: '/photos/testi-dosen.webp', name: 'Rizki Octavianto', role: 'Dosen Ekonomi', quote: 'Memantau kondisi dan kesehatan tanaman, lalu mengatur cahaya dan airnya sendiri tepat saat dibutuhkan.' },
  { photo: '/photos/testi-kepsek.webp', name: 'Indrati Sayuto', role: 'Kepala SMPN 1 Galur', quote: 'Sangat efektif bagi penghobi tanam yang tidak punya banyak waktu untuk berkebun dan merawat tanaman.' },
  { photo: '/photos/testi-pegiat.webp', name: 'Rohmat Subekti', role: 'Pegiat Teknologi', quote: 'Enam sensor memberi tahu kebutuhan tanaman lewat aplikasi. Tanaman di rumah tetap subur.' },
]

const DINAS = new Set(['Wakil Bupati Bantul', 'Kepala DKPP Bantul', 'Kepala DKUMPP Bantul', 'Kemenperin'])
const DIDIK = new Set(['Bunda Literasi Bantul', 'Dosen Ekonomi', 'Kepala SMPN 1 Galur'])

function badgeClass(role: string) {
  if (DINAS.has(role)) return 'bg-gm-primary text-white'
  if (DIDIK.has(role)) return 'bg-gm-sky text-white'
  return 'bg-gm-amber text-white'
}

/* Satu sumber kebenaran untuk bingkai utama. Nilai idx yang sama diteruskan ke tribun. */
const idx = ref(0)

/* Siklus otomatis 0 sampai 7 tiap 3 detik. Dilewati saat tab tersembunyi. Berhenti saat lepas dan mulai lagi saat pasang. */
const { pause, resume } = useIntervalFn(() => {
  if (typeof document !== 'undefined' && document.hidden) return
  idx.value = (idx.value + 1) % voices.length
  emit('select', idx.value)
}, 3000)

onMounted(() => {
  emit('select', idx.value)
  resume()
})

onUnmounted(() => {
  pause()
})
</script>

<template>
  <div class="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gm-line bg-white text-left md:h-[340px] md:max-h-[340px] xl:h-[400px] xl:max-h-[400px]">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(ellipse_at_top,rgba(183,121,31,0.14),transparent_70%)]" aria-hidden="true" />

    <p class="relative flex shrink-0 items-center gap-1.5 px-4 pt-3 font-headline text-lg font-extrabold uppercase tracking-[0.12em] text-gm-muted md:px-5">
      <span class="anim-pulse-dot size-2 rounded-full bg-gm-amber" aria-hidden="true" />
      <Icon name="lucide:mic" class="size-4 text-gm-amber" /> Kursi sorot
    </p>

    <div class="relative min-h-0 flex-1 px-4 pb-3 pt-2 md:px-5">
      <Transition name="voice-spot" mode="out-in">
        <div :key="voices[idx]!.name" class="flex h-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <div class="w-full max-w-[280px] shrink-0 md:w-[46%] md:max-w-[260px] xl:max-w-[300px]">
            <UiPhotoFigure :src="voices[idx]!.photo" :alt="voices[idx]!.name" ratio="1 / 1" />
          </div>
          <div class="flex min-h-0 min-w-0 flex-1 flex-col justify-center text-left">
            <p class="font-headline text-2xl font-extrabold leading-tight text-gm-ink">{{ voices[idx]!.name }}</p>
            <span class="mt-1.5 inline-flex w-fit rounded-full px-3 py-1 text-base font-bold uppercase leading-snug tracking-wide" :class="badgeClass(voices[idx]!.role)">{{ voices[idx]!.role }}</span>
            <p class="mt-2 line-clamp-4 overflow-hidden font-headline text-xl font-bold leading-snug text-gm-ink">“{{ voices[idx]!.quote }}”</p>
            <div class="mt-2 flex shrink-0 items-center justify-start">
              <div class="rounded-full bg-gm-panel px-3 py-1 font-headline text-base font-bold tabular-nums text-gm-primary">
                Suara {{ idx + 1 }} / {{ voices.length }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div class="relative h-2 shrink-0 bg-gradient-to-r from-gm-primary via-gm-amber to-gm-primary" aria-hidden="true" />
  </div>
</template>

<style scoped>
.voice-spot-enter-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.voice-spot-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.voice-spot-enter-from {
  opacity: 0;
  transform: translateX(32px);
}
.voice-spot-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.voice-spot-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.voice-spot-leave-to {
  opacity: 0;
  transform: translateX(0);
}
@media (prefers-reduced-motion: reduce) {
  .voice-spot-enter-active,
  .voice-spot-leave-active {
    transition: none;
  }
  .voice-spot-enter-from,
  .voice-spot-leave-to {
    transform: none;
  }
}
</style>
