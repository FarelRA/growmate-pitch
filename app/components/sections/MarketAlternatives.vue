<script setup lang="ts">
interface Row { label: string; values: Array<'yes' | 'no' | 'mid'> }
const rows: Row[] = [
  { label: 'Sensor tanah, udara, cahaya langsung', values: ['no', 'no', 'mid', 'yes'] },
  { label: 'Otak: AI dari data nyata', values: ['no', 'no', 'no', 'yes'] },
  { label: 'Dataset tanaman tropis', values: ['no', 'no', 'no', 'yes'] },
  { label: 'Servis dan garansi lokal', values: ['mid', 'no', 'no', 'yes'] },
  { label: 'Harga ramah konsumen', values: ['yes', 'mid', 'no', 'yes'] },
]
const cols = [
  { name: 'Polybag manual', icon: 'lucide:shopping-bag', note: 'menyiram dengan perasaan' },
  { name: 'Hidroponik DFT', icon: 'lucide:waves', note: 'sirkulasi tanpa otak nutrisi' },
  { name: 'Timer impor', icon: 'lucide:timer', note: 'mis. Tuya: jadwal iklim sedang' },
  { name: 'GrowMate', icon: 'lucide:sprout', note: 'sensor + AI + Pranata Mangsa' },
]

function cell(v: 'yes' | 'no' | 'mid', hot: boolean) {
  if (v === 'yes') return { icon: 'lucide:check-circle-2', cls: hot ? 'text-white' : 'text-gm-primary' }
  if (v === 'mid') return { icon: 'lucide:minus-circle', cls: hot ? 'text-white/80' : 'text-gm-amber' }
  return { icon: 'lucide:x-circle', cls: hot ? 'text-white/60' : 'text-gm-line' }
}
</script>

<template>
  <DeckShell section="alternatives">
    <DeckAutoGrid :cols="4">
      <Reveal v-for="(c, ci) in cols" :key="c.name" :delay="ci * 0.08" class="h-full">
        <div
          class="flex h-full flex-col items-center justify-center rounded-3xl border-2 p-4 text-center md:p-6"
          :class="ci === 3 ? 'border-gm-primary bg-gm-primary text-white shadow-[0_20px_60px_rgba(0,110,28,0.35)]' : 'border-gm-line bg-white'"
        >
          <Icon :name="c.icon" class="size-9" :class="ci === 3 ? 'text-white' : 'text-gm-primary'" />
          <div class="mt-2 font-headline text-xl font-extrabold leading-tight md:text-2xl">{{ c.name }}</div>
          <div class="text-sm md:text-base" :class="ci === 3 ? 'text-white/75' : 'text-gm-muted'">{{ c.note }}</div>
          <div class="mt-3 w-full space-y-2.5 border-t-2 pt-3.5" :class="ci === 3 ? 'border-white/20' : 'border-gm-line'">
            <div v-for="r in rows" :key="r.label" class="flex items-center gap-2.5 text-left">
              <Icon :name="cell(r.values[ci]!, ci === 3).icon" class="size-6 shrink-0" :class="cell(r.values[ci]!, ci === 3).cls" />
              <span class="text-[12px] font-medium leading-tight md:text-base" :class="ci === 3 ? 'text-white/90' : 'text-gm-ink'">{{ r.label }}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </DeckAutoGrid>
  </DeckShell>
</template>
