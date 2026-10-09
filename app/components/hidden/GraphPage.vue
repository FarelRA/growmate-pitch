<script setup lang="ts">
import type { HiddenSection } from '~/data/hidden'
import { GRAPHS } from '~/data/graphs'
import GraphFigure from './GraphFigure.vue'

const props = defineProps<{ section: HiddenSection }>()

const graph = computed(() => GRAPHS.find(g => g.id === props.section.ref) ?? GRAPHS[0]!)

// Palet resmi dari graph-handoff: warna per makna, berlaku untuk semua grafik.
const legend = [
  { name: 'People & Value', c: '#7c3aed' },
  { name: 'Experience', c: '#2563eb' },
  { name: 'Intelligence', c: '#d97706' },
  { name: 'Transport', c: '#0d9488' },
  { name: 'Edge & Physical', c: '#16a34a' },
  { name: 'Interlocks', c: '#dc2626' },
]
</script>

<template>
  <div class="flex min-h-full w-full min-w-0 flex-col gap-2 md:gap-2.5">
    <div class="flex w-full flex-wrap items-center justify-between gap-2">
      <div class="flex flex-wrap items-center gap-1.5">
        <span
          v-for="l in legend"
          :key="l.name"
          class="flex items-center gap-1.5 rounded-full border-2 border-gm-line bg-white px-2.5 py-0.5 text-base font-semibold text-gm-ink"
        >
          <span class="size-3 shrink-0 rounded-sm" :style="{ background: l.c }" aria-hidden="true" />
          {{ l.name }}
        </span>
      </div>
      <span class="shrink-0 rounded-full bg-gm-ink px-3 py-1 font-mono text-base font-bold text-white">
        {{ graph.kind }} • {{ graph.label }}
      </span>
    </div>

    <GraphFigure :chart-id="graph.id" :code="graph.code" />

    <p class="w-full text-left text-base leading-relaxed text-gm-muted">
      {{ graph.note }}
    </p>
  </div>
</template>
