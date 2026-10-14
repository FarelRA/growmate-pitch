// Lapisan rahasia deck: detail produk, detail tiap layar aplikasi, dan
// seluruh grafik platform. Hanya muncul setelah tombol H ditekan.

export type HiddenKind = 'product' | 'app' | 'website' | 'graph' | 'econ' | 'order' | 'lab' | 'dist' | 'resilience' | 'ai' | 'risk'

export interface HiddenSection {
  id: string
  kind: HiddenKind
  /** Kunci payload: kunci produk, kunci layar aplikasi, atau id grafik. */
  ref: string
  kicker: string
  title: string
  sub: string
}

export interface SpecRow {
  k: string
  v: string
}

export interface ProductDetail {
  key: string
  code: string
  name: string
  src: string
  alt: string
  audience: string
  specs: SpecRow[]
  senses: string[]
  commands: string[]
}

export const PRODUCTS: Record<string, ProductDetail> = {
  pods: {
    key: 'pods',
    code: 'P-PODS',
    name: 'Pods',
    src: '/images/bedah/bedah-pods.webp',
    alt: 'Pods GrowMate dengan lampu tumbuh dan bunga soka',
    audience: 'Ruang kota yang sempit: meja kerja, teras, dan rak di dalam ruangan.',
    specs: [
      { k: 'Harga', v: 'Rp803.000' },
      { k: 'Ukuran', v: '20 x 10 x 30 cm' },
      { k: 'Daya', v: 'USB-C plus UPS 4.230 mAh' },
      { k: 'Otak', v: 'ESP32-CAM, ESP32-S dengan PSRAM' },
      { k: 'Jaringan', v: 'WiFi 2,4 GHz' },
      { k: 'Gambar', v: 'OV2640 tiap 900 detik' },
    ],
    senses: ['Tanah', 'Cahaya', 'Level tangki', 'Udara', 'Suhu', 'Kamera'],
    commands: ['Pompa siram dosis 30 detik', 'Lampu tumbuh terkunci 24 jam'],
  },
  tech: {
    key: 'tech',
    code: 'P-TECH',
    name: 'Tech',
    src: '/images/bedah/bedah-tech.webp',
    alt: 'Boks kayu Tech dengan kamera dan konektor',
    audience: 'Lahan terbuka dengan irigasi kompleks dan jaringan tersedia.',
    specs: [
      { k: 'Harga', v: 'Rp2.083.000' },
      { k: 'Ukuran', v: '30 x 32 x 32 cm' },
      { k: 'Daya', v: 'Buck 5V dan 3V3, relai beban besar' },
      { k: 'Otak', v: 'Komputer edge plus kamera CSI OV5647' },
      { k: 'Jaringan', v: 'WiFi 2,4 GHz' },
      { k: 'Jangkauan', v: 'Sampai 1 hektar' },
    ],
    senses: ['Tanah', 'Cahaya', 'Level tangki nutrisi', 'Udara', 'Suhu', 'Arus ACS', 'Kamera CSI'],
    commands: ['Pompa siram', 'Katup dan pompa pupuk', 'Katup dan pompa pestisida', 'Relai beban besar'],
  },
  addon: {
    key: 'addon',
    code: 'P-ADDON',
    name: 'Tech Add-on',
    src: '/images/bedah/bedah-addon.webp',
    alt: 'Tech Add-on berpanel surya di atas boks kayu',
    audience: 'Lahan tanpa listrik dan tanpa jaringan tetap, dioperasikan pada siang hari.',
    specs: [
      { k: 'Harga', v: 'Rp2.409.000' },
      { k: 'Ukuran', v: '30 x 32 x 32 cm plus panel surya' },
      { k: 'Daya', v: 'Surya, MPPT, dan baterai dalam boks' },
      { k: 'Otak', v: 'Sama dengan Tech, arus membaca baterai' },
      { k: 'Jaringan', v: 'Modem LTE kartu SIM' },
      { k: 'Operasi', v: 'Siang hari, tanpa listrik dan tanpa WiFi' },
    ],
    senses: ['Tanah', 'Cahaya', 'Level tangki nutrisi', 'Udara', 'Suhu', 'Arus baterai', 'Kamera CSI'],
    commands: ['Pompa siram', 'Katup dan pompa pupuk', 'Katup dan pompa pestisida', 'Relai beban besar'],
  },
}

