<script setup lang="ts">
import { useTransition } from '@vueuse/core'
import KembangRiver from '~/components/KembangRiver.vue'

// Angka metrik sensor menghitung naik setelah sungai selesai digambar.
// Tahap tiga memakai label teks karena metriknya berupa status kesiapan.
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
const aimOne = ref(0)
const aimSix = ref(0)
const numOne = useTransition(aimOne, { duration: 900, easing: easeOut })
const numSix = useTransition(aimSix, { duration: 900, easing: easeOut })

onMounted(() => {
  window.setTimeout(() => { aimOne.value = 1 }, 450)
  window.setTimeout(() => { aimSix.value = 6 }, 570)
})

const stages = [
  {
    src: '/photos/kembang-proto-1.webp',
    alt: 'Prototipe 1 Arduino dan breadboard GrowMate',
    badge: 'Tahap 1',
    title: 'Validasi Konsep',
    desc: 'Rangkaian terbuka pada breadboard. Satu sensor statis dan kendali relai manual.',
    icon: 'lucide:flask-conical',
  },
  {
    src: '/photos/kembang-proto-2.webp',
    alt: 'Prototipe 2 smart pot dengan sensor tanah',
    badge: 'Tahap 2',
    title: 'Integrasi Modular',
    desc: 'Papan PCB permanen dalam rumah awal. Jaringan baca meluas hingga 6 titik sensor.',
    icon: 'lucide:cpu',
  },
  {
    src: '/photos/kembang-addon.webp',
    alt: 'Tech Add-on mandiri surya GrowMate',
    badge: 'Tahap 3',
    title: 'Tech Add-on',
    desc: 'Boks kayu mandiri surya dan LTE. Mode luring cadangan dan Floral Assistant terpadu.',
    icon: 'lucide:rocket',
  },
]
</script>

<template>
  <DeckShell section="kembang">
    <div class="flex w-full flex-col gap-2.5 md:gap-3">
      <Reveal :x="-32" :y="0" :delay="0.05" class="w-full">
        <KembangRiver :active="2" />
      </Reveal>
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(s, i) in stages" :key="s.title" :delay="0.15 + i * 0.12" class="h-full">
          <article class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-2.5 text-left md:p-3">
            <UiPhotoFigure :src="s.src" :alt="s.alt" ratio="16 / 10" />
            <div class="mt-2 flex items-center justify-start gap-2 md:mt-2.5">
              <span
                class="shrink-0 rounded-full px-2.5 py-1 font-headline text-[11px] font-extrabold uppercase tracking-wide text-white md:text-xs"
                :class="i === 2 ? 'bg-gm-primary' : 'bg-gm-ink'"
              >{{ s.badge }}</span>
              <h3 class="font-headline text-base font-extrabold leading-tight text-gm-ink md:text-lg">{{ s.title }}</h3>
            </div>
            <p class="mt-1 text-left text-[13px] leading-snug text-gm-muted md:text-sm">{{ s.desc }}</p>
            <div class="mt-2 flex items-center justify-start gap-2 rounded-xl bg-gm-mist px-2.5 py-1.5 text-left text-[13px] font-bold text-gm-deep md:mt-2.5 md:text-sm">
              <Icon :name="s.icon" class="size-4 shrink-0 md:size-5" />
              <span v-if="i === 0">{{ Math.round(numOne) }} titik baca</span>
              <span v-else-if="i === 1">{{ Math.round(numSix) }} titik baca</span>
              <span v-else>Siap massal plus AI</span>
            </div>
          </article>
        </Reveal>
      </DeckAutoGrid>
    </div>
  </DeckShell>
</template>
