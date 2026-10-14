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
  <div class="flex flex-col gap-2 text-left">
    <div class="flex flex-wrap items-center gap-2">
      <span class="rounded-full bg-gm-amber px-3.5 py-1.5 font-headline text-base font-bold text-white">Pranata Mangsa AKTIF</span>
      <span class="rounded-full bg-gm-ink px-3.5 py-1.5 font-headline text-base font-bold text-white">Jadwal tetap</span>
      <span class="text-base text-gm-muted">Uji banding 60 hari</span>
    </div>

    <div class="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
      <div
        v-for="m in mangsa"
        :key="m.n"
        class="rounded-xl border-2 px-1 py-1.5 text-center"
        :class="seasonBg(m.s)"
      >
        <div class="font-headline text-base font-extrabold leading-tight text-gm-ink">{{ m.n }}</div>
        <div v-if="m.note" class="mt-0.5 text-base leading-tight text-gm-muted">{{ m.note }}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1fr_1fr]">
      <div class="rounded-3xl border-2 border-gm-line bg-gm-panel p-3 text-left">
        <div class="font-headline text-base font-extrabold text-gm-ink">Cara memadukannya</div>
        <p class="mt-1.5 text-base leading-snug text-gm-muted">
          Tiap mangsa menetapkan <strong class="text-gm-ink">prior</strong>: perkiraan hujan, tekanan hama, ambang siram.
          Sensor langsung dipakai sebagai <strong class="text-gm-ink">likelihood</strong>. Data waktu nyata selalu mengalahkan riwayat.
        </p>
        <div class="mt-2 flex items-center gap-2 rounded-2xl bg-white p-2.5 shadow-sm">
          <Icon name="lucide:scale" class="size-7 shrink-0 text-gm-amber" />
          <p class="text-base leading-snug text-gm-ink">Hujan turun di Kasa yang kering? Mesin menahan pompa. Pewaktu justru menggenangi akar.</p>
        </div>
      </div>
      <div class="rounded-3xl border-2 border-gm-primary bg-gm-mist p-3 text-left">
        <div class="font-headline text-base font-extrabold text-gm-deep">Pranata Mangsa AKTIF: adaptif</div>
        <div class="mt-2 space-y-2.5">
          <div v-for="r in rows" :key="r.label">
            <div class="mb-1 flex justify-between text-base text-gm-muted">
              <span>{{ r.label }}</span>
              <span class="font-mono font-bold tabular-nums text-gm-ink">{{ r.a }}{{ r.unit }}</span>
            </div>
            <div class="h-4 overflow-hidden rounded-full bg-gm-line">
              <div class="h-full rounded-full bg-gm-soft transition-all duration-700" :style="{ width: `${(r.a / 18) * 100}%` }" />
            </div>
          </div>
        </div>
        <div class="mt-2.5 flex flex-wrap gap-1.5">
          <span class="rounded-full bg-gm-primary px-3 py-1 font-headline text-base font-bold text-white">kesehatan 87</span>
          <span class="rounded-full bg-white px-3 py-1 font-headline text-base font-bold text-gm-deep">air 6,8 L / 60 hari</span>
        </div>
      </div>
      <div class="rounded-3xl border-2 border-gm-ink bg-[#20241f] p-3 text-left">
        <div class="font-headline text-base font-extrabold text-white">Jadwal tetap: menyiram buta</div>
        <div class="mt-2 space-y-2.5">
          <div v-for="r in rows" :key="r.label">
            <div class="mb-1 flex justify-between text-base text-white/70">
              <span>{{ r.label }}</span>
              <span class="font-mono font-bold tabular-nums text-white">{{ r.b }}{{ r.unit }}</span>
            </div>
            <div class="h-4 overflow-hidden rounded-full bg-white/12">
              <div class="h-full rounded-full bg-red-400 transition-all duration-700" :style="{ width: `${(r.b / 18) * 100}%` }" />
            </div>
          </div>
        </div>
        <div class="mt-2.5 flex flex-wrap gap-1.5">
          <span class="rounded-full bg-white/10 px-3 py-1 font-headline text-base font-bold text-white/85">kesehatan 68</span>
          <span class="rounded-full bg-white/10 px-3 py-1 font-headline text-base font-bold text-white/85">air 9,4 L / 60 hari</span>
        </div>
      </div>
    </div>
  </div>
</template>
