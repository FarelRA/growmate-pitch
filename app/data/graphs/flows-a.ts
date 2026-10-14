import type { DgFlow } from './types'

/** G0: Peta platform master: lima lapisan, pengamatan naik, perintah turun. */
export const g00: DgFlow = {
  w: 1240,
  h: 900,
  groups: [
    { id: 'l4', label: 'MANUSIA & NILAI', x: 120, y: 60, w: 1010, h: 130, tone: 'people' },
    { id: 'l3', label: 'PENGALAMAN', x: 120, y: 220, w: 1010, h: 130, tone: 'experience' },
    { id: 'l2', label: 'KECERDASAN', x: 120, y: 380, w: 1010, h: 130, tone: 'intelligence' },
    { id: 'l1', label: 'ANGKUT', x: 120, y: 540, w: 1010, h: 130, tone: 'transport' },
    { id: 'l0', label: 'LAPANGAN', x: 120, y: 700, w: 1010, h: 130, tone: 'edge' },
  ],
  nodes: [
    { id: 'farmer', x: 130, y: 100, w: 235, h: 84, tone: 'people', icon: 'lucide:users', title: 'Petani', sub: 'kerja lima menit sehari' },
    { id: 'community', x: 385, y: 100, w: 235, h: 84, tone: 'people', icon: 'lucide:message-circle', title: 'Komunitas', sub: 'tips & berbagi' },
    { id: 'buyer', x: 640, y: 100, w: 235, h: 84, tone: 'people', icon: 'lucide:store', title: 'Pembeli', sub: 'pasar hasil panen' },
    { id: 'advisor', x: 895, y: 100, w: 235, h: 84, tone: 'people', icon: 'lucide:heart-handshake', title: 'Penasihat', sub: 'dampingi & awasi' },

    { id: 'dashboard', x: 130, y: 260, w: 235, h: 84, tone: 'experience', icon: 'lucide:layout-dashboard', title: 'Dasbor', sub: 'angka, foto, kesehatan' },
    { id: 'chat', x: 385, y: 260, w: 235, h: 84, tone: 'experience', icon: 'lucide:message-square', title: 'Chat asisten', sub: 'tanya lalu perintah' },
    { id: 'alerts', x: 640, y: 260, w: 235, h: 84, tone: 'experience', icon: 'lucide:bell', title: 'Peringatan', sub: 'siram, jaga, panen' },
    { id: 'etalase', x: 895, y: 260, w: 235, h: 84, tone: 'experience', icon: 'lucide:shopping-basket', title: 'Etalase', sub: 'jual & beli hasil' },

    { id: 'assistant', x: 130, y: 420, w: 184, h: 84, tone: 'intelligence', icon: 'lucide:brain', title: 'Assistant', sub: 'otak keputusan' },
    { id: 'season', x: 334, y: 420, w: 184, h: 84, tone: 'intelligence', icon: 'lucide:calendar-range', title: 'Musim', sub: 'pranata mangsa' },
    { id: 'rules', x: 538, y: 420, w: 184, h: 84, tone: 'intelligence', icon: 'lucide:list-checks', title: 'Aturan', sub: 'empat aturan tindak' },
    { id: 'queue', x: 742, y: 420, w: 184, h: 84, tone: 'intelligence', icon: 'lucide:send', title: 'Antrean', sub: 'perintah ber-ID' },
    { id: 'insights', x: 946, y: 420, w: 184, h: 84, tone: 'intelligence', icon: 'lucide:trending-up', title: 'Wawasan', sub: 'hasil & tren' },

    { id: 'api', x: 130, y: 580, w: 235, h: 84, tone: 'transport', icon: 'lucide:server', title: 'REST API', sub: 'otorisasi & data' },
    { id: 'telemetry', x: 385, y: 580, w: 235, h: 84, tone: 'transport', icon: 'lucide:radio', title: 'Telemetri', sub: 'MQTT nomor & status' },
    { id: 'ws', x: 640, y: 580, w: 235, h: 84, tone: 'transport', icon: 'lucide:arrow-left-right', title: 'Balas WS', sub: 'perintah & ack' },
    { id: 'media', x: 895, y: 580, w: 235, h: 84, tone: 'transport', icon: 'lucide:image', title: 'Foto', sub: 'HTTPS tiap 15 menit' },

    { id: 'pods', x: 130, y: 740, w: 184, h: 84, tone: 'edge', icon: 'lucide:sprout', title: 'Pods', sub: 'indoor & lampu' },
    { id: 'tech', x: 334, y: 740, w: 184, h: 84, tone: 'edge', icon: 'lucide:tractor', title: 'Tech', sub: 'lahan & katup' },
    { id: 'addon', x: 538, y: 740, w: 184, h: 84, tone: 'edge', icon: 'lucide:sun', title: 'Add-On', sub: 'surya & seluler' },
    { id: 'probes', x: 742, y: 740, w: 184, h: 84, tone: 'edge', icon: 'lucide:gauge', title: 'Probe', sub: 'tanah, cahaya, arus' },
    { id: 'actuators', x: 946, y: 740, w: 184, h: 84, tone: 'edge', icon: 'lucide:wrench', title: 'Aktuator', sub: 'pompa, katup, lampu' },
  ],
  edges: [
    { id: 'up', points: [[60, 855], [60, 45]], tone: 'edge', flow: true, label: 'Pengamatan mentah naik', labelAt: [154, 25] },
    { id: 'down', points: [[1180, 45], [1180, 855]], tone: 'intelligence', flow: true, label: 'Perintah selalu turun', labelAt: [1086, 25] },
    { id: 'recycle', points: [[1180, 855], [60, 855]], tone: 'people', flow: true, label: 'Nilai kembali sebagai benih', labelAt: [620, 878] },
  ],
}

