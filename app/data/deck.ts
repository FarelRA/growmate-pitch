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
  { id: 'cover', kicker: 'GrowMate • Tani cerdas, kearifan lokal', title: 'Petani Makmur, Tanpa Lumpur' },
  { id: 'latar', kicker: 'Latar Belakang', title: 'Bertani masih mengandalkan perasaan', sub: 'Dari ladang tebakan menuju ladang terukur. Tiga jawaban kami: Pods, Tech, dan Floral Assistant.' },
  { id: 'usp', kicker: 'Keunggulan', title: 'Bukan sekadar timer', sub: 'Pewaktu menyiram tiap jam. GrowMate menyiram saat tanah butuh.' },
  { id: 'proses', kicker: 'Pra, Produksi, Pasca', title: 'Setiap unit melewati tiga gerbang', sub: 'Tiga gerbang mutu. Riset sebelum rakit, kendali selama rakit, garansi setelah kirim.' },
  { id: 'kembang', kicker: 'Pengembangan Produk', title: 'Dari breadboard ke produk final', sub: 'Satu sungai evolusi: konsep terbuka, integrasi modular, lalu produk siap massal.' },
  { id: 'tamsamsom', kicker: 'TAM SAM SOM', title: 'Pasar besar, pijakan fokus', sub: 'Dari 6,18 juta petani dan 770 properti nasional, kami fokus pada 57 ribu petani dan 27 properti di DIY, mulai dari 80 tech farmer dan 3 properti pada 2026.' },
  { id: 'stp', kicker: 'Analisis STP', title: 'Fokus DIY, posisi pelopor', sub: 'Misi bidik DIY: kenali segmennya, kunci targetnya, tegakkan posisinya.' },
  { id: 'kompetitor', kicker: 'Analisis Kompetitor', title: 'Hanya GrowMate yang berpikir', sub: 'Pewaktu impor menyiram pakai jadwal. GrowMate menyiram pakai data.' },
  { id: 'pemasaran', kicker: 'Strategi Pemasaran', title: 'Ditemukan daring, dibuktikan luring', sub: 'Penemuan terjadi daring di lima kanal. Kepercayaan dibangun luring di dua ritel dan dua agenda Bantul.' },
  { id: 'sosial', kicker: 'Dampak Sosial', title: 'Tani makmur, muda kembali', sub: 'Estafet tani tiga bingkai. Waktu rawat turun dari 45 menit menjadi 5 menit sehari.' },
  { id: 'quad', kicker: 'Quadruple Bottom Line', title: 'Planet, profit, people, purpose', sub: 'Bisnis hijau adalah modelnya, bukan sekadar pemasaran.' },
  { id: 'keuangan', kicker: 'Analisis Keuangan', title: 'Pendapatan sudah tumbuh', sub: 'Pendapatan hardware + layanan AI Januari sampai September 2026. Mei titik lepas: 6 kali lipat bulan sebelumnya.' },
  { id: 'efektivitas', kicker: 'Analisis Efektivitas', title: 'Hemat air 42,8%, 94% hidup', sub: 'Uji lapangan Oktober sampai Desember 2025 di Bantul: 5 Pods + 2 Tech pada Spathiphyllum, Monstera, dan sayuran daun melawan kontrol manual.' },
  { id: 'bmc', kicker: 'BMC', title: 'Sembilan blok satu halaman', sub: 'Sembilan petak kebun dalam satu peta. Petak tengah adalah Bintang utama kami.' },
  { id: 'swot', kicker: 'SWOT', title: 'Kuat di dalam, awas di luar', sub: 'Radar cuaca tani: kekuatan dan kelemahan di dalam, peluang dan ancaman di luar, lengkap dengan aksi SO, WO, ST, dan WT.' },
  { id: 'sipoc', kicker: 'SIPOC', title: 'Dari pemasok ke pelanggan', sub: 'Alur air dari pemasok sampai pelanggan dalam satu pipa hidup.' },
  { id: 'legalitas', kicker: 'Legalitas', title: 'Diuji dinas, dicatat negara', sub: 'Lulus uji kelayakan DKPP Kabupaten Bantul dengan nilai sangat baik plus kekayaan intelektual yang tercatat negara.' },
  { id: 'dokumentasi', kicker: 'Dokumentasi', title: 'Jejak kerja di lapangan', sub: 'Enam pos ekspedisi dari stan pameran hingga meja produksi. Setiap langkah terdokumentasi.' },
  { id: 'testimoni', kicker: 'Testimoni', title: 'Dipercaya pejabat, dipakai warga', sub: 'Delapan testimoni dari dinas, sekolah, dan penghobi. Delapan sudut pandang, satu kesimpulan.' },
  { id: 'scaleup', kicker: 'Scale Up', title: 'Dari 36 unit ke ketahanan pangan', sub: 'Empat jalur, tiga horizon. Dari Bantul menuju ketahanan pangan.' },
  { id: 'closing', kicker: 'Penutup', title: 'Tumbuh bersama kami', sub: 'Pilot, atap hijau, atau satu pertanyaan tajam. Setiap jalan menumbuhkan dataset.' },
]

export function sectionNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}
