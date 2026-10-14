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
  { name: 'Timer impor', icon: 'lucide:timer', note: 'misalnya Tuya: jadwal iklim sedang' },
  { name: 'GrowMate', icon: 'lucide:sprout', note: 'sensor + AI + Pranata Mangsa' },
]

function cell(v: 'yes' | 'no' | 'mid', hot: boolean) {
  if (v === 'yes') return { icon: 'lucide:check-circle-2', cls: hot ? 'text-white' : 'text-gm-primary' }
  if (v === 'mid') return { icon: 'lucide:minus-circle', cls: hot ? 'text-white/80' : 'text-gm-amber' }
  return { icon: 'lucide:x-circle', cls: hot ? 'text-white/60' : 'text-gm-line' }
}
</script>

<template>
  <DeckAutoGrid :cols="4">
    <Reveal v-for="(c, ci) in cols" :key="c.name" :delay="ci * 0.08" class="h-full">
      <div
        class="flex h-full flex-col items-stretch justify-center rounded-3xl border-2 p-3 text-left"
        :class="ci === 3 ? 'border-gm-primary bg-gm-primary text-white shadow-[0_20px_60px_rgba(0,110,28,0.35)]' : 'border-gm-line bg-white'"
      >
        <div class="flex min-w-0 items-center gap-2">
          <Icon :name="c.icon" class="size-7 shrink-0" :class="ci === 3 ? 'text-white' : 'text-gm-primary'" />
          <div class="min-w-0">
            <div class="font-headline text-base font-extrabold leading-tight">{{ c.name }}</div>
            <div class="text-base leading-snug" :class="ci === 3 ? 'text-white/75' : 'text-gm-muted'">{{ c.note }}</div>
          </div>
        </div>
        <div class="mt-2 w-full space-y-1.5 border-t-2 pt-2" :class="ci === 3 ? 'border-white/20' : 'border-gm-line'">
          <div v-for="r in rows" :key="r.label" class="flex items-center gap-2 text-left">
            <Icon :name="cell(r.values[ci]!, ci === 3).icon" class="size-5 shrink-0" :class="cell(r.values[ci]!, ci === 3).cls" />
            <span class="text-base font-medium leading-tight" :class="ci === 3 ? 'text-white/90' : 'text-gm-ink'">{{ r.label }}</span>
          </div>
        </div>
      </div>
    </Reveal>
  </DeckAutoGrid>
</template>
