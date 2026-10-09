// Sumber grafik: ~/projects/personal/growmate/stackgraph (berkas .mmd asli).
// Diimpor mentah dan dirender langsung di browser dengan Mermaid,
// sehingga seluruh grafik hidup sebagai SVG web, bukan gambar statis.
import g00 from '../../../stackgraph/g00-master-platform-map.mmd?raw'
import g01 from '../../../stackgraph/g01-product-variants.mmd?raw'
import g02 from '../../../stackgraph/g02-core-closed-loop.mmd?raw'
import g02b from '../../../stackgraph/g02b-core-closed-loop-compact.mmd?raw'
import g03 from '../../../stackgraph/g03-telemetry-pipeline.mmd?raw'
import g04 from '../../../stackgraph/g04-command-lifecycle.mmd?raw'
import g05 from '../../../stackgraph/g05-decision-logic.mmd?raw'
import g06 from '../../../stackgraph/g06-device-lifecycle.mmd?raw'
import g07 from '../../../stackgraph/g07-deployment-topology.mmd?raw'
import g08 from '../../../stackgraph/g08-growers-day.mmd?raw'
import g09 from '../../../stackgraph/g09-data-model.mmd?raw'
import g10 from '../../../stackgraph/g10-value-loop.mmd?raw'
import g11 from '../../../stackgraph/g11-production-pipeline.mmd?raw'
import g12 from '../../../stackgraph/g12-pranata-mangsa-engine.mmd?raw'

export interface GraphDef {
  id: string
  label: string
  title: string
  kind: string
  code: string
  note: string
}

