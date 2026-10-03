<script setup lang="ts">
import { ORG, PEOPLE, personVcard, type CardPerson } from '~/data/card'
import { qrDataUrl, saveVcardFile } from '~/composables/useCardQr'

const personQr = ref<Record<string, string>>({})

onMounted(async () => {
  for (const p of PEOPLE)
    personQr.value[p.short] = await qrDataUrl(personVcard(p), 360)
})

function save(p: CardPerson) {
  saveVcardFile(`growmate-${p.short}.vcf`, personVcard(p))
}
</script>

<template>
  <section id="tim" class="relative mx-auto w-full max-w-5xl scroll-mt-6 px-4 pb-12 sm:px-6">
    <Reveal>
      <h2 class="text-center font-headline text-3xl font-extrabold text-white md:text-4xl">Tim Inti</h2>
    </Reveal>
    <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-7 md:gap-5">
      <Reveal v-for="(p, i) in PEOPLE" :key="p.short" :delay="i * 0.08" class="h-full">
        <div class="flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center md:p-7">
          <div class="flex items-center gap-3.5">
            <span class="grid size-14 shrink-0 place-items-center rounded-2xl bg-gm-primary font-headline text-xl font-extrabold text-white">{{ p.initials }}</span>
            <div class="text-left">
              <div class="font-headline text-xl font-extrabold leading-tight text-gm-ink">
                {{ p.name }}<sup class="ml-1 font-mono text-xs font-bold text-gm-primary">{{ p.marks }}</sup>
              </div>
              <div class="font-headline text-base font-bold text-gm-primary">{{ p.role }}</div>
            </div>
          </div>
          <div class="mt-4 grid size-28 place-items-center self-center overflow-hidden rounded-2xl bg-white p-2 ring-2 ring-gm-line">
            <img v-if="personQr[p.short]" :src="personQr[p.short]" alt="QR kontak vCard" class="size-full object-contain" draggable="false" />
            <Icon v-else name="lucide:qr-code" class="size-10 text-gm-line" />
          </div>
          <a :href="`mailto:${p.email}`" class="mt-3 truncate text-center font-mono text-sm font-bold text-gm-deep hover:underline">{{ p.email }}</a>
          <div class="mt-3 flex w-full gap-2">
            <button class="flex flex-1 items-center justify-center gap-2 rounded-full bg-gm-primary px-4 py-2.5 font-headline text-sm font-extrabold text-white transition hover:bg-gm-deep" @click="save(p)">
              <Icon name="lucide:download" class="size-4" /> Simpan
            </button>
            <a :href="`mailto:${p.email}`" aria-label="Kirim email" class="grid size-[42px] shrink-0 place-items-center rounded-full border-2 border-gm-line text-gm-ink transition hover:border-gm-soft">
              <Icon name="lucide:mail" class="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
    <Reveal :delay="0.1">
      <div class="mt-5 rounded-2xl bg-white/[0.07] p-4 text-center font-mono text-xs leading-relaxed text-white/65 md:mt-6 md:text-sm">
        <p><span class="font-bold text-emerald-300">a</span> {{ ORG.affiliation }}</p>
        <p class="mt-1"><span class="font-bold text-emerald-300">1</span> farel@farel.is-a.dev &nbsp; <span class="font-bold text-emerald-300">2</span> aprimastiti0903@gmail.com &nbsp; <span class="font-bold text-emerald-300">*</span> kontak korespondensi</p>
      </div>
    </Reveal>
    <div class="mt-4 flex flex-wrap items-center justify-center gap-4">
      <a href="/#/0" class="flex items-center gap-1.5 text-sm font-bold text-emerald-300 hover:underline">
        Lihat pitch deck <Icon name="lucide:arrow-right" class="size-4" />
      </a>
      <span class="text-sm text-white/40">GrowMate • Tumbuh Maksimal, Hasil Optimal</span>
    </div>
  </section>
</template>
