<script setup lang="ts">
import gsap from 'gsap'

const track = ref<HTMLElement | null>(null)
const packet = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      packet.value,
      { left: '12.5%' },
      { left: '87.5%', duration: 3.4, ease: 'power1.inOut', repeat: -1, repeatDelay: 0.5 },
    )
  }, track.value ?? undefined)
})
onUnmounted(() => ctx?.revert())

// Stasiun mengikuti pipa telemetri G3: angka naik, keputusan turun.
const stations = [
  { icon: 'lucide:gauge', name: 'Ukur', desc: 'Probe dan ADC mengirim angka mentah tanah dan udara', chip: 'angka mentah' },
  { icon: 'lucide:filter', name: 'Saring', desc: 'Env dan Post memvalidasi bacaan dan membuang duplikat', chip: 'validasi dan dedup' },
  { icon: 'lucide:database', name: 'Simpan', desc: 'Ingest dan Store menyimpan riwayat bacaan dan foto', chip: 'riwayat dan gambar' },
  { icon: 'lucide:brain-circuit', name: 'Putuskan', desc: 'Kalibrasi dan Aturan mengubah angka menjadi dosis', chip: 'mentah ke persen' },
  { icon: 'lucide:send', name: 'Eksekusi', desc: 'Perintah terkirim ke perangkat dan terkonfirmasi', chip: 'kirim dan konfirmasi' },
]
</script>

<template>
  <div ref="track" class="rounded-3xl border-2 border-gm-line bg-gm-panel p-3 text-left">
    <div class="relative hidden xl:block">
      <div class="absolute left-[12.5%] right-[12.5%] top-[24px] h-[12px] -translate-y-1/2 rounded-full bg-gm-line" />
      <div ref="packet" class="absolute top-[24px] z-10 h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gm-primary ring-8 ring-gm-mist" />
      <div class="relative grid grid-cols-5">
        <div v-for="s in stations" :key="s.name" class="flex flex-col items-center text-center">
          <div class="grid size-12 place-items-center rounded-2xl border-2 border-gm-line bg-white shadow-sm">
            <Icon :name="s.icon" class="size-6 text-gm-primary" />
          </div>
          <div class="mt-1.5 font-headline text-base font-extrabold text-gm-ink">{{ s.name }}</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:gap-2 xl:mt-3 xl:grid-cols-5">
      <div v-for="s in stations" :key="s.name" class="flex items-start gap-2.5 rounded-2xl border-2 border-gm-line bg-white p-2.5 text-left">
        <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-gm-mist xl:hidden">
          <Icon :name="s.icon" class="size-5 text-gm-primary" />
        </span>
        <div class="min-w-0">
          <p class="text-base leading-snug text-gm-muted">{{ s.desc }}</p>
          <span class="mt-1.5 inline-block rounded-full bg-gm-mist px-3 py-1 font-mono text-base font-semibold text-gm-deep">{{ s.chip }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
