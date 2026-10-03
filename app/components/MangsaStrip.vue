<script setup lang="ts">
// Tahun Jawa dimulai dari Kasa (musim kemarau), sesuai uji lapangan
const mangsa = [
  { n: 'Kasa', s: 'dry', note: 'daun gugur' },
  { n: 'Karo', s: 'dry', note: '' },
  { n: 'Katelu', s: 'dry', note: '' },
  { n: 'Kapat', s: 'trans', note: 'peralihan' },
  { n: 'Kalima', s: 'trans', note: 'hujan tiba' },
  { n: 'Kanem', s: 'wet', note: 'hujan lebat' },
  { n: 'Kapitu', s: 'wet', note: '' },
  { n: 'Kawolu', s: 'wet', note: '' },
  { n: 'Kasanga', s: 'wet', note: '' },
  { n: 'Kasepuluh', s: 'trans', note: '' },
  { n: 'Dhesta', s: 'trans', note: 'kemarau mulai' },
  { n: 'Sadha', s: 'dry', note: '' },
]

const seasonBg = (s: string) =>
  s === 'dry' ? 'bg-amber-100 border-amber-300' : s === 'wet' ? 'bg-sky-100 border-sky-300' : 'bg-emerald-50 border-emerald-300'

const rows = [
  { label: 'Kelebihan air', a: 3, b: 14, unit: '×' },
  { label: 'Kekurangan air', a: 2, b: 9, unit: '×' },
  { label: 'Intervensi manual', a: 4, b: 18, unit: '×' },
]
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-[20px]">
    <div class="flex flex-wrap items-center gap-2.5 md:gap-4">
      <span class="rounded-full bg-gm-amber px-4 py-2 font-headline text-sm font-bold text-white">Pranata Mangsa AKTIF</span>
      <span class="rounded-full bg-gm-ink px-4 py-2 font-headline text-sm font-bold text-white">Jadwal tetap</span>
      <span class="text-sm text-gm-muted md:text-[15px]">60 hari, Mei sampai Juni 2026, Dhesta ke Kasa</span>
    </div>

    <div class="grid grid-cols-4 gap-1.5 sm:grid-cols-6 md:gap-[8px] xl:grid-cols-12">
      <div
        v-for="m in mangsa"
        :key="m.n"
        class="rounded-lg border-2 px-1 py-1.5 text-center md:rounded-xl md:py-[10px]"
        :class="seasonBg(m.s)"
      >
        <div class="font-headline text-xs font-extrabold leading-tight text-gm-ink md:text-[13px]">{{ m.n }}</div>
        <div class="mt-0.5 hidden h-[20px] text-[11px] leading-tight text-gm-muted sm:block">{{ m.note }}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:gap-[20px] lg:grid-cols-[1fr_1fr_1fr]">
      <div class="rounded-2xl border-2 border-gm-line bg-gm-panel p-4 md:rounded-[20px] md:p-[26px]">
        <div class="font-headline text-lg font-extrabold text-gm-ink md:text-[18px]">Cara memadukannya</div>
        <p class="mt-2 text-[12px] leading-snug text-gm-muted md:mt-[10px] md:text-[17px]">
          Setiap mangsa menetapkan <strong class="text-gm-ink">prior</strong>: perkiraan hujan, tekanan hama, ambang siram.
          Sensor langsung adalah <strong class="text-gm-ink">likelihood</strong>. Data waktu nyata selalu mengalahkan riwayat.
        </p>
        <div class="mt-3 flex items-center gap-2.5 rounded-2xl bg-white p-3.5 shadow-sm md:mt-[16px] md:p-[16px]">
          <Icon name="lucide:scale" class="h-8 w-8 shrink-0 text-gm-amber md:h-[34px] md:w-[34px]" />
          <p class="text-[12px] leading-snug text-gm-ink md:text-[15px]">Hujan turun di Kasa yang kering? Mesin menahan pompa. Pewaktu justru menggenangi akar.</p>
        </div>
      </div>
      <div class="rounded-2xl border-2 border-gm-primary bg-gm-mist p-4 md:rounded-[20px] md:p-[26px]">
        <div class="font-headline text-lg font-extrabold text-gm-deep md:text-[18px]">Pranata Mangsa AKTIF: adaptif</div>
        <div class="mt-3 space-y-3 md:mt-[16px] md:space-y-[14px]">
          <div v-for="r in rows" :key="r.label">
            <div class="mb-1 flex justify-between text-[12px] text-gm-muted md:mb-[6px] md:text-[15px]">
              <span>{{ r.label }}</span>
              <span class="font-mono font-bold text-gm-ink">{{ r.a }}{{ r.unit }}</span>
            </div>
            <div class="h-4 overflow-hidden rounded-full bg-gm-line md:h-[18px]">
              <div class="h-full rounded-full bg-gm-soft transition-all duration-700" :style="{ width: `${(r.a / 18) * 100}%` }" />
            </div>
          </div>
        </div>
        <div class="mt-3.5 flex flex-wrap gap-2 md:mt-[18px] md:gap-3">
          <span class="rounded-full bg-gm-primary px-3.5 py-1.5 font-headline text-[12px] font-bold text-white md:px-[16px] md:py-[8px] md:text-[15px]">kesehatan 87</span>
          <span class="rounded-full bg-white px-3.5 py-1.5 font-headline text-[12px] font-bold text-gm-deep md:px-[16px] md:py-[8px] md:text-[15px]">air 6,8 L / 60 hari</span>
        </div>
      </div>
      <div class="rounded-2xl border-2 border-gm-ink bg-[#20241f] p-4 md:rounded-[20px] md:p-[26px]">
        <div class="font-headline text-lg font-extrabold text-white md:text-[18px]">Jadwal tetap: menyiram buta</div>
        <div class="mt-3 space-y-3 md:mt-[16px] md:space-y-[14px]">
          <div v-for="r in rows" :key="r.label">
            <div class="mb-1 flex justify-between text-[12px] text-white/70 md:mb-[6px] md:text-[15px]">
              <span>{{ r.label }}</span>
              <span class="font-mono font-bold text-white">{{ r.b }}{{ r.unit }}</span>
            </div>
            <div class="h-4 overflow-hidden rounded-full bg-white/12 md:h-[18px]">
              <div class="h-full rounded-full bg-red-400 transition-all duration-700" :style="{ width: `${(r.b / 18) * 100}%` }" />
            </div>
          </div>
        </div>
        <div class="mt-3.5 flex flex-wrap gap-2 md:mt-[18px] md:gap-3">
          <span class="rounded-full bg-white/10 px-3.5 py-1.5 font-headline text-[12px] font-bold text-white/85 md:px-[16px] md:py-[8px] md:text-[15px]">kesehatan 68</span>
          <span class="rounded-full bg-white/10 px-3.5 py-1.5 font-headline text-[12px] font-bold text-white/85 md:px-[16px] md:py-[8px] md:text-[15px]">air 9,4 L / 60 hari</span>
        </div>
      </div>
    </div>
  </div>
</template>
