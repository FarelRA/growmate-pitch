export interface BedahDot {
  x: number
  y: number
  title: string
  desc: string
}

export interface BedahStep {
  icon: string
  title: string
  desc: string
}

export interface BedahData {
  src: string
  alt: string
  dots: BedahDot[]
  steps: BedahStep[]
  chips: string[]
}

export const BEDAH_PODS: BedahData = {
  src: '/photos/bedah-pods.webp',
  alt: 'GrowMate Pods dengan lampu tumbuh dan bunga soka',
  dots: [
    { x: 53, y: 17, title: 'Lampu spektrum penuh', desc: 'Strip LED 20 cm arus 2 A. Jadwal cerdas 24 jam mengganti matahari.' },
    { x: 31.5, y: 46, title: 'Sensor iklim DHT22', desc: 'Baca suhu dan kelembapan udara untuk validasi ganda.' },
    { x: 50, y: 60, title: 'Sensor tanah kapasitif', desc: 'ADC 12 bit skala 0 sampai 4095. Siram hanya saat tanah butuh.' },
    { x: 37, y: 76, title: 'Pompa celup 5V', desc: 'Dosis presisi 30 detik. Aman dengan dioda flyback kelas 3 A.' },
    { x: 47, y: 71, title: 'Otak ESP32-CAM', desc: 'ESP32-S dengan WiFi. PSRAM dioptimalkan untuk kamera.' },
    { x: 73, y: 80, title: 'Kamera dan tangki UPS', desc: 'OV2640 foto tiap 900 detik. Baterai 4230 mAh jaga siram saat mati lampu.' },
  ],
  steps: [
    { icon: 'lucide:radar', title: 'Ukur', desc: 'Enam kanal sensor baca tanah, udara, cahaya, dan tangki.' },
    { icon: 'lucide:brain', title: 'Putuskan', desc: 'Floral Assistant bandingkan bacaan dengan ambang tanaman.' },
    { icon: 'lucide:droplets', title: 'Bertindak', desc: 'Pompa dan lampu jalan otomatis sesuai dosis.' },
    { icon: 'lucide:send', title: 'Lapor', desc: 'Foto dan grafik terkirim ke aplikasi Anda.' },
  ],
  chips: ['Rp803 rb', '20 x 10 x 30 cm', 'USB-C plus UPS'],
}

export const BEDAH_TECH: BedahData = {
  src: '/photos/bedah-tech.webp',
  alt: 'Boks kayu GrowMate Tech dengan kamera dan konektor',
  dots: [
    { x: 47, y: 49, title: 'Kamera ladang CSI', desc: 'OV5647 mengawasi hamparan langsung dari aplikasi.' },
    { x: 50, y: 33, title: 'Bodi kayu lapang', desc: 'Kayu lapis tebal. Tahan cipratan, panas, dan banting.' },
    { x: 75, y: 61, title: 'Komputer edge dan LTE', desc: 'Proses data lokal plus modem OTG. Tetap jalan tanpa WiFi.' },
    { x: 40, y: 78, title: 'Relai dan sensor arus', desc: 'Sakelar beban besar dengan arus terpantau sensor ACS.' },
    { x: 54, y: 82, title: 'Konektor probe', desc: 'Colok probe tanah, level tangki, dan aktuator luar.' },
  ],
  steps: [
    { icon: 'lucide:plug', title: 'Colok', desc: 'Sambung probe dan beban ke konektor lapang.' },
    { icon: 'lucide:sliders-horizontal', title: 'Atur', desc: 'Tetapkan ambang dan jadwal dari aplikasi.' },
    { icon: 'lucide:bot', title: 'Otomatis', desc: 'Relai dan pompa mengikuti data sensor.' },
    { icon: 'lucide:line-chart', title: 'Pantau', desc: 'Kamera dan grafik terkirim tiap hari.' },
  ],
  chips: ['Rp2,083 jt', 'Sampai 1 hektar', 'Buck 5V dan 3V3'],
}

export const BEDAH_ADDON: BedahData = {
  src: '/photos/bedah-addon.webp',
  alt: 'Tech Add-on dengan panel surya di atas boks kayu',
  dots: [
    { x: 50, y: 24, title: 'Panel surya', desc: 'Isi baterai dari matahari. Lepas total dari PLN.' },
    { x: 47, y: 50, title: 'Kamera ladang', desc: 'Visual harian sebagai bukti tanam yang hidup.' },
    { x: 68, y: 62, title: 'Modem LTE', desc: 'Kirim data lewat kartu SIM. Tanpa WiFi tanpa kabel.' },
    { x: 40, y: 70, title: 'Pengisi daya surya', desc: 'Rangkaian MPPT dan baterai aman di dalam boks.' },
    { x: 56, y: 85, title: 'Konektor lapangan', desc: 'Kabel data dan daya ke unit Tech dan probe.' },
  ],
  steps: [
    { icon: 'lucide:sun', title: 'Jemur', desc: 'Panel mengisi baterai sepanjang siang hari.' },
    { icon: 'lucide:cable', title: 'Pasang', desc: 'Sambung kabel ke Tech dan probe tambahan.' },
    { icon: 'lucide:unplug', title: 'Mandiri', desc: 'Beroperasi tanpa PLN dan tanpa WiFi.' },
    { icon: 'lucide:send', title: 'Lapor', desc: 'Data LTE masuk aplikasi secara berkala.' },
  ],
  chips: ['Rp2,409 jt', 'Surya plus LTE', 'Boks kayu'],
}
