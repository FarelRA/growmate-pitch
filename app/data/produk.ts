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

export interface BedahModel {
  src: string
  title: string
  kind: 'glb'
}

export interface BedahPackPhoto {
  src: string
  alt: string
  caption: string
}

export interface BedahData {
  src: string
  alt: string
  dots: BedahDot[]
  steps: BedahStep[]
  chips: string[]
  model: BedahModel
  packPhoto: BedahPackPhoto
}

export const BEDAH_PODS: BedahData = {
  src: '/images/bedah/bedah-pods.webp',
  alt: 'Pods GrowMate dengan lampu tumbuh dan bunga soka',
  dots: [
    { x: 54, y: 12, title: 'Lampu tumbuh spektrum penuh', desc: 'Strip LED sepanjang 20 cm dengan arus 2 A; jadwal 24 jam menggantikan cahaya matahari.' },
    { x: 43, y: 55, title: 'Sensor iklim DHT22', desc: 'Membaca suhu dan kelembapan udara sebagai pembanding bacaan tanah.' },
    { x: 55, y: 62, title: 'Sensor tanah kapasitif', desc: 'Pompa menyiram hanya bila bacaan menunjukkan tanah kering.' },
    { x: 43, y: 72, title: 'Pompa celup 5V', desc: 'Dosis 30 detik per siram; arus pompa diredam dioda flyback kelas 3 A.' },
    { x: 38, y: 22, title: 'Kamera dan pengendali ESP32-CAM', desc: 'ESP32-S dengan WiFi dan kamera OV2640 pada lengan atas.' },
    { x: 42, y: 82, title: 'Port USB-C dan baterai UPS', desc: 'Diisi lewat USB-C; baterai UPS 4230 mAh di sisi kiri bawah.' },
  ],
  steps: [
    { icon: 'lucide:radar', title: 'Ukur', desc: 'Enam kanal sensor membaca tanah, udara, cahaya, level tangki, suhu, dan foto kamera.' },
    { icon: 'lucide:brain', title: 'Putuskan', desc: 'Floral Assistant membandingkan bacaan dengan ambang tanaman.' },
    { icon: 'lucide:droplets', title: 'Bertindak', desc: 'Pompa dan lampu tumbuh menyala otomatis sesuai dosis.' },
    { icon: 'lucide:send', title: 'Lapor', desc: 'Foto dan grafik bacaan terkirim ke aplikasi.' },
  ],
  chips: ['Rp803 rb', '20 x 10 x 30 cm', 'USB-C plus baterai UPS'],
  model: {
    src: '/models/pods.glb',
    title: 'Model 3D Pods',
    kind: 'glb',
  },
  packPhoto: {
    src: '/images/packaging/bedah-kemas-pods.webp',
    alt: 'Kardus kemasan Pods dilihat dari depan dan samping',
    caption: 'Kardus ritel Pods sebelum dikirim.',
  },
}

export const BEDAH_TECH: BedahData = {
  src: '/images/bedah/bedah-tech.webp',
  alt: 'Boks kayu Tech dengan kamera dan konektor',
  dots: [
    { x: 47, y: 47, title: 'Kamera ladang CSI', desc: 'Kamera OV5647 mengawasi hamparan lahan dan hasilnya dilihat langsung dari aplikasi.' },
    { x: 50, y: 30, title: 'Bodi kayu untuk lapangan', desc: 'Kayu lapis tebal yang tahan cipratan, panas, dan benturan.' },
    { x: 53, y: 82, title: 'Konektor probe', desc: 'Probe tanah dan sensor level tangki dicolokkan lewat port cepat.' },
    { x: 40, y: 75, title: 'Komputer tepi dan relai', desc: 'Data diproses di dalam boks; relai beban besar mengikuti arus yang dipantau sensor ACS.' },
    { x: 59, y: 82, title: 'Konektor selang masuk dan keluar air', desc: 'Dua selang untuk membawa air masuk dan keluar ke pompa lapang.' },
  ],
  steps: [
    { icon: 'lucide:plug', title: 'Colok', desc: 'Probe dan beban disambungkan ke konektor di boks.' },
    { icon: 'lucide:sliders-horizontal', title: 'Atur', desc: 'Ambang dan jadwal ditetapkan dari aplikasi.' },
    { icon: 'lucide:bot', title: 'Otomatis', desc: 'Relai dan pompa bekerja mengikuti bacaan sensor.' },
    { icon: 'lucide:line-chart', title: 'Pantau', desc: 'Foto kamera dan grafik bacaan terkirim setiap hari.' },
  ],
  chips: ['Rp2,083 jt', 'Sampai 1 hektar', 'Buck 5V dan 3V3'],
  model: {
    src: '/models/tech.glb',
    title: 'Model 3D Tech',
    kind: 'glb',
  },
  packPhoto: {
    src: '/images/packaging/bedah-kemas-tech.webp',
    alt: 'Kardus kemasan Tech dilihat dari depan dan samping',
    caption: 'Kardus ritel Tech sebelum dikirim.',
  },
}

export const BEDAH_ADDON: BedahData = {
  src: '/images/bedah/bedah-addon.webp',
  alt: 'Tech Add-on berpanel surya di atas boks kayu',
  dots: [
    { x: 48, y: 18, title: 'Panel surya', desc: 'Panel mengisi baterai dari matahari sehingga unit tidak lagi membutuhkan listrik.' },
    { x: 46, y: 48, title: 'Kamera ladang', desc: 'Foto lahan harian untuk memeriksa kondisi tanaman dari jauh.' },
    { x: 53, y: 82, title: 'Konektor probe', desc: 'Probe tanah dan sensor level tangki dicolokkan lewat port cepat.' },
    { x: 67, y: 55, title: 'Modem LTE', desc: 'Data dikirim lewat kartu SIM; tidak memerlukan WiFi maupun kabel.' },
    { x: 59, y: 82, title: 'Konektor selang masuk dan keluar air', desc: 'Dua selang untuk membawa air masuk dan keluar ke pompa lapang.' },
  ],
  steps: [
    { icon: 'lucide:sun', title: 'Jemur', desc: 'Panel mengisi baterai sepanjang siang.' },
    { icon: 'lucide:cable', title: 'Pasang', desc: 'Kabel disambungkan ke Tech beserta probe tambahan.' },
    { icon: 'lucide:unplug', title: 'Mandiri', desc: 'Unit tetap beroperasi tanpa listrik dan tanpa WiFi.' },
    { icon: 'lucide:send', title: 'Lapor', desc: 'Data masuk aplikasi lewat LTE secara berkala.' },
  ],
  chips: ['Rp2,409 jt', 'Surya plus LTE', 'Boks kayu'],
  model: {
    src: '/models/tech-addon.glb',
    title: 'Model 3D Add-on',
    kind: 'glb',
  },
  packPhoto: {
    src: '/images/packaging/bedah-kemas-addon.webp',
    alt: 'Kardus kemasan lini Tech dilihat dari depan dan samping',
    caption: 'Kardus ritel lini Tech sebelum dikirim.',
  },
}
