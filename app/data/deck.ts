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
  { id: 'problem', kicker: 'Masalah', title: 'Bertani masih mengandalkan perasaan', sub: 'Perawatan manual memboroskan air, pupuk, dan akhir pekan. Sementara perangkat impor menyelesaikan masalah iklim sedang dengan harga mewah.' },
  { id: 'alternatives', kicker: 'Solusi yang gagal', title: 'Pewaktu buta, impor tak peka', sub: 'Tak ada produk di pasaran yang mengukur tanah tropis, memikirkannya, dan tetap mudah diperbaiki. Maka kami membangunnya.' },
  { id: 'system', kicker: 'Sistem', title: 'Satu siklus terpantau penuh', sub: 'Dua keluarga perangkat, satu kontrak cloud. Setiap bacaan terlacak, setiap dosis tercatat.' },
  { id: 'pods', kicker: 'GrowMate Pods', title: 'Pot sekelas lab untuk dalam ruang', sub: 'ESP32-CAM mengawasi satu tanaman dan tangkinya. Server yang berpikir. Pod selalu jujur soal data.' },
  { id: 'tech', kicker: 'GrowMate Tech', title: 'Regu lapangan yang tak tidur', sub: 'Raspberry Pi Zero W + carrier khusus dalam boks panel kayu limbah. Irigasi, pupuk, dan pestisida ditakar berbasis data.' },
  { id: 'loop', kicker: 'Siklus firmware', title: 'Siklus yang selalu jujur', sub: 'Ukur dengan radio senyap, lapor dengan bukti, dosis tepat perintah. Tekan putar. Satu siklus penuh sekitar 13 detik di panggung.' },
  { id: 'brain', kicker: 'Floral Assistant', title: 'AI yang menyentuh tanah', sub: 'Aplikasi web menampilkan segalanya. Agen yang bertindak: menyiram, memupuk, menjadwal, bahkan membuka tiket bantuan.' },
  { id: 'mangsa', kicker: 'Kearifan lokal', title: 'Pranata Mangsa sebagai mesin', sub: 'Kalender musim Jawa menjadi prior mesin. Kiri adaptif dan hemat, kanan jadwal tetap yang memboroskan air.' },
  { id: 'proof', kicker: 'Bukti terukur', title: 'Hemat air 42,8%, 94% hidup', sub: 'Uji lapangan Oktober sampai Desember 2025 di Bantul: 5 Pods + 2 Tech pada Spathiphyllum, Monstera, dan sayuran daun melawan kontrol manual.' },
  { id: 'versus', kicker: 'Uji langsung', title: 'Adaptif mengalahkan jadwal', sub: 'Sama-sama 60 hari, sama-sama musim kemarau. Bedanya hanya: mendengar langit atau mendengar pewaktu.' },
  { id: 'business', kicker: 'Traksi', title: 'Pendapatan sudah tumbuh', sub: 'Pendapatan hardware + layanan AI Januari sampai September 2026. Mei titik lepas: 6 kali lipat bulan sebelumnya.' },
  { id: 'market', kicker: 'Pasar', title: 'Pasar besar, pijakan fokus', sub: 'Mulai dari 0,14% DIY yang bisa kami layani sempurna, lalu naik ke 5% SAM.' },
  { id: 'economics', kicker: 'Ekonomi unit', title: 'Setiap rupiah tercatat', sub: 'Hitung lengkap HPP ke NPV per varian. Hardware ambil marjin 40%. Langganan AI ambil 200%.' },
  { id: 'impact', kicker: 'Dampak', title: 'Planet, profit, people, purpose', sub: 'Bisnis hijau adalah modelnya, bukan sekadar pemasaran. IP terdaftar, hemat terukur, selaras nasional.' },
  { id: 'evidence', kicker: 'Bukti resmi', title: 'Bukti resmi, bukan klaim', sub: 'Formulir uji kelayakan bertanda tangan DKPP Kabupaten Bantul plus kekayaan intelektual terdaftar.' },
  { id: 'roadmap', kicker: 'Peta jalan', title: 'Dari 36 unit ke ketahanan pangan', sub: 'Setiap langkah mendanai dataset berikutnya. Setiap dataset membuat semua perangkat makin pintar.' },
  { id: 'closing', kicker: 'Ajakan', title: 'Tumbuh bersama kami' },
]

export function sectionNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}
