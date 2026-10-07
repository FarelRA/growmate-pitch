<script setup lang="ts">
const active = ref(0)

const gates = [
  { icon: 'lucide:clipboard-list', title: 'Pra', desc: 'Riset sebelum rakit', items: ['Brainstorming dan riset', 'Validasi pasar', 'Desain 3D CAD', 'Kode firmware dan UI'], card: 'bg-white', chip: 'bg-gm-mist', slotLabel: 'Foto meja riset dan desain CAD', slotSpec: 'Layar CAD bodi Pods plus sketsa, 16/10' },
  { icon: 'lucide:factory', title: 'Produksi', desc: 'Mutu selama rakit', items: ['Solder dan perakitan', 'Flashing firmware', 'Kalibrasi sensor', 'Quality control lolos'], card: 'bg-gm-mist', chip: 'bg-white', slotLabel: 'Foto perakitan dan QC', slotSpec: 'Tangan menyolder PCB plus multimeter, 16/10' },
  { icon: 'lucide:package-check', title: 'Pasca', desc: 'Garansi setelah kirim', items: ['Kemas eco tanpa plastik', 'Pengiriman tercatat', 'Garansi 3 bulan ganti baru', 'Purnajual dan komunitas'], card: 'bg-gm-amberbg', chip: 'bg-white', slotLabel: 'Foto pengemasan eco', slotSpec: 'Kardus honeycomb dan jerami siap kirim, 16/10' },
]

function onGate(v: number) {
  active.value = v
}
</script>

<template>
  <DeckShell section="proses">
    <div class="flex w-full min-w-0 flex-col gap-1.5 overflow-x-clip md:gap-2">
      <ProsesConveyor @gate="onGate" />
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(g, i) in gates" :key="g.title" :delay="i * 0.08" class="h-full min-w-0">
          <div
            class="flex h-full min-w-0 flex-col gap-1.5 rounded-2xl border-2 p-2 text-left transition-all duration-300"
            :class="[g.card, active === i ? 'scale-[1.03] border-gm-primary shadow-md' : 'border-gm-line']"
          >
            <UiPhotoSlot ratio="16 / 10" :label="g.slotLabel" :spec="g.slotSpec" class="slot-compact" />
            <div class="flex items-center justify-start gap-1.5">
              <span class="grid size-7 shrink-0 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-gm-line md:size-8">
                <Icon :name="g.icon" class="size-4 text-gm-primary md:size-5" />
              </span>
              <div class="min-w-0">
                <div class="font-headline text-xs font-extrabold leading-tight text-gm-ink md:text-sm">
                  <span class="mr-1.5 font-mono text-[11px] font-bold" :class="active === i ? 'text-gm-primary' : 'text-gm-ink/40'">0{{ i + 1 }}</span>{{ g.title }}
                </div>
                <div class="truncate text-[11px] text-gm-muted md:text-xs">{{ g.desc }}</div>
              </div>
            </div>
            <ul class="space-y-0.5 border-t-2 border-gm-ink/10 pt-1 md:pt-1.5">
              <li v-for="(it, j) in g.items" :key="it" class="flex items-center justify-start gap-1.5 text-left text-[11px] leading-snug text-gm-ink md:text-xs">
                <span class="grid size-4 shrink-0 place-items-center rounded-full font-mono text-[10px] font-bold text-gm-primary md:size-5" :class="g.chip">{{ j + 1 }}</span>
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

<style scoped>
:deep(.slot-compact) {
  padding: 0.375rem;
  gap: 0.125rem;
  border-radius: 0.75rem;
}
:deep(.slot-compact p) {
  line-height: 1.25;
}
</style>