export interface AppDetail {
  key: string
  title: string
  src: string
  alt: string
  lead: string
  sees: SpecRow[]
  chips: string[]
}

export const APPS: Record<string, AppDetail> = {
  ringkasan: {
    key: 'ringkasan',
    title: 'Ringkasan',
    src: '/images/ui/app-dash.webp',
    alt: 'Ringkasan bacaan sensor langsung di aplikasi GrowMate',
    lead: 'Satu layar untuk melihat kondisi tanaman dan perangkat secara langsung tanpa membuka halaman lain.',
    sees: [
      { k: 'Kartu kesehatan', v: 'Status GOOD HEALTH pada tanaman yang sedang dipantau.' },
      { k: 'Sinyal tanaman langsung', v: 'Kelembapan tanah 100 persen dengan target maksimum 85 persen.' },
      { k: 'Riwayat bacaan', v: 'Grafik per kanal untuk melihat tren sebelum menyiram.' },
      { k: 'Navigasi cepat', v: 'Perawatan, Perangkat, dan Riwayat dalam satu ketukan.' },
    ],
    chips: ['6 kanal sensor live', 'Target per kanal', 'Riwayat harian'],
  },
  perawatan: {
    key: 'perawatan',
    title: 'Perawatan',
    src: '/images/ui/app-rawat.webp',
    alt: 'Rutinitas perawatan di aplikasi GrowMate',
    lead: 'Rutinitas terpandu dari tanam sampai panen, lengkap dengan kontrol manual untuk saat Anda ingin bertindak sendiri.',
    sees: [
      { k: 'Kontrol perawatan', v: 'Aktifkan atau matikan otomasi, jalankan aksi manual, dan kelola perawatan berulang.' },
      { k: 'Penyiraman otomatis', v: 'Sakelar profil penyiraman yang telah dikonfigurasi.' },
      { k: 'Pencahayaan otomatis', v: 'Sakelar lampu tumbuh mengikuti jadwal cerdas.' },
      { k: 'Aksi cepat', v: 'Siram sekarang dan Matikan lampu tanpa menunggu jadwal.' },
      { k: 'Jadwal', v: 'Rutinitas perawatan berikutnya beserta waktunya.' },
    ],
    chips: ['Otomasi plus manual', 'Profil per tanaman', 'Jadwal berulang'],
  },
  pasar: {
    key: 'pasar',
    title: 'Pasar',
    src: '/images/ui/app-pasar.webp',
    alt: 'Pasar perlengkapan dan panen di aplikasi GrowMate',
    lead: 'Etalase resmi dan lapak komunitas untuk perlengkapan dan hasil panen dalam satu daftar.',
    sees: [
      { k: 'Judul etalase', v: 'Perlengkapan GrowMate dan panen komunitas dalam satu daftar.' },
      { k: 'Produk resmi', v: 'Contoh GrowMate Pods seharga Rp780.500 per item dengan lencana Shopee.' },
      { k: 'Listing komunitas', v: 'Penjual komunitas memajang hasil panen sendiri.' },
      { k: 'Jalur transaksi', v: 'Pembeli menghubungi penjual, pembayaran di luar platform.' },
    ],
    chips: ['Produk resmi', 'Lapak komunitas', 'Tautan Shopee dan WhatsApp'],
  },
  komunitas: {
    key: 'komunitas',
    title: 'Komunitas',
    src: '/images/ui/app-komunitas.webp',
    alt: 'Feed komunitas pengguna di aplikasi GrowMate',
    lead: 'Feed tempat pengguna berbagi hasil, bertanya, dan menaikkan peringkat sesama growers.',
    sees: [
      { k: 'Feed postingan', v: 'Contoh unggahan Tanaman Tomat beserta waktu publikasinya.' },
      { k: 'Reaksi dan komentar', v: 'Jumlah suka dan kolom komentar pada tiap unggahan.' },
      { k: 'Buat Postingan', v: 'Unggah kabar tanaman dalam dua ketukan.' },
      { k: 'Kolom komentar', v: 'Tulis komentar untuk membantu sesama grower.' },
    ],
    chips: ['Feed dan reaksi', 'Komentar', 'Papan peringkat growers'],
  },
  asisten: {
    key: 'asisten',
    title: 'Floral Assistant',
    src: '/images/ui/app-asisten.webp',
    alt: 'Floral Assistant menjawab di aplikasi GrowMate',
    lead: 'Percakapan dengan agen AI di aplikasi: gejala tanaman, dosis, dan langkah perawatan.',
    sees: [
      { k: 'Percakapan', v: 'Riwayat dialog dengan Floral Assistant dalam balon chat.' },
      { k: 'Reset percakapan', v: 'Mulai ulang percakapan dari awal kapan pun.' },
      { k: 'Tanya apa saja', v: 'Ketik gejala atau pertanyaan seperti Tanyakan apa saja kepada mentor Anda.' },
      { k: 'Kirim', v: 'Tombol kirim di sudut bawah percakapan.' },
    ],
    chips: ['Jawaban berbasis aturan', 'Dosis dan langkah', 'Konteks perangkat aktif'],
  },
  pustaka: {
    key: 'pustaka',
    title: 'Pustaka Tanaman',
    src: '/images/ui/app-tanam.webp',
    alt: 'Pustaka tanaman di aplikasi GrowMate',
    lead: 'Profil tiap tanaman beserta batas perawatan yang dikelola server, bukan disimpan mati di ponsel.',
    sees: [
      { k: 'Profil tanaman', v: 'Contoh Kemangi, Ocimum basilicum var. citriodorum, berlabel MUDAH.' },
      { k: 'Uraian perawatan', v: 'Ringkasan sifat tumbuh dan cara pakainya.' },
      { k: 'Batas hidup', v: 'Air 60 persen dan Cahaya 60 persen sebagai ambang panduan.' },
      { k: 'Fase tumbuh', v: 'Status Mulai di Dormansi benih beserta aksi lanjutannya.' },
    ],
    chips: ['Profil per fase', 'Ambang air dan cahaya', 'Sesuai musim Pranata Mangsa'],
  },
}

