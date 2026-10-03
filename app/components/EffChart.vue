<script setup lang="ts">
import VChart from 'vue-echarts'
import '~/components/charts/echarts'

const option = {
  grid: { left: 56, right: 24, top: 36, bottom: 40 },
  tooltip: { trigger: 'axis', valueFormatter: (v: number) => `${String(v).replace('.', ',')}%` },
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
      type: 'bar',
      data: [42.8, 27.4, 25.0, 88.9],
      barWidth: '52%',
      itemStyle: { color: '#006e1c', borderRadius: [14, 14, 0, 0] },
      label: { show: true, position: 'top', fontSize: 19, fontWeight: 800, color: '#006e1c', formatter: (p: { value: number }) => `${String(p.value).replace('.', ',')}%` },
    },
  ],
  animationDuration: 1300,
  animationEasing: 'cubicOut',
  media: [
    {
      query: { maxWidth: 640 },
      option: {
        grid: { left: 36, right: 12, top: 30, bottom: 36 },
        xAxis: { axisLabel: { fontSize: 11 } },
        yAxis: { axisLabel: { fontSize: 11 } },
        series: [{ barWidth: '58%', label: { fontSize: 11 } }],
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
