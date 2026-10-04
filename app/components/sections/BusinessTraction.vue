<script setup lang="ts">
import { useTransition } from '@vueuse/core'
import DanaTag from '~/components/DanaTag.vue'

const plans = [
  { name: 'Pods', price: 'Rp803 rb', forWho: 'pehobi indoor', icon: 'lucide:flower-2', hot: false },
  { name: 'Tech', price: 'Rp2.083 jt', forWho: 'lahan terbuka', icon: 'lucide:tractor', hot: true },
  { name: 'Tech Add-on', price: 'Rp2.409 jt', forWho: 'mandiri surya + LTE', icon: 'lucide:solar-panel', hot: false },
]

const stats = [
  { value: '36 unit', label: 'hardware terjual' },
  { value: 'Mei kali 6', label: 'Rp8,23 jt, 6 kali April' },
  { value: '61,1%', label: 'konversi AI Advance' },
]

const aimTotal = ref(0)
const tTotal = useTransition(aimTotal, { duration: 1600 })
const heroTotal = computed(() => `Rp${tTotal.value.toFixed(2).replace('.', ',')} jt`)

onMounted(() => {
  aimTotal.value = 59.07
})
</script>

<template>
  <DeckShell section="keuangan">
    <div class="flex w-full flex-col items-center gap-2 md:gap-2.5">
      <div class="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 md:gap-2.5">
        <Reveal v-for="(p, i) in plans" :key="p.name" :delay="i * 0.07" class="h-full">
          <DanaTag :name="p.name" :price="p.price" :for-who="p.forWho" :icon="p.icon" :hot="p.hot" />
        </Reveal>
      </div>
      <p class="text-[11px] font-semibold tracking-wide text-gm-muted md:text-xs">
        Semua harga sudah termasuk kemasan eco.
      </p>
      <Reveal :delay="0.12" class="w-full">
        <div class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-white p-3 text-center md:p-4">
          <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">Pendapatan bulanan (bar) + kumulatif (garis), juta Rp</div>
          <div class="mt-1.5 aspect-[16/10] min-h-40 w-full sm:aspect-[16/8] lg:aspect-[7/1]">
            <TractionChart />
          </div>
          <div class="mt-2.5 grid grid-cols-2 gap-2 text-left md:mt-3 xl:grid-cols-4">
            <div class="flex h-full flex-col justify-center rounded-2xl border-2 border-gm-amber/60 bg-gm-amberbg p-2.5 md:p-3">
              <span class="size-2 rounded-full bg-gm-amber anim-pulse-dot" aria-hidden="true" />
              <div class="mt-1.5 font-headline text-xl font-extrabold tabular-nums text-gm-ink md:text-2xl">{{ heroTotal }}</div>
              <div class="text-[11px] leading-snug text-gm-muted md:text-xs">total 9 bulan</div>
            </div>
            <div v-for="s in stats" :key="s.label" class="flex h-full flex-col justify-center rounded-2xl border-2 border-gm-line bg-white p-2.5 md:p-3">
              <span class="size-2 rounded-full bg-gm-amber anim-pulse-dot" aria-hidden="true" />
              <div class="mt-1.5 font-headline text-xl font-extrabold tabular-nums text-gm-ink md:text-2xl">{{ s.value }}</div>
              <div class="text-[11px] leading-snug text-gm-muted md:text-xs">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