export interface WebsiteDetail {
  key: string
  url: string
  lead: string
  desktop: { src: string; alt: string }
  mobile: { src: string; alt: string }
  sees: SpecRow[]
  chips: string[]
}

export const WEBSITE: Record<string, WebsiteDetail> = {
  beranda: {
    key: 'beranda',
    url: 'growmate.bond',
    lead: 'Beranda menyambut pengunjung dengan pesan yang sama seperti deck. Desktop menata teks di kiri dan mozaik di kanan, mobile menumpukkannya di atas teks.',
    desktop: { src: '/images/ui/gtm-situs.webp', alt: 'Beranda situs growmate.bond versi desktop' },
    mobile: { src: '/images/ui/gtm-situs-mobile.webp', alt: 'Beranda situs growmate.bond versi mobile' },
    sees: [
      { k: 'Bilah navigasi', v: 'Lima menu plus ikon cari, akun, dan keranjang di ujung kanan.' },
      { k: 'Judul dan ajakan', v: 'Petani makmur, tanpa lumpur, dengan tombol Jelajahi Produk dan Mulai dengan GrowMate.' },
      { k: 'Mozaik produk', v: 'Empat foto Pods, Tech, tomat, dan kemangi di samping teks pada desktop.' },
      { k: 'Tata letak mobile', v: 'Mozaik naik ke atas teks dan navigasi menjadi tombol tiga garis.' },
    ],
    chips: ['Desktop dan mobile', 'Satu ajakan yang sama', 'Tata letak menyesuaikan layar'],
  },
}