export const GRAPHS: GraphDef[] = [
  {
    id: 'g00',
    label: 'G0',
    title: "Peta platform master",
    kind: "flowchart TB",
    code: g00,
    note: "Grafik ini menegaskan gagasan utama GrowMate sebagai pemisahan kerja yang tegas antara lapangan dan server. Lapisan bawah hanya mengindra dan menggerakkan, lapisan tengah mengangkut pesan, lapisan kecerdasan menilai dan memerintah, sedangkan lapisan atas menerjemahkan hasilnya menjadi kerja lima menit sehari dan perputaran ekonomi. Pembaca perlu memperhatikan arah panah karena arah tersebut menunjukkan hierarki kecerdasan, yakni pengamatan mentah selalu naik sedangkan perintah selalu turun dalam balasan yang sama, sehingga perangkat tidak pernah mengambil keputusan sendiri. Dengan demikian peta ini menjadi kerangka rujukan bagi sebelas grafik berikutnya, dan argumen yang dibangun adalah bahwa otomatisasi berhasil justru karena kecerdasan dipusatkan sedangkan beban petani diringankan.",
  },
  {
    id: 'g01',
    label: 'G1',
    title: "Tiga varian perangkat",
    kind: "flowchart LR",
    code: g01,
    note: "Grafik ini menjelaskan bahwa perbedaan varian bukanlah perbedaan platform, melainkan perbedaan jawaban atas keterbatasan ruang dan infrastruktur. Pods menjawab keterbatasan ruang kota melalui pengendalian lampu, Tech menjawab kebutuhan irigasi kompleks di lahan terbuka melalui pengendalian katup, sedangkan Add-On menjawab ketiadaan listrik dan internet melalui tenaga surya dan seluler dengan konsekuensi operasi siang hari. Kesamaan lima kanal pengindraan pada ketiga varian menunjukkan bahwa basis data yang dipelajari Assistant tetap sebanding, sehingga perbandingan hasil uji antarvarian tetap sah. Argumen yang dibangun adalah bahwa skalabilitas GrowMate terletak pada keseragaman cara mengindra disertai kekhususan cara bertindak.",
  },
  {
    id: 'g02',
    label: 'G2',
    title: "Loop tertutup inti",
    kind: "flowchart TB",
    code: g02,
    note: "Grafik ini menunjukkan bahwa GrowMate bekerja sebagai sistem kendali lingkar tertutup, bukan sebagai pelaporan satu arah. Makna pentingnya terletak pada penumpangan perintah di dalam balasan telemetri yang sama, sehingga setiap putaran sekaligus menutup kewajiban masa lalu melalui ack dan membuka keputusan masa kini. Pembaca perlu memahami bahwa keandalan tidak diperoleh dari jaringan yang sempurna, melainkan dari antrean ber-ID dan konfirmasi pada siklus berikutnya, sehingga perintah yang hilang dapat dibedakan dari konfirmasi yang hilang. Dengan demikian grafik ini menjadi bukti mekanisme yang menjelaskan capaian efisiensi pada hasil uji, karena dosis diberikan kecil, sering, dan selalu terkoreksi.",
  },
  {
    id: 'g02b',
    label: 'G2b',
    title: "Loop tertutup ringkas",
    kind: "flowchart LR",
    code: g02b,
    note: "Versi ringkas dari G2 untuk satu tatap muka: pengamatan naik dalam angka mentah, keputusan turun dalam balasan yang sama, dan konfirmasi menutup lingkar pada siklus berikutnya. Otak Floral Assistant dibuka di tengah agar terlihat bahwa ambang, kalibrasi, dan jadwal hidup di server, bukan di dalam kotak.",
  },
  {
    id: 'g03',
    label: 'G3',
    title: "Pipa telemetri",
    kind: "flowchart LR",
    code: g03,
    note: "Grafik ini menjelaskan mengapa data mentah tidak dapat langsung dipakai sebelum melewati validasi, deduplikasi, penyimpanan, dan kalibrasi. Tahapan tersebut menunjukkan bahwa kualitas keputusan sepenuhnya ditentukan oleh kualitas transformasi, terutama kalibrasi per-probe per-instalasi yang mengubah tegangan menjadi persen yang bermakna agronomis. Pemisahan kanal foto dari kanal angka juga menunjukkan pembedaan fungsi, yakni angka untuk aturan cepat sedangkan citra untuk pemeriksaan visual dan dasbor manusia. Argumen yang dibangun adalah bahwa ketelitian GrowMate berasal dari disiplin pipa data, bukan dari sensor yang mahal.",
  },
  {
    id: 'g04',
    label: 'G4',
    title: "Siklus hidup perintah",
    kind: "sequenceDiagram",
    code: g04,
    note: "Grafik ini menjawab keraguan utama pada sistem nirkabel di lahan, yakni apa yang terjadi apabila perintah atau sinyal hilang. Jawabannya ditunjukkan melalui identitas perintah, antrean berurutan, validasi di perangkat, serta ack yang menutup siklus, sehingga setiap perintah berada dalam salah satu status yang jelas, yaitu antre, terkirim, terlaksana, atau dikirim ulang. Alur sejajar untuk konfigurasi, klaim, dan pembaruan firmware menunjukkan bahwa manajemen armada diperlakukan dengan disiplin revisi yang sama ketatnya dengan dosis air. Dengan demikian grafik ini menjelaskan fondasi keandalan yang memungkinkan petani memercayakan tindakan kepada sistem yang tidak selalu daring.",
  },
  {
    id: 'g05',
    label: 'G5',
    title: "Logika keputusan Floral Assistant",
    kind: "flowchart TB",
    code: g05,
    note: "Grafik ini merupakan inti kecerdasan GrowMate karena mengubah pengetahuan merawat tanaman menjadi empat cabang yang masing-masing dijaga oleh syarat keselamatan. Pembaca perlu memperhatikan bahwa setiap cabang selalu melewati dua pintu, yakni pintu kebutuhan yang menilai apakah tanaman memerlukan tindakan dan pintu keselamatan yang menilai apakah tindakan diizinkan, sehingga tidak ada dosis yang keluar hanya karena tanah kering. Pembungkus musim dan kalibrasi menunjukkan bahwa aturan bersifat adaptif, yakni kepekaan disesuaikan menurut musim Jawa sedangkan angka mentah dinormalisasi menurut karakteristik tiap probe, tetapi data langsung selalu mengalahkan riwayat. Argumen yang dibangun adalah bahwa kecerdasan terletak pada kemampuan menahan diri, sebab sebagian besar penghematan air justru berasal dari keputusan untuk tidak menyiram.",
  },
  {
    id: 'g06',
    label: 'G6',
    title: "Siklus hidup perangkat",
    kind: "stateDiagram-v2",
    code: g06,
    note: "Grafik ini menjelaskan bahwa perangkat diperlakukan sebagai entitas yang lahir, diikat kepada pemilik, bekerja, menurun kualitasnya, dan diperbarui, bukan sebagai alat yang sekali pasang lalu dibiarkan. Makna pentingnya terletak pada status degraded dan offline yang dirancang sebagai keadaan normal, bukan kegagalan, sehingga perangkat tetap mengindra dan bertindak aman lalu menyinkronkan ketika tautan pulih. Pembukaan kembali portal setelah kegagalan berulang serta mekanisme klaim dan unclaim menunjukkan bahwa administrasi armada dipikirkan sejak awal untuk penggunaan lapangan yang berpindah tangan. Dengan demikian grafik ini menjadi penjelasan mengapa sistem tetap memberi manfaat di lahan dengan konektivitas buruk.",
  },
  {
    id: 'g07',
    label: 'G7',
    title: "Topologi penyebaran",
    kind: "flowchart TB",
    code: g07,
    note: "Grafik ini menjelaskan pilihan penempatan yang rasional berdasarkan dua pertanyaan, yakni dari mana daya diperoleh dan apakah internet tersedia. Pods dan Tech menggantungkan diri pada WiFi sehingga cocok untuk rumah dan kebun yang sudah berinfrastruktur, sedangkan Add-On memutus ketergantungan tersebut melalui surya dan seluler dengan batasan operasi siang hari. Pembedaan panah tegas dan putus-putus menunjukkan secara jujur bagian mana yang lumpuh tanpa internet dan bagian mana yang tetap berjalan, sehingga klaim ketahanan offline dapat diuji. Argumen yang dibangun adalah bahwa tidak ada satu topologi terbaik, melainkan kesesuaian antara topologi dan kondisi lahan.",
  },
  {
    id: 'g08',
    label: 'G8',
    title: "Hari petani lima menit",
    kind: "journey",
    code: g08,
    note: "Grafik ini menunjukkan bahwa keberhasilan GrowMate diukur dari penyusutan waktu kerja manusia, bukan dari kecanggihan perangkat. Alurnya sengaja dirancang dari pemeriksaan pagi yang singkat menuju satu ketukan tindakan, kemudian menuju foto sore dan panen bernilai jual, sehingga setiap interaksi layar selalu berakhir pada tindakan fisik atau pendapatan. Kehadiran pasar dan komunitas pada ujung perjalanan menunjukkan bahwa pengalaman tidak berhenti pada tanaman yang sehat, melainkan dilanjutkan menjadi pendapatan dan pembelajaran sejawat. Dengan demikian grafik ini menghubungkan metrik teknis pada grafik sebelumnya dengan metrik manusia berupa waktu 45 menjadi 5 menit per hari.",
  },
  {
    id: 'g09',
    label: 'G9',
    title: "Model data konseptual",
    kind: "erDiagram",
    code: g09,
    note: "Grafik ini menjelaskan bahwa setiap keputusan dan tindakan pada grafik sebelumnya meninggalkan jejak yang tersimpan sebagai relasi antar-entitas. Relasi satu-ke-banyak dari pengguna ke perangkat, dari perangkat ke tanaman dan perintah, serta dari tanaman ke bacaan dan jadwal menunjukkan bahwa riwayat lengkap satu dosis dapat ditelusuri kembali dari tanaman hingga pengguna dan sebaliknya. Sifat konseptualnya menegaskan bahwa yang dipentingkan adalah kelengkapan hubungan, bukan detail kolom, sehingga model tetap berlaku walaupun implementasi basis data berubah. Argumen yang dibangun adalah bahwa akuntabilitas sistem berasal dari ingatan yang utuh, sebab tanpa relasi tersebut evaluasi aturan dan audit dosis tidak mungkin dilakukan.",
  },
  {
    id: 'g10',
    label: 'G10',
    title: "Loop nilai",
    kind: "flowchart TB",
    code: g10,
    note: "Grafik ini menjelaskan mengapa penghematan teknis tidak berhenti sebagai angka laboratorium, melainkan berputar menjadi alasan membeli, alasan berlangganan, pendapatan panen, pertumbuhan komunitas, dan kelahiran kembali perangkat bekas. Hasil uji berupa penurunan air 42,8 persen, penurunan nutrisi 27,4 persen, penurunan energi 25 persen, penyusutan waktu 88,9 persen, kenaikan kelangsungan hidup dari 72 menjadi 94 persen, serta efek mode musim terhadap kelebihan air dan kesehatan tanaman ditempatkan sebagai simpul keberhasilan petani yang menggerakkan seluruh putaran. Kehadiran program daur ulang pada ujung loop menunjukkan bahwa keberlanjutan dirancang sebagai aliran material kembali ke produksi, bukan sebagai slogan. Dengan demikian grafik ini menjadi penutup argumen bahwa teknologi tepat guna harus membuktikan nilai planet, profit, people, dan purpose dalam satu putaran yang sama.",
  },
  {
    id: 'g11',
    label: 'G11',
    title: "Pipa produksi",
    kind: "flowchart LR",
    code: g11,
    note: "Grafik ini menjelaskan bahwa kualitas di lapangan ditentukan jauh sebelum perangkat pertama kali mengirim telemetri. Tahap pra-produksi memastikan pengetahuan musim, firmware, casing, dan antarmuka matang terlebih dahulu, tahap produksi memastikan setiap unit dirakit dan diberi identitas, sedangkan tahap pasca-produksi memastikan setiap probe dikalibrasi dan setiap aktuator diuji sebelum dinyatakan lolos mutu. Umpan balik pasar yang kembali menjadi revisi serta penarikan unit bekas yang kembali menjadi perakitan menunjukkan bahwa produksi diperlakukan sebagai loop pembelajaran, bukan jalur sekali jalan. Argumen yang dibangun adalah bahwa keandalan yang tampak pada grafik operasi merupakan akibat dari disiplin pada grafik kelahiran ini.",
  },
  {
    id: 'g12',
    label: 'G12',
    title: "Mesin Pranata Mangsa",
    kind: "flowchart LR",
    code: g12,
    note: "Mesin musim mengolah riwayat dan prakiraan cuaca nasional menjadi konteks musim ala Pranata Mangsa bagi otak Floral Assistant. Bacaan lapangan langsung selalu mengalahkan riwayat, sedangkan mode musim terbukti menurunkan kelebihan siram 78,6 persen dan menaikkan indeks kesehatan tanaman 27,9 persen pada uji lapangan.",
  },
]
