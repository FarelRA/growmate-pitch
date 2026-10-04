<script setup lang="ts">
import { useTransition } from '@vueuse/core'

const activeVoice = ref(0)

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
const aimA = ref(0)
const aimB = ref(0)
const aimC = ref(0)
const nA = useTransition(aimA, { duration: 1100, easing: easeOut })
const nB = useTransition(aimB, { duration: 1100, easing: easeOut })
const nC = useTransition(aimC, { duration: 1100, easing: easeOut })
const vA = computed(() => String(Math.round(nA.value)))
const vB = computed(() => String(Math.round(nB.value)))
const vC = computed(() => String(Math.round(nC.value)))

onMounted(() => {
  window.setTimeout(() => {
    aimA.value = 8
    aimB.value = 4
    aimC.value = 2
  }, 250)
})
</script>

<template>
  <DeckShell section="testimoni">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="h-full w-full">
          <VoiceCarousel @select="activeVoice = $event" />
        </Reveal>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <SuaraTribune :active="activeVoice" />
        </Reveal>
        <Reveal :delay="0.1" class="w-full">
          <div class="mt-2 flex w-full flex-col justify-center gap-1 rounded-2xl bg-gm-ink p-3 text-left text-white md:mt-2.5 md:p-3.5">
            <span class="flex items-center gap-2 font-headline text-sm font-extrabold md:text-base">
              <Icon name="lucide:compass" class="size-5 text-emerald-300" /> Posisi kami di pasar
            </span>
            <p class="text-xs leading-snug text-white/80 md:text-sm">
              Pelopor smart farming IoT dan AI Agen lokal untuk tech farmer dan properti di DIY.
            </p>
            <p class="font-headline text-xs font-bold text-emerald-300 md:text-sm">Semangat: Petani Makmur, Tanpa Lumpur.</p>
          </div>
        </Reveal>
        <Reveal :delay="0.18" class="w-full">
          <div class="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-3 md:mt-2.5">
            <UiStatCard :value="vA" label="Testimoni terdokumentasi" tone="brand" />
            <UiStatCard :value="vB" label="Instansi resmi mendukung" tone="brand" />
            <UiStatCard :value="vC" label="Segmen pengguna aktif" tone="brand" />
          </div>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
