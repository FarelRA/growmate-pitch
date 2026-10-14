<script setup lang="ts">
import type { DgEdge, DgFlow, DgNode, DgTone } from '~/data/graphs/types'

/**
 * Perender diagram: mengubah data terstruktur menjadi SVG web.
 * Kartu memakai tipografi deck, panah punya kepala warna makna,
 * dan panah beranimasi menunjukkan aliran "dari apa ke mana".
 */
const props = defineProps<{ flow: DgFlow }>()

const TONES: Record<DgTone, { c: string; bg: string }> = {
  people: { c: '#7c3aed', bg: '#ede9fe' },
  experience: { c: '#2563eb', bg: '#dbeafe' },
  intelligence: { c: '#d97706', bg: '#fef3c7' },
  transport: { c: '#0d9488', bg: '#ccfbf1' },
  edge: { c: '#16a34a', bg: '#dcfce7' },
  interlock: { c: '#dc2626', bg: '#fee2e2' },
  ink: { c: '#1a1c1c', bg: '#f6f8f5' },
}

function tone(t?: DgTone) {
  return TONES[t ?? 'ink']!
}

type Rect = { x: number; y: number; w: number; h: number; cx: number; cy: number }

const nodes = computed<Record<string, Rect & { node: DgNode }>>(() => {
  const m: Record<string, Rect & { node: DgNode }> = {}
  for (const n of props.flow.nodes) {
    const w = n.w ?? 210
    const h = n.h ?? 84
    m[n.id] = { x: n.x, y: n.y, w, h, cx: n.x + w / 2, cy: n.y + h / 2, node: n }
  }
  return m
})

function anchors(a: Rect, b: Rect) {
  const dx = b.cx - a.cx
  const dy = b.cy - a.cy
  if (Math.abs(dx) * 1.1 >= Math.abs(dy)) {
    return dx >= 0
      ? { from: { x: a.x + a.w, y: a.cy }, to: { x: b.x, y: b.cy }, mode: 'h' as const }
      : { from: { x: a.x, y: a.cy }, to: { x: b.x + b.w, y: b.cy }, mode: 'h' as const }
  }
  return dy >= 0
    ? { from: { x: a.cx, y: a.y + a.h }, to: { x: b.cx, y: b.y }, mode: 'v' as const }
    : { from: { x: a.cx, y: a.y }, to: { x: b.cx, y: b.y + b.h }, mode: 'v' as const }
}

interface Geom {
  d: string
  mid: { x: number; y: number }
}

/** Geometri panah: belokan eksplisit atau kurba bezier antar simpul. */
function geom(e: DgEdge): Geom {
  if (e.points?.length) {
    const pts = e.points
    const d = 'M ' + pts.map(p => `${p[0]} ${p[1]}`).join(' L ')
    const mid = e.labelAt
      ? { x: e.labelAt[0], y: e.labelAt[1] }
      : (() => {
          // Sisipkan label pada ruas terpanjang agar tidak menumpuk di belokan.
          let best = 0
          let bestLen = -1
          for (let i = 0; i < pts.length - 1; i++) {
            const a = pts[i]!
            const b = pts[i + 1]!
            const len = Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
            if (len > bestLen) {
              bestLen = len
              best = i
            }
          }
          const a = pts[best]!
          const b = pts[best + 1]!
          return { x: (a[0] + b[0]) / 2, y: (a[1] + b[1]) / 2 }
        })()
    return { d, mid }
  }
  const a = nodes.value[e.from!]!
  const b = nodes.value[e.to!]!
  const { from, to, mode } = anchors(a, b)
  // Posisi label eksplisit selalu menang, termasuk pada kurba dari/to.
  const fixed = e.labelAt ? { x: e.labelAt[0], y: e.labelAt[1] } : null
  if (mode === 'h') {
    const dx = (to.x - from.x) / 2
    return {
      d: `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`,
      mid: fixed ?? { x: (from.x + 3 * (from.x + dx) + 3 * (to.x - dx) + to.x) / 8, y: (from.y + to.y) / 2 },
    }
  }
  const dy = (to.y - from.y) / 2
  return {
    d: `M ${from.x} ${from.y} C ${from.x} ${from.y + dy}, ${to.x} ${to.y - dy}, ${to.x} ${to.y}`,
    mid: fixed ?? { x: (from.x + to.x) / 2, y: (from.y + 3 * (from.y + dy) + 3 * (to.y - dy) + to.y) / 8 },
  }
}

const geoms = computed(() => props.flow.edges.map(e => ({ e, g: geom(e) })))

/** Durasi masuk berurutan: simpul lebih dulu (isi utama), panah menyusul. */
const groupDelay = (i: number) => `--dg-d:${i * 40}ms`
const nodeDelay = (i: number) => `--dg-d:${150 + Math.min(i * 40, 600)}ms`
const edgeDelay = (i: number) => `--dg-d:${450 + Math.min(i * 30, 500)}ms`
</script>