/** G1: Tiga varian perangkat: satu platform, tiga jawaban lapangan. */
export const g01: DgFlow = {
  w: 1240,
  h: 680,
  groups: [
    { id: 'col-pods', label: 'PODS • BALKON & INDOOR', x: 30, y: 30, w: 820, h: 120, tone: 'people' },
    { id: 'col-tech', label: 'TECH • LAHAN TERBUKA', x: 30, y: 170, w: 820, h: 120, tone: 'experience' },
    { id: 'col-addon', label: 'ADD-ON • TANPA LISTRIK & INTERNET', x: 30, y: 310, w: 820, h: 120, tone: 'intelligence' },
    { id: 'brain', label: 'OTAK DI SERVER', x: 880, y: 30, w: 330, h: 400, tone: 'intelligence' },
    { id: 'svc', label: 'LAYANAN PLATFORM', x: 30, y: 470, w: 1180, h: 170, tone: 'experience' },
  ],
  nodes: [
    { id: 'pods-box', x: 40, y: 64, w: 180, h: 80, tone: 'edge', icon: 'lucide:sprout', title: 'Pods', sub: 'kotak kamera kecil' },
    { id: 'pods-sense', x: 235, y: 64, w: 250, h: 80, tone: 'transport', icon: 'lucide:eye', title: 'Indra', sub: 'tanah, cahaya, air, foto' },
    { id: 'pods-do', x: 500, y: 64, w: 200, h: 80, tone: 'edge', icon: 'lucide:droplets', title: 'Aksi', sub: 'siram & lampu' },
    { id: 'pods-link', x: 715, y: 64, w: 130, h: 80, tone: 'experience', icon: 'lucide:wifi', title: 'WiFi', sub: 'rumah' },

    { id: 'tech-box', x: 40, y: 204, w: 180, h: 80, tone: 'edge', icon: 'lucide:tractor', title: 'Tech', sub: 'kotak lapang' },
    { id: 'tech-sense', x: 235, y: 204, w: 250, h: 80, tone: 'transport', icon: 'lucide:eye', title: 'Indra', sub: 'lima + pupuk, arus, video' },
    { id: 'tech-do', x: 500, y: 204, w: 200, h: 80, tone: 'edge', icon: 'lucide:wrench', title: 'Aksi', sub: 'air, pupuk, semprot' },
    { id: 'tech-link', x: 715, y: 204, w: 130, h: 80, tone: 'experience', icon: 'lucide:wifi', title: 'WiFi', sub: 'lokasi' },

    { id: 'addon-box', x: 40, y: 344, w: 180, h: 80, tone: 'edge', icon: 'lucide:sun', title: 'Add-On', sub: 'Tech + kit surya' },
    { id: 'addon-sense', x: 235, y: 344, w: 250, h: 80, tone: 'transport', icon: 'lucide:eye', title: 'Indra', sub: 'sama, arus = baterai' },
    { id: 'addon-do', x: 500, y: 344, w: 200, h: 80, tone: 'edge', icon: 'lucide:wrench', title: 'Aksi', sub: 'hanya saat matahari' },
    { id: 'addon-link', x: 715, y: 344, w: 130, h: 80, tone: 'experience', icon: 'lucide:antenna', title: 'Seluler', sub: 'otomatis' },

    { id: 'assistant', x: 900, y: 70, w: 290, h: 84, tone: 'intelligence', icon: 'lucide:brain', title: 'Assistant', sub: 'satu keputusan tertimbang' },
    { id: 'season', x: 900, y: 170, w: 290, h: 76, tone: 'intelligence', icon: 'lucide:calendar-range', title: 'Musim', sub: 'tuning pranata mangsa' },
    { id: 'rules', x: 900, y: 262, w: 290, h: 76, tone: 'intelligence', icon: 'lucide:list-checks', title: 'Empat aturan', sub: 'air • cahaya • pupuk • semprot' },
    { id: 'queue', x: 900, y: 350, w: 290, h: 70, tone: 'intelligence', icon: 'lucide:send', title: 'Antrean', sub: 'perintah ber-ID' },

    { id: 'store', x: 45, y: 514, w: 270, h: 80, tone: 'experience', icon: 'lucide:store', title: 'Etalase', sub: 'pasar hasil panen' },
    { id: 'svc-chat', x: 335, y: 514, w: 270, h: 80, tone: 'experience', icon: 'lucide:message-square', title: 'Chat', sub: 'tanya jawab petani' },
    { id: 'svc-media', x: 625, y: 514, w: 270, h: 80, tone: 'experience', icon: 'lucide:images', title: 'Media', sub: 'foto & klip lapang' },
    { id: 'svc-insights', x: 915, y: 514, w: 270, h: 80, tone: 'experience', icon: 'lucide:bar-chart-3', title: 'Wawasan', sub: 'tren & laporan' },
  ],
  edges: [
    { id: 'e-pods', points: [[845, 104], [880, 104]], tone: 'edge' },
    { id: 'e-tech', points: [[845, 244], [880, 244]], tone: 'edge' },
    { id: 'e-addon', points: [[845, 384], [880, 384]], tone: 'edge' },
    { id: 'season-to-a', from: 'season', to: 'assistant', tone: 'intelligence' },
    { id: 'rules-to-s', from: 'rules', to: 'season', tone: 'intelligence' },
    { id: 'a-to-q', points: [[1190, 92], [1215, 92], [1215, 385], [1190, 385]], tone: 'intelligence', flow: true },
    { id: 'q-to-svc', points: [[1045, 420], [1045, 470]], tone: 'experience', label: 'balasan, dosis & konten', labelAt: [1045, 450] },
    { id: 'back', points: [[45, 556], [10, 556], [10, 384], [30, 384]], tone: 'transport', dashed: true, label: 'balasan & hasil pasar', labelAt: [154, 450] },
  ],
}

