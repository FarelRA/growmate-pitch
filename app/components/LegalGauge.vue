<script setup lang="ts">
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { useTransition } from '@vueuse/core'

use([GaugeChart, CanvasRenderer])

const props = defineProps<{ value: number; max: number; label: string; caption: string }>()

const src = ref(0)
const t = useTransition(src, { duration: 900 })
const shown = computed(() => Math.round(t.value))

const option = computed(() => ({
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: props.max,
      radius: '105%',
      center: ['50%', '88%'],
      progress: {
        show: true,
        width: 12,
        roundCap: true,
        itemStyle: { color: '#006e1c' },
      },
      axisLine: {
        roundCap: true,
        lineStyle: { width: 12, color: [[1, '#e9f4ea']] },
      },
      pointer: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      anchor: { show: false },
      title: { show: false },
      detail: { show: false },
      data: [{ value: shown.value }],
      animationDuration: 900,
      animationEasing: 'cubicOut',
    },
  ],
}))

onMounted(() => {
  window.setTimeout(() => {
    src.value = props.value
  }, 700)
})
</script>

<template>
  <div class="flex w-full flex-col text-center">
    <div class="relative w-full">
      <ClientOnly>
        <VChart :option="option" autoresize class="h-[104px] w-full" />
        <template #fallback>
          <div class="grid h-[104px] w-full place-items-center text-[11px] text-gm-muted">Memuat skor…</div>
        </template>
      </ClientOnly>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 text-center">
        <span class="font-headline text-xl font-extrabold tabular-nums text-gm-primary md:text-2xl">{{ shown }}</span><span class="font-headline text-xs font-bold tabular-nums text-gm-muted">/{{ max }}</span>
      </div>
    </div>
    <p class="mt-0.5 font-headline text-xs font-extrabold uppercase tracking-wide text-gm-ink md:text-sm">{{ label }}</p>
    <p class="text-[11px] leading-snug text-gm-muted">{{ caption }}</p>
  </div>
</template>
