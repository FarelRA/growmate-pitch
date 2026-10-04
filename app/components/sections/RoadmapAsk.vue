<script setup lang="ts">
const cols = [
  {
    icon: 'lucide:map', title: 'Ekspansi Pasar',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Kuatkan Bantul via referral dan studi kasus. Meluas ke DIY via DKPP, komunitas, sekolah. Uji luar DIY via Pods online.' },
      { h: 'Menengah • 2-5 thn', t: 'Jateng dan Jatim via reseller. Jabodetabek dan Bandung via marketplace. Pilot Add-On luar Jawa via pemda.' },
      { h: 'Panjang • >5 thn', t: 'Sentra luar Jawa via distributor. Segmen B2B greenhouse dan UMKM. Pilot ekspor ASEAN tropis.' },
    ],
  },
  {
    icon: 'lucide:flask-conical', title: 'Inovasi Lanjutan',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Validasi 12 mangsa penuh dan data tanaman lokal. Mode Liburan hemat. Laporan hemat air, nutrisi, energi.' },
      { h: 'Menengah • 2-5 thn', t: 'Mangsa Engine 2.0: prediksi anomali iklim. Dosis nutrisi fase tumbuh. Deteksi dini hama penyakit.' },
      { h: 'Panjang • >5 thn', t: 'GrowMate Farm multi-zona komersial. Prediksi panen dan jadwal tanam. Kalender tani multi-daerah.' },
    ],
  },
  {
    icon: 'lucide:cpu', title: 'Inovasi Teknologi',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Telemetri cloud dan latih ulang Floral. Mode Liburan di firmware. Dasbor laporan hemat.' },
      { h: 'Menengah • 2-5 thn', t: 'API cuaca BMKG dan model cloud. Dosing EC dan pH presisi. ESP32-CAM deteksi hama.' },
      { h: 'Panjang • >5 thn', t: 'Gateway MQTT multi-lokasi dan edge AI offline. ML panen multi-musim. Kalender daerah plus ahli lokal.' },
    ],
  },
  {
    icon: 'lucide:trending-up', title: 'Pertumbuhan Usaha',
    rows: [
      { h: 'Pendek • 1-12 bln', t: '8 ke 12 unit per bulan. Pendapatan ±Rp201 jt (3,4x). 95 pelanggan AI. Margin ≥28%.' },
      { h: 'Menengah • 2-5 thn', t: '20 ke 100 unit per bulan (2.390 kumulatif). ±Rp175 jt per bulan. 1.459 AI. Badan usaha dan sertifikasi.' },
      { h: 'Panjang • >5 thn', t: '≥10.000 unit tahun ke-9. ±Rp500 jt per bulan. 6.100 AI. Refurbish regional dan dataset tropis.' },
    ],
  },
]
</script>

<template>
  <DeckShell section="scaleup">
    <div class="grid w-full flex-1 grid-cols-2 content-center gap-2 md:gap-2.5 xl:grid-cols-4">
      <Reveal v-for="(c, i) in cols" :key="c.title" :delay="i * 0.07" class="h-full min-w-0">
        <div class="flex h-full flex-col rounded-2xl border-2 border-gm-line bg-white p-2 text-left md:p-2.5">
          <div class="flex items-center justify-start gap-1.5">
            <span class="grid size-7 shrink-0 place-items-center rounded-lg bg-gm-mist">
              <Icon :name="c.icon" class="size-4 text-gm-primary" />
            </span>
            <div class="font-headline text-xs font-extrabold text-gm-ink md:text-sm">{{ c.title }}</div>
          </div>
          <div class="mt-1.5 flex flex-1 flex-col gap-1.5">
            <div v-for="r in c.rows" :key="r.h" class="rounded-xl bg-gm-panel px-2 py-1.5">
              <div class="font-headline text-[10px] font-extrabold uppercase tracking-wide text-gm-primary md:text-[11px]">{{ r.h }}</div>
              <div class="mt-0.5 text-[11px] leading-snug text-gm-ink md:text-xs">{{ r.t }}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