<template>
  <svg
    class="dg-root h-full w-full"
    :viewBox="`0 0 ${flow.w} ${flow.h}`"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        v-for="(t, name) in TONES"
        :id="`dg-a-${name}`"
        :key="name"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" :fill="t.c" />
      </marker>
    </defs>

    <!-- Grup / pita lapisan -->
    <g
      v-for="(gr, i) in flow.groups ?? []"
      :key="gr.id"
      class="dg-enter"
      :style="groupDelay(i)"
    >
      <rect
        :x="gr.x"
        :y="gr.y"
        :width="gr.w"
        :height="gr.h"
        rx="22"
        :fill="tone(gr.tone).bg"
        :stroke="tone(gr.tone).c"
        stroke-width="2"
        stroke-dasharray="10 8"
        opacity="0.75"
      />
      <text
        v-if="gr.label"
        :x="gr.x + 22"
        :y="gr.y + 28"
        class="dg-glabel"
        :fill="tone(gr.tone).c"
      >{{ gr.label }}</text>
    </g>

    <!-- Panah: garis dasar, lalu titik data beranimasi di atasnya -->
    <g v-for="({ e, g }, i) in geoms" :key="e.id" class="dg-enter" :style="edgeDelay(i)">
      <path
        :d="g.d"
        fill="none"
        :stroke="tone(e.tone).c"
        :stroke-width="e.dashed ? 2.5 : 3.5"
        :stroke-dasharray="e.dashed ? '9 9' : undefined"
        stroke-linecap="round"
        :marker-end="e.noArrow || e.both ? undefined : `url(#dg-a-${e.tone ?? 'ink'})`"
        :marker-start="e.both ? `url(#dg-a-${e.tone ?? 'ink'})` : undefined"
        opacity="0.9"
      />
      <path
        v-if="e.flow"
        :d="g.d"
        class="dg-flowline"
        fill="none"
        :stroke="tone(e.tone).c"
        stroke-width="5"
        stroke-linecap="round"
      />
      <foreignObject
        v-if="e.label"
        :x="Math.min(Math.max(g.mid.x - 150, 4), Math.max(flow.w - 304, 4))"
        :y="g.mid.y - 20"
        width="300"
        height="40"
        class="pointer-events-none"
      >
        <div class="flex h-full w-full items-center justify-center">
          <span class="rounded-full border-2 border-gm-line bg-white px-3 py-0.5 text-base font-bold text-gm-ink">
            {{ e.label }}
          </span>
        </div>
      </foreignObject>
    </g>

    <!-- Simpul -->
    <g
      v-for="(n, i) in flow.nodes"
      :key="n.id"
      class="dg-enter"
      :style="nodeDelay(i)"
    >
      <foreignObject :x="n.x" :y="n.y" :width="n.w ?? 210" :height="n.h ?? 84">
        <div class="h-full w-full">
          <div
            class="flex h-full w-full items-center gap-2.5 border-2"
            :class="n.shape === 'pill' ? 'justify-center rounded-full px-4' : 'rounded-2xl px-3'"
            :style="{ borderColor: tone(n.tone).c, background: '#fff' }"
          >
            <span
              v-if="n.icon"
              class="grid shrink-0 place-items-center rounded-xl"
              :class="n.shape === 'pill' ? 'size-8' : 'size-9'"
              :style="{ background: tone(n.tone).bg }"
            >
              <Icon :name="n.icon" :class="n.shape === 'pill' ? 'size-4' : 'size-5'" :style="{ color: tone(n.tone).c }" />
            </span>
            <div class="min-w-0">
              <div class="font-headline text-[17px] font-extrabold leading-tight text-gm-ink">{{ n.title }}</div>
              <div v-if="n.sub" class="text-base leading-snug text-gm-muted">{{ n.sub }}</div>
            </div>
          </div>
        </div>
      </foreignObject>
    </g>
  </svg>
</template>

<style scoped>
.dg-enter {
  opacity: 0;
  animation: dg-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--dg-d, 0ms);
}

@keyframes dg-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* Titik data berjalan di sepanjang panah: menunjukkan arah aliran. */
.dg-flowline {
  stroke-dasharray: 9 17;
  animation: dg-flowmove 1.1s linear infinite;
}

@keyframes dg-flowmove {
  to {
    stroke-dashoffset: -26;
  }
}

.dg-glabel {
  font-family: var(--font-headline, inherit);
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.02em;
}

@media (prefers-reduced-motion: reduce) {
  .dg-enter {
    animation: none;
    opacity: 1;
  }
  .dg-flowline {
    animation: none;
    opacity: 0.35;
  }
}
</style>
