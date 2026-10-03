<script setup lang="ts">
const quads = [
  { title: 'Kekuatan', icon: 'lucide:shield-check', tone: 'brand', items: ['Agen AI dan perawatan otomatis', 'Pemantauan cerdas multitik sensor', 'Komunitas dan kemasan hijau', 'Harga terjangkau, servis lokal'], reply: 'Respons SO: rebut pasar milenial dengan AI, harga, dan komunitas.' },
  { title: 'Kelemahan', icon: 'lucide:wrench', tone: 'plain', items: ['Butuh koneksi atau server', 'Sensor bisa rusak fisik', 'Komponen kadang langka', 'Kemasan rentan lembap'], reply: 'Respons WO: stok pengaman, kemas tahan lembap, latih AI dengan data pasar.' },
  { title: 'Peluang', icon: 'lucide:telescope', tone: 'plain', items: ['Minat agrikultur Gen Z tinggi', 'Pasar nasional sangat besar', 'Asta Cita 2 dan SDGs 12', 'Kanal luring masih luas'], reply: 'Respons ST: panduan AI dan komunitas menjaga langganan tetap jalan.' },
  { title: 'Ancaman', icon: 'lucide:cloud-lightning', tone: 'plain', items: ['Adopsi petani konvensional sulit', 'Cuaca ekstrem menggagalkan panen', 'Kompetitor sejenis bermunculan', 'Pengguna enggan perpanjang'], reply: 'Respons WT: minimkan gangguan, jaga kemasan, jaga reputasi.' },
]
</script>

<template>
  <DeckShell section="swot">
    <div class="grid w-full flex-1 grid-cols-1 content-center gap-2 sm:grid-cols-2 md:gap-2.5">
      <Reveal v-for="(q, i) in quads" :key="q.title" :delay="i * 0.05" class="h-full">
        <div class="flex h-full flex-col justify-start rounded-2xl border-2 p-2.5 text-left md:p-3" :class="q.tone === 'brand' ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white'">
          <div class="flex items-center justify-start gap-2 font-headline text-sm font-extrabold md:text-base" :class="q.tone === 'brand' ? 'text-white' : 'text-gm-ink'">
            <Icon :name="q.icon" class="size-5" :class="q.tone === 'brand' ? 'text-white' : 'text-gm-primary'" /> {{ q.title }}
          </div>
          <ul class="mt-1 space-y-0.5">
            <li v-for="it in q.items" :key="it" class="text-xs leading-snug md:text-[13px]" :class="q.tone === 'brand' ? 'text-white/90' : 'text-gm-ink'">• {{ it }}</li>
          </ul>
          <div class="mt-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold leading-snug md:text-[13px]" :class="q.tone === 'brand' ? 'bg-white/10 text-white' : 'bg-gm-panel text-gm-deep'">{{ q.reply }}</div>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
