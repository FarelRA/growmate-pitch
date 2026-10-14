import type { DgFlow } from './types'

/** G4: Siklus hidup perintah: antre, kirim, pakai, konfirmasi, bersih. */
export const g04: DgFlow = {
  w: 1240,
  h: 780,
  nodes: [
    { id: 'h-fa', x: 20, y: 24, w: 180, h: 64, tone: 'intelligence', icon: 'lucide:brain', title: 'Assistant' },
    { id: 'h-cmd', x: 228, y: 24, w: 180, h: 64, tone: 'intelligence', icon: 'lucide:send', title: 'Antrean' },
    { id: 'h-trans', x: 436, y: 24, w: 180, h: 64, tone: 'transport', icon: 'lucide:arrow-left-right', title: 'Balas & unggah' },
    { id: 'h-dev', x: 644, y: 24, w: 180, h: 64, tone: 'edge', icon: 'lucide:box', title: 'Kotak lapang' },
    { id: 'h-act', x: 852, y: 24, w: 180, h: 64, tone: 'edge', icon: 'lucide:wrench', title: 'Aktuator' },
    { id: 'h-cfg', x: 1060, y: 24, w: 180, h: 64, tone: 'experience', icon: 'lucide:settings', title: 'Setelan & klaim' },

    { id: 'note1', x: 340, y: 116, w: 560, h: 48, tone: 'intelligence', shape: 'pill', title: 'Dosis: antre, kirim, pakai, konfirmasi, bersih' },
    { id: 'note2', x: 240, y: 548, w: 460, h: 48, tone: 'interlock', shape: 'pill', title: 'Belum di-ack? Kirim ulang, antrean bertahan' },
    { id: 'note3', x: 340, y: 620, w: 560, h: 48, tone: 'intelligence', shape: 'pill', title: 'Konfigurasi, klaim & pembaruan ikut aturan sama' },
  ],
  edges: [
    // Garis hidup setiap peserta.
    { id: 'lf-fa', points: [[110, 88], [110, 752]], tone: 'ink', dashed: true, noArrow: true },
    { id: 'lf-cmd', points: [[318, 88], [318, 752]], tone: 'ink', dashed: true, noArrow: true },
    { id: 'lf-trans', points: [[526, 88], [526, 752]], tone: 'ink', dashed: true, noArrow: true },
    { id: 'lf-dev', points: [[734, 88], [734, 752]], tone: 'ink', dashed: true, noArrow: true },
    { id: 'lf-act', points: [[942, 88], [942, 752]], tone: 'ink', dashed: true, noArrow: true },
    { id: 'lf-cfg', points: [[1150, 88], [1150, 752]], tone: 'ink', dashed: true, noArrow: true },

    // Alur dosis.
    { id: 'm1', points: [[110, 200], [318, 200]], tone: 'intelligence', flow: true, label: 'buat dosis + ID' },
    { id: 'm2', points: [[318, 250], [526, 250]], tone: 'intelligence', flow: true, label: 'perintah antre' },
    { id: 'm3', points: [[526, 300], [734, 300]], tone: 'transport', flow: true, label: 'kirim saat balas' },
    { id: 'm4', points: [[734, 350], [942, 350]], tone: 'edge', flow: true, label: 'validasi & pakai' },
    { id: 'm5', points: [[942, 400], [734, 400]], tone: 'edge', dashed: true, label: 'status selesai' },
    { id: 'm6', points: [[734, 450], [526, 450]], tone: 'transport', dashed: true, label: 'konfirmasi' },
    { id: 'm7', points: [[526, 500], [318, 500]], tone: 'intelligence', dashed: true, label: 'ack, beres' },

    // Manajemen armada memakai disiplin yang sama.
    { id: 'm8', points: [[1150, 692], [526, 692]], tone: 'experience', flow: true, label: 'klaim & pembaruan' },
  ],
}

