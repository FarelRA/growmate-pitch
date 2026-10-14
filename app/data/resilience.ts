// Data halaman detail ketahanan: pasokan, daya tahan sensor, dan pelapis kayu.
// Dipakai SupplyDetail, DurabilityDetail, dan CoatingDetail (kind: resilience).

export interface KvRow {
  k: string
  v: string
}

export interface Step {
  icon: string
  title: string
  desc: string
}

export interface SupplyData {
  key: string
  lead: string
  stats: { month: string; value: string; units: string }[]
  causes: string[]
  steps: Step[]
  recover: { value: string; units: string; note: string }
  close: string
  source: string
}

export interface Point {
  icon: string
  title: string
  desc: string
}

export interface DurabilityData {
  key: string
  photo: { src: string; alt: string }
  agingTitle: string
  aging: string[]
  defenseTitle: string
  defenseTag: string
  points: Point[]
  citation: string
  badge: string
  badgeNote: string
  assumptions: string[]
}

export interface CoatingData {
  key: string
  photo: { src: string; alt: string }
  specTitle: string
  specs: KvRow[]
  reasonTitle: string
  reasons: string[]
  link: string
  source: string
}

export const SUPPLY: SupplyData = {
  key: 'supply',
  lead: 'Juli dan Agustus pendapatan turun dari Rp11,18 juta ke Rp9,69 juta karena komponen langka.',
  stats: [
    { month: 'Juli', value: 'Rp11,18 juta', units: '6 unit' },
    { month: 'Agustus', value: 'Rp9,69 juta', units: '6 unit' },
  ],
  causes: [
    'Raspberry Pi Zero W langka',
    'ESP32 langka',
    'Gelombang AI boom mendorong harga RAM dan perangkat berbasis RAM ikut naik',
  ],
  steps: [
    {
      icon: 'lucide:clipboard-check',
      title: 'Evaluasi akhir Agustus',
      desc: 'Akar masalah terpetakan: kekurangan bahan baku komponen kritikal.',
    },
    {
      icon: 'lucide:handshake',
      title: 'Perluasan kerjasama',
      desc: 'Kerja sama tambahan dengan pemasok dan distributor baru untuk jalur pasokan alternatif.',
    },
    {
      icon: 'lucide:badge-check',
      title: 'MoU harga di awal',
      desc: 'Harga komponen disepakati di awal periode lewat MoU sehingga biaya terkendali.',
    },
    {
      icon: 'lucide:package',
      title: 'Buffer stock',
      desc: 'Reorder point (ROP) dan safety stock komponen kritikal, komponen prioritas, evaluasi bulanan.',
    },
  ],
  recover: { value: 'Rp13,48 juta', units: '7 unit', note: 'rekor penjualan' },
  close: 'Pasokan berkelanjutan (sustainable supply) menjadi kunci pemulihan.',
  source: 'Analisis ketahanan pasokan GrowMate 2026.',
}

export const DURABILITY: DurabilityData = {
  key: 'durability',
  photo: {
    src: '/images/research/paper-ac-excitation.webp',
    alt: 'Halaman muka bab Advanced interfaces for resistive sensors karya Flammini dan Depari',
  },
  agingTitle: 'Mengapa akurasi menurun',
  aging: [
    'Sensor kelembapan resistif memompa arus ke tanah basah sepanjang umur pakai.',
    'Arus DC searah mengoksidasi elektroda dan menaikkan tahanan kontak.',
    'Bacaan bergeser dari kelembapan sebenarnya sebelum sensor rusak.',
  ],
  defenseTitle: 'AC Signal Excitation',
  defenseTag: 'Pertahanan',
  points: [
    {
      icon: 'lucide:activity',
      title: 'Eksitasi simetris bolak-balik',
      desc: 'Gelombang kotak simetris bolak-balik membuat muatan DC bersih per siklus mendekati nol, polarisasi dan drift tertahan.',
    },
    {
      icon: 'lucide:gauge',
      title: 'Interval bebas kapasitansi',
      desc: 'Rs = (T2 + T4) / (2 * G * Ci) dibaca pada interval yang tidak peka kapasitansi, gangguan kabel dan probe tertahan.',
    },
    {
      icon: 'lucide:badge-check',
      title: 'Bukti numerik',
      desc: 'Error relatif maksimum 1 persen pada ADC 16-bit dan kalibrasi WLMS 0,52 sampai 9,38 persen lintas 5 dekade.',
    },
    {
      icon: 'lucide:refresh-cw',
      title: 'Self-recalibration perangkat lunak',
      desc: 'Kalibrasi ulang otomatis mengkompensasi penuaan komponen antar servis.',
    },
  ],
  citation:
    'Sumber: Flammini & Depari (2018), Advanced interfaces for resistive sensors, Smart Sensors and MEMs (2nd ed.), Woodhead Publishing, hlm. 171-219, DOI 10.1016/B978-0-08-102055-5.00008-5',
  badge: 'Akurat 5-7 tahun',
  badgeNote: 'Probe DC telanjang: 1-3 tahun.',
  assumptions: ['Kalibrasi tahunan', 'Housing tersegel', 'Coating kayu', 'Elektroda terlindungi'],
}

export const COATING: CoatingData = {
  key: 'coating',
  photo: {
    src: '/images/research/biovarnish-clear-coat.webp',
    alt: 'Tangkapan halaman produk Biovarnish Clear Coat beserta tabel data teknis',
  },
  specTitle: 'Data teknis',
  specs: [
    { k: 'Tipe', v: 'Water-based acrylic' },
    { k: 'VOC', v: '< 50 gr/l' },
    { k: 'Keamanan', v: 'Non toxic, OSHA not hazardous' },
    { k: 'Kering sentuh', v: '±20 menit' },
    { k: 'Lapis', v: '2 lapis' },
    { k: 'Daya sebar', v: '±10 m²/kg' },
    { k: 'Harga', v: 'Rp125.000-130.000/kg' },
    { k: 'Pengencer', v: 'Air' },
  ],
  reasonTitle: 'Mengapa dipilih',
  reasons: [
    'Ramah lingkungan dan VOC rendah',
    'Tidak berbau menyengat saat diaplikasikan',
    'Aman dipegang, boks elektronik sering dipegang',
    'Tahan kelembapan sehingga kayu tidak lapuk',
  ],
  link: 'Pelapis Biovarnish dan AC Signal Excitation membentuk satu rantai daya tahan perangkat.',
  source:
    'Sumber: biopaint.id/produk-biovarnish/biovarnish-clear-coat. Uji lanjutan: angka gloss, uji UV, dan uji abrasi belum dipublikasikan.',
}
