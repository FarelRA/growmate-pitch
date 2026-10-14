<script setup lang="ts">
// Angka diselaraskan dengan app/data/econ-unit.ts dan app/data/ai-econ.ts:
// ROI 373,3% / 138,3% / 319,7%; BCR 18,66 / 6,91 / 15,98;
// HPP Rp1,49 jt / Rp1,72 jt; harga Rp2,08 jt / Rp2,41 jt;
// token blended Rp4.321 per 1 juta.
const variants = [
  { name: 'Pods', price: 'Rp803 rb', vol: '84 unit/thn', hot: false, metrics: [
    { value: 'Rp573 rb', label: 'HPP / unit' }, { value: '40%', label: 'marjin' },
    { value: '21 unit', label: 'BEP' }, { value: '373,3%', label: 'ROI' },
    { value: '3,2 bulan', label: 'balik modal' }, { value: 'Rp74,9 jt', label: 'NPV 5 thn' },
    { value: '18,66', label: 'BCR' }, { value: 'Rp19,3 jt', label: 'laba / thn' },
  ] },
  { name: 'Tech', price: 'Rp2,08 jt', vol: '12 unit/thn', hot: true, metrics: [
    { value: 'Rp1,49 jt', label: 'HPP / unit' }, { value: '40%', label: 'marjin' },
    { value: '6 unit', label: 'BEP' }, { value: '138,3%', label: 'ROI' },
    { value: '8,7 bulan', label: 'balik modal' }, { value: 'Rp24,5 jt', label: 'NPV 5 thn' },
    { value: '6,91', label: 'BCR' }, { value: 'Rp7,1 jt', label: 'laba / thn' },
  ] },
  { name: 'Tech Add-on', price: 'Rp2,41 jt', vol: '24 unit/thn', hot: false, metrics: [
    { value: 'Rp1,72 jt', label: 'HPP / unit' }, { value: '40%', label: 'marjin' },
    { value: '7 unit', label: 'BEP' }, { value: '319,7%', label: 'ROI' },
    { value: '3,8 bulan', label: 'balik modal' }, { value: 'Rp63,4 jt', label: 'NPV 5 thn' },
    { value: '15,98', label: 'BCR' }, { value: 'Rp16,5 jt', label: 'laba / thn' },
  ] },
]
</script>

<template>
  <div class="flex min-h-0 w-full min-w-0 flex-col items-stretch gap-2 text-left">
    <DeckAutoGrid :cols="3">
      <Reveal v-for="(v, i) in variants" :key="v.name" :delay="i * 0.07" class="h-full">
        <div
          class="flex h-full flex-col rounded-3xl border-2 p-3 text-left"
          :class="v.hot ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white'"
        >
          <div class="flex flex-wrap items-baseline justify-start gap-2">
            <span class="font-headline text-xl font-extrabold">{{ v.name }}</span>
            <span class="font-headline text-xl font-extrabold tabular-nums" :class="v.hot ? 'text-white' : 'text-gm-primary'">{{ v.price }}</span>
          </div>
          <div class="mt-0.5 text-base" :class="v.hot ? 'text-white/75' : 'text-gm-muted'">{{ v.vol }}</div>
          <div class="mt-2 grid grid-cols-2 gap-1.5">
            <div v-for="m in v.metrics" :key="m.label" class="rounded-xl px-2 py-1.5 text-left" :class="v.hot ? 'bg-white/10' : 'bg-gm-panel'">
              <div class="font-headline text-base font-extrabold tabular-nums" :class="v.hot ? 'text-white' : 'text-gm-ink'">{{ m.value }}</div>
              <div class="text-base" :class="v.hot ? 'text-white/70' : 'text-gm-muted'">{{ m.label }}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </DeckAutoGrid>
    <Reveal :delay="0.2" class="w-full">
      <div class="flex w-full flex-col items-stretch justify-center gap-2 rounded-3xl bg-gm-ink p-3 text-left text-white">
        <span class="flex items-center gap-2 font-headline text-base font-extrabold">
          <Icon name="lucide:sparkles" class="size-5 shrink-0 text-emerald-300" /> Floral Assistant Advance
        </span>
        <div class="flex flex-wrap items-center justify-start gap-1.5">
          <span class="rounded-full bg-white/10 px-3 py-1 font-mono text-base font-bold">modal Rp3.000 / pengguna</span>
          <Icon name="lucide:arrow-right" class="size-4 shrink-0 text-white/50" />
          <span class="rounded-full bg-white/10 px-3 py-1 font-mono text-base font-bold">harga Rp9.000</span>
          <Icon name="lucide:arrow-right" class="size-4 shrink-0 text-white/50" />
          <span class="rounded-full bg-gm-soft/25 px-3 py-1 font-headline text-base font-bold text-emerald-300">laba Rp6.000 / pengguna • marjin 200%</span>
          <span class="rounded-full bg-white/10 px-3 py-1 text-base text-white/70">61,1% pengguna berlangganan</span>
        </div>
      </div>
    </Reveal>
    <Reveal :delay="0.26" class="w-full">
      <p class="text-left font-mono text-base leading-relaxed text-gm-muted">
        dasar: BI Rp15,5 jt untuk 3 lini • diskonto 10% • proyeksi 5 tahun • volume +5% per tahun • token blended Rp4.321 per 1 juta
      </p>
    </Reveal>
  </div>
</template>
