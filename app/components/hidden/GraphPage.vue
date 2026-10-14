<script setup lang="ts">
import { Motion } from 'motion-v'
import CompareChart from '~/components/CompareChart.vue'
import MangsaStrip from '~/components/MangsaStrip.vue'
import SystemFlow from '~/components/SystemFlow.vue'
import type { HiddenSection } from '~/data/hidden'
import { GRAPHS } from '~/data/graphs'
import GraphFigure from './GraphFigure.vue'

const props = defineProps<{ section: HiddenSection }>()

const graph = computed(() => GRAPHS.find(g => g.id === props.section.ref) ?? GRAPHS[0]!)

/** Tab memakai ulang komponen yang dulu tidak terpasang. */
const tab = ref(0)
const extraTab = computed(() => {
  if (props.section.ref === 'g05') return 'Hasil uji'
  if (props.section.ref === 'g12') return 'Uji Mangsa'
  return ''
})

/** Gerak masuk berjenjang, pola sama dengan slide deck. */
const t = (i: number) => ({ type: 'spring', stiffness: 260, damping: 20, delay: 0.05 + i * 0.07 } as const)

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
  <div class="relative flex min-h-full w-full min-w-0 flex-col gap-2 md:gap-2.5">
    <LightGridSvg :id="`gp-${graph.id}`" class="absolute inset-0 -z-10 opacity-60" />

    <Motion :initial="{ opacity: 0, y: -12 }" :animate="{ opacity: 1, y: 0 }" :transition="t(0)">
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
    </Motion>

    <Motion :initial="{ opacity: 0, scale: 0.98 }" :animate="{ opacity: 1, scale: 1 }" :transition="t(1)" class="flex min-h-0 flex-1 flex-col">
      <div v-if="extraTab" class="mb-2 flex w-full shrink-0 flex-wrap items-center gap-1.5">
        <button
          v-for="(lb, i) in ['Diagram', extraTab]"
          :key="lb"
          type="button"
          :aria-pressed="tab === i"
          class="rounded-full border-2 px-3 py-1 font-headline text-base font-extrabold transition-all"
          :class="tab === i ? 'border-gm-primary bg-gm-primary text-white' : 'border-gm-line bg-white text-gm-muted'"
          @click="tab = i"
        >
          {{ lb }}
        </button>
      </div>
      <GraphFigure v-if="tab === 0" :flow="graph.flow" />
      <div v-else class="flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <div v-if="graph.id === 'g05'" class="flex min-h-0 w-full min-w-0 flex-1 flex-col gap-1.5">
          <p class="shrink-0 text-left text-base font-semibold leading-snug text-gm-muted">Frekuensi insiden per 60 hari: keputusan adaptif dibanding jadwal tetap.</p>
          <div class="min-h-0 w-full flex-1 rounded-3xl border-2 border-gm-line bg-white p-2">
            <CompareChart />
          </div>
        </div>
        <MangsaStrip v-else />
      </div>
    </Motion>

    <!-- Ringkasan gaya presentasi: poin pendek, bukan paragraf. -->
    <Motion :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(2)">
      <ul class="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
        <li
          v-for="b in graph.bullets"
          :key="b"
          class="flex items-center gap-2 rounded-2xl border-2 border-gm-line bg-gm-panel px-3 py-2"
        >
          <Icon name="lucide:arrow-right" class="size-5 shrink-0 text-gm-primary" />
          <span class="text-base font-bold leading-snug text-gm-ink">{{ b }}</span>
        </li>
      </ul>
    </Motion>

    <!-- Alur data hidup memakai ulang SystemFlow yang dulu tidak terpasang. -->
    <Motion v-if="graph.id === 'g03'" :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="t(3)" class="w-full shrink-0">
      <SystemFlow />
    </Motion>
  </div>
</template>
