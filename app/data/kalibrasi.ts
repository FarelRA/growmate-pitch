// Data halaman tab Kalibrasi pada lapisan tersembunyi.
// Lima tab poin: Pods (35 titik), Tech (42 titik), Add-on (42 titik),
// Floral (lapisan keputusan, bukan kalibrasi), Mangsa (konteks musim,
// bukan kalibrasi). Tiga tab pertama memakai pita alur bersama.

/** Satu tab halaman. */
export interface KalibTab {
  key: string
  label: string
  icon: string
}

/** Lima tab beserta ikon. */
export const KALIB_TABS: KalibTab[] = [
  { key: 'pods', label: 'Pods', icon: 'lucide:flower-2' },
  { key: 'tech', label: 'Tech', icon: 'lucide:tractor' },
  { key: 'addon', label: 'Add-on', icon: 'lucide:solar-panel' },
  { key: 'floral', label: 'Floral', icon: 'lucide:sparkles' },
  { key: 'mangsa', label: 'Mangsa', icon: 'lucide:cloud-sun' },
]

/** Satu langkah alur kalibrasi bersama. */
export interface PipeStep {
  n: string
  text: string
}

/** Empat langkah yang dipakai Pods, Tech, dan Add-on. */
export const KALIB_PIPE: PipeStep[] = [
  { n: '1', text: 'Ukur 3 kondisi per sensor' },
  { n: '2', text: 'Petakan fungsi linear sensor' },
  { n: '3', text: 'Sandingkan fungsi linear acuan referensi' },
  { n: '4', text: 'Selisih jadi fungsi koreksi di server' },
]

/** Catatan kaki alur: peran device dan server. */
export const KALIB_PIPE_NOTE = 'Device kirim mentah, server akurat-kan.'

/** Satu baris sensor: nama, 3 kondisi, alat referensi, catatan khusus. */
export interface SensorRow {
  name: string
  conds: [string, string, string]
  ref: string
  note?: string
}

/** Lima sensor Pods: 15 sensor + 15 referensi + 5 koreksi = 35 titik. */
export const PODS_SENSORS: SensorRow[] = [
  { name: 'Tanah', conds: ['Kering', 'Agak basah', 'Jenuh'], ref: 'Timbangan' },
  { name: 'Cahaya', conds: ['Gelap', 'Teduh', 'Terang lampu'], ref: 'Alat cahaya', note: 'Sifat terbalik' },
  { name: 'Air tangki', conds: ['Kosong', 'Setengah', 'Penuh'], ref: 'Mistar' },
  { name: 'Suhu', conds: ['Dingin', 'Ruang', 'Hangat'], ref: 'Termometer' },
  { name: 'Kelembapan', conds: ['Kering', 'Ruang', 'Lembap'], ref: 'Alat acuan' },
]

/** Total titik Pods. */
export const PODS_TOTAL = '15 sensor + 15 referensi + 5 koreksi = 35 titik'

/** Enam sensor Tech untuk lahan terbuka: 18 + 18 + 6 = 42 titik. */
export const TECH_SENSORS: SensorRow[] = [
  { name: 'Tanah', conds: ['Kering', 'Agak basah', 'Jenuh'], ref: 'Timbangan' },
  { name: 'Cahaya', conds: ['Gelap', 'Teduh', 'Terang matahari'], ref: 'Alat cahaya' },
  { name: 'Air', conds: ['Kosong', 'Setengah', 'Penuh'], ref: 'Mistar' },
  { name: 'Suhu', conds: ['Pagi', 'Siang', 'Panas'], ref: 'Termometer' },
  { name: 'Kelembapan', conds: ['Kering', 'Biasa', 'Setelah hujan'], ref: 'Alat acuan' },
  { name: 'Arus', conds: ['Mati', 'Pompa saja', 'Pompa+pupuk+hama'], ref: 'Alat arus' },
]

/** Total titik Tech. */
export const TECH_TOTAL = '18 sensor + 18 referensi + 6 koreksi = 42 titik'

/** Konteks lokasi Add-on. */
export const ADDON_PLACE = 'Lokasi jauh tanpa listrik dan wifi'

