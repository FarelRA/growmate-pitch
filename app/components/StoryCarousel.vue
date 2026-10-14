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

// Auto-advance so the stories rotate without any clicks.
const { pause, resume } = useIntervalFn(() => {
  const api = emblaApi.value
  if (!api) return
  if (api.selectedScrollSnap() >= cards.length - 1) api.scrollTo(0)
  else api.scrollNext()
}, 4500)
onMounted(resume)
onUnmounted(pause)

// Seluruh angka terverifikasi: uji DKPP, ledger 9 bulan, dan konversi AI.
const cards = [
  { tag: 'DKPP Bantul • validasi resmi', title: 'Fisik 60 • Sistem 43', desc: 'Perangkat keras Sangat Baik, sistem Sangat Layak, setelah satu putaran perbaikan.', icon: 'lucide:badge-check' },
  { tag: 'Penjualan 9 bulan • terverifikasi', title: '36 unit • Rp59,07 jt', desc: 'Januari sampai September 2026. Kas Rp25,03 jt tanpa liabilitas.', icon: 'lucide:trending-up' },
  { tag: 'Langganan AI • Advance', title: '22 dari 36 pembeli • 61,1%', desc: 'Floral Assistant Advance Rp9.000 per bulan dengan laba Rp6.000.', icon: 'lucide:sparkles' },
]
</script>

<template>
  <ClientOnly>
    <div class="flex h-full min-h-0 w-full min-w-0 flex-col rounded-3xl border-2 border-gm-line bg-gm-panel p-2.5 text-left">
      <div ref="emblaRef" class="embla min-h-0 flex-1">
        <div class="embla__container h-full items-stretch">
          <div v-for="c in cards" :key="c.tag" class="embla__slide">
            <div class="flex h-full flex-col justify-center rounded-2xl bg-white p-2.5 shadow-sm">
              <div class="flex items-center gap-2">
                <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-gm-mist">
                  <Icon :name="c.icon" class="size-5 text-gm-primary" />
                </span>
                <span class="font-headline text-base font-bold uppercase tracking-wide text-gm-primary">{{ c.tag }}</span>
              </div>
              <div class="mt-1 font-headline text-lg font-extrabold leading-tight text-gm-ink">{{ c.title }}</div>
              <p class="mt-0.5 text-base leading-snug text-gm-muted">{{ c.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-1.5 flex shrink-0 items-center justify-between">
        <div class="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-headline text-base font-bold tabular-nums text-gm-primary shadow-sm">
          Cerita {{ idx + 1 }} / {{ cards.length }}
        </div>
        <div class="flex gap-1.5">
          <button aria-label="Cerita sebelumnya" class="grid size-9 place-items-center rounded-full bg-white shadow transition hover:bg-gm-primary hover:text-white" @click="emblaApi?.scrollPrev()">
            <Icon name="lucide:chevron-left" class="size-5" />
          </button>
          <button aria-label="Cerita berikut" class="grid size-9 place-items-center rounded-full bg-white shadow transition hover:bg-gm-primary hover:text-white" @click="emblaApi?.scrollNext()">
            <Icon name="lucide:chevron-right" class="size-5" />
          </button>
        </div>
      </div>
    </div>
    <template #fallback>
      <div class="grid h-full min-h-[140px] place-items-center rounded-3xl border-2 border-gm-line bg-gm-panel text-base text-gm-muted">Memuat cerita…</div>
    </template>
  </ClientOnly>
</template>
