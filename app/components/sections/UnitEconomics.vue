<script setup lang="ts">
const variants = [
  { name: 'Pods', price: 'Rp803 rb', vol: '84 unit/thn', hot: false, metrics: [
    { value: 'Rp573 rb', label: 'HPP / unit' }, { value: '40%', label: 'marjin' },
    { value: '21 unit', label: 'BEP' }, { value: '373%', label: 'ROI' },
    { value: '3,2 bulan', label: 'balik modal' }, { value: 'Rp74,9 jt', label: 'NPV 5 thn' },
    { value: '18,7', label: 'BCR' }, { value: 'Rp19,3 jt', label: 'laba / thn' },
  ] },
  { name: 'Tech', price: 'Rp2.083 jt', vol: '12 unit/thn', hot: true, metrics: [
    { value: 'Rp1.487 jt', label: 'HPP / unit' }, { value: '40%', label: 'marjin' },
    { value: '6 unit', label: 'BEP' }, { value: '138%', label: 'ROI' },
    { value: '8,7 bulan', label: 'balik modal' }, { value: 'Rp24,5 jt', label: 'NPV 5 thn' },
    { value: '6,9', label: 'BCR' }, { value: 'Rp7,1 jt', label: 'laba / thn' },
  ] },
  { name: 'Tech Add-on', price: 'Rp2.409 jt', vol: '24 unit/thn', hot: false, metrics: [
    { value: 'Rp1.721 jt', label: 'HPP / unit' }, { value: '40%', label: 'marjin' },
    { value: '7 unit', label: 'BEP' }, { value: '320%', label: 'ROI' },
    { value: '3,8 bulan', label: 'balik modal' }, { value: 'Rp63,4 jt', label: 'NPV 5 thn' },
    { value: '16,0', label: 'BCR' }, { value: 'Rp16,5 jt', label: 'laba / thn' },
  ] },
]
</script>

<template>
  <DeckShell section="economics">
    <div class="flex w-full flex-col items-center gap-3 md:gap-5">
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(v, i) in variants" :key="v.name" :delay="i * 0.07" class="h-full">
          <div
            class="flex h-full flex-col rounded-3xl border-2 p-4 text-center md:p-6"
            :class="v.hot ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white'"
          >
            <div class="flex flex-wrap items-baseline justify-center gap-2">
              <span class="font-headline text-xl font-extrabold md:text-2xl">{{ v.name }}</span>
              <span class="font-headline text-xl font-extrabold md:text-2xl" :class="v.hot ? 'text-white' : 'text-gm-primary'">{{ v.price }}</span>
            </div>
            <div class="text-sm" :class="v.hot ? 'text-white/75' : 'text-gm-muted'">{{ v.vol }}</div>
            <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 md:mt-[14px]">
              <div v-for="m in v.metrics" :key="m.label" class="rounded-xl p-1.5 text-center md:p-2" :class="v.hot ? 'bg-white/10' : 'bg-gm-panel'">
                <div class="font-headline text-sm font-extrabold tabular-nums md:text-base" :class="v.hot ? 'text-white' : 'text-gm-ink'">{{ m.value }}</div>
                <div class="text-[11px] md:text-xs" :class="v.hot ? 'text-white/70' : 'text-gm-muted'">{{ m.label }}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </DeckAutoGrid>
      <Reveal :delay="0.2" class="w-full">
        <div class="flex w-full flex-col items-center justify-center gap-2.5 rounded-3xl bg-gm-ink p-3.5 text-center text-white md:p-4">
          <span class="flex items-center gap-2 font-headline text-base font-extrabold md:text-lg">
            <Icon name="lucide:sparkles" class="size-6 text-emerald-300" /> Floral Assistant Advance
          </span>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <span class="rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold md:text-sm">modal Rp3.000 / pengguna</span>
            <Icon name="lucide:arrow-right" class="size-4 text-white/50" />
            <span class="rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold md:text-sm">harga Rp9.000</span>
            <Icon name="lucide:arrow-right" class="size-4 text-white/50" />
            <span class="rounded-full bg-gm-soft/25 px-3 py-1 font-headline text-xs font-bold text-emerald-300 md:text-sm">laba Rp6.000 / pengguna • marjin 200%</span>
            <span class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 md:text-sm">61,1% pengguna berlangganan</span>
          </div>
        </div>
      </Reveal>
      <Reveal :delay="0.26" class="w-full">
        <p class="text-center font-mono text-xs leading-relaxed text-gm-muted md:text-sm">
          dasar: BI Rp15,5 jt untuk 3 lini • diskonto 10% • proyeksi 5 tahun • volume +5% per tahun • token Rp12.000 per 1 juta, pakai 250 rb per pengguna
        </p>
      </Reveal>
    </div>
  </DeckShell>
</template>