/** Enam sensor Add-on: 18 + 18 + 6 = 42 titik. */
export const ADDON_SENSORS: SensorRow[] = [
  { name: 'Tanah', conds: ['Kering', 'Agak basah', 'Jenuh'], ref: 'Timbangan' },
  { name: 'Cahaya', conds: ['Gelap', 'Teduh', 'Terang matahari'], ref: 'Alat cahaya' },
  { name: 'Air', conds: ['Kosong', 'Setengah', 'Penuh'], ref: 'Mistar' },
  { name: 'Suhu', conds: ['Pagi dingin', 'Siang terik', 'Sore berangin'], ref: 'Termometer' },
  { name: 'Kelembapan', conds: ['Kemarau', 'Biasa', 'Hujan'], ref: 'Alat acuan' },
  { name: 'Arus baterai', conds: ['Mengisi', 'Diam', 'Memakai'], ref: 'Alat arus', note: 'Arah isi vs pakai dibedakan' },
]

/** Total titik Add-on. */
export const ADDON_TOTAL = '18 sensor + 18 referensi + 6 koreksi = 42 titik'

/** Strip unit Add-on. */
export const ADDON_UNITS: string[] = [
  'Panel surya',
  'Baterai',
  'SIM seluler',
  'Siram siang hari saja',
  'Kirim berkala via seluler',
]

/** Penanda tab Floral: lapisan keputusan, bukan kalibrasi. */
export const FLORAL_TAG = 'BUKAN kalibrasi, lapisan keputusan'

/** Alur keputusan Floral. */
export const FLORAL_DECIDE: string[] = [
  'Ambil data terkoreksi',
  'Banding kebutuhan per fase',
  'Putuskan siram, dosis, lampu, pupuk',
  'Petani chat, terima dosis spesifik',
]

/** Judul klarifikasi latih ulang. */
export const FLORAL_RETRAIN_TITLE = 'Latih ulang, maksudnya'

/** Poin klarifikasi latih ulang. */
export const FLORAL_RETRAIN: string[] = [
  'Bukan latih model besar mingguan',
  'Yang diperbaiki: ambang dari panen',
  'Contoh jawaban diperbaiki',
  'Evaluasi 100 pertanyaan diulang pre-update',
  'Telemetri = bahan evaluasi, bukan tombol otomatis',
]

/** Judul peta jalan pendek. */
export const FLORAL_SHORT_TITLE = 'Pendek'

/** Poin peta jalan pendek. */
export const FLORAL_SHORT: string[] = [
  'Latih awal',
  'Mode liburan',
  'Dasbor hemat',
]

/** Judul peta jalan menengah panjang. */
export const FLORAL_PLAN_TITLE = 'Menengah panjang, RENCANA'

/** Poin peta jalan menengah panjang. */
export const FLORAL_PLAN: string[] = [
  'Dosis presisi',
  'Prediksi multimusim',
]

/** Penanda tab Mangsa: konteks musim, bukan kalibrasi. */
export const MANGSA_TAG = 'BUKAN kalibrasi, konteks musim'

/** Satu kelompok mangsa. */
export interface MangsaGroup {
  label: string
  names: string
  hot?: boolean
}

/** Tiga kelompok 12 mangsa. */
export const MANGSA_GROUPS: MangsaGroup[] = [
  { label: 'Kering', names: 'Kasa, Karo, Katelu, Dhesta, Sadha' },
  { label: 'Peralihan', names: 'Kapat, Kasanga, Kasepuluh' },
  { label: 'Hujan', names: 'Kalima, Kanem, Kapitu, Kawolu', hot: true },
]

/** Catatan hujan lebat. */
export const MANGSA_LEBAT = 'Kapitu memuncak lebat'

/** Alur validasi musim. */
export const MANGSA_PIPE: string[] = [
  'Riwayat + prakiraan nasional + nama mangsa jadi mode musim',
  'Dugaan awal: hujan, hama, ambang',
  'Sensor = bukti lapangan, MENANG saat bertentangan',
  'Contoh: mangsa Kasa menduga kering, sensor membaca hujan, keputusan ikut sensor',
]

/** Hasil penerapan konteks musim. */
export interface MangsaStat {
  value: string
  label: string
}

/** Dua angka hasil. */
export const MANGSA_STATS: MangsaStat[] = [
  { value: '78,6%', label: 'kelebihan siram turun' },
  { value: '+27,9%', label: 'kesehatan naik' },
]

/** Motto dosis. */
export const MANGSA_MOTTO = 'Dosis kecil, sering, tepat.'
