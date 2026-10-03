<script setup lang="ts">
const props = withDefaults(defineProps<{ active?: boolean }>(), { active: true })

const steps = [
  { t: 'Ukur • radio senyap', d: 'ADC2 membaca tanah dan cahaya sebelum WiFi menyala untuk hasil bersih. Rata-rata 8 sampel, DHT22 validasi ganda.', chip: 'mode ukur presisi' },
  { t: 'Sambung • 12 detik', d: 'Mode station, pindai, gabung dalam 12 detik. Logika siram tetap berjalan mandiri.', chip: 'sambung 12 detik' },
  { t: 'Lapor • pasti sampai', d: 'POST sensor dengan snapshotId + ageMs plus unduh perintah, konfigurasi, dan klaim dalam satu putaran.', chip: 'ulangi 2 × 1,5 detik' },
  { t: 'Kamera • tiap 900 detik', d: 'JPEG tiap 900 detik dengan X-Device-Id. Pods memotret di jeda streaming. Tech memakai rpicam-still.', chip: 'tiap 900 detik' },
  { t: 'OTA • terjadwal aman', d: 'Firmware HTTPS terverifikasi semver terbaru. Pembaruan terjadwal di jeda operasi agar penyiraman tetap lancar.', chip: 'terjadwal aman' },
  { t: 'Siaga • hemat cerdas', d: 'Mode hemat daya dengan tick aktuator 250 milidetik menjaga timer tetap presisi. Portal bantuan terbuka otomatis bila dibutuhkan.', chip: 'watchdog 60 detik' },
]

const i = ref(0)
const playing = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

function stop() {
  playing.value = false
  if (timer) clearInterval(timer)
  timer = null
}
function play() {
  stop()
  playing.value = true
  timer = setInterval(() => {
    i.value = (i.value + 1) % steps.length
  }, 2200)
}

onMounted(() => {
  if (props.active) play()
})
onUnmounted(stop)
</script>

<template>
  <div class="grid h-full grid-cols-1 gap-4 lg:grid-cols-[1fr_1.3fr]">
    <div class="flex h-full flex-col justify-center gap-2 md:gap-[10px]">
      <div
        v-for="(s, n) in steps"
        :key="s.t"
        class="flex items-center gap-3 rounded-2xl border-2 p-2.5 text-left transition-all md:gap-3 md:p-3"
        :class="n === i ? 'border-gm-primary bg-gm-mist shadow-md' : 'border-gm-line bg-white'"
      >
        <span
          class="grid h-10 w-10 shrink-0 place-items-center rounded-full font-headline text-base font-extrabold md:h-[44px] md:w-[44px] md:text-[16px]"
          :class="n === i ? 'bg-gm-primary text-white' : 'bg-gm-panel text-gm-muted'"
        >{{ n + 1 }}</span>
        <span class="font-headline text-[12px] font-bold leading-tight text-gm-ink md:text-[17px]">{{ s.t }}</span>
      </div>
      <button
        class="mt-1 flex items-center justify-center gap-2.5 rounded-2xl bg-gm-primary py-3 font-headline text-base font-extrabold text-white transition hover:bg-gm-deep md:mt-[6px] md:py-[14px] md:text-[17px]"
        @click="playing ? stop() : play()"
      >
        <Icon :name="playing ? 'lucide:pause' : 'lucide:play'" class="h-5 w-5 md:h-[24px] md:w-[24px]" />
        {{ playing ? 'Jeda siklus' : 'Putar ulang' }}
      </button>
    </div>
    <div class="flex h-full flex-col rounded-2xl border-2 border-gm-ink bg-[#20241f] p-4 text-white md:rounded-[20px] md:p-5">
      <span class="w-fit rounded-full bg-gm-soft/20 px-3.5 py-1.5 font-mono text-sm font-bold text-emerald-300 md:px-[18px] md:py-[8px] md:text-[15px]">{{ steps[i]!.chip }}</span>
      <Transition name="deck" mode="out-in">
        <div :key="i" class="relative">
          <span aria-hidden="true" class="pointer-events-none absolute -top-6 right-0 select-none font-headline text-[96px] font-extrabold leading-none text-white/[0.07] md:text-[160px]">0{{ i + 1 }}</span>
          <h3 class="relative mt-3 font-headline text-2xl font-extrabold leading-tight md:mt-[16px] md:text-[32px]">{{ steps[i]!.t }}</h3>
          <p class="relative mt-2 text-[12px] leading-relaxed text-white/75 md:mt-[12px] md:text-[19px]">{{ steps[i]!.d }}</p>
        </div>
      </Transition>
      <Transition name="deck" mode="out-in">
        <LoopArt :key="'art' + i" :step="i" class="min-h-0 flex-1" />
      </Transition>
      <div class="mt-auto flex gap-1.5 pt-5 md:gap-2 md:pt-[24px]">
        <div v-for="n in steps.length" :key="n" class="h-2 flex-1 overflow-hidden rounded-full bg-white/15 md:h-[10px]">
          <div class="h-full rounded-full bg-gm-soft transition-all duration-500" :style="{ width: n - 1 <= i ? '100%' : '0%' }" />
        </div>
      </div>
      <p class="mt-3 font-mono text-xs text-white/45 md:mt-[16px] md:text-[14px]">interval lapor 10 sampai 3600 detik dari server • stempel waktu presisi via receivedAt dikurangi ageMs</p>
    </div>
  </div>
</template>
