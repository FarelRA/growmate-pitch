// Penjualan per produk dan langganan AI, Januari sampai September 2026.
// Sumber angka:
//   material/Jurnal Umum, Buku Besar, dan Neraca Saldo.pdf (64 halaman)
//     pendapatan 411 per bulan (hlm. 1-23), pendapatan layanan AI 412,
//     Neraca Saldo hlm. 64: 411 Rp57.730.000 dan 412 Rp1.341.000
//   B1 material/Analisis Keuangan GrowMate.pdf (harga daftar, HPP, BEP,
//     harga langganan AI; dasar pemetaan harga ke nama varian)
//   Grafik bulanan GrowMate 2026 (unit per bulan, distribusi unit per varian,
//     pelanggan AI kumulatif)
//   Jurnal kas Jan s/d Apr (harga jual perkenalan Rp665.000 per unit)
// Angka yang hanya ada di grafik (pelanggan AI dan konversi) ditandai di
// catatan kaki; angka rupiah memakai buku besar.

export interface ProductSale {
  /** Kunci varian, sama dengan kunci di data produk. */
  key: string
  /** Kode varian di deck. */
  code: string
  /** Nama varian untuk judul kartu. */
  name: string
  /** Ikon lucide untuk judul kartu. */
  icon: string
  /** Unit terjual kumulatif sembilan bulan. */
  unit: number
  /** Porsi unit dalam persen. */
  shareUnit: number
  /** Pendapatan kumulatif, juta rupiah. */
  pendapatan: number
  /** Porsi pendapatan hardware dalam persen. */
  sharePendapatan: number
  /** Harga daftar per unit. */
  harga: string
  /** Penanda varian paling laris dari sisi pendapatan. */
  hot?: boolean
}

export const PRODUCT_SALES: ProductSale[] = [
  {
    key: 'pods',
    code: 'P-PODS',
    name: 'Pods',
    icon: 'lucide:flower-2',
    unit: 16,
    shareUnit: 44.4,
    pendapatan: 12.16,
    sharePendapatan: 21.1,
    harga: 'Rp803.000',
  },
  {
    key: 'tech',
    code: 'P-TECH',
    name: 'Tech',
    icon: 'lucide:tractor',
    unit: 8,
    shareUnit: 22.2,
    pendapatan: 16.66,
    sharePendapatan: 28.9,
    harga: 'Rp2.083.000',
  },
  {
    key: 'addon',
    code: 'P-ADDON',
    name: 'Tech Add-on',
    icon: 'lucide:solar-panel',
    unit: 12,
    shareUnit: 33.3,
    pendapatan: 28.91,
    sharePendapatan: 50.1,
    harga: 'Rp2.409.000',
    hot: true,
  },
]

/** Total penjualan hardware sembilan bulan (saldo akun 411 di Neraca Saldo). */
export const HARDWARE_TOTAL = {
  unit: 36,
  pendapatan: 57.73,
}

export interface UnitMonth {
  key: string
  label: string
  unit: number
}

/** Seri unit terjual per bulan, Januari sampai September 2026. */
export const UNIT_SERIES: UnitMonth[] = [
  { key: 'jan', label: 'Jan', unit: 1 },
  { key: 'feb', label: 'Feb', unit: 1 },
  { key: 'mar', label: 'Mar', unit: 1 },
  { key: 'apr', label: 'Apr', unit: 2 },
  { key: 'mei', label: 'Mei', unit: 5 },
  { key: 'jun', label: 'Jun', unit: 7 },
  { key: 'jul', label: 'Jul', unit: 6 },
  { key: 'agu', label: 'Agu', unit: 6 },
  { key: 'sep', label: 'Sep', unit: 7 },
]

/** Kenaikan harga dari harga perkenalan ke harga daftar. */
export const PRICE_NOTE =
  'Harga jual Jan s/d Apr Rp665.000 per unit (harga perkenalan), naik ke harga daftar Rp803.000 untuk Pods mulai Mei.'

/** Jawaban juri: varian mana yang paling laris. */
export const TOP_SELLER = {
  title: 'Paling laris: Tech Add-on',
  desc: 'Rp28,91 jt atau 50,1% penjualan perangkat keras, diraih dari 12 unit (33,3% unit, urutan kedua setelah Pods).',
}

/** Langganan AI Floral Assistant Advance. */
export const AI_SUBS = {
  pelangganAwal: 0,
  pelangganAkhir: 22,
  pembeli: 36,
  konversi: '61,1%',
  harga: 'Rp9.000',
  laba: 'Rp6.000',
  biayaToken: 'Rp3.000',
  akrual: 'Rp1,34 jt',
  kas: 'Rp1,34 jt',
  /** Setara-langganan per bulan Feb s/d Sep menurut buku besar (Rp1.341.000 / Rp9.000). */
  setaraLangganan: '1, 2, 3, 5, 14, 29, 42, 53',
}

/** Seri pelanggan AI kumulatif per bulan, dari grafik bulanan GrowMate 2026. */
export const AI_SERIES = [0, 1, 2, 3, 6, 10, 14, 18, 22]

/** Seri setara-langganan per bulan dari buku besar (Jan s/d Sep, akun 412). */
export const AI_LEDGER_SERIES = [0, 1, 2, 3, 5, 14, 29, 42, 53]

export interface AiRow {
  icon: string
  label: string
  value: string
}

/** Empat angka langganan AI, satu baris ringkas per angka. */
export const AI_CARDS: AiRow[] = [
  { icon: 'lucide:repeat', label: 'setara-langganan per bulan', value: '1, 2, 3, 5, 14, 29, 42, 53' },
  { icon: 'lucide:users', label: 'konversi 22 dari 36 pembeli', value: '61,1%' },
  { icon: 'lucide:coins', label: 'pendapatan akrual sama dengan kas (212 = 0)', value: 'Rp1,34 jt' },
  { icon: 'lucide:badge-dollar-sign', label: 'harga per bulan, laba Rp6.000', value: 'Rp9.000' },
]

/** Catatan kaki: pembulatan dan pemetaan harga. */
export const SALES_FOOTNOTE =
  'Catatan: pendapatan, unit, dan pelanggan AI diambil dari pembukuan Jan s/d Sep 2026; harga daftar dan langganan AI memakai struktur harga yang berjalan. Pemetaan harga ke varian mengikuti struktur harga itu; porsinya dibulatkan; Pods Rp12,16 jt = 5 unit Rp665.000 + 11 unit Rp803.000.'
