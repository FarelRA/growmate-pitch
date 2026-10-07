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
    desc: 'Rangkaian breadboard terbuka. Satu sensor statis dan relai manual.',
    icon: 'lucide:flask-conical',
  },
  {
    src: '/photos/kembang-proto-2.webp',
    alt: 'Prototipe 2 smart pot dengan sensor tanah',
    badge: 'Tahap 2',
    title: 'Integrasi Modular',
    desc: 'PCB permanen berumah awal. Jaringan meluas hingga 6 titik.',
    icon: 'lucide:cpu',
  },
  {
    src: '/photos/kembang-addon.webp',
    alt: 'Tech Add-on mandiri surya GrowMate',
    badge: 'Tahap 3',
    title: 'Tech Add-on',
    desc: 'Boks kayu surya dan LTE. Siap massal dengan Floral Assistant.',
    icon: 'lucide:rocket',
  },
]
</script>

<template>
  <DeckShell section="kembang">
    <div class="flex w-full min-w-0 flex-col gap-2 overflow-x-clip md:gap-2.5 2xl:gap-4">
      <Reveal :x="-32" :y="0" :delay="0.05" class="w-full min-w-0">
        <KembangRiver :active="2" class="river-compact" />
      </Reveal>
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(s, i) in stages" :key="s.title" :delay="0.15 + i * 0.12" class="h-full min-w-0">
          <article class="flex h-full min-w-0 flex-col justify-between gap-2 rounded-2xl border-2 border-gm-line bg-white p-4 text-left">
            <UiPhotoFigure :src="s.src" :alt="s.alt" ratio="16 / 10" />
            <div class="flex items-center justify-start gap-2.5">
              <span
                class="shrink-0 rounded-full px-3 py-1.5 font-headline text-base font-extrabold uppercase tracking-wide text-white"
                :class="i === 2 ? 'bg-gm-primary' : 'bg-gm-ink'"
              >{{ s.badge }}</span>
              <h3 class="font-headline text-base font-extrabold leading-tight text-gm-ink md:text-lg">{{ s.title }}</h3>
            </div>
            <p class="text-left text-base leading-snug text-gm-muted">{{ s.desc }}</p>
            <div class="flex items-center justify-start gap-2.5 rounded-xl bg-gm-mist px-3 py-2 text-left text-base font-bold text-gm-deep">
              <Icon :name="s.icon" class="size-6 shrink-0" />
              <span v-if="i === 0">{{ Math.round(numOne) }} titik baca</span>
              <span v-else-if="i === 1">{{ Math.round(numSix) }} titik baca</span>
              <span v-else>Siap massal dan AI</span>
            </div>
          </article>
        </Reveal>
      </DeckAutoGrid>
    </div>
  </DeckShell>
</template>

<style scoped>
:deep(.river-compact) {
  border-radius: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
}
:deep(.river-compact svg text) {
  font-size: 16px;
}
</style>
