// Data empat halaman pesanan 100 unit pada lapisan tersembunyi.
// Isi hanya orang, unit, bulan, dan hasil pesanan: tanpa biaya kru.
// MODEL KAPASITAS BERSAMA (berlaku 13 Okt 2026, menggantikan model campuran
// blended 7:1:2): satu orang-bulan = 7 Pods ATAU 2,5 Tech ATAU 2,5 Add-on
// (titik tengah rentang 2 sampai 3) ATAU campuran se garis tradeoff.
// Biaya waktu satuan: Pods 1/7, Tech 1/2,5, Add-on 1/2,5 orang-bulan.
// Total orang-bulan = P/7 + T/2,5 + A/2,5; kalender = total dibagi orang,
// dibulatkan ke atas. Harga: Pods Rp803 rb, Tech Rp2,08 jt,
// Add-on Rp2,41 jt; margin 28,6%.

/** Satu baris kru pada tabel tradeoff bulanan. */
export interface OrderCrewRow {
  key: string
  name: string
  pods: string
  tech: string
  addon: string
  example: string
  hot?: boolean
}

/** Kapasitas bersama tiap ukuran kru dalam satu bulan. */
export const ORDER_CREW: OrderCrewRow[] = [
  { key: 'solo', name: 'Solo (1 orang)', pods: '7', tech: '2,5', addon: '2,5', example: '4 Pods + 1 Tech', hot: true },
  { key: 'plus1', name: 'Kru +1 (2 orang)', pods: '14', tech: '5', addon: '5', example: '5 Pods + 2 Tech + 1 Add-on' },
  { key: 'plus2', name: 'Kru +2 (3 orang)', pods: '21', tech: '7,5', addon: '7,5', example: '7 Pods + 3 Tech + 2 Add-on', hot: true },
  { key: 'plus4', name: 'Kru +4 (5 orang)', pods: '35', tech: '12,5', addon: '12,5', example: '12 Pods + 4 Tech + 4 Add-on' },
  { key: 'flex', name: 'Fleksibel 2 ke 1', pods: '21', tech: '7,5', addon: '7,5', example: '3 bulan pertama, lalu ikut +1' },
]

/** Lencana ikhtisar halaman orang. */
export const ORDER_ORANG_BADGES: string[] = [
  '1 orang-bulan = 7 Pods atau 2,5 Tech atau 2,5 Add-on',
  'Tech dan Add-on memakai rentang 2 sampai 3',
  'Contoh: 4 Pods + 1 Tech = 0,97 orang-bulan',
]

/** Cara membaca tabel tradeoff. */
export const ORDER_ORANG_NOTE =
  'Cara baca: tiap baris adalah kapasitas satu bulan kru itu. Kolom Pods, Tech, dan Add-on adalah bila sebulan penuh hanya merakit satu varian; kolom contoh adalah campuran se garis tradeoff yang jumlah biayanya tidak melebihi orang-bulan tersedia. Angka Tech memakai titik tengah 2,5.'

/** Satu sel waktu kirim: bulan kalender dan rentang laju 2 lawan 3. */
export interface OrderTimeCell {
  months: string
  range: string
}

/** Satu baris kru pada tabel waktu kirim 100 unit. */
export interface OrderTimeRow {
  key: string
  name: string
  a: OrderTimeCell
  b: OrderTimeCell
  c: OrderTimeCell
  hot?: boolean
}

/** Waktu kirim 100 unit tiap kru untuk tiap campuran. */
export const ORDER_TIMES: OrderTimeRow[] = [
  {
    key: 'solo', name: 'Solo',
    a: { months: '33 bln', range: 'rentang 28 s.d. 40 bln' },
    b: { months: '22 bln', range: 'rentang 20 s.d. 25 bln' },
    c: { months: '28 bln', range: 'rentang 24 s.d. 33 bln' },
  },
  {
    key: 'plus1', name: 'Kru +1',
    a: { months: '17 bln', range: 'rentang 14 s.d. 20 bln' },
    b: { months: '11 bln', range: 'rentang 10 s.d. 13 bln' },
    c: { months: '14 bln', range: 'rentang 12 s.d. 17 bln' },
  },
  {
    key: 'plus2', name: 'Kru +2', hot: true,
    a: { months: '11 bln', range: 'rentang 10 s.d. 14 bln' },
    b: { months: '8 bln', range: 'rentang 7 s.d. 9 bln' },
    c: { months: '10 bln', range: 'rentang 8 s.d. 11 bln' },
  },
  {
    key: 'plus4', name: 'Kru +4',
    a: { months: '7 bln', range: 'rentang 6 s.d. 8 bln' },
    b: { months: '5 bln', range: 'rentang 4 s.d. 5 bln' },
    c: { months: '6 bln', range: 'rentang 5 s.d. 7 bln' },
  },
  {
    key: 'flex', name: 'Fleksibel 2 ke 1', hot: true,
    a: { months: '15 bln', range: 'rentang 13 s.d. 19 bln' },
    b: { months: '10 bln', range: 'rentang 9 s.d. 11 bln' },
    c: { months: '13 bln', range: 'rentang 11 s.d. 15 bln' },
  },
]

