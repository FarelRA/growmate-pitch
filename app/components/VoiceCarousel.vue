<script setup lang="ts">
import useEmblaCarousel from 'embla-carousel-vue'

const emit = defineEmits<{ select: [index: number] }>()

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
const idx = ref(0)

function onSelect() {
  idx.value = emblaApi.value?.selectedScrollSnap() ?? 0
  emit('select', idx.value)
}
onMounted(() => {
  emblaApi.value?.on('select', onSelect)
  onSelect()
})

// Auto-advance so the voices rotate without any clicks.
const { pause, resume } = useIntervalFn(() => {
  const api = emblaApi.value
  if (!api) return
  if (api.selectedScrollSnap() >= voices.length - 1) api.scrollTo(0)
  else api.scrollNext()
}, 5000)
onMounted(resume)
onUnmounted(pause)

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
</script>

<template>
  <ClientOnly>
    <div class="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gm-line bg-white">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(183,121,31,0.16),transparent_70%)]" aria-hidden="true" />
      <svg class="pointer-events-none absolute -right-8 -top-10 size-52 md:size-60" viewBox="0 0 200 170" fill="none" aria-hidden="true">
        <path d="M100 8 C118 40 152 66 160 112 C164 136 152 150 138 146 C130 158 114 162 100 162 C86 162 70 158 62 146 C48 150 36 136 40 112 C48 66 82 40 100 8 Z" fill="#e9f4ea" />
        <path d="M78 140 C74 110 80 80 100 52 M122 140 C126 110 120 80 100 52" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
        <text x="100" y="128" text-anchor="middle" font-size="92" font-family="Georgia, serif" font-weight="700" fill="#006e1c" opacity="0.1">“</text>
      </svg>

      <p class="relative flex items-center gap-1.5 px-4 pt-3 font-headline text-[11px] font-extrabold uppercase tracking-[0.12em] text-gm-muted md:px-5 md:text-xs">
        <span class="anim-pulse-dot size-2 rounded-full bg-gm-amber" aria-hidden="true" />
        <Icon name="lucide:mic" class="size-3.5 text-gm-amber" /> Kursi sorot
      </p>

      <div ref="emblaRef" class="embla relative flex-1">
        <div class="embla__container h-full">
          <div v-for="(v, i) in voices" :key="v.name" class="embla__slide h-full">
            <div
              class="flex h-full flex-col justify-center px-4 pb-1 pt-1.5 text-left transition-all duration-500 ease-out md:px-5"
              :class="i === idx ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
            >
              <div class="relative flex items-center justify-start gap-3">
                <img :src="v.photo" :alt="v.name" class="size-16 shrink-0 rounded-2xl border-2 border-gm-line object-cover" loading="lazy" decoding="async" draggable="false" />
                <div class="min-w-0">
                  <div class="font-headline text-base font-extrabold leading-tight text-gm-ink md:text-lg">{{ v.name }}</div>
                  <span class="mt-1 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide" :class="badgeClass(v.role)">{{ v.role }}</span>
                </div>
              </div>
              <p class="relative mt-2.5 font-headline text-base font-bold leading-snug text-gm-ink md:text-lg">“{{ v.quote }}”</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mt-1 flex items-center justify-between px-4 pb-2.5 md:px-5 md:pb-3">
        <div class="flex items-center gap-1.5 rounded-full bg-gm-panel px-3.5 py-1.5 font-headline text-xs font-bold text-gm-primary">
          Suara {{ idx + 1 }} / {{ voices.length }}
        </div>
        <div class="flex gap-1.5 md:gap-2">
          <button aria-label="Suara sebelumnya" class="grid h-10 w-10 place-items-center rounded-full bg-gm-panel transition hover:bg-gm-primary hover:text-white md:h-11 md:w-11" @click="emblaApi?.scrollPrev()">
            <Icon name="lucide:chevron-left" class="h-5 w-5" />
          </button>
          <button aria-label="Suara berikut" class="grid h-10 w-10 place-items-center rounded-full bg-gm-panel transition hover:bg-gm-primary hover:text-white md:h-11 md:w-11" @click="emblaApi?.scrollNext()">
            <Icon name="lucide:chevron-right" class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div class="relative h-1.5 bg-gradient-to-r from-gm-primary via-gm-amber to-gm-primary" aria-hidden="true" />
    </div>
    <template #fallback>
      <div class="grid h-full place-items-center rounded-2xl border-2 border-gm-line bg-gm-panel p-4 text-sm text-gm-muted">Memuat suara…</div>
    </template>
  </ClientOnly>
</template>
