<script setup lang="ts">
import { useTransition } from '@vueuse/core'
import DanaTag from '~/components/DanaTag.vue'

const plans = [
  { name: 'Pods', price: 'Rp803 rb', forWho: 'penghobi dalam ruang', icon: 'lucide:flower-2', hot: false },
  { name: 'Tech', price: 'Rp2.083 jt', forWho: 'lahan terbuka', icon: 'lucide:tractor', hot: true },
  { name: 'Tech Add-on', price: 'Rp2.409 jt', forWho: 'mandiri surya dan LTE', icon: 'lucide:solar-panel', hot: false },
]

const stats = [
  { value: '36 unit', label: 'hardware terjual' },
  { value: 'Mei kali 6', label: 'Rp8,23 jt, 6 kali April' },
  { value: '61,1%', label: 'konversi AI Advance' },
]

const aimTotal = ref(0)
const tTotal = useTransition(aimTotal, { duration: 1600 })
const heroTotal = computed(() => `Rp${tTotal.value.toFixed(2).replace('.', ',')} jt`)

const showBukti = ref(false)

onMounted(() => {
  aimTotal.value = 59.07
})
</script>

<template>
  <DeckShell section="keuangan">
    <div class="flex min-h-full w-full flex-col items-start justify-between gap-2">
      <div class="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
        <Reveal v-for="(p, i) in plans" :key="p.name" :delay="i * 0.07" class="h-full">
          <DanaTag :name="p.name" :price="p.price" :for-who="p.forWho" :icon="p.icon" :hot="p.hot" />
        </Reveal>
      </div>
      <Reveal :delay="0.12" class="w-full">
        <div class="flex w-full flex-col rounded-3xl border-2 border-gm-line bg-white p-4 text-left">
          <div class="flex w-full items-center justify-between gap-2">
            <div class="text-left font-headline text-base font-extrabold text-gm-ink lg:text-lg">Batang = pendapatan bulanan, garis = kumulatif, dalam juta Rp</div>
            <button
              class="flex shrink-0 items-center gap-2 rounded-xl border-2 px-2 py-1 text-left transition-all"
              :class="showBukti ? 'border-gm-primary shadow-md' : 'border-gm-line opacity-80 hover:opacity-100'"
              :aria-label="showBukti ? 'Kembali ke grafik deck' : 'Lihat grafik pendapatan asli GrowMate 2026'"
              @click="showBukti = !showBukti"
            >
              <img src="/images/market/keu-chart.webp" alt="Tangkapan layar grafik pendapatan asli GrowMate Januari sampai September 2026" class="h-10 w-auto rounded-md object-contain" draggable="false" />
              <span class="font-headline text-base font-extrabold text-gm-primary">{{ showBukti ? 'Deck' : 'Bukti' }}</span>
            </button>
          </div>
          <div class="mt-1.5 h-[200px] w-full sm:h-[220px] lg:h-[232px] 2xl:h-[300px]">
            <TractionChart v-if="!showBukti" />
            <img v-else src="/images/market/keu-chart.webp" alt="Grafik pendapatan perangkat keras dan layanan AI Januari sampai September 2026" class="h-full w-full rounded-xl object-contain" draggable="false" />
          </div>
          <div class="mt-2 grid grid-cols-2 gap-2 text-left xl:grid-cols-4">
            <div class="flex h-full flex-col justify-center rounded-2xl border-2 border-gm-amber/60 bg-gm-amberbg p-4">
              <span class="size-2.5 rounded-full bg-gm-amber anim-pulse-dot" aria-hidden="true" />
              <div class="mt-1.5 font-headline text-2xl font-extrabold tabular-nums text-gm-ink 2xl:text-3xl">{{ heroTotal }}</div>
              <div class="mt-0.5 text-base leading-snug text-gm-muted">pendapatan total 9 bulan</div>
            </div>
            <div v-for="s in stats" :key="s.label" class="flex h-full flex-col justify-center rounded-2xl border-2 border-gm-line bg-white p-4">
              <span class="size-2.5 rounded-full bg-gm-amber anim-pulse-dot" aria-hidden="true" />
              <div class="mt-1.5 font-headline text-2xl font-extrabold tabular-nums text-gm-ink 2xl:text-3xl">{{ s.value }}</div>
              <div class="mt-0.5 text-base leading-snug text-gm-muted">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </DeckShell>
</template>