/** G2: Loop tertutup inti: satu putaran mengunci kewajiban lama dan membuka keputusan baru. */
export const g02: DgFlow = {
  w: 1240,
  h: 910,
  groups: [
    { id: 'sense', label: 'INDRA', x: 30, y: 30, w: 1180, h: 150, tone: 'edge' },
    { id: 'brain', label: 'OTAK SERVER', x: 30, y: 350, w: 1180, h: 310, tone: 'intelligence' },
    { id: 'act', label: 'AKTUATOR', x: 30, y: 700, w: 1180, h: 170, tone: 'edge' },
  ],
  nodes: [
    { id: 'c-soil', x: 45, y: 74, w: 140, h: 64, tone: 'edge', title: 'Tanah', sub: 'kelembapan' },
    { id: 'c-light', x: 213, y: 74, w: 140, h: 64, tone: 'edge', title: 'Cahaya', sub: 'lux' },
    { id: 'c-tank', x: 381, y: 74, w: 140, h: 64, tone: 'edge', title: 'Tangki', sub: 'level' },
    { id: 'c-air', x: 549, y: 74, w: 140, h: 64, tone: 'transport', title: 'Udara', sub: 'RH & suhu' },
    { id: 'c-heat', x: 717, y: 74, w: 140, h: 64, tone: 'transport', title: 'Suhu', sub: 'derajat' },
    { id: 'c-amp', x: 885, y: 74, w: 140, h: 64, tone: 'transport', title: 'Arus', sub: 'tegangan' },
    { id: 'c-cam', x: 1053, y: 74, w: 140, h: 64, tone: 'experience', title: 'Kamera', sub: 'foto' },

    { id: 'rest', x: 45, y: 230, w: 340, h: 76, tone: 'transport', icon: 'lucide:server', title: 'REST & MQTT', sub: 'angka & status' },
    { id: 'https', x: 450, y: 230, w: 340, h: 76, tone: 'experience', icon: 'lucide:image', title: 'HTTPS media', sub: 'foto tiap 15 menit' },
    { id: 'ws', x: 855, y: 230, w: 340, h: 76, tone: 'experience', icon: 'lucide:arrow-left-right', title: 'WebSocket', sub: 'balasan turun' },

    { id: 'dedup', x: 45, y: 390, w: 550, h: 72, tone: 'intelligence', icon: 'lucide:filter', title: 'Dedup & cek', sub: 'hapus ganda, validasi' },
    { id: 'calib', x: 645, y: 390, w: 550, h: 72, tone: 'intelligence', icon: 'lucide:gauge', title: 'Kalibrasi probe', sub: 'mentah → persen' },
    { id: 'season', x: 45, y: 478, w: 360, h: 72, tone: 'intelligence', icon: 'lucide:calendar-range', title: 'Musim', sub: 'pranata mangsa' },
    { id: 'rules', x: 440, y: 478, w: 360, h: 72, tone: 'intelligence', icon: 'lucide:list-checks', title: 'Aturan', sub: 'air • cahaya • pupuk • semprot' },
    { id: 'decide', x: 835, y: 478, w: 360, h: 72, tone: 'intelligence', icon: 'lucide:brain', title: 'Keputusan', sub: 'tertimbang & terlindungi' },
    { id: 'queue', x: 45, y: 566, w: 1150, h: 64, tone: 'intelligence', icon: 'lucide:send', title: 'Antrean perintah', sub: 'ber-ID, diantar ulang bila belum di-ack' },

    { id: 'pump', x: 45, y: 744, w: 180, h: 64, tone: 'edge', title: 'Pompa', sub: 'air' },
    { id: 'valve', x: 235, y: 744, w: 180, h: 64, tone: 'edge', title: 'Katup', sub: 'pupuk & semprot' },
    { id: 'lamp', x: 425, y: 744, w: 180, h: 64, tone: 'edge', title: 'Lampu', sub: 'cahaya' },
    { id: 'guard', x: 615, y: 744, w: 180, h: 64, tone: 'interlock', title: 'Ambang', sub: 'batas aman' },
    { id: 'cal2', x: 805, y: 744, w: 180, h: 64, tone: 'intelligence', title: 'Kalender', sub: 'jadwal' },
    { id: 'ack', x: 995, y: 744, w: 180, h: 64, tone: 'transport', title: 'Konfirmasi', sub: 'ack balik' },
  ],
  edges: [
    { id: 'soil-rest', from: 'c-soil', to: 'rest', tone: 'transport', flow: true, label: 'angka mentah' },
    { id: 'air-https', from: 'c-air', to: 'https', tone: 'experience', flow: true },
    { id: 'cam-ws', from: 'c-cam', to: 'ws', tone: 'experience', label: 'foto', labelAt: [1000, 200] },
    { id: 'rest-dedup', from: 'rest', to: 'dedup', tone: 'intelligence' },
    { id: 'ws-dedup', points: [[1025, 306], [1025, 340], [450, 340], [450, 390]], tone: 'intelligence' },
    { id: 'https-decide', from: 'https', to: 'decide', tone: 'intelligence' },
    { id: 'dedup-calib', from: 'dedup', to: 'calib', tone: 'intelligence' },
    { id: 'dedup-season', from: 'dedup', to: 'season', tone: 'intelligence' },
    { id: 'calib-rules', from: 'calib', to: 'rules', tone: 'intelligence' },
    { id: 'season-rules', from: 'season', to: 'rules', tone: 'intelligence' },
    { id: 'rules-decide', from: 'rules', to: 'decide', tone: 'intelligence' },
    { id: 'decide-queue', from: 'decide', to: 'queue', tone: 'intelligence', flow: true },
    { id: 'q-pump', from: 'queue', to: 'pump', tone: 'edge' },
    { id: 'q-valve', from: 'queue', to: 'valve', tone: 'edge' },
    { id: 'q-lamp', from: 'queue', to: 'lamp', tone: 'edge' },
    { id: 'loop', points: [[620, 870], [620, 888], [18, 888], [18, 268], [45, 268]], tone: 'transport', flow: true, label: 'ack menutup putaran berikutnya', labelAt: [430, 888] },
  ],
}