/** G5: Logika keputusan: pintu kebutuhan lalu pintu keselamatan. */
export const g05: DgFlow = {
  w: 1240,
  h: 740,
  groups: [
    { id: 'b-air', label: 'AIR', x: 48, y: 330, w: 250, h: 316, tone: 'edge' },
    { id: 'b-light', label: 'CAHAYA', x: 348, y: 330, w: 250, h: 316, tone: 'intelligence' },
    { id: 'b-feed', label: 'PUPUK', x: 648, y: 330, w: 250, h: 316, tone: 'edge' },
    { id: 'b-spray', label: 'SEMPROT', x: 948, y: 330, w: 250, h: 316, tone: 'interlock' },
  ],
  nodes: [
    { id: 'start', x: 490, y: 30, w: 260, h: 52, tone: 'ink', shape: 'pill', icon: 'lucide:play', title: 'Bacaan & jadwal masuk' },
    { id: 'season', x: 490, y: 110, w: 260, h: 76, tone: 'intelligence', icon: 'lucide:calendar-range', title: 'Musim', sub: 'tuning pranata mangsa' },
    { id: 'calib', x: 490, y: 210, w: 260, h: 76, tone: 'intelligence', icon: 'lucide:gauge', title: 'Kalibrasi probe', sub: 'mentah → persen' },

    { id: 'b1', x: 58, y: 370, w: 230, h: 76, tone: 'edge', icon: 'lucide:droplet', title: 'Siram', sub: 'tanah kering' },
    { id: 'g1', x: 58, y: 466, w: 230, h: 76, tone: 'transport', icon: 'lucide:shield-check', title: 'Jaga', sub: 'tangki, cooldown, ≤3x' },
    { id: 'a1', x: 58, y: 558, w: 230, h: 76, tone: 'edge', icon: 'lucide:droplets', title: 'Dosis kecil', sub: 'sering & tepat' },
    { id: 'k1', x: 58, y: 660, w: 230, h: 48, tone: 'interlock', shape: 'pill', title: 'Tahan: tangki kosong' },

    { id: 'b2', x: 358, y: 370, w: 230, h: 76, tone: 'intelligence', icon: 'lucide:lightbulb', title: 'Nyalakan', sub: 'cahaya rendah' },
    { id: 'g2', x: 358, y: 466, w: 230, h: 76, tone: 'transport', icon: 'lucide:shield-check', title: 'Jaga', sub: 'mode dalam, latched' },
    { id: 'a2', x: 358, y: 558, w: 230, h: 76, tone: 'edge', icon: 'lucide:lamp', title: 'Lampu', sub: 'menyala stabil' },
    { id: 'k2', x: 358, y: 660, w: 230, h: 48, tone: 'interlock', shape: 'pill', title: 'Tahan: malam di luar' },

    { id: 'b3', x: 658, y: 370, w: 230, h: 76, tone: 'edge', icon: 'lucide:leaf', title: 'Pupuk', sub: 'tanah lapar' },
    { id: 'g3', x: 658, y: 466, w: 230, h: 76, tone: 'transport', icon: 'lucide:shield-check', title: 'Jaga', sub: 'EC & jangan berlebih' },
    { id: 'a3', x: 658, y: 558, w: 230, h: 76, tone: 'edge', icon: 'lucide:wrench', title: 'Katup pupuk', sub: 'jalan + pompa' },
    { id: 'k3', x: 658, y: 660, w: 230, h: 48, tone: 'interlock', shape: 'pill', title: 'Tahan: dosis rendah' },

    { id: 'b4', x: 958, y: 370, w: 230, h: 76, tone: 'interlock', icon: 'lucide:spray-can', title: 'Semprot', sub: 'udara lembap' },
    { id: 'g4', x: 958, y: 466, w: 230, h: 76, tone: 'transport', icon: 'lucide:shield-check', title: 'Jaga', sub: 'suhu, jarak, dosis' },
    { id: 'a4', x: 958, y: 558, w: 230, h: 76, tone: 'edge', icon: 'lucide:wrench', title: 'Katup semprot', sub: 'jalan + pompa' },
    { id: 'k4', x: 958, y: 660, w: 230, h: 48, tone: 'interlock', shape: 'pill', title: 'Tahan: jarak & dosis' },
  ],
  edges: [
    { id: 's-season', points: [[620, 82], [620, 110]], tone: 'intelligence', flow: true },
    { id: 's-calib', points: [[620, 186], [620, 210]], tone: 'intelligence', flow: true },
    { id: 'c-b1', points: [[620, 286], [173, 370]], tone: 'edge', label: 'empat cabang' },
    { id: 'c-b2', points: [[620, 286], [473, 370]], tone: 'intelligence' },
    { id: 'c-b3', points: [[620, 286], [773, 370]], tone: 'edge' },
    { id: 'c-b4', points: [[620, 286], [1073, 370]], tone: 'interlock' },

    { id: 'b1-g1', points: [[173, 446], [173, 466]], tone: 'edge', label: 'perlu?' },
    { id: 'b2-g2', points: [[473, 446], [473, 466]], tone: 'intelligence' },
    { id: 'b3-g3', points: [[773, 446], [773, 466]], tone: 'edge' },
    { id: 'b4-g4', points: [[1073, 446], [1073, 466]], tone: 'interlock' },

    { id: 'g1-a1', points: [[173, 542], [173, 558]], tone: 'edge', label: 'aman?' },
    { id: 'g2-a2', points: [[473, 542], [473, 558]], tone: 'edge' },
    { id: 'g3-a3', points: [[773, 542], [773, 558]], tone: 'edge' },
    { id: 'g4-a4', points: [[1073, 542], [1073, 558]], tone: 'edge' },

    { id: 'g1-k1', points: [[58, 504], [30, 504], [30, 684], [58, 684]], tone: 'interlock', dashed: true },
    { id: 'g2-k2', points: [[358, 504], [330, 504], [330, 684], [358, 684]], tone: 'interlock', dashed: true },
    { id: 'g3-k3', points: [[658, 504], [630, 504], [630, 684], [658, 684]], tone: 'interlock', dashed: true },
    { id: 'g4-k4', points: [[958, 504], [930, 504], [930, 684], [958, 684]], tone: 'interlock', dashed: true },
  ],
}

