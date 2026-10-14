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
          <VoiceCarousel :active="activeVoice" @select="activeVoice = $event" />
        </Reveal>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <SuaraTribune :active="activeVoice" @select="activeVoice = $event" />
        </Reveal>
        <Reveal :delay="0.1" class="w-full">
          <div class="mt-2 flex w-full flex-col justify-center gap-1 rounded-2xl bg-gm-ink p-3 text-left text-white md:p-4">
            <span class="flex items-center gap-2 font-headline text-lg font-extrabold">
              <Icon name="lucide:compass" class="size-6 text-emerald-300" /> Posisi di pasar
            </span>
            <p class="text-lg leading-snug text-white/80">
              Pelopor smart farming IoT dengan agen AI lokal untuk tech farmer dan properti di DIY.
            </p>
            <p class="font-headline text-lg font-bold text-emerald-300">Tagline pada kemasan: Petani Makmur, Tanpa Lumpur.</p>
          </div>
        </Reveal>
        <Reveal :delay="0.18" class="w-full">
          <div class="mt-2 grid grid-cols-3 gap-2">
            <UiStatCard class="[&>div:first-child]:text-3xl md:[&>div:first-child]:text-4xl" :value="vA" label="Testimoni terdokumentasi" tone="brand" />
            <UiStatCard class="[&>div:first-child]:text-3xl md:[&>div:first-child]:text-4xl" :value="vB" label="Instansi resmi yang mendukung" tone="brand" />
            <UiStatCard class="[&>div:first-child]:text-3xl md:[&>div:first-child]:text-4xl" :value="vC" label="Segmen pengguna aktif" tone="brand" />
          </div>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
