// Payload halaman detail Floral Assistant: ekonomi langganan dan stack model.
// Seluruh angka berasal dari riset 9 Oktober 2026 yang tercatat di laporan
// ai-models (harga model, matematika biaya) dan data-finance (pelanggan,
// pendapatan, dan konversi langganan AI).

export interface AiFlag {
  v: string
  hot?: boolean
}

export interface AiRow {
  k: string
  v: string
  hot?: boolean
}

export interface AiCostRow {
  /** Skenario pemakaian per pengguna per bulan. */
  s: string
  /** Total token per bulan. */
  tok: string
  /** Biaya per pengguna per bulan. */
  cost: string
  /** Total biaya bila diterapkan ke 80 pengguna. */
  tot: string
  /** Tandai baris yang menembus anggaran. */
  bad?: boolean
}

export interface AiTile {
  v: string
  label: string
}

export interface AiEconData {
  stripLabel: string
  strip: AiFlag[]
  costTitle: string
  costs: AiCostRow[]
  costNote: string
  bizTitle: string
  biz: AiTile[]
  scaleLabel: string
  scale: AiFlag[]
  marketLabel: string
  market: string[]
  verdict: string
  footnote: string
}

export interface AiLimitData {
  priceLabel: string
  price: AiFlag[]
  stackTitle: string
  stack: AiRow[]
  quotaTitle: string
  quota: AiRow[]
  cheapTitle: string
  cheap: string[]
  guardTitle: string
  guard: string[]
  footnote: string
}

export const AI_ECON: AiEconData = {
  stripLabel: 'Ekonomi langganan',
  strip: [
    { v: 'langganan Rp9.000 / pengguna / bulan' },
    { v: 'biaya rata-rata Rp1.102' },
    { v: 'plafon Rp3.000' },
    { v: 'laba Rp6.000 • margin 200%', hot: true },
  ],
  costTitle: 'Biaya token per pengguna per bulan',
  costs: [
    { s: 'Rata-rata 5 chat per hari (150 chat)', tok: '255 ribu', cost: 'Rp1.102', tot: 'Rp88.160' },
    { s: 'Penuh 10 chat per hari (300 chat)', tok: '510 ribu', cost: 'Rp2.204', tot: 'Rp176.320' },
    { s: 'Sisi terburuk tanpa prompt cache, lebih 2%', tok: '750 ribu', cost: 'Rp3.064', tot: 'Rp245.120', bad: true },
    { s: 'Sisi terburuk dengan prompt cache', tok: '750 ribu', cost: 'Rp2.677', tot: 'Rp214.160' },
  ],
  costNote:
    'Anggaran Rp240.000 per bulan untuk 80 pengguna. Sisi terburuk tanpa prompt cache lebih 2%, dengan prompt cache 800 token turun ke Rp2.677 dan menyisakan Rp25.840.',
  bizTitle: 'Bisnis yang berjalan',
  biz: [
    { v: '22', label: 'pelanggan AI aktif sampai September 2026' },
    { v: '61,1%', label: 'konversi dari 36 pembeli perangkat keras' },
    { v: 'Rp0,68 jt', label: 'pendapatan AI kumulatif, basis akrual' },
  ],
  scaleLabel: 'Skala 80 pengguna',
  scale: [
    { v: 'Rp88.160 rata-rata' },
    { v: 'Rp214.160 dengan prompt cache' },
    { v: 'anggaran Rp240.000 / bulan' },
    { v: 'sisa Rp25.840', hot: true },
  ],
  marketLabel: 'Harga AI Oktober 2026',
  market: ['ChatGPT Plus Rp349.000', 'Google AI Pro Rp309.000', 'Google AI Plus Rp75.000'],
  verdict:
    'Floral Assistant murah karena dipakai untuk satu pekerjaan spesifik dengan kuota jelas, bukan asisten tak terbatas.',
  footnote:
    'dasar perhitungan: kurs Rp17.916 per US$1 (BI Jisdor, 8 Okt 2026) • harga API dibaca 9 Okt 2026 • 1.100 token input dan 600 token output per chat',
}

export const AI_LIMIT: AiLimitData = {
  priceLabel: 'Harga API per 1 juta token',
  price: [
    { v: 'US$0,10 input' },
    { v: 'US$0,50 output' },
    { v: 'blended Rp4.321 (kurs Rp17.916)' },
  ],
  stackTitle: 'Stack dan model',
  stack: [
    { k: 'Utama', v: 'Claude Haiku 5.5 (Anthropic)' },
    { k: 'Fallback', v: 'gpt-6-luna (OpenAI), harga identik' },
    { k: 'Parameter', v: 'jumlah tidak dipublikasikan vendor proprietary' },
    { k: 'Pilihan', v: 'harga token, hasil evaluasi, dan latensi' },
    { k: 'Jalur', v: 'Anthropic, AWS Bedrock, Google Vertex, Microsoft Foundry' },
  ],
  quotaTitle: 'Kuota dan limit',
  quota: [
    { k: 'Chat', v: '10 chat per pengguna per hari, fair use' },
    { k: 'Token', v: '23.000 token per pengguna per hari' },
    { k: 'Reset', v: 'kuota reset 00.00 WIB setiap hari' },
    { k: 'Plafon', v: 'Rp3.000 untuk seluruh penggunaan satu bulan', hot: true },
    { k: 'Bulanan', v: '650.000 token setara Rp2.809 tanpa cache' },
  ],
  cheapTitle: 'Kenapa bisa murah',
  cheap: [
    'Model kecil kelas lite: US$0,10 per 1 juta token input',
    'Prompt cache menghitung 800 token konteks dengan 0,1x harga input',
    'Kuota harian 10 chat dan 23.000 token membatasi biaya maksimal',
    'Batching dan efficient serving memberi diskon 50 persen, keluaran dibatasi 800 token',
  ],
  guardTitle: 'Kenapa perlu fallback',
  guard: [
    'Rilis 7 Okt 2026 untuk chat high-volume',
    'Indonesia ada di daftar negara yang didukung',
    'Harga Haiku pernah naik 5x, fallback wajib',
    'Memakai fallback dengan harga identik, anggaran tetap',
  ],
  footnote:
    'dasar perhitungan: prompt 1.100 token input dan 600 token output per chat • kuota dihitung di sisi aplikasi, bukan kuota penyedia',
}
