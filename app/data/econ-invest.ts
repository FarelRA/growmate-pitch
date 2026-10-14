// Halaman detail "Tingkat Investasi" pada lapisan tersembunyi.
// Halaman ini memisahkan dua realitas angka supaya tidak terbaca berlawanan:
// (1) kebutuhan riil GrowMate: peralatan dan KI Rp15,5 jt (Rp5,17 jt per lini,
// tiga lini), modal awal Rp5 jt, kas sendiri Rp25,03 jt tanpa liabilitas, lalu
// balik modal dan laba rencana tiga lini per tahun; dan (2) hitung laba per
// tahun bila modal disetor pada rasio ROI tiap lini pada empat tingkat pilihan.
// Kalkulator modal tidak memuat periode waktu, sehingga setiap faktor, laba,
// dan kembali pada halaman ini selalu diberi label "per tahun". Tidak ada
// angka karangan: seluruh nilai diambil dari daftar kebenaran terkoreksi.

/** Tingkat modal yang dipilih untuk ditampilkan (enam tingkat tersedia). */
export interface InvestTier {
  key: string
  /** Label modal pada kepala kolom. */
  label: string
  /** Modal dalam juta rupiah, dasar komputasi laba. */
  juta: number
  /** Kolom jawaban utama (Rp100 jt). */
  hot: boolean
}

/** Sel laba untuk satu varian pada satu tingkat. */
export interface InvestCell {
  /** Laba bersih di atas modal, per tahun. */
  laba: string
  /** Modal kembali ditambah laba satu tahun. */
  total: string
}

/** Varian yang dihitung, termasuk rata-rata gabungan. */
export interface InvestVariant {
  key: string
  /** Nama baris pada matriks. */
  name: string
  /** Nama pendek untuk strip proyeksi. */
  short: string
  /** Faktor: laba per tahun = Modal x faktor (angka kalkulator modal). */
  factor: number
  /** Label faktor gaya Indonesia, misalnya 3,733. */
  factorLabel: string
  /** ROI sesuai judul varian, misalnya 373,3%. */
  roi: string
  /** Baris komputasi rata-rata, bukan angka per varian. */
  computed: boolean
  /** Empat sel mengikuti urutan INVEST_TIERS. */
  cells: InvestCell[]
}

export const INVEST_TIERS: InvestTier[] = [
  { key: 't10', label: 'Rp10 jt', juta: 10, hot: false },
  { key: 't20', label: 'Rp20 jt', juta: 20, hot: false },
  { key: 't50', label: 'Rp50 jt', juta: 50, hot: false },
  { key: 't100', label: 'Rp100 jt', juta: 100, hot: true },
]

/** Format gaya Indonesia: 373,3 atau 186,65, tanpa nol di belakang. */
function rp(n: number): string {
  const s = n.toFixed(2).replace(/\.?0+$/, '').replace('.', ',')
  return `Rp${s} jt`
}

/** Deret laba dan kembali per tahun untuk satu faktor, urut INVEST_TIERS. */
function cellsOf(factor: number): InvestCell[] {
  return INVEST_TIERS.map((t) => {
    const laba = t.juta * factor
    return { laba: rp(laba), total: rp(t.juta + laba) }
  })
}

/** Rata-rata bobot sama: (3,733 + 1,383 + 3,197) / 3 = 2,771 (komputasi). */
const AVG_FACTOR = 2.771

export const INVEST_VARIANTS: InvestVariant[] = [
  {
    key: 'pods',
    name: 'GM Pods',
    short: 'Pods',
    factor: 3.733,
    factorLabel: '3,733',
    roi: '373,3%',
    computed: false,
    cells: cellsOf(3.733),
  },
  {
    key: 'tech',
    name: 'GM Tech',
    short: 'Tech',
    factor: 1.383,
    factorLabel: '1,383',
    roi: '138,3%',
    computed: false,
    cells: cellsOf(1.383),
  },
  {
    key: 'addon',
    name: 'GM Tech Add-on',
    short: 'Add-on',
    factor: 3.197,
    factorLabel: '3,197',
    roi: '319,7%',
    computed: false,
    cells: cellsOf(3.197),
  },
  {
    key: 'avg',
    name: 'Rata-rata gabungan',
    short: 'Rata-rata',
    factor: AVG_FACTOR,
    factorLabel: '2,771',
    roi: '277,1%',
    computed: true,
    cells: cellsOf(AVG_FACTOR),
  },
]

