<script setup lang="ts">
const tiles = [
  { icon: 'lucide:droplets', label: 'Tanah', value: '62%', sub: 'ambang 45%' },
  { icon: 'lucide:thermometer', label: 'Suhu', value: '28,4°C', sub: 'DHT22 • ok' },
  { icon: 'lucide:sun', label: 'Cahaya', value: '5,2 jam', sub: 'lampu hari ini' },
  { icon: 'lucide:container', label: 'Tangki', value: '71%', sub: 'sisa 9 hari' },
]
</script>

<template>
  <DeckShell section="brain">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="w-full">
          <div class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-gm-panel p-4 text-center md:p-6">
            <div class="flex flex-wrap items-center justify-center gap-2">
              <span class="rounded-full bg-gm-primary px-3.5 py-1.5 font-headline text-sm font-bold text-white md:text-base">Pods · v1</span>
              <span class="rounded-full bg-white px-3.5 py-1.5 font-headline text-sm font-bold text-gm-muted shadow-sm md:text-base">Tech · v2</span>
              <span class="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gm-deep shadow-sm md:text-sm">
                <span class="anim-pulse-dot size-2.5 rounded-full bg-gm-soft" /> Monstera • online 2 menit lalu
              </span>
            </div>
            <DeckAutoGrid :cols="4" class="mt-3 md:mt-4">
              <div v-for="t in tiles" :key="t.label" class="rounded-2xl bg-white p-3 text-center shadow-sm md:p-4">
                <Icon :name="t.icon" class="mx-auto size-6 text-gm-primary" />
                <div class="mt-1 text-[11px] font-semibold uppercase tracking-wide text-gm-muted">{{ t.label }}</div>
                <div class="font-headline text-2xl font-extrabold text-gm-ink">{{ t.value }}</div>
                <div class="font-mono text-[11px] text-gm-muted">{{ t.sub }}</div>
              </div>
            </DeckAutoGrid>
            <UiCalloutBanner icon="lucide:triangle-alert" tone="amber" class="mt-3">
              <span><strong>Tanah kering 2 hari.</strong> Disiram otomatis 3,0 detik pukul 06.12. Cek berikutnya 4 jam lagi.</span>
            </UiCalloutBanner>
            <div class="mt-3 flex flex-wrap justify-center gap-1.5">
              <span v-for="t in ['Nuxt 4 PWA', 'Convex backend', 'MinIO storage', 'Marketplace + Komunitas']" :key="t" class="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gm-muted shadow-sm md:text-sm">{{ t }}</span>
            </div>
          </div>
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.12" class="w-full">
          <div class="flex w-full flex-col rounded-3xl bg-gm-ink p-4 text-white md:p-6">
            <div class="flex items-center justify-center gap-2.5 text-center">
              <span class="grid size-11 place-items-center rounded-xl bg-gm-soft/20">
                <Icon name="lucide:sparkles" class="size-6 text-emerald-300" />
              </span>
              <div>
                <div class="font-headline text-lg font-extrabold">Floral Assistant</div>
                <div class="text-xs text-white/60">kuota: dasar 20/hari • lanjut 100/hari</div>
              </div>
            </div>
            <div class="mt-3 max-w-[88%] self-center rounded-2xl rounded-tl-md bg-white/10 p-3.5 text-[12px] md:text-lg">Mengapa daun bawah menguning?</div>
            <div class="mt-2.5 max-w-[94%] self-center rounded-2xl rounded-tr-md bg-gm-primary p-3.5 text-[12px] md:text-lg">
              Kekurangan nitrogen dan tanah kering 2 hari. Sudah saya siram 3,0 detik dan pupuk dijadwalkan pukul 07.00. Setuju?
            </div>
            <div class="mt-2.5 flex max-w-full items-center justify-center gap-1.5 self-center rounded-full bg-white/10 px-3.5 py-2 font-mono text-[11px] text-emerald-300">
              <Icon name="lucide:function-square" class="size-5 shrink-0" /> <span class="truncate">tools: water(pump, 3000ms) + schedule(fert)</span>
            </div>
            <div class="mt-2.5 flex max-w-[85%] items-center justify-center gap-1.5 self-center rounded-2xl rounded-tl-md bg-white/10 p-3 text-sm">
              <Icon name="lucide:check-check" class="size-5 shrink-0 text-emerald-300" /> Setuju. Kesehatan 87 dan terus naik.
            </div>
            <div class="mt-3 flex flex-wrap justify-center gap-1.5">
              <span class="rounded-full bg-gm-soft/20 px-3 py-1.5 text-xs font-bold text-emerald-300">Rp9.000/bln · 61,1% berlangganan</span>
              <span class="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70">pendapatan berulang sejak Feb 26</span>
            </div>
          </div>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
