<script setup lang="ts">
import VChart from 'vue-echarts'
import '~/components/charts/echarts'

const option = {
  grid: { left: 48, right: 24, top: 52, bottom: 40 },
  tooltip: { trigger: 'axis' },
  legend: {
    top: 0,
    textStyle: { fontSize: 16, fontWeight: 700 },
    data: ['Pranata Mangsa AKTIF', 'Jadwal tetap'],
  },
  xAxis: {
    type: 'category',
    data: ['Kelebihan air', 'Kekurangan air', 'Perbaikan manual'],
    axisLine: { lineStyle: { color: '#c9cfc8' } },
    axisTick: { show: false },
    axisLabel: { fontSize: 16, color: '#3f4a3c', fontWeight: 600 },
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: '#eef1ec' } },
    axisLabel: { fontSize: 16, color: '#3f4a3c' },
  },
  series: [
    {
      name: 'Pranata Mangsa AKTIF',
      type: 'bar',
      data: [3, 2, 4],
      barWidth: '30%',
      itemStyle: { color: '#006e1c', borderRadius: [10, 10, 0, 0] },
      label: { show: true, position: 'top', fontSize: 18, fontWeight: 800, color: '#006e1c' },
    },
    {
      name: 'Jadwal tetap',
      type: 'bar',
      data: [14, 9, 18],
      barWidth: '30%',
      itemStyle: { color: '#cf6b5e', borderRadius: [10, 10, 0, 0] },
      label: { show: true, position: 'top', fontSize: 18, fontWeight: 800, color: '#a03a30' },
    },
  ],
  animationDuration: 1300,
  media: [
    {
      query: { maxWidth: 500 },
      option: {
        grid: { left: 30, right: 12, top: 64, bottom: 56 },
        legend: { textStyle: { fontSize: 16 } },
        xAxis: { axisLabel: { fontSize: 16, rotate: 25 } },
        yAxis: { axisLabel: { fontSize: 16 } },
        series: [
          { barWidth: '26%', label: { fontSize: 16 } },
          { barWidth: '26%', label: { fontSize: 16 } },
        ],
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
