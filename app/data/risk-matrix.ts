// Data halaman matriks risiko tersembunyi (kind: risk).
// Sumber: Tabel Analisis Risiko dokumen internal GrowMate.
// Sembilan risiko pada empat kategori, skor = dampak x kemungkinan (skala 1 sampai 25),
// zona warna mengikuti kolom Level Risiko pada tabel sumber.

export type RiskKategori = 'teknologi' | 'produksi' | 'pasar' | 'keuangan'

export type RiskLevel = 'hijau' | 'kuning' | 'oranye' | 'merah'

export interface RiskItem {
  no: number
  kategori: RiskKategori
  nama: string
  dampak: number
  kemungkinan: number
  skor: number
  level: RiskLevel
  /** Versi ringkas untuk daftar, paling banyak delapan kata. */
  mitigasi: string
}

export interface RiskZone {
  level: RiskLevel
  label: string
  min: number
  max: number
}

/** Ambang zona: hijau 1-4, kuning 5-9, oranye 10-15, merah 16-25. */
export const RISK_ZONES: RiskZone[] = [
  { level: 'hijau', label: 'Hijau', min: 1, max: 4 },
  { level: 'kuning', label: 'Kuning', min: 5, max: 9 },
  { level: 'oranye', label: 'Oranye', min: 10, max: 15 },
  { level: 'merah', label: 'Merah', min: 16, max: 25 },
]

export const RISK_KATEGORI: Record<RiskKategori, { label: string; short: string }> = {
  teknologi: { label: 'Teknologi dan Sistem', short: 'Teknologi' },
  produksi: { label: 'Produksi dan Rantai Pasok', short: 'Produksi' },
  pasar: { label: 'Penerimaan Pasar dan Reputasi', short: 'Pasar' },
  keuangan: { label: 'Risiko Keuangan', short: 'Keuangan' },
}

/** Tangga label yang sama untuk kedua sumbu, sesuai skala sumber. */
export const RISK_SCALE = ['Rendah', 'kecil', 'sedang', 'tinggi', 'sangat tinggi']

export const RISK_AXIS_X = { title: 'Kemungkinan', from: 'rendah', to: 'sangat tinggi' }

export const RISK_AXIS_Y = { title: 'Dampak', from: 'rendah', to: 'sangat tinggi' }

export const RISK_SOURCE = 'Analisis risiko GrowMate 2026'

export const RISKS: RiskItem[] = [
  {
    no: 1,
    kategori: 'teknologi',
    nama: 'Gangguan koneksi internet atau server down',
    dampak: 4,
    kemungkinan: 3,
    skor: 12,
    level: 'oranye',
    mitigasi: 'Mode luring sementara, server cadangan',
  },
  {
    no: 2,
    kategori: 'teknologi',
    nama: 'Kerusakan fisik sensor atau controller IoT',
    dampak: 4,
    kemungkinan: 2,
    skor: 8,
    level: 'kuning',
    mitigasi: 'Garansi, desain modular, panduan rawat',
  },
  {
    no: 3,
    kategori: 'teknologi',
    nama: 'Analisis AI Floral Assistant tidak akurat',
    dampak: 4,
    kemungkinan: 2,
    skor: 8,
    level: 'kuning',
    mitigasi: 'Latih AI dan validasi silang sensor',
  },
  {
    no: 4,
    kategori: 'produksi',
    nama: 'Keterlambatan komponen dan chip elektronik',
    dampak: 3,
    kemungkinan: 3,
    skor: 9,
    level: 'kuning',
    mitigasi: 'Relasi supplier luas dan buffer stock',
  },
  {
    no: 5,
    kategori: 'produksi',
    nama: 'Kemasan ramah lingkungan rusak saat distribusi',
    dampak: 3,
    kemungkinan: 2,
    skor: 6,
    level: 'kuning',
    mitigasi: 'Pelapis anti lembap dan SOP pengemasan',
  },
  {
    no: 6,
    kategori: 'pasar',
    nama: 'Kesulitan adaptasi petani konvensional',
    dampak: 4,
    kemungkinan: 3,
    skor: 12,
    level: 'oranye',
    mitigasi: 'Antarmuka mudah dan pendamping komunitas',
  },
  {
    no: 7,
    kategori: 'pasar',
    nama: 'Kegagalan panen akibat cuaca ekstrem',
    dampak: 5,
    kemungkinan: 1,
    skor: 5,
    level: 'kuning',
    mitigasi: 'Peringatan dini lewat sensor cuaca Tech',
  },
  {
    no: 8,
    kategori: 'pasar',
    nama: 'Munculnya kompetitor teknologi serupa',
    dampak: 3,
    kemungkinan: 2,
    skor: 6,
    level: 'kuning',
    mitigasi: 'Diferensiasi kuat dan mutu agen AI',
  },
  {
    no: 9,
    kategori: 'keuangan',
    nama: 'Pengguna enggan perpanjang langganan',
    dampak: 3,
    kemungkinan: 1,
    skor: 3,
    level: 'hijau',
    mitigasi: 'Laporan ROI berkala sebagai bukti value',
  },
]
