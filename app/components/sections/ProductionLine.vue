<script setup lang="ts">
const active = ref(0)

const gates = [
  { icon: 'lucide:clipboard-list', title: 'Pra', desc: 'Riset sebelum rakit', items: ['Riset kebutuhan', 'Validasi pasar', 'Desain CAD 3D', 'Firmware dan UI'], card: 'bg-white', chip: 'bg-gm-mist', src: '/photos/proses-riset.webp', alt: 'Desain bodi Pods di Blender' },
  { icon: 'lucide:factory', title: 'Produksi', desc: 'Mutu selama rakit', items: ['Perakitan unit', 'Pasang firmware', 'Kalibrasi sensor', 'Uji mutu lolos'], card: 'bg-gm-mist', chip: 'bg-white', src: '/photos/proses-rakit.webp', alt: 'Founder merakit unit di meja produksi' },
  { icon: 'lucide:package-check', title: 'Pasca', desc: 'Garansi setelah kirim', items: ['Kemas tanpa plastik', 'Pengiriman tercatat', 'Garansi 3 bulan', 'Komunitas purnajual'], card: 'bg-gm-amberbg', chip: 'bg-white', src: '/photos/proses-kemas.webp', alt: 'Paket unit siap serah ke ekspedisi' },
]

function onGate(v: number) {
  active.value = v
}
</script>

<template>
  <DeckShell section="proses">
    <div class="flex min-h-full w-full min-w-0 flex-col justify-between gap-1.5 overflow-x-clip md:gap-2 2xl:gap-3">
      <ProsesConveyor @gate="onGate" />
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(g, i) in gates" :key="g.title" :delay="i * 0.08" class="h-full min-w-0">
          <div
            class="flex h-full min-w-0 flex-col justify-between gap-1.5 rounded-2xl border-2 p-3 text-left transition-all duration-300"
            :class="[g.card, active === i ? 'scale-[1.03] border-gm-primary shadow-md' : 'border-gm-line']"
          >
            <UiPhotoFigure v-if="g.src" :src="g.src" :alt="g.alt" ratio="16 / 10" class="slot-compact" />
            <UiPhotoSlot v-else ratio="16 / 10" :label="g.slotLabel" :spec="g.slotSpec" class="slot-compact" />
            <div class="flex items-center justify-start gap-2">
              <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-gm-line">
                <Icon :name="g.icon" class="size-6 text-gm-primary" />
              </span>
              <div class="min-w-0">
                <div class="font-headline text-base font-extrabold leading-tight text-gm-ink">
                  <span class="mr-1.5 font-mono text-base font-bold" :class="active === i ? 'text-gm-primary' : 'text-gm-ink/40'">0{{ i + 1 }}</span>{{ g.title }}
                </div>
                <div class="truncate text-base text-gm-muted">{{ g.desc }}</div>
              </div>
            </div>
            <ul class="space-y-0 border-t border-gm-ink/10 pt-1">
              <li v-for="(it, j) in g.items" :key="it" class="flex items-center justify-start gap-2 text-left text-base leading-snug text-gm-ink">
                <span class="grid size-7 shrink-0 place-items-center rounded-full font-mono text-base font-bold text-gm-primary" :class="g.chip">{{ j + 1 }}</span>
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
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 1rem;
}
:deep(.slot-compact p) {
  line-height: 1.25;
  font-size: 1rem;
}
</style>
