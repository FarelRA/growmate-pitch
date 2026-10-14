// Halaman detail "Ekonomi Unit" pada lapisan tersembunyi.
// Seluruh angka adalah metrik rencana usaha: biaya per unit, metrik investasi
// resmi, langganan AI, dan BEP Pods. Nilai ROI 373,3% / 138,3% / 319,7% per
// varian dipakai persis di halaman tingkat investasi. Keterangan kaki halaman
// hanya berisi metode perhitungan. Tidak ada angka karangan.

export interface EconMetric {
  k: string
  v: string
}

export interface EconProduct {
  key: string
  name: string
  vol: string
  price: string
  /** Lini sorot, pola kartu panas sama dengan slide ekonomi unit. */
  hot: boolean
  metrics: EconMetric[]
}

export const ECON_PRODUCTS: EconProduct[] = [
  {
    key: 'pods',
    name: 'GrowMate Pods',
    vol: '84 unit / tahun',
    price: 'Rp803 rb',
    hot: false,
    metrics: [
      { k: 'HPP / unit', v: 'Rp573 rb' },
      { k: 'Marjin atas HPP', v: '40%' },
      { k: 'BEP', v: '21 unit' },
      { k: 'ROI', v: '373,3%' },
      { k: 'Payback', v: '3,2 bulan' },
      { k: 'NPV 5 thn', v: 'Rp74,9 jt' },
      { k: 'BCR', v: '18,66' },
      { k: 'Laba / tahun', v: 'Rp19,3 jt' },
    ],
  },
  {
    key: 'tech',
    name: 'GrowMate Tech',
    vol: '12 unit / tahun',
    price: 'Rp2,08 jt',
    hot: true,
    metrics: [
      { k: 'HPP / unit', v: 'Rp1,49 jt' },
      { k: 'Marjin atas HPP', v: '40%' },
      { k: 'BEP', v: '6 unit' },
      { k: 'ROI', v: '138,3%' },
      { k: 'Payback', v: '8,7 bulan' },
      { k: 'NPV 5 thn', v: 'Rp24,5 jt' },
      { k: 'BCR', v: '6,91' },
      { k: 'Laba / tahun', v: 'Rp7,1 jt' },
    ],
  },
  {
    key: 'addon',
    name: 'GrowMate Tech Add-on',
    vol: '24 unit / tahun',
    price: 'Rp2,41 jt',
    hot: false,
    metrics: [
      { k: 'HPP / unit', v: 'Rp1,72 jt' },
      { k: 'Marjin atas HPP', v: '40%' },
      { k: 'BEP', v: '7 unit' },
      { k: 'ROI', v: '319,7%' },
      { k: 'Payback', v: '3,8 bulan' },
      { k: 'NPV 5 thn', v: 'Rp63,4 jt' },
      { k: 'BCR', v: '15,98' },
      { k: 'Laba / tahun', v: 'Rp16,5 jt' },
    ],
  },
]

/** Ikhtisar rencana 12 bulan, dipakai sebagai baris lencana di atas kartu. */
export const ECON_SUMMARY: string[] = [
  'Rencana 120 unit / tahun: 84 Pods, 12 Tech, 24 Add-on',
  'Laba 3 lini Rp42,95 jt / tahun',
  'Margin bersih 28,6% dari harga jual',
  'BEP Pods 21 unit tercapai Juli 2026',
]

/** Deret langganan AI, dibaca berurutan dengan panah di antaranya. */
export const ECON_AI_CHIPS: string[] = [
  'Langganan Rp9.000 / pengguna / bln',
  'Biaya token ≤ Rp3.000',
  'Laba Rp6.000 / pengguna',
  'Marjin 200%',
]

/** Angka konversi langganan pada kartu hitam (dari grafik, bukan buku besar). */
export const ECON_AI_NOTE = 'Konversi 61,1% (22 dari 36 pengguna)'

/** Baris dasar perhitungan di kaki halaman. */
export const ECON_BASIS =
  'dasar: diskonto 10% • proyeksi 5 tahun • volume +5% per tahun • HPP blend Rp894 rb per unit • margin 28,6% dari harga jual'

/** Catatan metode per blok metrik di kaki halaman. */
export const ECON_SOURCE =
  'Catatan metode: ROI 373,3% / 138,3% / 319,7% = laba tahunan dibagi investasi awal tiap lini; payback = investasi awal dibagi laba per bulan; NPV dan BCR memakai diskonto 10% selama 5 tahun; konversi 61,1% dari 36 pembeli.'
