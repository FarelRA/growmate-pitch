import type { DgFlow } from './types'

/** G9: Model data konseptual: jejak tiap dosis dapat ditelusuri. */
export const g09: DgFlow = {
  w: 1240,
  h: 780,
  nodes: [
    { id: 'user', x: 510, y: 40, w: 220, h: 88, tone: 'people', icon: 'lucide:user', title: 'Pengguna', sub: 'petani • peran • kebun' },

    { id: 'device', x: 40, y: 190, w: 240, h: 140, tone: 'edge', icon: 'lucide:box', title: 'Perangkat', sub: 'pengguna • tipe Pods, Tech, Add-On • nomor seri • status' },
    { id: 'thread', x: 490, y: 190, w: 240, h: 88, tone: 'experience', icon: 'lucide:message-square', title: 'Utas chat', sub: 'pengguna • status' },
    { id: 'listing', x: 940, y: 190, w: 260, h: 88, tone: 'experience', icon: 'lucide:store', title: 'Etalase panen', sub: 'petani • kuantitas • status' },
    { id: 'message', x: 490, y: 310, w: 240, h: 88, tone: 'experience', icon: 'lucide:message-circle', title: 'Pesan chat', sub: 'utas • pengirim • isi' },

    { id: 'plant', x: 40, y: 440, w: 220, h: 124, tone: 'edge', icon: 'lucide:sprout', title: 'Tanaman', sub: 'perangkat • spesies • lokasi • jadwal' },
    { id: 'dose', x: 280, y: 440, w: 220, h: 108, tone: 'intelligence', icon: 'lucide:send', title: 'Dosis antre', sub: 'perangkat • jenis • status • ack' },
    { id: 'photo', x: 520, y: 440, w: 220, h: 88, tone: 'experience', icon: 'lucide:camera', title: 'Foto kebun', sub: 'perangkat • waktu • URL' },
    { id: 'clip', x: 760, y: 440, w: 220, h: 88, tone: 'experience', icon: 'lucide:video', title: 'Klip lapang', sub: 'perangkat • waktu • URL' },
    { id: 'calib', x: 1000, y: 440, w: 220, h: 108, tone: 'edge', icon: 'lucide:gauge', title: 'Kalibrasi probe', sub: 'perangkat • nilai mentah • hasil' },

    { id: 'reading', x: 40, y: 630, w: 300, h: 108, tone: 'transport', icon: 'lucide:activity', title: 'Bacaan sensor', sub: 'perangkat • waktu • jenis • nilai' },
    { id: 'plan', x: 380, y: 630, w: 260, h: 88, tone: 'intelligence', icon: 'lucide:calendar', title: 'Rencana jadwal', sub: 'tanaman • musim • status' },
  ],
  edges: [
    { id: 'r1', points: [[620, 128], [620, 158], [160, 158], [160, 190]], tone: 'people', dashed: true, noArrow: true, label: 'miliki' },
    { id: 'r2', points: [[600, 128], [610, 190]], tone: 'people', dashed: true, noArrow: true, label: 'buka' },
    { id: 'r3', points: [[640, 128], [1070, 190]], tone: 'people', dashed: true, noArrow: true, label: 'jual' },
    { id: 'r4', points: [[610, 278], [610, 310]], tone: 'experience', dashed: true, noArrow: true, label: 'berisi' },
    { id: 'r5', points: [[150, 330], [150, 440]], tone: 'edge', dashed: true, noArrow: true, label: 'tuan rumah' },
    { id: 'r6', points: [[220, 330], [330, 440]], tone: 'intelligence', dashed: true, noArrow: true, label: 'antre' },
    { id: 'r7', points: [[270, 330], [630, 440]], tone: 'experience', dashed: true, noArrow: true, label: 'ambil', labelAt: [560, 418] },
    { id: 'r8', points: [[300, 330], [870, 440]], tone: 'experience', dashed: true, noArrow: true, label: 'rekam', labelAt: [760, 418] },
    { id: 'r9', points: [[320, 330], [1110, 440]], tone: 'edge', dashed: true, noArrow: true, label: 'kalibrasi', labelAt: [900, 418] },
    { id: 'r10', points: [[150, 564], [150, 630]], tone: 'transport', dashed: true, noArrow: true, label: 'hasilkan' },
    { id: 'r11', points: [[230, 564], [510, 630]], tone: 'intelligence', dashed: true, noArrow: true, label: 'ikuti' },
  ],
}

