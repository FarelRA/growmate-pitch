<script setup lang="ts">
import { use } from 'echarts/core'
import { MarkLineComponent, MarkPointComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import '~/components/charts/echarts'

use([MarkPointComponent, MarkLineComponent])

// Sumber: Grafik-Grafik/Ekonomi (pendapatan_growmate_2026 + total_pendapatan, juta Rp)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep']
const revenue = [0.67, 0.67, 0.68, 1.36, 8.23, 13.12, 11.18, 9.69, 13.48]
const cumul = [0.67, 1.34, 2.02, 3.38, 11.61, 24.73, 35.91, 45.6, 59.07]
const MEI = 4

const option = {
  grid: { left: 48, right: 48, top: 52, bottom: 44 },
  tooltip: {
    trigger: 'axis',
    textStyle: { fontSize: 16 },
    valueFormatter: (v: number) => `Rp${String(v).replace('.', ',')} jt`,
  },
  legend: {
    top: 0,
    textStyle: { fontSize: 16, fontWeight: 700 },
    data: ['Pendapatan bulanan', 'Kumulatif'],
  },
  xAxis: {
    type: 'category',
    data: months,
    axisLine: { lineStyle: { color: '#c9cfc8' } },
    axisTick: { show: false },
    axisLabel: { fontSize: 16, color: '#3f4a3c', fontWeight: 600, rotate: 0 },
  },
  yAxis: [
    {
      type: 'value',
      max: 15,
      splitLine: { lineStyle: { color: '#eef1ec' } },
      axisLabel: { fontSize: 16, color: '#3f4a3c', formatter: '{value}' },
    },
    {
      type: 'value',
      max: 65,
      splitLine: { show: false },
      axisLabel: { fontSize: 16, color: '#b7791f', formatter: '{value}' },
    },
  ],
  series: [
    {
      name: 'Pendapatan bulanan',
      type: 'bar',
      data: revenue.map((v, i) =>
        i === MEI
          ? { value: v, itemStyle: { color: '#004d13', borderColor: '#b7791f', borderWidth: 3, borderRadius: [12, 12, 0, 0], shadowBlur: 18, shadowColor: 'rgba(183,121,31,0.55)', shadowOffsetY: 4 } }
          : { value: v },
      ),
      barWidth: '52%',
      itemStyle: { color: '#006e1c', borderRadius: [12, 12, 0, 0], shadowBlur: 12, shadowColor: 'rgba(0,110,28,0.35)', shadowOffsetY: 4 },
      label: { show: true, position: 'top', fontSize: 16, fontWeight: 800, color: '#006e1c', formatter: (p: { value: number }) => `${String(p.value).replace('.', ',')}` },
      markPoint: {
        symbol: 'roundRect',
        symbolSize: [112, 34],
        itemStyle: { color: '#b7791f', shadowBlur: 12, shadowColor: 'rgba(183,121,31,0.5)' },
        label: { show: true, color: '#fff', fontSize: 16, fontWeight: 800, formatter: 'Titik lepas' },
        data: [{ name: 'Titik lepas', xAxis: 'Mei', yAxis: 10.6 }],
      },
      markLine: {
        symbol: 'none',
        silent: true,
        lineStyle: { color: '#b7791f', type: 'dashed', width: 2, opacity: 0.85 },
        label: { color: '#b7791f', fontSize: 16, fontWeight: 800, formatter: 'Mei', position: 'insideEndTop' },
        data: [{ name: 'Mei', xAxis: 'Mei' }],
      },
      animationDuration: 1300,
      animationDelay: (idx: number) => idx * 90,
      animationEasing: 'cubicOut',
    },
    {
      name: 'Kumulatif',
      type: 'line',
      yAxisIndex: 1,
      data: cumul,
      smooth: true,
      symbolSize: 10,
      lineStyle: { width: 5, color: '#b7791f', shadowBlur: 12, shadowColor: 'rgba(183,121,31,0.45)' },
      itemStyle: { color: '#b7791f', borderColor: '#fff', borderWidth: 3 },
      animationDuration: 1600,
      animationDelay: 350,
    },
  ],
  animationDuration: 1300,
  media: [
    {
      query: { maxWidth: 640 },
      option: {
        grid: { left: 44, right: 44, top: 60, bottom: 60 },
        legend: { textStyle: { fontSize: 16 } },
        xAxis: { axisLabel: { fontSize: 16, rotate: 40 } },
        yAxis: [{ axisLabel: { fontSize: 16 } }, { axisLabel: { fontSize: 16 } }],
        series: [
          { label: { fontSize: 16 }, markPoint: { symbolSize: [112, 34], label: { fontSize: 16 } } },
          {},
        ],
      },
    },
  ],
}
</script>

<template>
  <ClientOnly>
    <div class="relative h-full w-full">
      <VChart :option="option" autoresize class="h-full w-full" />
      <span class="traction-plane pointer-events-none absolute left-[2%] top-[16%] z-10 grid size-8 place-items-center rounded-full bg-gm-deep text-white shadow-lg lg:size-9" aria-hidden="true">
        <Icon name="lucide:plane" class="size-5 lg:size-6" />
      </span>
    </div>
    <template #fallback>
      <div class="grid h-full place-items-center text-[16px] text-gm-muted">Memuat grafik…</div>
    </template>
  </ClientOnly>
</template>

<style scoped>
.traction-plane {
  animation: traction-fly 1.6s cubic-bezier(0.4, 0, 0.4, 1) 0.5s both;
}
@keyframes traction-fly {
  0% { left: 2%; transform: translateY(12px); opacity: 0; }
  15% { opacity: 1; }
  100% { left: 88%; transform: translateY(-8px); opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .traction-plane { animation: none; left: 88%; }
}
</style>
