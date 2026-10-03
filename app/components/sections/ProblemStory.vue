<script setup lang="ts">
const pains = [
  { value: '29,34 jt', label: 'usaha tani berjalan dengan tebakan (BPS 2023)' },
  { value: '13,2%', label: 'memakai internet untuk bertani' },
  { value: 'Mahal', label: 'produk impor: tanpa servis, iklim tak cocok' },
]
</script>

<template>
  <DeckShell section="problem">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="w-full">
          <DeckAutoGrid :cols="2">
            <UiStatCard value="45:00" label="menit per hari, tiap hari" />
            <UiStatCard value="05:00" label="menit per hari, cukup cek aplikasi" tone="brand" />
          </DeckAutoGrid>
        </Reveal>
        <Reveal :delay="0.12" class="w-full">
          <DeckAutoGrid :cols="3" class="mt-3 md:mt-5">
            <UiStatCard v-for="p in pains" :key="p.label" :value="p.value" :label="p.label" tone="ink" />
          </DeckAutoGrid>
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.08" class="w-full">
          <UiPhotoFigure
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop"
            alt="Lahan saat senja"
          />
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
