<script setup lang="ts">
const pains = [
  { value: '29,34 jt', label: 'usaha tani berjalan pakai tebakan (BPS 2023)' },
  { value: '13,2%', label: 'petani memakai internet untuk bertani' },
  { value: '45 mnt', label: 'waktu rawat manual tiap hari' },
]
const answers = [
  { icon: 'lucide:sprout', title: 'Pods indoor', desc: 'Pot 20x10x30 cm, 6 sensor, grow light otomatis.' },
  { icon: 'lucide:tractor', title: 'Tech lapangan', desc: 'Irigasi, nutrisi, dan hama ditakar data. Opsi surya + LTE.' },
  { icon: 'lucide:sparkles', title: 'Floral Assistant', desc: 'AI + Pranata Mangsa memutuskan kapan menyiram.' },
]
</script>

<template>
  <DeckShell section="latar">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="w-full">
          <UiPhotoFigure
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
            alt="Lahan pertanian tropis saat senja"
            ratio="16 / 9"
          />
        </Reveal>
        <Reveal :delay="0.12" class="w-full">
          <DeckAutoGrid :cols="3" class="mt-2.5 md:mt-3">
            <UiStatCard v-for="p in pains" :key="p.value" :value="p.value" :label="p.label" tone="brand" />
          </DeckAutoGrid>
        </Reveal>
      </template>
      <template #secondary>
        <div class="flex w-full flex-col justify-center gap-2.5">
          <Reveal v-for="(a, i) in answers" :key="a.title" :delay="i * 0.07" class="w-full">
            <div class="flex w-full items-center justify-start gap-3 rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
              <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-gm-mist md:size-12">
                <Icon :name="a.icon" class="size-6 text-gm-primary md:size-7" />
              </span>
              <div>
                <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">{{ a.title }}</div>
                <div class="text-sm text-gm-muted">{{ a.desc }}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
