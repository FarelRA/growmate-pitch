<script setup lang="ts">
const plans = [
  { name: 'Pods', price: 'Rp803 rb', for: 'pehobi indoor', icon: 'lucide:flower-2', hot: false },
  { name: 'Tech', price: 'Rp2.083 jt', for: 'lahan terbuka', icon: 'lucide:tractor', hot: true },
  { name: 'Tech Add-on', price: 'Rp2.409 jt', for: 'mandiri surya + LTE', icon: 'lucide:solar-panel', hot: false },
]
const stats = [
  { value: 'Rp59,07 jt', label: 'total 9 bulan' },
  { value: '36 unit', label: 'hardware terjual' },
  { value: 'Mei ×6', label: 'Rp8,23 jt, 6 kali April' },
  { value: '61,1%', label: 'konversi AI Advance' },
]
</script>

<template>
  <DeckShell section="business">
    <div class="flex w-full flex-col items-center gap-3 md:gap-5">
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(p, i) in plans" :key="p.name" :delay="i * 0.07" class="h-full">
          <UiInfoCard :icon="p.icon" :title="`${p.name} • ${p.price}`" :desc="`${p.for} · termasuk kemasan eco`" :tone="p.hot ? 'brand' : 'light'" />
        </Reveal>
      </DeckAutoGrid>
      <Reveal :delay="0.1" class="w-full">
        <div class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-center md:p-4">
          <div class="font-headline text-lg font-extrabold text-gm-ink">Pendapatan bulanan (bar) + kumulatif (garis) · juta Rp</div>
          <div class="mt-1.5 aspect-[16/10] min-h-40 w-full sm:aspect-[16/8] lg:aspect-[7/1]">
            <TractionChart />
          </div>
          <DeckAutoGrid :cols="4" class="mt-2.5 md:mt-3">
            <UiStatCard v-for="e in stats" :key="e.label" :value="e.value" :label="e.label" tone="light" />
          </DeckAutoGrid>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
