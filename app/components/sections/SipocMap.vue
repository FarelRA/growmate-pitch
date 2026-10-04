<script setup lang="ts">
const cols = [
  { icon: 'lucide:truck', title: 'Pemasok', items: ['Komponen IoT dan sensor', 'Matra 3D dan Toolsku cetak bodi', 'Cloud dan API AI', 'Kemasan ramah lingkungan'] },
  { icon: 'lucide:package', title: 'Masukan', items: ['Mikrokontroler dan relai', 'Bodi Pods dan Tech', 'Firmware dan model AI', 'Dataset tanaman', 'Kardus, honeycomb, jerami'] },
  { icon: 'lucide:cog', title: 'Proses', items: ['Desain 3D', 'Solder dan rakit', 'Flashing firmware', 'Kalibrasi dan QC', 'Kemas dan kirim', 'Aktivasi dan dampingi'] },
  { icon: 'lucide:shopping-bag', title: 'Keluaran', items: ['Pods indoor', 'Tech dan Add-on lapangan', 'Dasbor + Floral Assistant', 'Data telemetri'] },
  { icon: 'lucide:users', title: 'Pelanggan', items: ['Tech farmer', 'Pengembang properti', 'Perkantoran hijau', 'Komunitas urban farming'] },
]
</script>

<template>
  <DeckShell section="sipoc">
    <div class="grid w-full flex-1 grid-cols-2 content-center gap-2 sm:grid-cols-3 md:gap-2.5 lg:grid-cols-5">
      <Reveal v-for="(c, i) in cols" :key="c.title" :delay="i * 0.05" class="h-full">
        <div class="flex h-full flex-col rounded-2xl border-2 p-2.5 text-left md:p-3" :class="i === 2 ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white'">
          <div class="flex items-center justify-start gap-1.5 font-headline text-xs font-extrabold uppercase tracking-wide md:text-sm" :class="i === 2 ? 'text-white' : 'text-gm-primary'">
            <Icon :name="c.icon" class="size-5" /> {{ c.title }}
          </div>
          <ul class="mt-1 space-y-0.5">
            <li v-for="it in c.items" :key="it" class="text-xs leading-snug md:text-[13px]" :class="i === 2 ? 'text-white/90' : 'text-gm-ink'">• {{ it }}</li>
          </ul>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