/** G6: Siklus hidup perangkat: offline adalah keadaan normal. */
export const g06: DgFlow = {
  w: 1240,
  h: 560,
  nodes: [
    { id: 'factory', x: 30, y: 140, w: 185, h: 80, tone: 'edge', icon: 'lucide:factory', title: 'Pabrik', sub: 'uji & sertifikat' },
    { id: 'onboard', x: 231, y: 140, w: 185, h: 80, tone: 'experience', icon: 'lucide:qr-code', title: 'Pemasangan', sub: 'portal 30 hari' },
    { id: 'claimed', x: 432, y: 140, w: 185, h: 80, tone: 'people', icon: 'lucide:user-check', title: 'Diklaim', sub: 'terikat pemilik' },
    { id: 'online', x: 633, y: 140, w: 185, h: 80, tone: 'intelligence', icon: 'lucide:wifi', title: 'Daring', sub: 'otak & dasbor' },
    { id: 'degraded', x: 834, y: 140, w: 185, h: 80, tone: 'transport', icon: 'lucide:signal-low', title: 'Menurun', sub: 'sinyal melemah' },
    { id: 'offline', x: 1035, y: 140, w: 185, h: 80, tone: 'transport', icon: 'lucide:wifi-off', title: 'Offline', sub: 'mode aman lokal' },

    { id: 'ota', x: 628, y: 340, w: 240, h: 76, tone: 'transport', icon: 'lucide:refresh-cw', title: 'Pembaruan OTA', sub: 'perbaikan dari jauh' },
    { id: 'unclaim', x: 432, y: 340, w: 185, h: 76, tone: 'experience', icon: 'lucide:unplug', title: 'Lepas klaim', sub: 'perangkat berpindah' },

    { id: 'n-online', x: 560, y: 468, w: 300, h: 56, tone: 'intelligence', shape: 'pill', title: 'Daring: otak, dasbor, perintah penuh' },
    { id: 'n-offline', x: 890, y: 468, w: 300, h: 56, tone: 'transport', shape: 'pill', title: 'Luring: sensor & aksi tetap aman, sinkron nanti' },
  ],
  edges: [
    { id: 'f-o', points: [[215, 180], [231, 180]], tone: 'edge', flow: true },
    { id: 'o-c', points: [[416, 180], [432, 180]], tone: 'people', flow: true },
    { id: 'c-on', points: [[617, 180], [633, 180]], tone: 'intelligence', flow: true },
    { id: 'on-dg', points: [[818, 180], [834, 180]], tone: 'transport', flow: true },
    { id: 'dg-off', points: [[1019, 180], [1035, 180]], tone: 'transport', flow: true },

    { id: 'dg-on', points: [[929, 140], [929, 100], [728, 100], [728, 140]], tone: 'intelligence', flow: true, label: 'pulih' },
    { id: 'on-dg2', points: [[728, 140], [728, 120], [929, 120], [929, 140]], tone: 'transport', dashed: true },
    { id: 'off-dg', points: [[1127, 140], [1127, 70], [929, 70], [929, 140]], tone: 'transport', dashed: true },
    { id: 'off-on', points: [[1127, 140], [1127, 40], [728, 40], [728, 140]], tone: 'intelligence', dashed: true, label: 'tersinkron' },

    { id: 'on-ota', points: [[690, 220], [690, 340]], tone: 'transport', label: 'perbarui', labelAt: [655, 305] },
    { id: 'ota-on', points: [[760, 340], [760, 220]], tone: 'transport', dashed: true, label: 'gagal? tetap', labelAt: [795, 305] },
    { id: 'c-un', points: [[524, 220], [524, 340]], tone: 'experience', label: 'lepas' },
    { id: 'un-o', points: [[432, 378], [340, 378], [340, 220]], tone: 'experience', label: 'pasang ulang' },
  ],
}