/** Lencana ikhtisar halaman waktu. */
export const ORDER_WAKTU_BADGES: string[] = [
  'Orang-bulan: A 32,3, B 22,0, C 27,1',
  'Lini terberat: A Tech, B Pods, C Add-on',
  'Kru +4 tercepat: 7, 5, dan 6 bln',
]

/** Cara membaca tabel waktu kirim. */
export const ORDER_WAKTU_NOTE =
  'Cara baca: angka adalah bulan sampai 100 unit tuntas. Total orang-bulan = Pods/7 + Tech/2,5 + Add-on/2,5; kalender = total dibagi orang, dibulatkan ke atas. Rentang memakai laju Tech 2 lawan 3. Fleksibel 2 ke 1 berarti 3 orang pada tiga bulan pertama lalu 2 orang sampai tuntas.'

/** Satu campuran pesanan 100 unit. */
export interface OrderMix {
  key: string
  name: string
  units: string
  pm: string
  revenue: string
  profit: string
  fit: string
  hot?: boolean
}

/** Rincian tiga campuran pesanan. */
export const ORDER_MIXES: OrderMix[] = [
  { key: 'a', name: 'Campuran A', units: '30 / 40 / 30', pm: '32,3 (27,6 s.d. 39,3)', revenue: 'Rp179,7 jt', profit: 'Rp51,3 jt', fit: 'Terberat Tech 16' },
  { key: 'b', name: 'Campuran B', units: '70 / 10 / 20', pm: '22,0 (20,0 s.d. 25,0)', revenue: 'Rp125,2 jt', profit: 'Rp35,8 jt', fit: 'Terberat Pods 10', hot: true },
  { key: 'c', name: 'Campuran C', units: '50 / 20 / 30', pm: '27,1 (23,8 s.d. 32,1)', revenue: 'Rp154,1 jt', profit: 'Rp44,0 jt', fit: 'Terberat Add-on 12' },
]

/** Lencana ikhtisar halaman campuran. */
export const ORDER_CAMPURAN_BADGES: string[] = [
  'Margin 28,6% pada semua varian',
  'Harga: Pods Rp803 rb, Tech Rp2,08 jt, Add-on Rp2,41 jt',
  'Laba kotor 100 unit: Rp35,8 s.d. 51,3 jt',
]

/** Pesanan kecil yang siap dilayani solo pada kapasitas bersama. */
export const ORDER_SERVABLE = {
  label: 'Siap dilayani solo pada kapasitas bersama',
  items: [
    { value: '7 Pods', span: '1 bulan' },
    { value: '1+1+1', span: '1 bulan' },
    { value: '21 Pods', span: '3 bulan' },
    { value: '6+6+6', span: '6 bulan' },
  ],
}

/** Cara membaca tabel campuran. */
export const ORDER_CAMPURAN_NOTE =
  'Cara baca: tiap baris adalah satu paket 100 unit (Pods / Tech / Add-on). Kolom orang-bulan menentukan lama kirim bila dibagi orang. Paket kecil di bawah adalah porsi yang muat dalam horizon itu, dapat dijanjikan apa adanya.'

/** Satu langkah cara kerja pesanan besar. */
export interface OrderStep {
  key: string
  icon: string
  title: string
  desc: string
}

/** Empat langkah cara kerja. */
export const ORDER_STEPS: OrderStep[] = [
  { key: 'rule', icon: 'lucide:scale', title: '1. Aturan orang-bulan', desc: 'Satu orang-bulan = 7 Pods, atau 2 sampai 3 Tech, atau 2 sampai 3 Add-on, atau campuran se garisnya. Contoh: 4 Pods + 1 Tech = 0,97 orang-bulan.' },
  { key: 'first', icon: 'lucide:flag', title: '2. Dahulukan lini terberat', desc: 'Hitung orang-bulan tiap lini lalu kerjakan yang terbesar dulu: A Tech 16, B Pods 10, C Add-on 12. Total A 32,3; B 22,0; C 27,1 orang-bulan.' },
  { key: 'batch', icon: 'lucide:hand-coins', title: '3. Batch dan uang muka', desc: 'Bahan batch berikut dibeli setelah uang muka batch itu diterima. Unit yang tuntas lebih dulu dikirim tanpa menunggu genap 100, contoh 30 Pods tuntas dalam sekitar 4,3 orang-bulan.' },
  { key: 'cal', icon: 'lucide:calendar-check', title: '4. Kalender kru', desc: 'Bagi total orang-bulan dengan jumlah orang lalu bulatkan ke atas: kru +2 menuntaskan B dalam 22 dibagi 3 = 8 bulan. Fleksibel 2 ke 1 berarti 3 orang pada tiga bulan pertama lalu 2 orang sampai tuntas.' },
]

/** Catatan metode halaman cara kerja. */
export const ORDER_CARA_NOTE =
  'Cara baca: empat langkah berjalan berurutan dari aturan sampai kalender. Tabel memakai titik tengah 2,5; bila Tech berjalan 2 unit per bulan, pakai ujung atas rentang; bila 3 unit, ujung bawah. Minggu orientasi per pendatang tertampung di pembulatan ke atas.'