/** Satu blok fakta pada strip "Kebutuhan dan pengembalian". */
export interface InvestFact {
  key: string
  /** Label blok di sebelah kiri baris kepala. */
  label: string
  /** Ikon lucide pada label. */
  icon: string
  /** Angka utama blok, kanan baris kepala. */
  value: string
  /** Baris rincian berlabel per tahun atau rupiah. */
  lines: string[]
  /** Blok panas memakai warna utama. */
  hot: boolean
}

/**
 * Tiga blok fakta riil. Kebutuhan: Rp15,5 jt peralatan dan KI (tiga lini kali
 * Rp5,17 jt), modal awal Rp5 jt, kas 30 September Rp25.027.876 tanpa
 * liabilitas, selisih kas dikurang BI Rp9.527.876. Balik modal: 3,21 / 8,67 /
 * 3,75 bulan dibulatkan 3,2 / 8,7 / 3,8. Pengembalian: laba rencana 19,29 +
 * 7,14 + 16,52 = 42,95 jt per tahun dengan ROI 373,3% / 138,3% / 319,7%.
 */
export const INVEST_FACTS: InvestFact[] = [
  {
    key: 'need',
    label: 'Kebutuhan',
    icon: 'lucide:wallet',
    value: 'Rp15,5 jt',
    hot: false,
    lines: [
      'Rp5,17 jt per lini, modal awal Rp5 jt',
      'Kas Rp25,03 jt, liabilitas nol',
      'Selisih kas dikurang BI = Rp9,53 jt',
    ],
  },
  {
    key: 'payback',
    label: 'Balik modal',
    icon: 'lucide:timer',
    value: '3,2 / 8,7 / 3,8 bulan',
    hot: false,
    lines: [
      'Urutan: Pods, Tech, Add-on',
      'Atas investasi Rp5,17 jt per lini',
      'Dihitung dari BI dibagi laba per bulan',
    ],
  },
  {
    key: 'return',
    label: 'Pengembalian per tahun',
    icon: 'lucide:trending-up',
    value: 'Rp42,95 jt',
    hot: true,
    lines: [
      'Laba rencana Pods, Tech, Add-on',
      'Rincian 19,3 + 7,1 + 16,5 jt',
      'ROI 373,3% • 138,3% • 319,7%',
    ],
  },
]

/** Indeks tingkat panas (Rp100 jt) untuk strip proyeksi. */
const HOT_TIER = INVEST_TIERS.findIndex((t) => t.hot)

/** Butir strip proyeksi: laba per tahun tiap varian pada tingkat Rp100 jt. */
export interface InvestHit {
  /** Nama pendek varian. */
  name: string
  /** Laba per tahun di atas modal pada tingkat Rp100 jt. */
  laba: string
}

export const INVEST_STRIP: InvestHit[] = INVEST_VARIANTS.map((v) => ({
  name: v.short,
  laba: v.cells[HOT_TIER]!.laba,
}))

/** Lencana ikhtisar di atas strip fakta. */
export const INVEST_BADGES: string[] = [
  'Empat tingkat dipilih: Rp10, Rp20, Rp50, Rp100 jt',
  'Faktor 1,383 s.d. 3,733 per varian',
  'Laba per tahun = modal x faktor ROI',
]

/** Kalimat kerangka di atas matriks tingkat modal. */
export const INVEST_NOTE =
  'Tingkat modal di bawah adalah skenario simpanan, bukan permintaan pendanaan; seluruh angka laba dan kembali dihitung per tahun.'

/** Penanda baris rata-rata: identitas faktor 2,771. */
export const AVG_NOTE = '2,771 = laba 3 lini Rp42,95 jt dibagi BI Rp15,5 jt'

/** Kepala strip proyeksi pada kaki halaman. */
export const INVEST_SIM_LABEL = 'Proyeksi Rp100 jt'

/** Ekor strip proyeksi: satuan waktu angka di atasnya. */
export const INVEST_SIM_TAIL = 'laba per tahun'

/** Baris metode di bawah strip proyeksi. */
export const INVEST_DASAR =
  'Metode: laba per tahun = modal x faktor, skala linear tiap tingkat modal; ROI lini 373,3% / 138,3% / 319,7%.'