/** G7: Topologi penyebaran: dari mana daya, apakah internet ada. */
export const g07: DgFlow = {
  w: 1240,
  h: 820,
  groups: [
    { id: 'field', label: 'LAPANGAN & RUMAH', x: 30, y: 30, w: 1180, h: 180, tone: 'edge' },
    { id: 'links', label: 'TAUTAN', x: 30, y: 250, w: 1180, h: 150, tone: 'transport' },
    { id: 'cloud', label: 'SERVER', x: 30, y: 440, w: 1180, h: 180, tone: 'experience' },
  ],
  nodes: [
    { id: 'pods', x: 45, y: 74, w: 210, h: 84, tone: 'edge', icon: 'lucide:sprout', title: 'Pods', sub: 'indoor, WiFi rumah' },
    { id: 'tech', x: 285, y: 74, w: 210, h: 84, tone: 'edge', icon: 'lucide:tractor', title: 'Tech', sub: 'lahan, WiFi lokasi' },
    { id: 'addon', x: 525, y: 74, w: 210, h: 84, tone: 'edge', icon: 'lucide:sun', title: 'Add-On', sub: 'tanpa listrik & internet' },
    { id: 'solar', x: 765, y: 74, w: 210, h: 84, tone: 'intelligence', icon: 'lucide:battery-charging', title: 'Surya', sub: 'panel + baterai' },
    { id: 'local', x: 1005, y: 74, w: 210, h: 84, tone: 'transport', icon: 'lucide:hard-drive', title: 'Cadangan', sub: 'lokal & sinkron' },

    { id: 'wifi', x: 240, y: 294, w: 280, h: 84, tone: 'transport', icon: 'lucide:wifi', title: 'WiFi', sub: 'butuh internet tersedia' },
    { id: 'cell', x: 720, y: 294, w: 280, h: 84, tone: 'transport', icon: 'lucide:antenna', title: 'Seluler', sub: 'otomatis, tanpa sandi' },

    { id: 'dash', x: 120, y: 484, w: 280, h: 90, tone: 'experience', icon: 'lucide:layout-dashboard', title: 'Dasbor & chat', sub: 'tanya & perintah' },
    { id: 'brain', x: 480, y: 484, w: 280, h: 90, tone: 'intelligence', icon: 'lucide:brain', title: 'Otak keputusan', sub: 'assistant & aturan' },
    { id: 'media', x: 880, y: 484, w: 280, h: 90, tone: 'experience', icon: 'lucide:images', title: 'Media & foto', sub: 'arsip gambar' },

    { id: 'phone', x: 470, y: 680, w: 300, h: 90, tone: 'people', icon: 'lucide:smartphone', title: 'Ponsel petani', sub: 'kerja lima menit sehari' },
  ],
  edges: [
    { id: 'pods-wifi', points: [[150, 158], [150, 270], [380, 270], [380, 294]], tone: 'transport', flow: true, label: 'ke rumah' },
    { id: 'tech-wifi', points: [[390, 158], [390, 294]], tone: 'transport', flow: true, label: 'ke lokasi' },
    { id: 'addon-cell', points: [[630, 158], [630, 270], [860, 270], [860, 294]], tone: 'transport', flow: true, label: 'lewat BTS' },
    { id: 'solar-addon', points: [[765, 116], [735, 116]], tone: 'intelligence', dashed: true, label: 'daya', labelAt: [750, 180] },

    { id: 'wifi-brain', points: [[380, 378], [380, 430], [620, 430], [620, 484]], tone: 'intelligence', flow: true, label: 'butuh internet' },
    { id: 'wifi-media', points: [[480, 378], [480, 410], [880, 410], [880, 484]], tone: 'experience' },
    { id: 'cell-brain', points: [[860, 378], [860, 430], [560, 430], [560, 484]], tone: 'intelligence', flow: true },
    { id: 'cell-media', points: [[960, 378], [960, 455], [1020, 455], [1020, 484]], tone: 'experience' },

    { id: 'local-sync', points: [[1110, 74], [1110, 20], [140, 20], [140, 74]], tone: 'transport', dashed: true, label: 'cadangan lokal sinkron', labelAt: [620, 20] },

    { id: 'brain-dash', points: [[480, 529], [400, 529]], tone: 'intelligence', both: true },
    { id: 'brain-media', points: [[760, 529], [880, 529]], tone: 'experience', both: true },
    { id: 'dash-phone', points: [[260, 574], [260, 640], [470, 640], [470, 725]], tone: 'people', both: true },
    { id: 'media-phone', points: [[1020, 574], [1020, 660], [770, 660], [770, 725]], tone: 'people', both: true },
  ],
}