/** G2b: Loop ringkas: otak dibuka di tengah. */
export const g02b: DgFlow = {
  w: 1240,
  h: 730,
  groups: [
    { id: 'field', label: 'LAPANGAN', x: 30, y: 30, w: 230, h: 400, tone: 'edge' },
    { id: 'brain', label: 'OTAK DIBUKA', x: 290, y: 30, w: 440, h: 560, tone: 'intelligence' },
    { id: 'act', label: 'BALASAN & AKSI', x: 760, y: 120, w: 230, h: 310, tone: 'transport' },
  ],
  nodes: [
    { id: 'senses', x: 50, y: 70, w: 190, h: 84, tone: 'edge', icon: 'lucide:eye', title: 'Indra', sub: 'tanah, cahaya, air, foto' },
    { id: 'boxes', x: 50, y: 170, w: 190, h: 84, tone: 'edge', icon: 'lucide:box', title: 'Kotak', sub: 'Pods, Tech, Add-On' },
    { id: 'upload', x: 50, y: 270, w: 190, h: 84, tone: 'transport', icon: 'lucide:upload', title: 'Unggah', sub: 'angka & status' },

    { id: 'intake', x: 310, y: 70, w: 400, h: 72, tone: 'intelligence', icon: 'lucide:inbox', title: 'Intake', sub: 'cek, dedup, simpan' },
    { id: 'calib', x: 310, y: 156, w: 400, h: 72, tone: 'intelligence', icon: 'lucide:gauge', title: 'Kalibrasi', sub: 'mentah → persen, per probe' },
    { id: 'season', x: 310, y: 242, w: 400, h: 72, tone: 'intelligence', icon: 'lucide:calendar-range', title: 'Musim', sub: 'pranata mangsa' },
    { id: 'assistant', x: 310, y: 328, w: 400, h: 84, tone: 'intelligence', icon: 'lucide:brain', title: 'Assistant', sub: 'satu keputusan tertimbang' },
    { id: 'rules', x: 310, y: 424, w: 400, h: 72, tone: 'intelligence', icon: 'lucide:list-checks', title: 'Empat aturan', sub: 'air • cahaya • pupuk • semprot' },
    { id: 'queue', x: 310, y: 512, w: 400, h: 64, tone: 'intelligence', icon: 'lucide:send', title: 'Antrean', sub: 'ber-ID, diulang bila belum di-ack' },

    { id: 'reply', x: 780, y: 160, w: 190, h: 90, tone: 'transport', icon: 'lucide:download', title: 'Balasan', sub: 'perintah & setelan' },
    { id: 'actuators', x: 780, y: 290, w: 190, h: 110, tone: 'edge', icon: 'lucide:wrench', title: 'Aktuator', sub: 'pompa • katup • lampu' },
    { id: 'confirm', x: 1010, y: 290, w: 200, h: 90, tone: 'edge', icon: 'lucide:check-circle', title: 'Konfirmasi', sub: 'selesai diterima' },
  ],
  edges: [
    { id: 's-b', from: 'senses', to: 'boxes', tone: 'edge', flow: true },
    { id: 'b-u', from: 'boxes', to: 'upload', tone: 'transport', flow: true },
    { id: 'u-i', from: 'upload', to: 'intake', tone: 'transport' },
    { id: 'i-c', from: 'intake', to: 'calib', tone: 'intelligence' },
    { id: 'c-s', from: 'calib', to: 'season', tone: 'intelligence' },
    { id: 's-a', from: 'season', to: 'assistant', tone: 'intelligence' },
    { id: 'a-r', from: 'assistant', to: 'rules', tone: 'intelligence' },
    { id: 'r-q', from: 'rules', to: 'queue', tone: 'intelligence', flow: true },
    { id: 'q-reply', points: [[710, 544], [745, 544], [745, 205], [780, 205]], tone: 'transport', flow: true },
    { id: 'reply-act', from: 'reply', to: 'actuators', tone: 'edge' },
    { id: 'act-conf', from: 'actuators', to: 'confirm', tone: 'edge' },
    { id: 'loop', points: [[1110, 380], [1110, 700], [145, 700], [145, 354]], tone: 'transport', flow: true, label: 'ack ditutup berikutnya', labelAt: [620, 700] },
  ],
}

