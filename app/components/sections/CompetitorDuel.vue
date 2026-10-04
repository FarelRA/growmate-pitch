<script setup lang="ts">
interface Row { label: string; foe: 'yes' | 'mid' | 'no' }
const rows: Row[] = [
  { label: 'Otomatisasi irigasi penuh', foe: 'mid' },
  { label: 'Kendali web dan aplikasi', foe: 'yes' },
  { label: 'Otak AI dari data nyata', foe: 'no' },
  { label: 'Dataset tanaman tropis', foe: 'no' },
  { label: 'Harga ramah konsumen', foe: 'no' },
  { label: 'Komunitas dan marketplace', foe: 'no' },
  { label: 'Servis dan garansi lokal', foe: 'no' },
]

function cell(v: 'yes' | 'mid' | 'no') {
  if (v === 'yes') return { icon: 'lucide:check-circle-2', cls: 'text-gm-amber' }
  if (v === 'mid') return { icon: 'lucide:minus-circle', cls: 'text-gm-amber' }
  return { icon: 'lucide:x-circle', cls: 'text-gm-line' }
}
</script>

<template>
  <DeckShell section="kompetitor">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="w-full">
          <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
            <div class="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 gap-y-2 md:gap-y-2.5">
              <div />
              <div class="text-center font-headline text-xs font-extrabold uppercase tracking-wide text-gm-muted md:text-sm">Impor<br />mis. Tuya</div>
              <div class="rounded-xl bg-gm-primary px-3 py-1 text-center font-headline text-xs font-extrabold uppercase tracking-wide text-white md:text-sm">GrowMate</div>
              <template v-for="r in rows" :key="r.label">
                <div class="text-sm font-medium text-gm-ink md:text-base">{{ r.label }}</div>
                <div class="flex justify-center"><Icon :name="cell(r.foe).icon" class="size-6" :class="cell(r.foe).cls" /></div>
                <div class="flex justify-center rounded-lg bg-gm-mist py-0.5"><Icon name="lucide:check-circle-2" class="size-6 text-gm-primary" /></div>
              </template>
            </div>
          </div>
        </Reveal>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <UiPhotoFigure src="/photos/tech-field.webp" alt="GrowMate Tech terpasang dan bekerja di sawah" ratio="16 / 10" />
        </Reveal>
        <Reveal :delay="0.14" class="w-full">
          <UiCalloutBanner icon="lucide:crown" tone="brand" class="mt-2.5 md:mt-3">
            AI Agen, komunitas, dan marketplace: hanya ada di GrowMate.
          </UiCalloutBanner>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