export const HIDDEN_SECTIONS: HiddenSection[] = [
  { id: 'h-pods', kind: 'product', ref: 'pods', kicker: 'Detail Produk • Pods', title: 'Pods dari dekat', sub: 'Spesifikasi, kanal sensor, perintah, dan seluruh bagian dalam satu halaman.' },
  { id: 'h-tech', kind: 'product', ref: 'tech', kicker: 'Detail Produk • Tech', title: 'Tech dari dekat', sub: 'Unit lapang: daya, jangkauan, dan tujuh kanal sensor untuk irigasi kompleks.' },
  { id: 'h-addon', kind: 'product', ref: 'addon', kicker: 'Detail Produk • Add-on', title: 'Add-on dari dekat', sub: 'Varian mandiri bertenaga surya dan seluler untuk lahan tanpa listrik dan tanpa WiFi.' },
  { id: 'h-kalibrasi', kind: 'lab', ref: 'kalibrasi', kicker: 'Lab • Kalibrasi', title: 'Kalibrasi sensor per varian', sub: 'Lima tab poin: Pods 35 titik, Tech dan Add-on 42 titik, plus lapisan Floral dan konteks Mangsa.' },
  { id: 'h-app-ringkasan', kind: 'app', ref: 'ringkasan', kicker: 'Aplikasi • Ringkasan', title: 'Layar Ringkasan', sub: 'Setiap elemen layar utama dijelaskan satu per satu.' },
  { id: 'h-app-perawatan', kind: 'app', ref: 'perawatan', kicker: 'Aplikasi • Perawatan', title: 'Layar Perawatan', sub: 'Otomasi, aksi manual, dan jadwal yang tersedia di layar ini.' },
  { id: 'h-app-pasar', kind: 'app', ref: 'pasar', kicker: 'Aplikasi • Pasar', title: 'Layar Pasar', sub: 'Etalase resmi dan lapak komunitas beserta jalur transaksinya.' },
  { id: 'h-app-komunitas', kind: 'app', ref: 'komunitas', kicker: 'Aplikasi • Komunitas', title: 'Layar Komunitas', sub: 'Feed, reaksi, komentar, dan papan peringkat para growers.' },
  { id: 'h-app-asisten', kind: 'app', ref: 'asisten', kicker: 'Aplikasi • Floral Assistant', title: 'Layar Floral Assistant', sub: 'Percakapan AI untuk gejala tanaman, dosis, dan langkah perawatan.' },
  { id: 'h-app-pustaka', kind: 'app', ref: 'pustaka', kicker: 'Aplikasi • Pustaka Tanaman', title: 'Layar Pustaka Tanaman', sub: 'Profil tiap tanaman beserta batas perawatan yang dikelola server.' },
  { id: 'h-web', kind: 'website', ref: 'beranda', kicker: 'Platform Digital • Situs', title: 'Beranda growmate.bond', sub: 'Halaman pendaratan versi desktop dan mobile, dijelaskan bagian per bagian.' },
  { id: 'h-econ-unit', kind: 'econ', ref: 'unit', kicker: 'Keuangan • Ekonomi Unit', title: 'Ekonomi unit tiga lini', sub: 'Harga, HPP, BEP, ROI, payback, NPV, BCR, dan laba tahunan tiap varian serta langganan AI.' },
  { id: 'h-econ-invest', kind: 'econ', ref: 'invest', kicker: 'Keuangan • Proyeksi Investasi', title: 'Kebutuhan, pengembalian, dan proyeksi modal', sub: 'Kebutuhan Rp15,5 jt, pengembalian Rp42,95 jt per tahun, lalu tingkat Rp10 sampai Rp100 jt per tahun.' },
  { id: 'h-econ-month', kind: 'econ', ref: 'econ-month', kicker: 'Analisis Keuangan • Bulanan', title: 'Keuangan Bulanan', sub: 'Pendapatan, beban, laba, dan angka kumulatif Januari sampai September 2026 dalam satu tabel.' },
  { id: 'h-econ-sales', kind: 'econ', ref: 'econ-sales', kicker: 'Analisis Keuangan • Penjualan', title: 'Penjualan per Produk', sub: 'Kontribusi tiap varian, unit per bulan, dan langganan AI dalam satu halaman.' },
  { id: 'h-order-orang', kind: 'order', ref: 'orang', kicker: 'Pesanan • Orang', title: 'Berapa orang, berapa unit per bulan', sub: 'Satu orang-bulan = 7 Pods, atau 2 sampai 3 Tech, atau 2 sampai 3 Add-on, atau campuran se garisnya.' },
  { id: 'h-order-waktu', kind: 'order', ref: 'waktu', kicker: 'Pesanan • Waktu', title: 'Berapa lama 100 unit', sub: 'Bulan kirim tiap kru untuk campuran A, B, dan C dari total orang-bulan dibagi orang.' },
  { id: 'h-order-campuran', kind: 'order', ref: 'campuran', kicker: 'Pesanan • Campuran', title: 'Isi pesanan 100 unit', sub: 'Rincian unit, orang-bulan, pendapatan, dan laba kotor tiap campuran, plus pesanan kecil yang siap dilayani.' },
  { id: 'h-order-cara', kind: 'order', ref: 'cara', kicker: 'Pesanan • Cara kerja', title: 'Cara kerja pesanan besar', sub: 'Aturan orang-bulan, lini terberat dulu, batch, dan kalender kru.' },
  { id: 'h-konsinyasi', kind: 'dist', ref: 'konsinyasi', kicker: 'Distribusi • Konsinyasi', title: 'Efektivitas Konsinyasi', sub: 'Capaian dua toko Mulyo Tani dan Utama Elektronik terhadap target 8 unit per toko.' },
  { id: 'h-supply', kind: 'resilience', ref: 'supply', kicker: 'Ketahanan Operasi • Pasokan', title: 'Ketahanan Pasokan', sub: 'Momen Juli dan Agustus, empat langkah mitigasi, dan pemulihan rekor pada September.' },
  { id: 'h-durability', kind: 'resilience', ref: 'durability', kicker: 'Ketahanan Operasi • Sensor', title: 'Daya Tahan Sensor', sub: 'Mengapa akurasi menurun, bagaimana AC Signal Excitation menahannya, dan berapa lama perangkat bertahan.' },
  { id: 'h-coating', kind: 'resilience', ref: 'coating', kicker: 'Ketahanan Operasi • Pelapis', title: 'Pelapis Biovarnish Clear Coat', sub: 'Spesifikasi water-based, alasan memilihnya, dan perannya menjaga boks kayu dari kelembapan.' },
  { id: 'h-ai-econ', kind: 'ai', ref: 'econ', kicker: 'Floral Assistant • Ekonomi', title: 'Ekonomi Floral Assistant', sub: 'Langganan, biaya token tiap pengguna, batas anggaran, dan pendapatan yang tercatat.' },
  { id: 'h-ai-stack', kind: 'ai', ref: 'stack', kicker: 'Floral Assistant • Stack', title: 'Daftar model dan kuota', sub: 'Model utama dan fallback, harga API, batas harian, dan alasan biayanya rendah.' },
  { id: 'h-risk-matrix', kind: 'risk', ref: 'risk-matrix', kicker: 'Manajemen Risiko • Matriks', title: 'Matriks analisis risiko', sub: 'Sembilan risiko utama, skor dampak dikali kemungkinan, dan mitigasi tiap risiko.' },
  { id: 'h-risk-mitigasi', kind: 'risk', ref: 'risk-analysis', kicker: 'Manajemen Risiko • Analisis Mitigasi', title: 'Analisis mitigasi risiko', sub: 'Sembilan risiko, langkah mitigasi tiap risiko, dan estimasi skor sisa setelah mitigasi dijalankan.' },
  { id: 'h-g00', kind: 'graph', ref: 'g00', kicker: 'Grafik Platform • G0', title: 'Peta platform master', sub: 'Satu gambar untuk pendatang baru: pengamatan naik, keputusan turun, nilai berputar.' },
  { id: 'h-g01', kind: 'graph', ref: 'g01', kicker: 'Grafik Platform • G1', title: 'Tiga varian perangkat', sub: 'Bedanya ruang dan infrastruktur, bukan bedanya platform.' },
  { id: 'h-g02', kind: 'graph', ref: 'g02', kicker: 'Grafik Platform • G2', title: 'Loop tertutup inti', sub: 'Siklus sense, decide, actuate tiap 15 sampai 60 detik.' },
  { id: 'h-g02b', kind: 'graph', ref: 'g02b', kicker: 'Grafik Platform • G2b', title: 'Loop tertutup ringkas', sub: 'Versi horizontal yang ringkas, otak Floral Assistant dibuka di tengah.' },
  { id: 'h-g03', kind: 'graph', ref: 'g03', kicker: 'Grafik Platform • G3', title: 'Pipa telemetri', sub: 'Angka mentah berubah menjadi keputusan lewat validasi dan kalibrasi.' },
  { id: 'h-g04', kind: 'graph', ref: 'g04', kicker: 'Grafik Platform • G4', title: 'Siklus hidup perintah', sub: 'Tidak ada perintah hilang diam-diam: antrean ber-ID dan ack pada siklus berikutnya.' },
  { id: 'h-g05', kind: 'graph', ref: 'g05', kicker: 'Grafik Platform • G5', title: 'Logika keputusan Floral Assistant', sub: 'Empat cabang aturan, dua pintu keselamatan, pembungkus musim dan kalibrasi.' },
  { id: 'h-g06', kind: 'graph', ref: 'g06', kicker: 'Grafik Platform • G6', title: 'Siklus hidup perangkat', sub: 'Dilahirkan, diikat, bekerja, menurun, dan diperbarui; luring sebagai keadaan normal.' },
  { id: 'h-g07', kind: 'graph', ref: 'g07', kicker: 'Grafik Platform • G7', title: 'Topologi penyebaran', sub: 'Ketergantungan tiap tautan terhadap daya dan internet digambar apa adanya.' },
  { id: 'h-g08', kind: 'graph', ref: 'g08', kicker: 'Grafik Platform • G8', title: 'Hari petani lima menit', sub: 'Perjalanan pengguna dari pemeriksaan pagi sampai panen yang laku dijual.' },
  { id: 'h-g09', kind: 'graph', ref: 'g09', kicker: 'Grafik Platform • G9', title: 'Model data konseptual', sub: 'Ingatan sistem: relasi yang membuat audit dosis menjadi mungkin.' },
  { id: 'h-g10', kind: 'graph', ref: 'g10', kicker: 'Grafik Platform • G10', title: 'Loop nilai', sub: 'Hasil teknis berputar menjadi alasan beli, langganan, dan daur ulang.' },
  { id: 'h-g11', kind: 'graph', ref: 'g11', kicker: 'Grafik Platform • G11', title: 'Pipa produksi', sub: 'Kualitas di lapangan ditentukan jauh sebelum unit pertama mengirim telemetri.' },
  { id: 'h-g12', kind: 'graph', ref: 'g12', kicker: 'Grafik Platform • G12', title: 'Mesin Pranata Mangsa', sub: 'Cuaca nasional dan kearifan lokal musim Jawa menjadi konteks keputusan.' },
]
