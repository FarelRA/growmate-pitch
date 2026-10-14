/**
 * Model diagram web GrowMate.
 * Setiap grafik dideklarasikan sebagai data terstruktur (simpul, grup, panah)
 * lalu digambar langsung oleh WebDiagram sebagai SVG buatan sendiri:
 * tipografi dan warna deck, panah beranimasi, serta label "dari mana ke mana".
 */

/** Warna per makna, seragam untuk semua grafik (graph-handoff resmi). */
export type DgTone =
  | 'people'
  | 'experience'
  | 'intelligence'
  | 'transport'
  | 'edge'
  | 'interlock'
  | 'ink'

export interface DgNode {
  id: string
  /** Posisi dan ukuran pada kanvas (satuan desain, diskalakan penuh oleh penampil). */
  x: number
  y: number
  w?: number
  h?: number
  tone?: DgTone
  /** Ikon lucide opsional di sisi kiri simpul. */
  icon?: string
  /** Bentuk pil untuk catatan/awal-alur; kartu bila tidak dinyatakan. */
  shape?: 'card' | 'pill'
  title: string
  sub?: string
}

export interface DgGroup {
  id: string
  label?: string
  x: number
  y: number
  w: number
  h: number
  tone?: DgTone
}

export interface DgEdge {
  id: string
  from?: string
  to?: string
  /** Jalur absolut bila rutenya harus dikendalikan (belokan, loop kembali). */
  points?: [number, number][]
  label?: string
  /** Posisi label eksplisit bila titik tengah garis kurang tepat. */
  labelAt?: [number, number]
  dashed?: boolean
  /** Panah mengalir beranimasi (titik data berjalan di sepanjang garis). */
  flow?: boolean
  /** Panah dua arah. */
  both?: boolean
  /** Garis tanpa panah (misal garis hidup diagram sekuens). */
  noArrow?: boolean
  tone?: DgTone
}

export interface DgFlow {
  w: number
  h: number
  groups?: DgGroup[]
  nodes: DgNode[]
  edges: DgEdge[]
}