/** G10: Loop nilai: hemat teknis berputar menjadi alasan membeli. */
export const g10: DgFlow = {
  w: 1240,
  h: 640,
  nodes: [
    { id: 'sub', x: 440, y: 30, w: 360, h: 48, tone: 'people', shape: 'pill', icon: 'lucide:repeat', title: 'Berlangganan: mulai 20, naik bertahap' },
    { id: 'win', x: 440, y: 110, w: 360, h: 130, tone: 'people', icon: 'lucide:trending-up', title: 'Keberhasilan petani', sub: 'air turun 42,8% • nutrisi 27,4% • energi 25% • waktu 88,9% • hidup 72 ke 94%' },

    { id: 'sell', x: 60, y: 300, w: 240, h: 96, tone: 'edge', icon: 'lucide:shopping-cart', title: 'Penjualan & paket', sub: 'perangkat + langganan' },
    { id: 'market', x: 880, y: 290, w: 280, h: 96, tone: 'experience', icon: 'lucide:store', title: 'Pasar hasil', sub: 'hasil segar & nilai tambah' },
    { id: 'comm', x: 440, y: 440, w: 280, h: 96, tone: 'people', icon: 'lucide:users', title: 'Komunitas & tips', sub: 'petani saling belajar' },
    { id: 'recycle', x: 60, y: 460, w: 240, h: 96, tone: 'edge', icon: 'lucide:recycle', title: 'Daur ulang', sub: 'unit bekas kembali dirakit' },
    { id: 'outcome', x: 840, y: 460, w: 340, h: 96, tone: 'people', icon: 'lucide:globe', title: 'Planet, profit, people', sub: 'purpose dalam satu putaran' },
  ],
  edges: [
    { id: 'v1', points: [[620, 78], [620, 110]], tone: 'people', flow: true },
    { id: 'v2', points: [[180, 300], [180, 262], [440, 262], [440, 190]], tone: 'people', flow: true, label: 'terbukti' },
    { id: 'v3', points: [[800, 180], [1020, 290]], tone: 'experience', flow: true, label: 'panen' },
    { id: 'v4', points: [[880, 338], [720, 488]], tone: 'people', flow: true, label: 'pendapatan' },
    { id: 'v5', points: [[440, 488], [60, 348]], tone: 'people', flow: true, label: 'pertumbuhan', labelAt: [355, 430] },
    { id: 'v6', points: [[180, 396], [180, 460]], tone: 'edge', label: 'tak layak' },
    { id: 'v7', points: [[300, 508], [370, 508], [370, 348], [300, 348]], tone: 'edge', dashed: true, label: 'direstorasi', labelAt: [385, 385] },
    { id: 'v8', points: [[1020, 386], [1010, 460]], tone: 'people' },
    { id: 'v9', points: [[720, 488], [840, 508]], tone: 'people' },
    { id: 'v10', points: [[180, 556], [180, 600], [1010, 600], [1010, 556]], tone: 'edge', dashed: true },
  ],
}

