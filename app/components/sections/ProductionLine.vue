<script setup lang="ts">
const gates = [
  { icon: 'lucide:clipboard-list', title: 'Pra', desc: 'Riset sebelum rakit.', items: ['Brainstorming dan riset', 'Validasi pasar', 'Desain 3D CAD', 'Kode firmware dan UI'] },
  { icon: 'lucide:factory', title: 'Produksi', desc: 'Mutu selama rakit.', items: ['Solder dan perakitan', 'Flashing firmware', 'Kalibrasi sensor', 'Quality control lolos'] },
  { icon: 'lucide:package-check', title: 'Pasca', desc: 'Garansi setelah kirim.', items: ['Kemas eco tanpa plastik', 'Pengiriman tercatat', 'Garansi 3 bulan ganti baru', 'Purnajual dan komunitas'] },
]
</script>

<template>
  <DeckShell section="proses">
    <DeckAutoGrid :cols="3">
      <Reveal v-for="(g, i) in gates" :key="g.title" :delay="i * 0.08" class="h-full">
        <div class="flex h-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
          <div class="flex items-center justify-start gap-2.5">
            <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-gm-mist md:size-12">
              <Icon :name="g.icon" class="size-6 text-gm-primary md:size-7" />
            </span>
            <div>
              <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">{{ g.title }}</div>
              <div class="text-sm text-gm-muted">{{ g.desc }}</div>
            </div>
          </div>
          <ul class="mt-2 space-y-1.5 border-t-2 border-gm-line pt-2.5">
            <li v-for="(it, j) in g.items" :key="it" class="flex items-center justify-start gap-2 text-sm text-gm-ink md:text-base">
              <span class="grid size-6 shrink-0 place-items-center rounded-full bg-gm-mist font-mono text-xs font-bold text-gm-primary">{{ j + 1 }}</span> {{ it }}
            </li>
          </ul>
        </div>
      </Reveal>
    </DeckAutoGrid>
  </DeckShell>
</template>
