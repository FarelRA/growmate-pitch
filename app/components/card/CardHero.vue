<script setup lang="ts">
import { ORG, SOCIALS } from '~/data/card'
import { qrDataUrl, useShareCard } from '~/composables/useCardQr'

const emit = defineEmits<{ scroll: [id: string] }>()

const webQr = ref('')
const { shared, share } = useShareCard()

onMounted(async () => {
  webQr.value = await qrDataUrl(`https://${ORG.web}`, 560)
})
</script>

<template>
  <section class="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-4 py-10 text-center text-white sm:px-6">
    <img src="/photos/tech-field.webp" alt="" aria-hidden="true" class="absolute inset-0 size-full object-cover" draggable="false" />
    <div class="absolute inset-0 bg-gm-ink/80" />
    <div aria-hidden="true" class="pointer-events-none absolute -left-32 -top-32 size-[480px] rounded-full bg-gm-primary/40 blur-[140px]" />
    <div class="relative mx-auto w-full max-w-5xl">
      <Reveal>
        <img src="/logo.svg" alt="Logo GrowMate" class="mx-auto size-28 rounded-[28px] object-cover shadow-2xl ring-4 ring-white/20 md:size-36 md:rounded-[32px]" draggable="false" />
      </Reveal>
      <Reveal :delay="0.1">
        <h1 class="text-display mt-6 font-headline font-extrabold tracking-tight drop-shadow-lg md:mt-8">{{ ORG.name }}</h1>
      </Reveal>
      <Reveal :delay="0.18">
        <p class="mt-3 font-headline text-xl font-bold text-emerald-300 md:mt-4 md:text-3xl">{{ ORG.tagline }}</p>
      </Reveal>
      <Reveal :delay="0.26">
        <div class="mt-6 flex flex-wrap items-center justify-center gap-2.5 md:mt-8">
          <a :href="`mailto:${ORG.email}`" class="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 font-mono text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 md:px-7 md:py-3 md:text-lg">
            <Icon name="lucide:mail" class="size-5 text-emerald-300" /> {{ ORG.email }}
          </a>
          <a :href="`https://${ORG.web}`" target="_blank" rel="noopener" class="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 font-headline text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 md:px-7 md:py-3 md:text-lg">
            <Icon name="lucide:globe" class="size-5 text-emerald-300" /> {{ ORG.web }}
          </a>
          <button class="flex items-center gap-2 rounded-full border-2 border-white/25 px-5 py-2.5 font-headline text-sm font-extrabold text-white backdrop-blur transition hover:border-emerald-300 md:px-7 md:py-3 md:text-lg" @click="share(`Kartu Nama ${ORG.name}`, `${ORG.name} • ${ORG.tagline}`)">
            <Icon name="lucide:share-2" class="size-5" /> {{ shared ? 'Tautan disalin' : 'Bagikan' }}
          </button>
        </div>
      </Reveal>
      <Reveal :delay="0.34">
        <div class="mt-6 flex items-center justify-center gap-3 md:mt-8">
          <div class="grid size-32 place-items-center overflow-hidden rounded-3xl border-2 border-white/20 bg-white p-3 md:size-40">
            <img v-if="webQr" :src="webQr" alt="QR situs GrowMate" class="size-full object-contain" draggable="false" />
            <Icon v-else name="lucide:qr-code" class="size-12 text-gm-line" />
          </div>
          <div class="flex flex-col gap-2.5">
            <a v-for="s in SOCIALS" :key="s.label" :href="s.href" target="_blank" rel="noopener" :aria-label="s.label" class="grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-gm-primary md:size-12">
              <Icon :name="s.icon" class="size-5" />
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal :delay="0.42">
        <div class="mt-8 flex items-center justify-center gap-6 md:mt-10">
          <button v-for="t in [{ id: 'angka', label: 'Angka' }, { id: 'tim', label: 'Tim' }]" :key="t.id" class="flex flex-col items-center gap-1 text-white/50 transition hover:text-white" @click="emit('scroll', t.id)">
            <span class="font-headline text-sm font-bold uppercase tracking-widest">{{ t.label }}</span>
            <Icon name="lucide:chevron-down" class="size-6 animate-bounce" />
          </button>
        </div>
      </Reveal>
    </div>
  </section>
</template>