/** G8: Hari petani lima menit. */
export const g08: DgFlow = {
  w: 1240,
  h: 500,
  groups: [
    { id: 'am', label: 'PAGI • 2 MENIT', x: 30, y: 30, w: 380, h: 440, tone: 'people' },
    { id: 'mid', label: 'SIANG • SATU KETUKAN', x: 430, y: 30, w: 380, h: 440, tone: 'intelligence' },
    { id: 'pm', label: 'SORE • PANEN & PASAR', x: 830, y: 30, w: 380, h: 440, tone: 'experience' },
  ],
  nodes: [
    { id: 'a1', x: 50, y: 74, w: 340, h: 64, tone: 'people', icon: 'lucide:layout-dashboard', title: 'Buka dasbor & bacaan' },
    { id: 'a2', x: 50, y: 148, w: 340, h: 64, tone: 'people', icon: 'lucide:droplet', title: 'Lihat kelembapan & foto' },
    { id: 'a3', x: 50, y: 222, w: 340, h: 64, tone: 'interlock', icon: 'lucide:alert-triangle', title: 'Peringatan bila tanah haus' },

    { id: 'm1', x: 450, y: 74, w: 340, h: 64, tone: 'intelligence', icon: 'lucide:message-circle', title: 'Tanya: perlu disiram?' },
    { id: 'm2', x: 450, y: 148, w: 340, h: 64, tone: 'intelligence', icon: 'lucide:brain', title: 'Jawab: dosis dari otak' },
    { id: 'm3', x: 450, y: 222, w: 340, h: 64, tone: 'edge', icon: 'lucide:play', title: 'Ketuk: pompa menyala' },
    { id: 'm4', x: 450, y: 296, w: 340, h: 64, tone: 'transport', icon: 'lucide:repeat', title: 'Atau biarkan otomatis' },

    { id: 'p1', x: 850, y: 74, w: 340, h: 64, tone: 'experience', icon: 'lucide:camera', title: 'Cek foto sore' },
    { id: 'p2', x: 850, y: 148, w: 340, h: 64, tone: 'edge', icon: 'lucide:wheat', title: 'Panen hasil' },
    { id: 'p3', x: 850, y: 222, w: 340, h: 64, tone: 'experience', icon: 'lucide:store', title: 'Jual di etalase' },
    { id: 'p4', x: 850, y: 296, w: 340, h: 64, tone: 'people', icon: 'lucide:users', title: 'Berbagi ke komunitas' },
    { id: 'p5', x: 850, y: 370, w: 340, h: 64, tone: 'intelligence', icon: 'lucide:bar-chart-3', title: 'Baca wawasan' },
  ],
  edges: [
    { id: 'a1-a2', points: [[220, 138], [220, 148]], tone: 'people', flow: true },
    { id: 'a2-a3', points: [[220, 212], [220, 222]], tone: 'people', flow: true },
    { id: 'a3-m1', points: [[390, 254], [420, 254], [420, 106], [450, 106]], tone: 'intelligence', flow: true },

    { id: 'm1-m2', points: [[620, 138], [620, 148]], tone: 'intelligence', flow: true },
    { id: 'm2-m3', points: [[620, 212], [620, 222]], tone: 'edge', flow: true },
    { id: 'm3-m4', points: [[620, 286], [620, 296]], tone: 'transport', flow: true },
    { id: 'm4-p1', points: [[790, 328], [820, 328], [820, 106], [850, 106]], tone: 'experience', flow: true },

    { id: 'p1-p2', points: [[1020, 138], [1020, 148]], tone: 'experience', flow: true },
    { id: 'p2-p3', points: [[1020, 212], [1020, 222]], tone: 'experience', flow: true },
    { id: 'p3-p4', points: [[1020, 286], [1020, 296]], tone: 'people', flow: true },
    { id: 'p4-p5', points: [[1020, 360], [1020, 370]], tone: 'people', flow: true },
  ],
}