/** G11: Pipa produksi: kualitas lahir sebelum lapangan. */
export const g11: DgFlow = {
  w: 1240,
  h: 620,
  groups: [
    { id: 'pre', label: 'PRA-PRODUKSI', x: 30, y: 30, w: 270, h: 520, tone: 'people' },
    { id: 'make', label: 'PRODUKSI', x: 330, y: 30, w: 270, h: 520, tone: 'transport' },
    { id: 'prove', label: 'PEMBUKTIAN', x: 630, y: 30, w: 270, h: 520, tone: 'intelligence' },
    { id: 'market', label: 'PASAR & UMPAN BALIK', x: 930, y: 30, w: 280, h: 380, tone: 'experience' },
  ],
  nodes: [
    { id: 'p1', x: 50, y: 70, w: 230, h: 80, tone: 'people', icon: 'lucide:calendar-range', title: 'Musim & aturan', sub: 'tabel pranata matang' },
    { id: 'p2', x: 50, y: 166, w: 230, h: 80, tone: 'people', icon: 'lucide:cpu', title: 'Firmware', sub: 'diuji di lapang' },
    { id: 'p3', x: 50, y: 262, w: 230, h: 80, tone: 'people', icon: 'lucide:box', title: 'Casing', sub: 'rapat & tahan cuaca' },
    { id: 'p4', x: 50, y: 358, w: 230, h: 80, tone: 'people', icon: 'lucide:layout-dashboard', title: 'Dasbor & chat', sub: 'siap dipakai' },

    { id: 'm1', x: 350, y: 70, w: 230, h: 76, tone: 'transport', icon: 'lucide:wrench', title: 'Rakit unit', sub: 'ikuti daftar perakitan' },
    { id: 'm2', x: 350, y: 158, w: 230, h: 76, tone: 'transport', icon: 'lucide:book-open', title: 'Buku identitas', sub: 'ID & riwayat unit' },
    { id: 'm3', x: 350, y: 246, w: 230, h: 76, tone: 'transport', icon: 'lucide:camera', title: 'Foto awal', sub: 'bukti kondisi' },
    { id: 'm4', x: 350, y: 334, w: 230, h: 76, tone: 'transport', icon: 'lucide:droplets', title: 'Uji pompa', sub: '24 jam nonstop' },
    { id: 'm5', x: 350, y: 422, w: 230, h: 76, tone: 'transport', icon: 'lucide:package', title: 'Kemas', sub: 'siap dikirim' },

    { id: 'q1', x: 650, y: 70, w: 230, h: 76, tone: 'intelligence', icon: 'lucide:gauge', title: 'Kalibrasi probe', sub: 'mentah → persen' },
    { id: 'q2', x: 650, y: 158, w: 230, h: 76, tone: 'intelligence', icon: 'lucide:shield-check', title: 'Ambang', sub: 'diuji per skenario' },
    { id: 'q3', x: 650, y: 246, w: 230, h: 76, tone: 'intelligence', icon: 'lucide:wrench', title: 'Aktuator', sub: 'pompa, katup, lampu' },
    { id: 'q4', x: 650, y: 334, w: 230, h: 76, tone: 'intelligence', icon: 'lucide:cloud-rain', title: 'Simulasi hujan', sub: 'jeda & kirim ulang' },
    { id: 'q5', x: 650, y: 422, w: 230, h: 76, tone: 'intelligence', icon: 'lucide:clipboard-check', title: 'Lembar QC', sub: 'tanda terima' },

    { id: 's1', x: 950, y: 70, w: 240, h: 76, tone: 'experience', icon: 'lucide:package', title: 'Kemasan', sub: 'petunjuk singkat' },
    { id: 's2', x: 950, y: 158, w: 240, h: 76, tone: 'experience', icon: 'lucide:store', title: 'Etalase & demo', sub: 'siap dijual' },
    { id: 's3', x: 950, y: 246, w: 240, h: 76, tone: 'experience', icon: 'lucide:shield', title: 'Garansi', sub: 'ganti unit rusak' },
    { id: 's4', x: 950, y: 334, w: 240, h: 76, tone: 'experience', icon: 'lucide:refresh-cw', title: 'Umpan balik', sub: 'revisi produk' },
  ],
  edges: [
    { id: 'w1', points: [[280, 110], [350, 108]], tone: 'people' },
    { id: 'w2', points: [[280, 206], [350, 108]], tone: 'people' },
    { id: 'w3', points: [[280, 302], [350, 108]], tone: 'people' },
    { id: 'w4', points: [[280, 398], [350, 108]], tone: 'people' },

    { id: 'x1', points: [[465, 146], [465, 158]], tone: 'transport', flow: true },
    { id: 'x2', points: [[465, 234], [465, 246]], tone: 'transport', flow: true },
    { id: 'x3', points: [[465, 322], [465, 334]], tone: 'transport', flow: true },
    { id: 'x4', points: [[465, 410], [465, 422]], tone: 'transport', flow: true },

    { id: 'y1', points: [[580, 108], [650, 108]], tone: 'intelligence' },
    { id: 'y2', points: [[580, 196], [650, 196]], tone: 'intelligence' },
    { id: 'y3', points: [[580, 284], [650, 284]], tone: 'intelligence' },
    { id: 'y4', points: [[580, 372], [650, 372]], tone: 'intelligence' },
    { id: 'y5', points: [[580, 460], [650, 460]], tone: 'intelligence' },

    { id: 'z1', points: [[765, 146], [765, 158]], tone: 'intelligence', flow: true },
    { id: 'z2', points: [[765, 234], [765, 246]], tone: 'intelligence', flow: true },
    { id: 'z3', points: [[765, 322], [765, 334]], tone: 'intelligence', flow: true },
    { id: 'z4', points: [[765, 410], [765, 422]], tone: 'intelligence', flow: true },

    { id: 'v1', points: [[880, 460], [930, 460], [930, 108], [950, 108]], tone: 'experience', flow: true },
    { id: 'v2', points: [[1070, 146], [1070, 158]], tone: 'experience', flow: true },
    { id: 'v3', points: [[1070, 234], [1070, 246]], tone: 'experience', flow: true },
    { id: 'v4', points: [[1070, 322], [1070, 334]], tone: 'experience', flow: true },
    { id: 'back', points: [[1070, 410], [1070, 580], [155, 580], [155, 550]], tone: 'people', dashed: true, label: 'revisi berikutnya', labelAt: [600, 580] },
  ],
}

