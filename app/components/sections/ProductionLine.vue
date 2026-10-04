<script setup lang="ts">
const active = ref(0)

const gates = [
  { icon: 'lucide:clipboard-list', title: 'Pra', desc: 'Riset sebelum rakit', items: ['Brainstorming dan riset', 'Validasi pasar', 'Desain 3D CAD', 'Kode firmware dan UI'], card: 'bg-white', chip: 'bg-gm-mist' },
  { icon: 'lucide:factory', title: 'Produksi', desc: 'Mutu selama rakit', items: ['Solder dan perakitan', 'Flashing firmware', 'Kalibrasi sensor', 'Quality control lolos'], card: 'bg-gm-mist', chip: 'bg-white' },
  { icon: 'lucide:package-check', title: 'Pasca', desc: 'Garansi setelah kirim', items: ['Kemas eco tanpa plastik', 'Pengiriman tercatat', 'Garansi 3 bulan ganti baru', 'Purnajual dan komunitas'], card: 'bg-gm-amberbg', chip: 'bg-white' },
]

function onGate(v: number) {
  active.value = v
}
</script>

<template>
  <DeckShell section="proses">
    <div class="flex w-full min-w-0 flex-col gap-2 overflow-x-clip md:gap-2.5">
      <ProsesConveyor @gate="onGate" />
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(g, i) in gates" :key="g.title" :delay="i * 0.08" class="h-full min-w-0">
          <div
            class="flex h-full min-w-0 flex-col rounded-2xl border-2 p-2.5 text-left transition-all duration-300 md:p-3"
            :class="[g.card, active === i ? 'scale-[1.03] border-gm-primary shadow-md' : 'border-gm-line']"
          >
            <div class="flex items-center justify-start gap-2">
              <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-gm-line md:size-10">
                <Icon :name="g.icon" class="size-5 text-gm-primary md:size-6" />
              </span>
              <div class="min-w-0">
                <div class="font-headline text-sm font-extrabold leading-tight text-gm-ink md:text-base">
                  <span class="mr-1.5 font-mono text-xs font-bold" :class="active === i ? 'text-gm-primary' : 'text-gm-ink/40'">0{{ i + 1 }}</span>{{ g.title }}
                </div>
                <div class="truncate text-xs text-gm-muted md:text-sm">{{ g.desc }}</div>
              </div>
            </div>
            <ul class="mt-1.5 space-y-1 border-t-2 border-gm-ink/10 pt-1.5 md:mt-2 md:pt-2">
              <li v-for="(it, j) in g.items" :key="it" class="flex items-center justify-start gap-1.5 text-left text-xs leading-snug text-gm-ink md:text-sm">
                <span class="grid size-5 shrink-0 place-items-center rounded-full font-mono text-[10px] font-bold text-gm-primary md:size-6 md:text-xs" :class="g.chip">{{ j + 1 }}</span>
                <span class="min-w-0">{{ it }}</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </DeckAutoGrid>
      <ProsesStamp />
    </div>
  </DeckShell>
</template>
