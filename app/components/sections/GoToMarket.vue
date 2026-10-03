<script setup lang="ts">
const groups = [
  {
    icon: 'lucide:globe',
    title: 'Kanal digital',
    items: ['Instagram @grow.mateai', 'WhatsApp +62 877-8445-4555', 'TikTok @growmate.41', 'Shopee grow_mate', 'Situs growmate.bond'],
  },
  {
    icon: 'lucide:store',
    title: 'Konsinyasi ritel',
    items: ['Mulyo Tani, alat dan sarana tani', 'Utama Elektronik, komponen dan rakit'],
  },
  {
    icon: 'lucide:tent',
    title: 'Agenda lapangan',
    items: ['Sosialisasi Taman Pasty', 'Pameran Bantul Creative Expo'],
  },
]
</script>

<template>
  <DeckShell section="jangkau">
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col justify-center gap-2.5">
          <Reveal v-for="(g, i) in groups" :key="g.title" :delay="i * 0.07" class="w-full">
            <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
              <div class="flex items-center justify-start gap-2 font-headline text-base font-extrabold text-gm-ink md:text-lg">
                <Icon :name="g.icon" class="size-6 text-gm-primary" /> {{ g.title }}
              </div>
              <ul class="mt-1.5 space-y-1">
                <li v-for="it in g.items" :key="it" class="flex items-center justify-start gap-2 text-sm text-gm-ink md:text-base">
                  <Icon name="lucide:check" class="size-4 shrink-0 text-gm-primary" /> {{ it }}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <div class="grid w-full grid-cols-2 gap-2.5">
            <UiPhotoFigure src="/photos/gt-mulyo.webp" alt="Penandatanganan konsinyasi Mulyo Tani" ratio="4 / 3" />
            <UiPhotoFigure src="/photos/gt-expo.webp" alt="Stan GrowMate di Bantul Creative Expo" ratio="4 / 3" />
          </div>
        </Reveal>
        <Reveal :delay="0.14" class="w-full">
          <UiCalloutBanner icon="lucide:qr-code" tone="brand" class="mt-2.5 md:mt-3">
            Katalog dan demo live selalu terbuka di growmate.bond.
          </UiCalloutBanner>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
