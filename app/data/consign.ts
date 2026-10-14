// Data halaman detail efektivitas konsinyasi: dua toko, target versus
// terjual per produk, dan capaian kumulatif.
// Angka dasar yang diberikan:
//   target per toko Pods 5, Tech 1, Tech Add-on 2, jadi 8 unit per toko;
//   Mulyo Tani terjual Pods 1, Tech 2, Tech Add-on 3, total 6 unit;
//   Utama Elektronik terjual Pods 3, Tech 1, Tech Add-on 1, total 5 unit.
// Seluruh persen dan total di bawah dihitung dari angka dasar tersebut saja.

export interface ConsignLine {
  /** Kunci produk, sama dengan kunci varian pada deck. */
  key: string
  /** Nama varian untuk baris tabel. */
  name: string
  /** Ikon lucide untuk baris tabel. */
  icon: string
  /** Target unit di satu toko. */
  target: number
  /** Unit terjual di toko tersebut. */
  sold: number
  /** Capaian terhadap target, gaya Indonesia. */
  pct: string
}

export interface ConsignOutlet {
  key: string
  /** Nama toko konsinyasi. */
  name: string
  /** Ikon lucide untuk judul kartu. */
  icon: string
  /** Target seluruh produk di toko ini, yaitu 8 unit. */
  target: number
  /** Total unit terjual di toko ini. */
  sold: number
  /** Efektivitas toko terhadap target, gaya Indonesia. */
  pct: string
  /** Penanda toko dengan capaian tertinggi. */
  hot?: boolean
  /** Rincian target dan terjual untuk tiap produk. */
  products: ConsignLine[]
}

/** Dua kartu toko, diurutkan dari capaian tertinggi. */
export const CONSIGN_OUTLETS: ConsignOutlet[] = [
  {
    key: 'mulyo',
    name: 'Mulyo Tani',
    icon: 'lucide:store',
    target: 8,
    sold: 6,
    // 6 dibagi 8 = 0,75 atau 75 persen.
    pct: '75%',
    hot: true,
    products: [
      { key: 'pods', name: 'Pods', icon: 'lucide:flower-2', target: 5, sold: 1, pct: '20%' },
      { key: 'tech', name: 'Tech', icon: 'lucide:tractor', target: 1, sold: 2, pct: '200%' },
      { key: 'addon', name: 'Tech Add-on', icon: 'lucide:solar-panel', target: 2, sold: 3, pct: '150%' },
    ],
  },
  {
    key: 'utama',
    name: 'Utama Elektronik',
    icon: 'lucide:building',
    target: 8,
    sold: 5,
    // 5 dibagi 8 = 0,625 atau 62,5 persen.
    pct: '62,5%',
    products: [
      { key: 'pods', name: 'Pods', icon: 'lucide:flower-2', target: 5, sold: 3, pct: '60%' },
      { key: 'tech', name: 'Tech', icon: 'lucide:tractor', target: 1, sold: 1, pct: '100%' },
      { key: 'addon', name: 'Tech Add-on', icon: 'lucide:solar-panel', target: 2, sold: 1, pct: '50%' },
    ],
  },
]

export interface ConsignBadge {
  icon: string
  /** Kata sebelum angka, kosong bila lencana hanya satu bagian. */
  lead: string
  /** Angka utama, penulisannya sudah gaya Indonesia. */
  value: string
}

/** Empat lencana baris atas. */
export const CONSIGN_BADGES: ConsignBadge[] = [
  { icon: 'lucide:store', lead: '', value: '2 toko konsinyasi' },
  { icon: 'lucide:target', lead: 'Target', value: '16 unit' },
  { icon: 'lucide:shopping-cart', lead: 'Terjual', value: '11 unit' },
  { icon: 'lucide:gauge', lead: 'Efektivitas', value: '68,8%' },
]

export interface ConsignCross {
  key: string
  name: string
  icon: string
  /** Target lintas dua toko. */
  target: number
  /** Terjual lintas dua toko. */
  sold: number
  /** Capaian lintas dua toko, gaya Indonesia. */
  pct: string
}

/** Capaian per produk yang dijumlahkan antar toko. */
export const CONSIGN_BY_PRODUCT: ConsignCross[] = [
  // Pods: target 5 x 2 = 10, terjual 1 + 3 = 4, 4/10 = 40 persen.
  { key: 'pods', name: 'Pods', icon: 'lucide:flower-2', target: 10, sold: 4, pct: '40%' },
  // Tech: target 1 x 2 = 2, terjual 2 + 1 = 3, 3/2 = 150 persen.
  { key: 'tech', name: 'Tech', icon: 'lucide:tractor', target: 2, sold: 3, pct: '150%' },
  // Add-on: target 2 x 2 = 4, terjual 3 + 1 = 4, 4/4 = 100 persen.
  { key: 'addon', name: 'Tech Add-on', icon: 'lucide:solar-panel', target: 4, sold: 4, pct: '100%' },
]

/** Total kumulatif dua toko. */
export const CONSIGN_TOTAL = {
  toko: 2,
  targetPerToko: 8,
  // 8 x 2 = 16 unit.
  target: 16,
  // 6 + 5 = 11 unit.
  sold: 11,
  // 11/16 = 0,6875 atau 68,75 persen, dibulatkan satu desimal menjadi 68,8 persen.
  pct: '68,8%',
}

/** Judul baris capaian lintas toko. */
export const CONSIGN_CROSS_TITLE = 'Lintas toko per produk'

/** Keterangan batang pada baris lintas toko. */
export const CONSIGN_CROSS_LEGEND = 'Batang penuh berarti target tercapai'

export interface ConsignNote {
  icon: string
  text: string
}

/** Kesimpulan singkat, murni turunan angka di atas. */
export const CONSIGN_NOTES: ConsignNote[] = [
  { icon: 'lucide:circle-check', text: 'Add-on memenuhi target: 4 dari 4 unit.' },
  { icon: 'lucide:trending-up', text: 'Tech melampaui target: 3 dari 2 unit.' },
  { icon: 'lucide:megaphone', text: 'Pods perlu dorongan promosi di toko.' },
]

/** Catatan kaki netral beserta cara memperoleh persen kumulatif. */
export const CONSIGN_FOOTNOTE =
  'Data penjualan konsinyasi dua toko, kumulatif. Angka efektivitas 68,8% berasal dari 11 dari 16 unit, atau 68,75% yang dibulatkan ke satu desimal.'