/** G12: Mesin Pranata Mangsa: riwayat dan cuaca menjadi konteks musim. */
export const g12: DgFlow = {
  w: 1240,
  h: 520,
  groups: [
    { id: 'engine', label: 'MESIN MUSIM', x: 330, y: 30, w: 380, h: 444, tone: 'intelligence' },
  ],
  nodes: [
    { id: 'history', x: 30, y: 70, w: 250, h: 96, tone: 'transport', icon: 'lucide:activity', title: 'Riwayat bacaan', sub: 'suhu, kelembapan, hujan' },
    { id: 'weather', x: 30, y: 200, w: 250, h: 96, tone: 'intelligence', icon: 'lucide:cloud-sun', title: 'Cuaca nasional', sub: 'prakiraan & curah hujan' },
    { id: 'mangsa', x: 30, y: 330, w: 250, h: 96, tone: 'people', icon: 'lucide:calendar', title: 'Pranata Mangsa', sub: 'kalender tahun Jawa' },

    { id: 'norm', x: 350, y: 70, w: 340, h: 80, tone: 'intelligence', icon: 'lucide:sliders-horizontal', title: 'Normalisasi', sub: 'riwayat dibandingkan' },
    { id: 'mode', x: 350, y: 170, w: 340, h: 80, tone: 'intelligence', icon: 'lucide:calendar-range', title: 'Mode musim', sub: 'kepekaan menyesuaikan' },
    { id: 'decision', x: 350, y: 270, w: 340, h: 100, tone: 'intelligence', icon: 'lucide:brain', title: 'Keputusan musim', sub: 'bacaan kering tetap menang' },
    { id: 'conflict', x: 350, y: 390, w: 340, h: 64, tone: 'interlock', shape: 'pill', title: 'Konflik: menang bacaan langsung' },

    { id: 'out-dose', x: 760, y: 70, w: 450, h: 110, tone: 'edge', icon: 'lucide:droplets', title: 'Dosis disesuaikan', sub: 'lebih kecil, lebih sering, lebih tepat' },
    { id: 'out-water', x: 760, y: 210, w: 450, h: 110, tone: 'experience', icon: 'lucide:trending-down', title: 'Kelebihan siram turun 78,6 persen', sub: 'hasil uji lapangan' },
    { id: 'out-health', x: 760, y: 350, w: 450, h: 110, tone: 'people', icon: 'lucide:heart-pulse', title: 'Kesehatan tanaman naik 27,9 persen', sub: 'indeks gabungan' },
  ],
  edges: [
    { id: 'e1', points: [[280, 118], [350, 110]], tone: 'transport', flow: true },
    { id: 'e2', points: [[280, 248], [350, 210]], tone: 'intelligence', flow: true },
    { id: 'e3', points: [[280, 378], [350, 210]], tone: 'people', flow: true },
    { id: 'e4', points: [[520, 150], [520, 170]], tone: 'intelligence', flow: true },
    { id: 'e5', points: [[520, 250], [520, 270]], tone: 'intelligence', flow: true },
    { id: 'e6', points: [[520, 370], [520, 390]], tone: 'interlock', dashed: true },
    { id: 'e7', points: [[690, 320], [760, 125]], tone: 'edge', flow: true, label: 'hasil' },
    { id: 'e8', points: [[690, 320], [760, 265]], tone: 'experience', flow: true },
    { id: 'e9', points: [[690, 320], [760, 405]], tone: 'people', flow: true },
  ],
}
