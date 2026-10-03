<script setup lang="ts">
const chain = [
  { icon: 'lucide:plug-zap', name: 'Masuk 12 V', desc: 'anti-balik + sekring 15 A + TVS' },
  { icon: 'lucide:container', name: 'Buck', desc: 'LM2596 5 V/3 A + 3V3/1 A' },
  { icon: 'lucide:cpu', name: 'Pi Zero W', desc: 'otak Python asyncio' },
  { icon: 'lucide:toggle-left', name: '2× relai', desc: 'JD-VCC terisolasi, aman saat boot' },
  { icon: 'lucide:droplets', name: 'Pompa + 2 katup', desc: 'diafragma 5 A, pupuk + hama' },
]

const sensing = [
  { icon: 'lucide:gauge', name: 'ADS1115', desc: 'ADC 16-bit 4 kanal' },
  { icon: 'lucide:activity', name: 'ACS712-30A', desc: 'arus 66 mV/A' },
  { icon: 'lucide:thermometer', name: 'DHT22', desc: 'suhu + RH' },
  { icon: 'lucide:video', name: 'OV5647 CSI', desc: 'foto + relai MJPEG' },
]
</script>

<template>
  <div class="flex flex-col gap-3 md:gap-3">
    <div class="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-[14px] lg:grid-cols-5">
      <div v-for="c in chain" :key="c.name" class="rounded-2xl border-2 border-gm-line bg-white p-2 text-center md:p-2.5">
        <Icon :name="c.icon" class="mx-auto h-6 w-6 text-gm-primary md:h-5 md:w-5" />
        <div class="mt-1.5 font-headline text-[12px] font-extrabold text-gm-ink md:mt-[8px] md:text-[16px]">{{ c.name }}</div>
        <div class="mt-1 text-xs leading-snug text-gm-muted md:text-[14px]">{{ c.desc }}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-3">
      <div class="rounded-2xl border-2 border-gm-line bg-gm-panel p-2.5 sm:col-span-2 md:rounded-[20px] md:p-3">
        <div class="font-headline text-lg font-extrabold text-gm-ink md:text-[18px]">Penginderaan • setiap tetes tercatat</div>
        <div class="mt-3 grid grid-cols-2 gap-2.5 md:mt-[14px] md:gap-[12px] lg:grid-cols-4">
          <div v-for="s in sensing" :key="s.name" class="flex flex-col items-center gap-1 rounded-xl bg-white p-3 text-center shadow-sm md:p-[14px]">
            <Icon :name="s.icon" class="h-6 w-6 shrink-0 text-gm-primary md:h-6 md:w-6" />
            <div class="font-headline text-[12px] font-extrabold text-gm-ink md:text-[16px]">{{ s.name }}</div>
            <div class="text-xs text-gm-muted md:text-[14px]">{{ s.desc }}</div>
          </div>
        </div>
        </div>
      <div class="rounded-2xl border-2 border-gm-line bg-white p-2.5 md:rounded-[20px] md:p-2.5">
        <div class="flex items-center gap-2 font-headline text-base font-extrabold text-gm-ink md:text-[15px]">
          <Icon name="lucide:plug-zap" class="h-6 w-6 shrink-0 text-gm-primary md:h-[28px] md:w-[28px]" />
          Jalan dengan PLN + WiFi
        </div>
        <ul class="mt-2 space-y-1.5 text-[11px] text-gm-ink md:mt-[10px] md:space-y-1 md:text-[13px]">
          <li class="flex gap-2"><Icon name="lucide:check" class="mt-0.5 h-5 w-5 shrink-0 text-gm-primary md:h-[22px] md:w-[22px]" /> Lokasi berlistrik 12 V + WiFi: greenhouse, kantor</li>
          <li class="flex gap-2"><Icon name="lucide:check" class="mt-0.5 h-5 w-5 shrink-0 text-gm-primary md:h-[22px] md:w-[22px]" /> Portal kaptif otomatis, siap dalam 15 menit</li>
          <li class="flex gap-2"><Icon name="lucide:check" class="mt-0.5 h-5 w-5 shrink-0 text-gm-primary md:h-[22px] md:w-[22px]" /> Jalur naik kelas: pasang paket surya kapan saja</li>
        </ul>
      </div>
      <div class="rounded-2xl border-2 border-gm-amber bg-gm-amberbg p-2.5 md:rounded-[20px] md:p-2.5">
        <div class="flex items-center gap-2 font-headline text-base font-extrabold text-gm-ink md:text-[15px]">
          <Icon name="lucide:sun" class="h-6 w-6 shrink-0 text-gm-amber md:h-[28px] md:w-[28px]" />
          Paket surya + LTE
        </div>
        <ul class="mt-2 space-y-1.5 text-[11px] text-gm-ink md:mt-[10px] md:space-y-1 md:text-[13px]">
          <li class="flex gap-2"><Icon name="lucide:check" class="mt-0.5 h-5 w-5 shrink-0 text-gm-primary md:h-[22px] md:w-[22px]" /> panel 10 Wp + PWM 10 A + VRLA 12 V 3,5 Ah</li>
          <li class="flex gap-2"><Icon name="lucide:check" class="mt-0.5 h-5 w-5 shrink-0 text-gm-primary md:h-[22px] md:w-[22px]" /> modem USB H760R. Data sensor via seluler</li>
          <li class="flex gap-2"><Icon name="lucide:check" class="mt-0.5 h-5 w-5 shrink-0 text-gm-primary md:h-[22px] md:w-[22px]" /> antrean SQLite: 1440 bacaan per 24 jam luring</li>
        </ul>
      </div>
    </div>
  </div>
</template>
