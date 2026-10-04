<script setup lang="ts">
const blocks = [
  { title: 'Mitra Kunci', items: ['Pemasok komponen IoT', 'Kemasan ramah lingkungan', 'Cloud dan API AI', 'DKPP dan DKUMPP Bantul', 'Komunitas dan ritel tani'] },
  { title: 'Aktivitas Kunci', items: ['Riset dan pengembangan', 'Produksi dan perakitan', 'Pemasaran dan edukasi', 'Perawatan platform web'] },
  { title: 'Proposisi Nilai', items: ['Agen AI Floral Assistant', 'Perawatan otomatis', 'Pemantauan cerdas', 'Komunitas terintegrasi', 'Harga terjangkau'] },
  { title: 'Hubungan Pelanggan', items: ['Interaksi AI yang hidup', 'Komunitas GrowMate', 'Garansi 3 bulan ganti baru', 'Konsultasi dan purnajual'] },
  { title: 'Segmen Pelanggan', items: ['Tech farmer DIY', 'Pengembang properti', 'Perkantoran hijau'] },
  { title: 'Sumber Daya', items: ['Modal usaha', 'Dataset pertanian', 'Tenaga kompeten', 'Platform web', 'Peralatan produksi'] },
  { title: 'Kanal', items: ['Daring: Shopee, website', 'Luring: ritel, kafe, kantor'] },
  { title: 'Struktur Biaya', items: ['Riset AI dan IoT', 'Produksi', 'Server dan operasional', 'Gaji tim'] },
  { title: 'Arus Pendapatan', items: ['Penjualan Pods', 'Penjualan Tech', 'Langganan AI Advance'] },
]
</script>

<template>
  <DeckShell section="bmc">
    <div class="grid w-full flex-1 grid-cols-2 content-center gap-2 md:grid-cols-3 md:gap-2.5">
      <Reveal v-for="(b, i) in blocks" :key="b.title" :delay="i * 0.04" class="h-full">
        <div class="flex h-full flex-col justify-start rounded-2xl border-2 border-gm-line bg-white p-2.5 text-left md:p-3">
          <div class="font-headline text-xs font-extrabold uppercase tracking-wide text-gm-primary md:text-sm">{{ b.title }}</div>
          <ul class="mt-1 space-y-0.5">
            <li v-for="it in b.items" :key="it" class="text-xs leading-snug text-gm-ink md:text-[13px]">• {{ it }}</li>
          </ul>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
