export interface DeckSection {
  id: string
  kicker: string
  title: string
  sub?: string
}

/**
 * Single source of truth for deck order and copy.
 * Sequence numbers are derived from array position at render time,
 * never hardcoded in filenames, kickers, or components.
 */
export const SECTIONS: DeckSection[] = [
  { id: 'cover', kicker: 'GrowMate • Pods, Tech, dan Floral Assistant', title: 'Petani Makmur, Tanpa Lumpur' },
  { id: 'latar', kicker: 'Latar Belakang', title: 'Keputusan tani masih berdasarkan dugaan', sub: 'Tiga jawaban kami: Pods untuk tanaman dalam ruang, Tech untuk lahan terbuka, dan Floral Assistant untuk menentukan kapan menyiram.' },
  { id: 'usp', kicker: 'Keunggulan', title: 'Menyiram berdasarkan bacaan, bukan jadwal', sub: 'Timer menyiram tanpa tahu kondisi tanah; GrowMate menyiram hanya saat bacaan menunjukkan tanah kering.' },
  { id: 'pods', kicker: 'Bedah Produk: Pods', title: 'Pods: pot dengan enam sensor', sub: 'Enam titik pada foto Pods, dari lampu tumbuh sampai baterai UPS; masing-masing memberi satu data.' },
  { id: 'tech', kicker: 'Bedah Produk: Tech', title: 'Tech: boks kayu untuk lahan terbuka', sub: 'Lima titik pada foto Tech, dari kamera CSI sampai konektor selang.' },
  { id: 'addon', kicker: 'Bedah Produk: Add-on', title: 'Add-on: surya dan LTE tanpa jaringan tetap', sub: 'Lima titik pada foto Add-on; unit tetap bekerja tanpa listrik dan tanpa WiFi.' },
  { id: 'aplikasi', kicker: 'Aplikasi Pendamping', title: 'Enam layar dalam satu aplikasi', sub: 'Enam layar: Ringkasan, Perawatan, Pasar, Komunitas, Floral Assistant, dan Pustaka Tanaman.' },
  { id: 'proses', kicker: 'Pra, Produksi, Pasca', title: 'Tiga gerbang: sebelum rakit, saat rakit, sesudah kirim', sub: 'Kualitas dicek tiga kali: riset sebelum perakitan, uji mutu saat perakitan, garansi setelah pengiriman.' },
  { id: 'kembang', kicker: 'Pengembangan Produk', title: 'Tiga tahap dari breadboard ke produk jadi', sub: 'Tiga tahap: breadboard terbuka, PCB terpasang di rumah awal, lalu unit siap produksi massal.' },
  { id: 'scaleup', kicker: 'Scale Up', title: 'Dari 36 unit ke ketahanan pangan', sub: 'Empat jalur, tiga horizon. Dari Bantul menuju ketahanan pangan.' },
  { id: 'tamsamsom', kicker: 'TAM SAM SOM', title: 'TAM, SAM, dan SOM: dari nasional ke DIY', sub: 'TAM nasional 6,18 juta petani dan 770 properti; SAM di DIY 57 ribu petani dan 27 properti; SOM 2026 dimulai dari 80 tech farmer dan 3 properti.' },
  { id: 'stp', kicker: 'Analisis STP', title: 'Fokus DIY dengan posisi pelopor', sub: 'Tiga langkah berurutan: memetakan segmen di DIY, memilih target yang paling mungkin terjual, lalu menentukan posisi.' },
  { id: 'kompetitor', kicker: 'Analisis Kompetitor', title: 'Perbandingan dengan Tuya dan Click & Grow', sub: 'Tuya dan Click & Grow menjalankan jadwal tetap; GrowMate memutuskan dari bacaan sensor.' },
  { id: 'pemasaran', kicker: 'Strategi Pemasaran', title: 'Lima kanal daring, dua toko, dua agenda Bantul', sub: 'Calon pembeli menemukan GrowMate di lima kanal daring; kepercayaan dibangun lewat dua toko konsinyasi dan dua agenda di Bantul.' },
  { id: 'situs', kicker: 'Platform Digital', title: 'Situs growmate.bond', sub: 'Tampilan desktop dan mobile dari situs growmate.bond.' },
  { id: 'sosial', kicker: 'Dampak Sosial', title: 'Regenerasi petani dan waktu rawat yang menurun', sub: 'Dampak sosial dalam tiga butir, dengan waktu rawat turun dari 45 menit menjadi 5 menit sehari.' },
  { id: 'quad', kicker: 'Quadruple Bottom Line', title: 'Planet, profit, people, purpose', sub: 'Keempat dampak dijalankan sebagai bagian dari model operasi, bukan kampanye pemasaran.' },
  { id: 'keuangan', kicker: 'Analisis Keuangan', title: 'Pendapatan naik sejak Mei', sub: 'Pendapatan perangkat keras dan layanan AI Januari sampai September 2026. Mei menjadi titik impas dengan pendapatan 6 kali lipat dibanding bulan sebelumnya.' },
  { id: 'efektivitas', kicker: 'Analisis Efektivitas', title: 'Hemat air 42,8%, kesintasan 94%', sub: 'Uji lapangan Oktober sampai Desember 2025 di Bantul: 5 Pods dan 2 Tech pada Spathiphyllum, Monstera, dan sayuran daun, dibandingkan dengan perawatan manual.' },
  { id: 'bmc', kicker: 'BMC', title: 'Business Model Canvas', sub: 'Sembilan blok standar Business Model Canvas, dari key partners sampai revenue streams.' },
  { id: 'swot', kicker: 'SWOT', title: 'SWOT: faktor dalam dan faktor luar', sub: 'Strengths dan weaknesses berasal dari dalam perusahaan, opportunities dan threats dari luar; keduanya dipasangkan dengan action SO, WO, ST, dan WT.' },
  { id: 'sipoc', kicker: 'SIPOC', title: 'SIPOC: dari pemasok ke pelanggan', sub: 'Alur kerja dalam lima tahap: Supplier, Input, Process, Output, dan Customer.' },
  { id: 'legalitas', kicker: 'Legalitas', title: 'Uji DKPP dan kekayaan intelektual terdaftar', sub: 'Lulus uji kelayakan DKPP Kabupaten Bantul dengan penilaian sangat baik, ditambah hak cipta dan desain industri yang tercatat di negara.' },
  { id: 'dokumentasi', kicker: 'Dokumentasi', title: 'Dokumentasi kerja dalam tujuh kategori', sub: '28 momen dalam tujuh kategori: pra-produksi, produksi, acara, kemitraan, uji dan serah, uji lapangan, sampai legalitas.' },
  { id: 'testimoni', kicker: 'Testimoni', title: 'Apa kata dinas, sekolah, dan pengguna', sub: 'Delapan testimoni dari pejabat dinas, sekolah, dan penghobi, masing-masing menyebut fungsi yang mereka pakai.' },
  { id: 'closing', kicker: 'Penutup', title: 'Hubungi kami', sub: 'Tiga pintu masuk: pilot di lokasi Anda, penataan atap hijau, atau pertanyaan lanjutan.' },
  { id: 'galeri', kicker: 'Galeri', title: 'Galeri riset, produksi, dan lapangan', sub: 'Galeri berputar otomatis selama diskusi berlangsung; arahkan kursor untuk menjeda sejenak.' },
]

export function sectionNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}