/** G3: Pipa telemetri: kanal angka dan kanal foto. */
export const g03: DgFlow = {
  w: 1240,
  h: 400,
  nodes: [
    { id: 'probe', x: 30, y: 80, w: 180, h: 88, tone: 'edge', icon: 'lucide:gauge', title: 'Probe', sub: 'baca tanah' },
    { id: 'adc', x: 226, y: 80, w: 180, h: 88, tone: 'edge', icon: 'lucide:cpu', title: 'ADC', sub: 'suhu, lux, arus' },
    { id: 'env', x: 422, y: 80, w: 180, h: 88, tone: 'transport', icon: 'lucide:cloud-sun', title: 'Env', sub: 'tekanan & suhu' },
    { id: 'post', x: 618, y: 80, w: 180, h: 88, tone: 'transport', icon: 'lucide:filter', title: 'Post', sub: 'validasi & dedup' },
    { id: 'ingest', x: 814, y: 80, w: 180, h: 88, tone: 'transport', icon: 'lucide:arrow-down-to-line', title: 'Ingest', sub: 'terima & simpan' },
    { id: 'store', x: 1010, y: 80, w: 180, h: 88, tone: 'transport', icon: 'lucide:database', title: 'Store', sub: 'riwayat & gambar' },

    { id: 'cam', x: 30, y: 270, w: 180, h: 88, tone: 'experience', icon: 'lucide:camera', title: 'Kamera', sub: 'foto tiap 15 menit' },
    { id: 'pick', x: 226, y: 270, w: 180, h: 88, tone: 'experience', icon: 'lucide:sparkles', title: 'Pilih foto', sub: 'terbaik, buang kosong' },
    { id: 'media', x: 422, y: 270, w: 180, h: 88, tone: 'experience', icon: 'lucide:images', title: 'Media', sub: 'simpan & tampilkan' },
    { id: 'calib', x: 618, y: 270, w: 180, h: 88, tone: 'edge', icon: 'lucide:gauge', title: 'Kalibrasi', sub: 'mentah → persen' },
    { id: 'rules', x: 814, y: 270, w: 180, h: 88, tone: 'intelligence', icon: 'lucide:list-checks', title: 'Aturan', sub: 'ambil & putuskan' },
    { id: 'cmd', x: 1010, y: 270, w: 180, h: 88, tone: 'transport', icon: 'lucide:send', title: 'Perintah', sub: 'kirim & konfirmasi' },
  ],
  edges: [
    { id: 'p-a', from: 'probe', to: 'adc', tone: 'edge', flow: true, label: 'angka', labelAt: [128, 50] },
    { id: 'a-e', from: 'adc', to: 'env', tone: 'transport', flow: true },
    { id: 'e-po', from: 'env', to: 'post', tone: 'transport', flow: true },
    { id: 'po-i', from: 'post', to: 'ingest', tone: 'transport', flow: true },
    { id: 'i-s', from: 'ingest', to: 'store', tone: 'transport', flow: true },
    { id: 's-c', points: [[1100, 168], [1100, 232], [708, 232], [708, 270]], tone: 'edge', label: 'angka tersimpan' },
    { id: 'c-p', from: 'cam', to: 'pick', tone: 'experience', flow: true, label: 'foto', labelAt: [154, 240] },
    { id: 'p-m', from: 'pick', to: 'media', tone: 'experience', flow: true },
    { id: 'm-r', points: [[512, 270], [512, 196], [904, 196], [904, 270]], tone: 'experience', label: 'pemeriksaan visual' },
    { id: 'c-ru', from: 'calib', to: 'rules', tone: 'intelligence' },
    { id: 'r-cm', from: 'rules', to: 'cmd', tone: 'transport', flow: true },
  ],
}
