<script setup lang="ts">
import useEmblaCarousel from 'embla-carousel-vue'

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
const idx = ref(0)

function onSelect() {
  idx.value = emblaApi.value?.selectedScrollSnap() ?? 0
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
</script>

<template>
  <ClientOnly>
    <div class="flex h-full flex-col rounded-2xl border-2 border-gm-line bg-gm-panel p-4 md:rounded-[20px] md:p-5">
      <div ref="emblaRef" class="embla flex-1">
        <div class="embla__container h-full">
          <div v-for="v in voices" :key="v.name" class="embla__slide h-full">
            <div class="flex h-full flex-col justify-center rounded-2xl bg-white p-4 text-left md:p-5">
              <div class="flex items-center justify-start gap-3">
                <img :src="v.photo" :alt="v.name" class="size-14 shrink-0 rounded-2xl border-2 border-gm-line object-cover md:size-16" loading="lazy" decoding="async" draggable="false" />
                <div>
                  <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">{{ v.name }}</div>
                  <div class="text-xs font-bold uppercase tracking-wide text-gm-primary md:text-sm">{{ v.role }}</div>
                </div>
              </div>
              <p class="mt-2.5 text-sm leading-snug text-gm-ink md:mt-3 md:text-base">“{{ v.quote }}”</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-between">
        <div class="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-headline text-xs font-bold text-gm-primary shadow-sm">
          Suara {{ idx + 1 }} / {{ voices.length }}
        </div>
        <div class="flex gap-1.5 md:gap-2">
          <button aria-label="Suara sebelumnya" class="grid h-11 w-11 place-items-center rounded-full bg-white shadow transition hover:bg-gm-primary hover:text-white" @click="emblaApi?.scrollPrev()">
            <Icon name="lucide:chevron-left" class="h-5 w-5" />
          </button>
          <button aria-label="Suara berikut" class="grid h-11 w-11 place-items-center rounded-full bg-white shadow transition hover:bg-gm-primary hover:text-white" @click="emblaApi?.scrollNext()">
            <Icon name="lucide:chevron-right" class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    <template #fallback>
      <div class="grid h-full place-items-center rounded-2xl border-2 border-gm-line bg-gm-panel p-4 text-sm text-gm-muted">Memuat suara…</div>
    </template>
  </ClientOnly>
</template>
