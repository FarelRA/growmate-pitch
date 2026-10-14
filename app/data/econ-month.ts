// Keuangan bulanan GrowMate, Januari sampai September 2026.
// Sumber angka:
//   material/Jurnal Umum, Buku Besar, dan Neraca Saldo.pdf (64 halaman)
//     pendapatan akun 411 dan 412 (JU hlm. 1-23), beban akun 511-525,
//     laba bulan, laba kumulatif, dan saldo kas per bulan (BB hlm. 24-63),
//     Neraca Saldo per 30 Sep 2026 (hlm. 64)
//   B1 material/Analisis Keuangan GrowMate.pdf (harga daftar, HPP, BEP)
// Aturan: rincian yang tidak tercatat di sumber ditulis null (tampil n/a),
// tidak boleh diarang. Seluruh angka Januari sampai September kini tersumber,
// nilai jutaan dibulatkan dua desimal sehingga jumlah baris bisa berbeda
// sedikit dari nilai kumulatif yang dibulatkan.

export type MonthMark = 'impas' | 'terendah' | 'rekor'

export interface EconMonth {
  /** Kunci unik baris. */
  key: string
  /** Label bulan pendek. */
  label: string
  /** Pendapatan bulan berjalan, juta rupiah. */
  pendapatan: number
  /** Unit terjual pada bulan berjalan. */
  unit: number
  /** Beban akun 511-525 termasuk komponen yang langsung dibebankan, juta rupiah. */
  beban: number | null
  /** Laba bulan berjalan, juta rupiah. */
  laba: number | null
  /** Kumulatif laba berjalan, juta rupiah. */
  kumulatif: number | null
  /** Penanda sorotan baris. */
  mark?: MonthMark
  /** Label pendek sorotan yang tampil di samping nama bulan. */
  markLabel?: string
}

export const ECON_MONTHS: EconMonth[] = [
  { key: 'jan', label: 'Jan', pendapatan: 0.67, unit: 1, beban: 1.28, laba: -0.62, kumulatif: -0.62 },
  { key: 'feb', label: 'Feb', pendapatan: 0.67, unit: 1, beban: 0.99, laba: -0.31, kumulatif: -0.93 },
  { key: 'mar', label: 'Mar', pendapatan: 0.68, unit: 1, beban: 1.57, laba: -0.89, kumulatif: -1.82 },
  { key: 'apr', label: 'Apr', pendapatan: 1.36, unit: 2, beban: 1.69, laba: -0.33, kumulatif: -2.15 },
  {
    key: 'mei',
    label: 'Mei',
    pendapatan: 8.23,
    unit: 5,
    beban: 4.9,
    laba: 3.33,
    kumulatif: 1.18,
    mark: 'impas',
    markLabel: 'Titik impas',
  },
  { key: 'jun', label: 'Jun', pendapatan: 13.13, unit: 7, beban: 7.88, laba: 5.24, kumulatif: 6.42 },
  { key: 'jul', label: 'Jul', pendapatan: 11.18, unit: 6, beban: 6.92, laba: 4.26, kumulatif: 10.68 },
  {
    key: 'agu',
    label: 'Agu',
    pendapatan: 9.69,
    unit: 6,
    beban: 5.93,
    laba: 3.76,
    kumulatif: 14.43,
    mark: 'terendah',
    markLabel: 'Titik terendah',
  },
  {
    key: 'sep',
    label: 'Sep',
    pendapatan: 13.48,
    unit: 7,
    beban: 7.88,
    laba: 5.59,
    kumulatif: 20.03,
    mark: 'rekor',
    markLabel: 'Rekor',
  },
]

/** Rekap sembilan bulan, dipakai lencana ringkasan dan catatan kaki. */
export const ECON_TOTAL = {
  pendapatan: 59.07,
  unit: 36,
  laba: 20.03,
  marginBersih: 33.9,
  kas: 25.03,
}

/** Tiga lencana ringkasan di atas tabel. */
export const ECON_BADGES: { icon: string; value: string; label: string }[] = [
  { icon: 'lucide:wallet', value: 'Rp59,07 jt', label: 'pendapatan 9 bulan' },
  { icon: 'lucide:trending-up', value: 'Rp20,03 jt', label: 'laba bersih kumulatif' },
  { icon: 'lucide:banknote', value: 'Rp25,03 jt', label: 'kas 30 Sep, liabilitas nol' },
]

/** Satu baris penekanan untuk tiga baris tabel yang disorot. */
export const ECON_HIGHLIGHT =
  'Sorotan: Mei titik impas kumulatif +Rp1,18 jt, Agu titik terendah Rp9,69 jt setelah Juni, Sep rekor Rp13,48 jt, margin bersih 33,9%.'

/** Catatan kaki: pembulatan dan batas kejujuran data. */
export const ECON_FOOTNOTE =
  'Semua angka dalam jutaan dan dibulatkan dua desimal. Catatan: konsolidasi sembilan bulan operasi 2026 sampai 30 Sep. Kas Rp25.027.876 = modal Rp5.000.000 + laba ditahan, liabilitas nol.'
