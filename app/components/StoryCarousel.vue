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

const cards = [
  { tag: 'Pengguna A • hias urban', title: 'Biaya Rp85 rb → Rp52 rb / bln', desc: 'Omzet Rp675 rb → Rp1,125 jt / bln. Tanaman tumbuh sehat, usaha sampingan mulai membayar.', icon: 'lucide:trending-up' },
  { tag: 'Pengguna B • cabai, 6 m²', title: 'Rawat 120 → 20 mnt / hari', desc: 'Panen 8 → 11,5 kg per siklus. Lahan sama, waktu seperenam, cabai +44%.', icon: 'lucide:flame' },
  { tag: 'DKPP Bantul • validasi resmi', title: 'Fisik 60 • Sistem 43', desc: 'Perangkat keras “Sangat Baik”, sistem “Sangat Layak”, setelah satu putaran perbaikan.', icon: 'lucide:badge-check' },
]
</script>

<template>
  <ClientOnly>
    <div class="h-full rounded-2xl border-2 border-gm-line bg-gm-panel p-4 md:rounded-[20px] md:p-[24px]">
      <div ref="emblaRef" class="embla">
        <div class="embla__container">
          <div v-for="c in cards" :key="c.tag" class="embla__slide">
            <div class="rounded-2xl bg-white p-5 shadow-sm md:p-[28px]">
              <div class="flex items-center gap-2.5">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gm-mist md:h-[54px] md:w-[54px] md:rounded-2xl">
                  <Icon :name="c.icon" class="h-6 w-6 text-gm-primary md:h-[28px] md:w-[28px]" />
                </span>
                <span class="font-headline text-[11px] font-bold uppercase tracking-wide text-gm-primary md:text-[15px]">{{ c.tag }}</span>
              </div>
              <div class="mt-2.5 font-headline text-[18px] font-extrabold leading-tight text-gm-ink md:mt-[12px] md:text-[27px]">{{ c.title }}</div>
              <p class="mt-1.5 text-[12px] leading-snug text-gm-muted md:mt-[8px] md:text-[17px]">{{ c.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3.5 flex items-center justify-between md:mt-[18px]">
        <div class="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 font-headline text-xs font-bold text-gm-primary shadow-sm">
          Cerita {{ idx + 1 }} / {{ cards.length }}
        </div>
        <div class="flex gap-1.5 md:gap-2">
          <button aria-label="Cerita sebelumnya" class="grid h-11 w-11 place-items-center rounded-full bg-white shadow transition hover:bg-gm-primary hover:text-white md:h-[48px] md:w-[48px]" @click="emblaApi?.scrollPrev()">
            <Icon name="lucide:chevron-left" class="h-5 w-5 md:h-[24px] md:w-[24px]" />
          </button>
          <button aria-label="Cerita berikut" class="grid h-11 w-11 place-items-center rounded-full bg-white shadow transition hover:bg-gm-primary hover:text-white md:h-[48px] md:w-[48px]" @click="emblaApi?.scrollNext()">
            <Icon name="lucide:chevron-right" class="h-5 w-5 md:h-[24px] md:w-[24px]" />
          </button>
        </div>
      </div>
    </div>
    <template #fallback>
      <div class="h-full rounded-2xl border-2 border-gm-line bg-gm-panel p-4 text-[12px] text-gm-muted md:p-[24px] md:text-[16px]">Memuat cerita…</div>
    </template>
  </ClientOnly>
</template>
