<script setup lang="ts">
const pains = [
  { value: '29,34 jt', label: 'usaha tani berjalan dengan tebakan (BPS 2023)' },
  { value: '13,2%', label: 'memakai internet untuk bertani' },
  { value: 'Mahal', label: 'produk impor: tanpa servis, iklim tak cocok' },
]
</script>

<template>
  <div class="flex min-h-0 w-full min-w-0 flex-col gap-2 text-left">
    <Reveal class="w-full">
      <div class="flex w-full flex-wrap items-stretch gap-2">
        <div class="flex min-w-0 flex-1 items-center gap-2.5 rounded-2xl border-2 border-gm-line bg-white p-3 text-left">
          <Icon name="lucide:timer" class="size-6 shrink-0 text-gm-muted" />
          <span class="min-w-0">
            <span class="block font-headline text-xl font-extrabold tabular-nums text-gm-ink">45 menit</span>
            <span class="block text-base leading-snug text-gm-muted">per hari, tiap hari, rawat manual</span>
          </span>
        </div>
        <div class="flex min-w-0 flex-1 items-center gap-2.5 rounded-2xl border-2 border-gm-primary bg-gm-mist p-3 text-left">
          <Icon name="lucide:smartphone" class="size-6 shrink-0 text-gm-primary" />
          <span class="min-w-0">
            <span class="block font-headline text-xl font-extrabold tabular-nums text-gm-primary">5 menit</span>
            <span class="block text-base leading-snug text-gm-muted">per hari, cukup cek aplikasi</span>
          </span>
        </div>
        <UiPhotoFigure
          src="/images/field/lahan-sawah.webp"
          alt="Petak sawah lokasi uji lapangan"
          ratio="16 / 10"
          class="min-w-0 flex-1"
        />
      </div>
    </Reveal>
    <Reveal :delay="0.12" class="w-full">
      <DeckAutoGrid :cols="3">
        <UiStatCard v-for="p in pains" :key="p.label" :value="p.value" :label="p.label" tone="ink" />
      </DeckAutoGrid>
    </Reveal>
  </div>
</template>
