// Data halaman analisis mitigasi risiko tersembunyi (id: h-risk-mitigasi).
// Sembilan risiko yang sama dengan data matriks risiko; halaman ini menjawab
// apa yang kami lakukan dan seperti apa risiko sesudahnya.
// Skor sisa adalah ESTIMASI internal setelah mitigasi dijalankan, bukan data
// hasil pengukuran. Aturan penurunan: mitigasi yang menyerang kemungkinan
// menurunkan kemungkinan; mitigasi yang hanya memperkecil dampak menurunkan
// dampak. Zona mengikuti ambang yang sama: hijau 1-4, kuning 5-9,
// oranye 10-15, merah 16-25. Setiap skor sisa di bawah skor awalnya.

import { RISK_ZONES, type RiskKategori, type RiskLevel } from './risk-matrix'

export interface RiskAnalysisItem {
  no: number
  kategori: RiskKategori
  nama: string
  /** Dampak sebelum mitigasi, skala 1 sampai 5. */
  dampakAwal: number
  /** Kemungkinan sebelum mitigasi, skala 1 sampai 5. */
  kemungkinanAwal: number
  skorAwal: number
  levelAwal: RiskLevel
  /** Langkah mitigasi, paling banyak empat belas kata. */
  mitigasi: string
  /** Estimasi dampak sesudah mitigasi dijalankan. */
  dampakSisa: number
  /** Estimasi kemungkinan sesudah mitigasi dijalankan. */
  kemungkinanSisa: number
  skorSisa: number
  levelSisa: RiskLevel
}

/** Zona warna dari ambang yang sama dengan halaman matriks risiko. */
export function riskAnalysisZoneOf(skor: number): RiskLevel {
  return RISK_ZONES.find(z => skor >= z.min && skor <= z.max)!.level
}

type RiskAnalysisRaw = Omit<RiskAnalysisItem, 'skorAwal' | 'levelAwal' | 'skorSisa' | 'levelSisa'>

const RAW: RiskAnalysisRaw[] = [
  {
    no: 1,
    kategori: 'teknologi',
    nama: 'Gangguan koneksi internet atau server down',
    dampakAwal: 4,
    kemungkinanAwal: 3,
    // Dampak 4 ke 2: mode luring menjaga rutinitas dasar tetap berjalan.
    // Kemungkinan 3 ke 2: server cadangan menekan gangguan berkepanjangan.
    mitigasi: 'Mode luring sementara dan backup server siap pakai',
    dampakSisa: 2,
    kemungkinanSisa: 2,
  },
  {
    no: 2,
    kategori: 'teknologi',
    nama: 'Kerusakan fisik sensor atau controller IoT',
    dampakAwal: 4,
    kemungkinanAwal: 2,
    // Dampak 4 ke 3: desain modular membatasi penggantian pada modul rusak.
    // Kemungkinan tetap 2: keausan perangkat fisik tetap mungkin terjadi.
    mitigasi: 'Garansi perangkat, desain modular, dan perawatan mandiri',
    dampakSisa: 3,
    kemungkinanSisa: 2,
  },
  {
    no: 3,
    kategori: 'teknologi',
    nama: 'Analisis AI Floral Assistant tidak akurat',
    dampakAwal: 4,
    kemungkinanAwal: 2,
    // Kemungkinan 2 ke 1: pelatihan berkala dan validasi silang sensor
    // menekan analisis keliru; dampak tetap 4 bila kesalahan terjadi.
    mitigasi: 'Pelatihan AI berkala dan validasi silang sensor langsung',
    dampakSisa: 4,
    kemungkinanSisa: 1,
  },
  {
    no: 4,
    kategori: 'produksi',
    nama: 'Keterlambatan komponen dan chip elektronik',
    dampakAwal: 3,
    kemungkinanAwal: 3,
    // Kemungkinan 3 ke 2: relasi supplier luas dan buffer stock menahan
    // keterlambatan sampai ke produksi; dampak tetap 3 bila terjadi.
    mitigasi: 'Relasi supplier lebih luas dan buffer stock dijaga',
    dampakSisa: 3,
    kemungkinanSisa: 2,
  },
  {
    no: 5,
    kategori: 'produksi',
    nama: 'Kemasan ramah lingkungan rusak saat distribusi',
    dampakAwal: 3,
    kemungkinanAwal: 2,
    // Kemungkinan 2 ke 1: pelapis proteksi dan SOP pengemasan menahan
    // kelembapan; dampak tetap 3 bila kerusakan tetap terjadi.
    mitigasi: 'Pelapis proteksi dan SOP pengemasan honeycomb serta jerami',
    dampakSisa: 3,
    kemungkinanSisa: 1,
  },
  {
    no: 6,
    kategori: 'pasar',
    nama: 'Kesulitan adaptasi petani konvensional',
    dampakAwal: 4,
    kemungkinanAwal: 3,
    // Kemungkinan 3 ke 1: antarmuka sederhana dan pendampingan komunitas
    // menurunkan hambatan adopsi; dampak tetap 4 bila adopsi gagal.
    mitigasi: 'Antarmuka sederhana dan pendampingan komunitas GrowMate',
    dampakSisa: 4,
    kemungkinanSisa: 1,
  },
  {
    no: 7,
    kategori: 'pasar',
    nama: 'Kegagalan panen akibat cuaca ekstrem',
    dampakAwal: 5,
    kemungkinanAwal: 1,
    // Dampak 5 ke 3: peringatan dini memberi waktu tindakan pencegahan.
    // Kemungkinan tetap 1: cuaca ekstrem berada di luar kendali kami.
    mitigasi: 'Sensor cuaca Tech: peringatan dini dan pencegahan otomatis',
    dampakSisa: 3,
    kemungkinanSisa: 1,
  },
  {
    no: 8,
    kategori: 'pasar',
    nama: 'Munculnya kompetitor teknologi serupa',
    dampakAwal: 3,
    kemungkinanAwal: 2,
    // Kemungkinan 2 ke 1: diferensiasi teknologi dan mutu agen AI
    // menurunkan peluang kalah bersaing; dampak tetap 3 bila terjadi.
    mitigasi: 'Diferensiasi teknologi dan peningkatan mutu agen AI',
    dampakSisa: 3,
    kemungkinanSisa: 1,
  },
  {
    no: 9,
    kategori: 'keuangan',
    nama: 'Pengguna enggan perpanjang langganan',
    dampakAwal: 3,
    kemungkinanAwal: 1,
    // Dampak 3 ke 2: laporan berkala peningkatan keuntungan mengurangi
    // keraguan perpanjangan; kemungkinan tetap 1 karena sudah rendah.
    mitigasi: 'Laporan berkala peningkatan keuntungan sebagai bukti nilai',
    dampakSisa: 2,
    kemungkinanSisa: 1,
  },
]

/** Sembilan risiko lengkap dengan skor sebelum dan estimasi sesudah mitigasi. */
export const RISK_ANALYSIS: RiskAnalysisItem[] = RAW.map(r => ({
  ...r,
  skorAwal: r.dampakAwal * r.kemungkinanAwal,
  levelAwal: riskAnalysisZoneOf(r.dampakAwal * r.kemungkinanAwal),
  skorSisa: r.dampakSisa * r.kemungkinanSisa,
  levelSisa: riskAnalysisZoneOf(r.dampakSisa * r.kemungkinanSisa),
}))
