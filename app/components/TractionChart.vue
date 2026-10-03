<script setup lang="ts">
import VChart from 'vue-echarts'
import '~/components/charts/echarts'

// Sumber: Grafik-Grafik/Ekonomi (pendapatan_growmate_2026 + total_pendapatan, juta Rp)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep']
const revenue = [0.67, 0.67, 0.68, 1.36, 8.23, 13.12, 11.18, 9.69, 13.48]
const cumul = [0.67, 1.34, 2.02, 3.38, 11.61, 24.73, 35.91, 45.6, 59.07]

const option = {
  grid: { left: 52, right: 52, top: 52, bottom: 40 },
  tooltip: {
    trigger: 'axis',
    valueFormatter: (v: number) => `Rp${String(v).replace('.', ',')} jt`,
  },
  legend: {
    top: 0,
    textStyle: { fontSize: 15, fontWeight: 700 },
    data: ['Pendapatan bulanan', 'Kumulatif'],
  },
  xAxis: {
    type: 'category',
    data: months,
    axisLine: { lineStyle: { color: '#c9cfc8' } },
    axisTick: { show: false },
    axisLabel: { fontSize: 15, color: '#3f4a3c', fontWeight: 600 },
  },
  yAxis: [
    {
      type: 'value',
      max: 15,
      splitLine: { lineStyle: { color: '#eef1ec' } },
      axisLabel: { fontSize: 14, color: '#3f4a3c', formatter: '{value}' },
    },
    {
      type: 'value',
      max: 65,
      splitLine: { show: false },
      axisLabel: { fontSize: 14, color: '#b7791f', formatter: '{value}' },
    },
  ],
  series: [
    {
      name: 'Pendapatan bulanan',
      type: 'bar',
      data: revenue,
      barWidth: '52%',
      itemStyle: { color: '#006e1c', borderRadius: [12, 12, 0, 0] },
      label: { show: true, position: 'top', fontSize: 14, fontWeight: 800, color: '#006e1c', formatter: (p: { value: number }) => `${String(p.value).replace('.', ',')}` },
    },
    {
      name: 'Kumulatif',
      type: 'line',
      yAxisIndex: 1,
      data: cumul,
      smooth: true,
      symbolSize: 10,
      lineStyle: { width: 5, color: '#b7791f' },
      itemStyle: { color: '#b7791f', borderColor: '#fff', borderWidth: 3 },
    },
  ],
  animationDuration: 1300,
  media: [
    {
      query: { maxWidth: 640 },
      option: {
        grid: { left: 34, right: 34, top: 56, bottom: 56 },
        legend: { textStyle: { fontSize: 11 } },
        xAxis: { axisLabel: { fontSize: 11, rotate: 40 } },
        yAxis: [{ axisLabel: { fontSize: 11 } }, { axisLabel: { fontSize: 11 } }],
        series: [{ label: { fontSize: 11 } }, {}],
      },
    },
  ],
}
</script>

<template>
  <ClientOnly>
    <VChart :option="option" autoresize class="h-full w-full" />
    <template #fallback>
      <div class="grid h-full place-items-center text-[16px] text-gm-muted">Memuat grafik…</div>
    </template>
  </ClientOnly>
</template>
