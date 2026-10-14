<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

const answers = [
  { icon: 'lucide:sprout', title: 'Pods indoor', desc: 'Pot 20x10x30 cm dengan 6 sensor dan lampu tumbuh otomatis.' },
  { icon: 'lucide:tractor', title: 'Tech lapangan', desc: 'Irigasi, nutrisi, dan hama diatur dari bacaan sensor; tersedia varian surya + LTE.' },
  { icon: 'lucide:sparkles', title: 'Floral Assistant', desc: 'AI membandingkan bacaan sensor dengan ambang tanaman, dengan acuan musim Pranata Mangsa.' },
]

const root = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const nUsaha = ref(0)
const nNet = ref(0)
const nRawat = ref(0)
const tUsaha = useTransition(nUsaha, { duration: 1600 })
const tNet = useTransition(nNet, { duration: 1600 })
const tRawat = useTransition(nRawat, { duration: 1600 })
const fmtUsaha = computed(() => `${tUsaha.value.toFixed(2).replace('.', ',')} jt`)
const fmtNet = computed(() => `${tNet.value.toFixed(1).replace('.', ',')}%`)
const fmtRawat = computed(() => `${Math.round(tRawat.value)} mnt`)

onMounted(() => {
  nUsaha.value = 29.34
  nNet.value = 13.2
  nRawat.value = 45
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo('.latar-crack', { opacity: 0.2 }, { opacity: 1, duration: 0.6 }, 0)
      .fromTo('.latar-valve-wheel', { rotation: 0 }, { rotation: 90, duration: 0.7, transformOrigin: '50% 50%' }, 0.5)
      .fromTo('.latar-draw', { strokeDashoffset: 120 }, { strokeDashoffset: 0, duration: 1.1 }, 0.6)
      .to('.latar-crack', { opacity: 0.55, duration: 0.45, yoyo: true, repeat: 1 }, 1.3)
  }, root.value ?? undefined)
})
onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="latar">
    <div ref="root" class="relative flex min-h-full w-full max-w-full flex-col justify-center overflow-x-clip">
      <DeckSplitPanel>
        <template #primary>
          <Reveal class="h-full w-full lg:pr-14">
            <div class="flex h-full w-full flex-col justify-center gap-2 rounded-3xl border-2 border-gm-amber/40 bg-gm-amberbg p-4 text-left md:gap-2">
              <div class="flex items-center justify-start gap-3">
                <span class="grid size-12 shrink-0 place-items-center rounded-xl bg-gm-amber/15">
                  <Icon name="lucide:triangle-alert" class="size-7 text-gm-amber" />
                </span>
                <div class="min-w-0">
                  <div class="font-headline text-lg font-extrabold text-gm-ink">Ladang berbasis dugaan</div>
                  <div class="text-base leading-snug text-gm-muted">Saat bekerja, petani tidak punya angka acuan.</div>
                </div>
                <svg viewBox="0 0 64 24" class="ml-auto h-6 w-14 shrink-0" aria-hidden="true">
                  <polyline class="latar-crack" points="6,2 12,9 9,15 15,22" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline class="latar-crack" points="30,2 28,10 34,16 31,22" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline class="latar-crack" points="52,2 48,9 54,15 50,22" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div class="flex w-full flex-1 flex-col justify-center gap-2 md:gap-2.5">
                <div class="flex flex-1 items-center justify-start gap-3 rounded-2xl border-2 border-gm-ink bg-gm-ink p-3 text-left md:p-3.5">
                  <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-300/15">
                    <Icon name="lucide:triangle-alert" class="size-6 text-amber-300" />
                  </span>
                  <div class="min-w-0 flex-1">
                    <p class="font-headline text-base font-extrabold uppercase leading-tight tracking-wider text-amber-300">Jumlah usaha tani</p>
                    <p class="mt-0.5 text-base font-bold leading-snug text-white">Usaha tani perorangan di Indonesia menyusut 7,45% dalam satu dekade (BPS ST2023).</p>
                  </div>
                  <p class="shrink-0 font-headline text-2xl font-extrabold tabular-nums text-white md:text-3xl">{{ fmtUsaha }}</p>
                </div>
                <div class="flex flex-1 items-center justify-start gap-3 rounded-2xl border-2 border-gm-ink bg-gm-ink p-3 text-left md:p-3.5">
                  <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-300/15">
                    <Icon name="lucide:wifi-off" class="size-6 text-amber-300" />
                  </span>
                  <div class="min-w-0 flex-1">
                    <p class="font-headline text-base font-extrabold uppercase leading-tight tracking-wider text-amber-300">Petani terhubung internet</p>
                    <p class="mt-0.5 text-base font-bold leading-snug text-white">Bagian petani yang memakai internet untuk kegiatan bertaninya.</p>
                  </div>
                  <p class="shrink-0 font-headline text-2xl font-extrabold tabular-nums text-white md:text-3xl">{{ fmtNet }}</p>
                </div>
                <div class="flex flex-1 items-center justify-start gap-3 rounded-2xl border-2 border-gm-ink bg-gm-ink p-3 text-left md:p-3.5">
                  <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-300/15">
                    <Icon name="lucide:timer" class="size-6 text-amber-300" />
                  </span>
                  <div class="min-w-0 flex-1">
                    <p class="font-headline text-base font-extrabold uppercase leading-tight tracking-wider text-amber-300">Waktu rawat manual harian</p>
                    <p class="mt-0.5 text-base font-bold leading-snug text-white">Waktu yang habis untuk merawat tanaman setiap hari.</p>
                  </div>
                  <p class="shrink-0 font-headline text-2xl font-extrabold tabular-nums text-white md:text-3xl">{{ fmtRawat }}</p>
                </div>
              </div>

              <div class="flex items-center justify-start gap-3 rounded-xl border border-gm-amber/30 bg-white/70 px-4 py-2 text-left">
                <Icon name="lucide:trending-down" class="size-6 shrink-0 text-gm-amber" />
                <p class="min-w-0 flex-1 text-base font-semibold leading-snug tabular-nums text-gm-ink">Jumlahnya turun dari 31,71 jt pada 2013 ke 29,34 jt pada 2023; cara bertani tetap berbasis dugaan.</p>
                <span aria-hidden="true" class="w-24 shrink-0 space-y-1.5 md:w-28">
                  <span class="block h-2 overflow-hidden rounded-full bg-gm-amber/25"><span class="block h-full w-full rounded-full bg-gm-amber/50" /></span>
                  <span class="block h-2 overflow-hidden rounded-full bg-gm-amber/25"><span class="block h-full rounded-full bg-gm-amber" style="width: 92.5%;" /></span>
                </span>
              </div>
              <div class="text-base leading-snug text-gm-muted">Sumber: BPS ST2023.</div>
            </div>
          </Reveal>
        </template>

        <template #secondary>
          <div class="flex h-full w-full flex-col justify-center">
            <div class="flex w-full items-center justify-start gap-3 text-left lg:pl-14">
              <span class="grid size-12 shrink-0 place-items-center rounded-xl bg-gm-mist">
                <Icon name="lucide:droplets" class="size-7 text-gm-primary" />
              </span>
              <div class="min-w-0">
                <div class="font-headline text-lg font-extrabold text-gm-ink">Ladang berbasis data</div>
                <div class="text-base leading-snug text-gm-muted">Setiap tindakan dihitung dari bacaan sensor.</div>
              </div>
            </div>
            <div class="mt-2 flex w-full flex-1 flex-col justify-center gap-2 md:mt-2.5 md:gap-2.5 lg:pl-14">
              <Reveal v-for="(a, i) in answers" :key="a.title" :delay="0.55 + i * 0.12" class="w-full flex-1">
                <LatarValveCard :icon="a.icon" :title="a.title" :desc="a.desc" />
              </Reveal>
            </div>
            <Reveal :delay="0.95" class="w-full lg:pl-14">
              <div class="mt-2 flex w-full items-center justify-start gap-3 rounded-2xl border-2 border-gm-primary bg-gm-mist px-4 py-2.5 text-left md:mt-2.5">
                <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-gm-primary">
                  <Icon name="lucide:badge-check" class="size-6 text-white" />
                </span>
                <p class="min-w-0 flex-1 text-base font-extrabold leading-snug text-gm-deep">Dugaan diganti bacaan; setiap penyiraman punya alasan yang tercatat.</p>
              </div>
            </Reveal>
          </div>
        </template>
      </DeckSplitPanel>

      <LatarRiver class="absolute left-1/2 top-1/2 z-10 hidden w-28 -translate-x-1/2 -translate-y-1/2 lg:block" />
    </div>
  </DeckShell>
</template>
