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
  { id: 'latar', kicker: 'Latar Belakang', title: 'Bertani masih mengandalkan perasaan', sub: 'Perawatan manual memboroskan air, pupuk, dan akhir pekan. Tiga jawaban kami: Pods, Tech, dan Floral Assistant.' },
  { id: 'usp', kicker: 'Keunggulan', title: 'Bukan sekadar timer', sub: 'Tiga keunggulan yang bisa difoto: otak AI lokal, skala fleksibel, dan ketahanan offline.' },
  { id: 'proses', kicker: 'Pra, Produksi, Pasca', title: 'Setiap unit melewati tiga gerbang', sub: 'Riset dan desain sebelum rakit, mutu selama rakit, dan garansi setelah kirim.' },
  { id: 'kembang', kicker: 'Pengembangan Produk', title: 'Dari breadboard ke produk final', sub: 'Tiga tahap purwarupa: konsep terbuka, integrasi modular, lalu produk siap massal.' },
  { id: 'tamsamsom', kicker: 'TAM SAM SOM', title: 'Pasar besar, pijakan fokus', sub: 'Dari 6,18 juta petani dan 770 pengembang nasional, kami fokus melayani 57 ribu petani dan 27 pengembang di DIY, mulai dari 80 tech farmer dan 3 pengembang komersial pada 2026.' },
  { id: 'stp', kicker: 'Analisis STP', title: 'Fokus DIY, posisi pelopor', sub: 'Menyasar tech farmer serta pengembang properti dan perkantoran DIY yang mendambakan kepraktisan dan efisiensi, GrowMate tampil sebagai pelopor smart farming IoT dan AI Agen lokal yang praktis, hijau, dan terjangkau.' },
  { id: 'kompetitor', kicker: 'Analisis Kompetitor', title: 'Hanya GrowMate yang berpikir', sub: 'Pewaktu impor menyiram pakai jadwal. GrowMate menyiram pakai data.' },
  { id: 'pemasaran', kicker: 'Strategi Pemasaran', title: 'Ditemukan daring, dibuktikan luring', sub: 'Lima kanal digital, dua ritel konsinyasi, dan agenda lapangan rutin di Bantul.' },
  { id: 'sosial', kicker: 'Dampak Sosial', title: 'Tani makmur, muda kembali', sub: 'Regenerasi tech farmer, transfer pengetahuan antargenerasi, dan biaya operasional yang turun.' },
  { id: 'quad', kicker: 'Quadruple Bottom Line', title: 'Planet, profit, people, purpose', sub: 'Bisnis hijau adalah modelnya, bukan sekadar pemasaran.' },
  { id: 'keuangan', kicker: 'Analisis Keuangan', title: 'Pendapatan sudah tumbuh', sub: 'Pendapatan hardware + layanan AI Januari sampai September 2026. Mei titik lepas: 6 kali lipat bulan sebelumnya.' },
  { id: 'efektivitas', kicker: 'Analisis Efektivitas', title: 'Hemat air 42,8%, 94% hidup', sub: 'Uji lapangan Oktober sampai Desember 2025 di Bantul: 5 Pods + 2 Tech pada Spathiphyllum, Monstera, dan sayuran daun melawan kontrol manual.' },
  { id: 'bmc', kicker: 'BMC', title: 'Sembilan blok satu halaman', sub: 'Business Model Canvas GrowMate versi uji 2026.' },
  { id: 'swot', kicker: 'SWOT', title: 'Kuat di dalam, awas di luar', sub: 'Setiap risiko sudah dipasangkan dengan respons.' },
  { id: 'sipoc', kicker: 'SIPOC', title: 'Dari pemasok ke pelanggan', sub: 'Lima kolom satu alir: pemasok, masukan, proses, keluaran, dan pelanggan.' },
  { id: 'legalitas', kicker: 'Legalitas', title: 'Diuji dinas, dicatat negara', sub: 'Formulir uji kelayakan bertanda tangan DKPP Kabupaten Bantul plus kekayaan intelektual terdaftar.' },
  { id: 'dokumentasi', kicker: 'Dokumentasi', title: 'Jejak kerja di lapangan', sub: 'Konsinyasi, kemitraan, pameran, dan bengkel. Semua terdokumentasi.' },
  { id: 'testimoni', kicker: 'Testimoni', title: 'Dipercaya pejabat, dipakai warga', sub: 'Delapan testimoni dari dinas, sekolah, dan penghobi. Delapan sudut pandang, satu kesimpulan.' },
  { id: 'scaleup', kicker: 'Scale Up', title: 'Dari 36 unit ke ketahanan pangan', sub: 'Setiap langkah mendanai dataset berikutnya. Setiap dataset membuat semua perangkat makin pintar.' },
]

export function sectionNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}
