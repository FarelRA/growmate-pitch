<script setup lang="ts">
const props = defineProps<{ active?: number }>()

const emit = defineEmits<{ select: [index: number] }>()

const voices = [
  { photo: '/images/impact/testi-wabup.webp', name: 'Aris Suharyanto', role: 'Wakil Bupati Bantul', quote: 'Modernisasi pertanian bukan lagi impian. Pemerintah Kabupaten Bantul mendukung penuh adopsi inovasi ini di lapangan.' },
  { photo: '/images/impact/testi-dkpp.webp', name: 'Joko Waluyo', role: 'Kepala DKPP Bantul', quote: 'Satu solusi untuk dua ekosistem. Tech mengotomatiskan lahan luas, Pods mengurus tanaman indoor secara mandiri.' },
  { photo: '/images/impact/testi-dkumpp.webp', name: 'Praptanugraha', role: 'Kepala DKUMPP Bantul', quote: 'Tech berjalan tanpa listrik berkat surya. Pods mengurus air dan cahaya indoor. Semua terintegrasi Floral Assistant.' },
  { photo: '/images/impact/testi-bunda.webp', name: 'Emi Masruroh Halim', role: 'Bunda Literasi Bantul', quote: 'Langkah nyata memodernkan pertanian sekaligus menarik kembali minat bertani generasi muda.' },
  { photo: '/images/impact/testi-kemenperin.webp', name: 'Benedictus Hermasto', role: 'Kemenperin', quote: 'Solusi nyata efisiensi lahan luas dan modernisasi usaha indoor. Mendongkrak daya saing agroindustri lokal.' },
  { photo: '/images/impact/testi-dosen.webp', name: 'Rizki Octavianto', role: 'Dosen Ekonomi', quote: 'Memantau kondisi dan kesehatan tanaman, lalu mengatur cahaya dan airnya sendiri tepat saat dibutuhkan.' },
  { photo: '/images/impact/testi-kepsek.webp', name: 'Indrati Sayuto', role: 'Kepala SMPN 1 Galur', quote: 'Sangat efektif bagi penghobi tanam yang tidak punya banyak waktu untuk berkebun dan merawat tanaman.' },
  { photo: '/images/impact/testi-pegiat.webp', name: 'Rohmat Subekti', role: 'Pegiat Teknologi', quote: 'Enam sensor memberi tahu kebutuhan tanaman lewat aplikasi. Tanaman di rumah tetap subur.' },
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

/* Pilihan dari tribun luar. Hanya mengikuti nilai baru yang sah. Siklus lama tidak diubah. */
watch(() => props.active, (v) => {
  if (v === undefined) return
  const safe = Math.min(Math.max(v, 0), voices.length - 1)
  if (safe !== idx.value) idx.value = safe
})

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
  <div class="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gm-line bg-white text-center md:h-full">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(ellipse_at_top,rgba(183,121,31,0.14),transparent_70%)]" aria-hidden="true" />

    <p class="relative flex shrink-0 items-center gap-1.5 px-4 pt-3 font-headline text-lg font-extrabold uppercase tracking-[0.12em] text-gm-muted md:px-5">
      <span class="anim-pulse-dot size-2 rounded-full bg-gm-amber" aria-hidden="true" />
      <Icon name="lucide:mic" class="size-4 text-gm-amber" /> Kursi sorotan
    </p>

    <div class="relative min-h-0 flex-1 px-4 pb-3 pt-2 md:px-5">
      <Transition name="voice-spot" mode="out-in">
        <div :key="voices[idx]!.name" class="flex h-full flex-col items-center justify-center gap-2 text-center md:gap-3">
          <div class="mx-auto flex h-[240px] w-full shrink-0 items-center justify-center md:h-[240px] xl:h-[266px] 2xl:h-[340px]">
            <img :src="voices[idx]!.photo" :alt="voices[idx]!.name" class="h-full w-auto max-w-full rounded-3xl border-2 border-gm-line object-contain" loading="lazy" decoding="async" draggable="false" />
          </div>
          <div class="flex min-w-0 flex-col items-center justify-center text-center">
            <p class="font-headline text-xl font-extrabold leading-tight text-gm-ink md:text-2xl">{{ voices[idx]!.name }}</p>
            <span class="mt-1.5 inline-flex w-fit rounded-full px-3 py-1 text-base font-bold uppercase leading-snug tracking-wide" :class="badgeClass(voices[idx]!.role)">{{ voices[idx]!.role }}</span>
            <p class="mt-2 line-clamp-3 overflow-hidden font-headline text-lg font-bold leading-snug text-gm-ink md:text-xl">“{{ voices[idx]!.quote }}”</p>
            <div class="mt-2 flex shrink-0 items-center justify-center">
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
