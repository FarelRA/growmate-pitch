<script setup lang="ts">
const pins = [
  { gpio: 'GPIO13', fn: 'Sensor soil kapasitif v1.2', meta: 'ADC2 • mentah 0 sampai 4095', color: '#8a5a2b' },
  { gpio: 'GPIO14', fn: 'Fotodioda cahaya (terbalik)', meta: 'gelap ≈ 4095', color: '#b7791f' },
  { gpio: 'GPIO33', fn: 'Pengukur tangki resistif', meta: 'ADC1 • aman WiFi', color: '#2471a3' },
  { gpio: 'GPIO15', fn: 'DHT22 suhu + RH', meta: 'validasi baca ganda', color: '#6c3483' },
  { gpio: 'GPIO2', fn: 'Pompa celup 5V', meta: 'dosis presisi 30 detik', color: '#006e1c' },
  { gpio: 'GPIO4', fn: 'LED spektrum penuh', meta: 'jadwal cerdas 24 jam', color: '#4caf50' },
]
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col rounded-2xl border-2 border-gm-ink bg-[#20241f] p-4 text-white md:rounded-[20px] md:p-3">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="font-headline text-lg font-extrabold md:text-[18px]">AI-Thinker ESP32-CAM</span>
        <span class="rounded-full bg-white/10 px-3 py-1 font-mono text-sm text-white/80 md:text-[14px]">ESP32-S + OV2640</span>
      </div>
      <div class="mt-3 flex flex-1 flex-col justify-between gap-2 md:mt-[12px] md:gap-[8px]">
        <div
          v-for="(p, i) in pins"
          :key="p.gpio"
          class="flex flex-wrap items-center justify-start gap-x-3 gap-y-1 rounded-xl bg-white/[0.06] px-3 py-2 text-left md:flex-nowrap md:gap-[16px] md:px-[16px] md:py-1"
        >
          <span class="anim-pulse-dot h-3 w-3 shrink-0 rounded-full" :style="{ background: p.color, animationDelay: `${i * 0.3}s` }" />
          <span class="w-[86px] shrink-0 font-mono text-base font-bold text-emerald-300 md:w-[110px] md:text-[16px]">{{ p.gpio }}</span>
          <span class="min-w-0 flex-1 basis-40 text-[12px] md:whitespace-nowrap md:text-[17px]">{{ p.fn }}</span>
          <span class="shrink-0 font-mono text-xs text-white/50 md:whitespace-nowrap md:text-[13px]">{{ p.meta }}</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div class="rounded-2xl border-2 border-gm-line bg-gm-panel p-3 text-left md:rounded-[20px] md:p-3">
        <div class="flex items-center justify-start gap-2.5 font-headline text-lg font-extrabold text-gm-ink md:text-[18px]">
          <Icon name="lucide:zap" class="h-6 w-6 text-gm-amber md:h-[26px] md:w-[26px]" /> Daya ala UPS
        </div>
        <div class="mt-3 flex flex-wrap items-center justify-start gap-1.5 text-[12px] font-semibold md:mt-[12px] md:gap-2 md:text-[14px]">
          <span class="rounded-lg bg-white px-2.5 py-1.5 shadow-sm md:rounded-xl">USB-C 5V</span>
          <Icon name="lucide:arrow-right" class="h-4 w-4 text-gm-muted md:h-[22px] md:w-[22px]" />
          <span class="rounded-lg bg-white px-2.5 py-1.5 shadow-sm md:rounded-xl">4230 mAh</span>
          <Icon name="lucide:arrow-right" class="h-4 w-4 text-gm-muted md:h-[22px] md:w-[22px]" />
          <span class="rounded-lg bg-white px-2.5 py-1.5 shadow-sm md:rounded-xl">XL6009 5V/4A</span>
        </div>
        <p class="mt-2.5 text-[12px] leading-snug text-gm-muted md:mt-[10px] md:text-[14px]">Cadangan baterai menjaga penyiraman tetap berjalan saat listrik padam sesaat.</p>
      </div>
      <div class="rounded-2xl border-2 border-gm-line bg-gm-panel p-3 text-left md:rounded-[20px] md:p-3">
        <div class="flex items-center justify-start gap-2.5 font-headline text-lg font-extrabold text-gm-ink md:text-[18px]">
          <Icon name="lucide:camera" class="h-6 w-6 text-gm-primary md:h-[26px] md:w-[26px]" /> Foto JPEG, server yang menentukan
        </div>
        <p class="mt-2.5 text-left text-[12px] leading-snug text-gm-muted md:mt-[10px] md:text-[14px]">OV2640 mengunggah tiap 900 detik dengan <span class="font-mono">X-Device-Id</span>. PSRAM dioptimalkan untuk kamera, penyimpanan langsung ke cloud.</p>
        <div class="mt-2.5 flex flex-wrap justify-start gap-1.5 md:mt-[10px] md:gap-2">
          <span class="rounded-full bg-gm-mist px-3 py-1 text-[11px] font-bold text-gm-deep md:px-[14px] md:py-[6px] md:text-[12px]">telemetri mentah</span>
          <span class="rounded-full bg-gm-mist px-3 py-1 text-[11px] font-bold text-gm-deep md:px-[14px] md:py-[6px] md:text-[12px]">kalibrasi di server</span>
        </div>
      </div>
    </div>
  </div>
</template>
