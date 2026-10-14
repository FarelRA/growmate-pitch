import type { DgFlow } from './types'
import { g00, g01, g02, g02b, g03 } from './flows-a'
import { g04, g05, g06, g07, g08 } from './flows-b'
import { g09, g10, g11, g12 } from './flows-c'

export interface GraphDef {
  id: string
  label: string
  title: string
  /** Jenis diagram, ditampilkan sebagai jargon di penjuru halaman. */
  kind: string
  /** Ringkasan gaya presentasi: poin pendek, bukan paragraf. */
  bullets: string[]
  flow: DgFlow
}

/**
 * Empat belas grafik platform, kini digambar sebagai diagram web
 * buatan sendiri dari data terstruktur (bukan Mermaid, bukan gambar).
 * Posisi simpul disusun tangan agar muat satu layar tanpa menggulir.
 */
export const GRAPHS: GraphDef[] = [
  {
    id: 'g00',
    label: 'G0',
    title: 'Peta platform master',
    kind: 'Peta',
    bullets: [
      'Lima lapisan: dari lapangan sampai nilai',
      'Pengamatan mentah selalu naik',
      'Perintah selalu turun, terpusat',
    ],
    flow: g00,
  },
  {
    id: 'g01',
    label: 'G1',
    title: 'Tiga varian perangkat',
    kind: 'Banding',
    bullets: [
      'Satu platform, tiga varian',
      'Sensor sama, aksi menyesuaikan lahan',
      'Surya & seluler untuk lahan terpencil',
    ],
    flow: g01,
  },
  {
    id: 'g02',
    label: 'G2',
    title: 'Loop tertutup inti',
    kind: 'Kendali',
    bullets: [
      'Satu putaran mengunci kewajiban lama',
      'Perintah ber-ID, ack menutup putaran',
      'Dosis kecil, sering, terkoreksi',
    ],
    flow: g02,
  },
  {
    id: 'g02b',
    label: 'G2b',
    title: 'Loop tertutup ringkas',
    kind: 'Ringkas',
    bullets: [
      'Angka mentah naik, keputusan turun',
      'Ambang, kalibrasi, musim di server',
      'Konfirmasi menutup setiap putaran',
    ],
    flow: g02b,
  },
  {
    id: 'g03',
    label: 'G3',
    title: 'Pipa telemetri',
    kind: 'Pipa',
    bullets: [
      'Angka dan foto lewat jalur terpisah',
      'Kalibrasi per probe, per instalasi',
      'Ketelitian berasal dari alur data yang rapi',
    ],
    flow: g03,
  },
  {
    id: 'g04',
    label: 'G4',
    title: 'Siklus hidup perintah',
    kind: 'Sekuens',
    bullets: [
      'Setiap perintah punya identitas',
      'Antrean bertahan saat sinyal hilang',
      'Konfigurasi & klaim ikut aturan sama',
    ],
    flow: g04,
  },
  {
    id: 'g05',
    label: 'G5',
    title: 'Logika keputusan Floral Assistant',
    kind: 'Keputusan',
    bullets: [
      'Dua pintu: perlu lalu aman',
      'Musim & kalibrasi mengikat aturan',
      'Data langsung mengalahkan riwayat',
    ],
    flow: g05,
  },
  {
    id: 'g06',
    label: 'G6',
    title: 'Siklus hidup perangkat',
    kind: 'Status',
    bullets: [
      'Luring adalah keadaan normal',
      'Tetap sensor & aksi aman di perangkat',
      'Klaim & lepas klaim untuk armada',
    ],
    flow: g06,
  },
  {
    id: 'g07',
    label: 'G7',
    title: 'Topologi penyebaran',
    kind: 'Topologi',
    bullets: [
      'Tiga topologi untuk tiga kondisi',
      'Surya & seluler tanpa WiFi',
      'Cadangan lokal sinkron saat pulih',
    ],
    flow: g07,
  },
  {
    id: 'g08',
    label: 'G8',
    title: 'Hari petani lima menit',
    kind: 'Perjalanan',
    bullets: [
      'Kerja petani 45 menjadi 5 menit',
      'Satu ketukan langsung ke tindakan, bukan laporan',
      'Berakhir di panen & pendapatan',
    ],
    flow: g08,
  },
  {
    id: 'g09',
    label: 'G9',
    title: 'Model data konseptual',
    kind: 'Model data',
    bullets: [
      'Jejak lengkap tiap dosis & bacaan',
      'Dari pengguna sampai sensor, lalu kembali',
      'Akuntabilitas dari catatan yang utuh',
    ],
    flow: g09,
  },
  {
    id: 'g10',
    label: 'G10',
    title: 'Loop nilai',
    kind: 'Siklus',
    bullets: [
      'Hemat teknis berputar jadi nilai',
      'Air turun 42,8 persen, waktu 88,9 persen',
      'Daur ulang menutup putaran',
    ],
    flow: g10,
  },
  {
    id: 'g11',
    label: 'G11',
    title: 'Pipa produksi',
    kind: 'Produksi',
    bullets: [
      'Kualitas sudah ditentukan sebelum masuk lapangan',
      'Tiap unit ber-identitas & QC',
      'Umpan balik pasar jadi revisi',
    ],
    flow: g11,
  },
  {
    id: 'g12',
    label: 'G12',
    title: 'Mesin Pranata Mangsa',
    kind: 'Mesin musim',
    bullets: [
      'Riwayat & cuaca jadi konteks musim',
      'Bacaan kering selalu menang',
      'Kelebihan siram turun 78,6 persen',
    ],
    flow: g12,
  },
]
