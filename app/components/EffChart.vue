<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import VChart from 'vue-echarts'
import '~/components/charts/echarts'

const chartRef = ref<any>(null)

const fmtPct = (v: number): string => `${String(v).replace('.', ',')}%`
const labelFmt = (p: { value: number | string }): string => {
  if (p.value === '-' || p.value === null || p.value === undefined) return ''
  return fmtPct(Number(p.value))
}

const tankFill = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
    { offset: 0, color: '#8fd0a0' },
    { offset: 0.55, color: '#2e9a4e' },
    { offset: 1, color: '#006e1c' },
  ],
}

const heroFill = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
    { offset: 0, color: '#a5d8b3' },
    { offset: 0.5, color: '#1d8a3d' },
    { offset: 1, color: '#005a17' },
  ],
}

const option = {
  grid: { left: 56, right: 24, top: 38, bottom: 40 },
  tooltip: {
    trigger: 'axis',
    valueFormatter: (v: number) => fmtPct(v),
  },
  xAxis: {
    type: 'category',
    data: ['Air', 'Nutrisi', 'Energi', 'Waktu rawat'],
    axisLine: { lineStyle: { color: '#c9cfc8' } },
    axisTick: { show: false },
    axisLabel: { fontSize: 16, color: '#3f4a3c', fontWeight: 600, interval: 0 },
  },
  yAxis: {
    type: 'value',
    max: 100,
    splitLine: { lineStyle: { color: '#eef1ec' } },
    axisLabel: { fontSize: 14, color: '#3f4a3c', formatter: '{value}%' },
  },
  series: [
    {
      name: 'Hemat',
      type: 'bar',
      data: [42.8, 27.4, 25.0, '-'],
      barWidth: '46%',
      barGap: '-100%',
      barCategoryGap: '32%',
      showBackground: true,
      backgroundStyle: { color: 'rgba(0,110,28,0.08)', borderRadius: [14, 14, 0, 0] },
      itemStyle: {
        color: tankFill,
        borderRadius: [14, 14, 0, 0],
        shadowBlur: 12,
        shadowColor: 'rgba(0,110,28,0.18)',
        shadowOffsetY: 4,
      },
      label: {
        show: true,
        position: 'top',
        distance: 10,
        fontSize: 18,
        fontWeight: 800,
        color: '#006e1c',
        formatter: labelFmt,
      },
      animationDuration: 1300,
      animationEasing: 'cubicOut',
      animationDelay: (idx: number) => idx * 120,
    },
    {
      name: 'Hemat hero',
      type: 'bar',
      data: ['-', '-', '-', 88.9],
      barWidth: '64%',
      barGap: '-100%',
      barCategoryGap: '32%',
      showBackground: true,
      backgroundStyle: { color: 'rgba(0,110,28,0.08)', borderRadius: [14, 14, 0, 0] },
      itemStyle: {
        color: heroFill,
        borderRadius: [14, 14, 0, 0],
        shadowBlur: 16,
        shadowColor: 'rgba(0,110,28,0.22)',
        shadowOffsetY: 5,
      },
      label: {
        show: true,
        position: 'top',
        distance: 10,
        fontSize: 22,
        fontWeight: 800,
        color: '#006e1c',
        formatter: labelFmt,
      },
      animationDuration: 1300,
      animationEasing: 'cubicOut',
      animationDelay: (idx: number) => 360 + idx * 120,
    },
    {
      name: 'Tutup gelombang',
      type: 'pictorialBar',
      silent: true,
      data: [42.8, 27.4, 25.0, 88.9],
      symbol: 'circle',
      symbolPosition: 'end',
      symbolOffset: [0, -4],
      symbolSize: (val: number, params: { dataIndex: number }) =>
        params.dataIndex === 3 ? [58, 12] : [38, 9],
      itemStyle: { color: '#bfe6c8', shadowBlur: 6, shadowColor: 'rgba(0,110,28,0.15)' },
      tooltip: { show: false },
      animationDuration: 1300,
      animationEasing: 'cubicOut',
    },
  ],
  animationDuration: 1300,
  animationEasing: 'cubicOut',
  media: [
    {
      query: { maxWidth: 640 },
      option: {
        grid: { left: 36, right: 12, top: 32, bottom: 36 },
        xAxis: { axisLabel: { fontSize: 11 } },
        yAxis: { axisLabel: { fontSize: 11 } },
        series: [
          { barWidth: '50%', label: { fontSize: 11 } },
          { barWidth: '70%', label: { fontSize: 13 } },
          {},
        ],
      },
    },
  ],
}

let timers: ReturnType<typeof setTimeout>[] = []

onMounted(() => {
  const tour = [
    { s: 0, d: 0 },
    { s: 0, d: 1 },
    { s: 0, d: 2 },
    { s: 1, d: 3 },
  ]
  tour.forEach((t, i) => {
    timers.push(
      setTimeout(() => {
        try {
          chartRef.value?.dispatchAction?.({ type: 'showTip', seriesIndex: t.s, dataIndex: t.d })
        } catch {
          // abaikan jika chart belum siap
        }
      }, 450 + i * 850),
    )
  })
  timers.push(
    setTimeout(() => {
      try {
        chartRef.value?.dispatchAction?.({ type: 'hideTip' })
      } catch {
        // abaikan jika chart belum siap
      }
    }, 450 + tour.length * 850 + 900),
  )
})

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  timers = []
})
</script>

<template>
  <ClientOnly>
    <VChart ref="chartRef" :option="option" autoresize class="h-full w-full" />
    <template #fallback>
      <div class="grid h-full place-items-center text-[16px] text-gm-muted">Memuat grafik…</div>
    </template>
  </ClientOnly>
</template>
