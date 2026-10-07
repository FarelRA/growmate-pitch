<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '@vueuse/core'

const PHOTO = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'

const answers = [
  { icon: 'lucide:sprout', title: 'Pods indoor', desc: 'Pot 20x10x30 cm, 6 sensor, grow light otomatis.' },
  { icon: 'lucide:tractor', title: 'Tech lapangan', desc: 'Irigasi, nutrisi, dan hama ditakar data. Opsi surya + LTE.' },
  { icon: 'lucide:sparkles', title: 'Floral Assistant', desc: 'AI + Pranata Mangsa memutuskan kapan menyiram.' },
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
    <div ref="root" class="relative w-full max-w-full overflow-x-clip">
      <DeckSplitPanel>
        <template #primary>
          <Reveal class="h-full w-full lg:pr-14">
            <div class="flex h-full w-full flex-col justify-between gap-2 rounded-3xl border-2 border-gm-amber/40 bg-gm-amberbg p-4 text-left md:p-5">
              <div class="flex items-center justify-start gap-3">
                <span class="grid size-12 shrink-0 place-items-center rounded-xl bg-gm-amber/15">
                  <Icon name="lucide:triangle-alert" class="size-7 text-gm-amber" />
                </span>
                <div class="min-w-0">
                  <div class="font-headline text-base font-extrabold text-gm-ink">Ladang Tebakan</div>
                  <div class="text-base leading-snug text-gm-muted">Petani bekerja tanpa angka acuan.</div>
                </div>
                <svg viewBox="0 0 64 24" class="ml-auto h-6 w-14 shrink-0" aria-hidden="true">
                  <polyline class="latar-crack" points="6,2 12,9 9,15 15,22" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline class="latar-crack" points="30,2 28,10 34,16 31,22" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline class="latar-crack" points="52,2 48,9 54,15 50,22" fill="none" stroke="#b7791f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <UiPhotoFigure
                :src="PHOTO"
                alt="Lahan pertanian tropis saat senja"
                ratio="21 / 9"
                class="mt-2 lg:hidden"
              />
              <div class="mt-2.5 hidden [@media(min-height:860px)]:block">
                <UiPhotoFigure
                  :src="PHOTO"
                  alt="Lahan pertanian tropis saat senja"
                  ratio="16 / 9"
                />
              </div>

              <div class="mt-2.5 grid grid-cols-1 items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                <div class="flex items-center justify-start gap-3 rounded-2xl border-2 border-gm-ink bg-gm-ink p-4 text-left">
                  <Icon name="lucide:triangle-alert" class="size-7 shrink-0 text-gm-amber" />
                  <div class="min-w-0">
                    <div class="text-base font-extrabold uppercase leading-none tracking-wider text-gm-amber/90">Total</div>
                    <div class="mt-1 font-headline text-2xl font-extrabold tabular-nums text-white">{{ fmtUsaha }}</div>
                    <div class="text-base leading-snug text-white/70">usaha tani perorangan Indonesia (BPS ST2023), menyusut 7,45% sedekade</div>
                  </div>
                </div>
                <span aria-hidden="true" class="mx-auto grid place-items-center sm:mx-0">
                  <Icon name="lucide:chevron-down" class="size-6 text-gm-amber sm:hidden" />
                  <Icon name="lucide:chevron-right" class="hidden size-6 shrink-0 text-gm-amber sm:block" />
                </span>
                <div class="flex items-center justify-start gap-3 rounded-2xl border-2 border-gm-ink bg-gm-ink p-4 text-left">
                  <Icon name="lucide:wifi-off" class="size-7 shrink-0 text-gm-amber" />
                  <div class="min-w-0">
                    <div class="text-base font-extrabold uppercase leading-none tracking-wider text-gm-amber/90">Terhubung</div>
                    <div class="mt-1 font-headline text-2xl font-extrabold tabular-nums text-white">{{ fmtNet }}</div>
                    <div class="text-base leading-snug text-white/70">yang memakai internet untuk bertani</div>
                  </div>
                </div>
                <span aria-hidden="true" class="mx-auto grid place-items-center sm:mx-0">
                  <Icon name="lucide:chevron-down" class="size-6 text-gm-amber sm:hidden" />
                  <Icon name="lucide:chevron-right" class="hidden size-6 shrink-0 text-gm-amber sm:block" />
                </span>
                <div class="flex items-center justify-start gap-3 rounded-2xl border-2 border-gm-ink bg-gm-ink p-4 text-left">
                  <Icon name="lucide:timer" class="size-7 shrink-0 text-gm-amber" />
                  <div class="min-w-0">
                    <div class="text-base font-extrabold uppercase leading-none tracking-wider text-gm-amber/90">Dampak</div>
                    <div class="mt-1 font-headline text-2xl font-extrabold tabular-nums text-white">{{ fmtRawat }}</div>
                    <div class="text-base leading-snug text-white/70">waktu rawat manual tiap hari</div>
                  </div>
                </div>
              </div>
              <div class="mt-2.5 flex items-center gap-3 rounded-xl border border-gm-amber/30 bg-white/70 px-4 py-2.5 text-left">
                <Icon name="lucide:trending-down" class="size-6 shrink-0 text-gm-amber" />
                <p class="min-w-0 flex-1 text-base leading-snug text-gm-ink">2013: 31,71 jt, 2023: 29,34 jt. Petani menyusut, tebakan tetap.</p>
                <span aria-hidden="true" class="w-24 shrink-0 space-y-1.5 md:w-28">
                  <span class="block h-2 overflow-hidden rounded-full bg-gm-amber/25"><span class="block h-full w-full rounded-full bg-gm-amber/50" /></span>
                  <span class="block h-2 overflow-hidden rounded-full bg-gm-amber/25"><span class="block h-full rounded-full bg-gm-amber" style="width: 92.5%;" /></span>
                </span>
              </div>
              <div class="mt-2 text-base leading-snug text-gm-muted">Sumber: BPS ST2023.</div>
            </div>
          </Reveal>
        </template>

        <template #secondary>
          <div class="flex h-full w-full flex-col items-center justify-between lg:hidden" aria-hidden="true">
            <span class="h-5 w-1 rounded-full bg-gm-line" />
            <span class="grid size-8 place-items-center rounded-full border-2 border-gm-primary bg-white">
              <span class="anim-pulse-dot size-2.5 rounded-full bg-gm-primary" />
            </span>
            <span class="h-5 w-1 rounded-full bg-gm-primary/40" />
          </div>
          <div class="flex w-full items-center justify-start gap-3 text-left lg:pl-14">
            <span class="grid size-12 shrink-0 place-items-center rounded-xl bg-gm-mist">
              <Icon name="lucide:droplets" class="size-7 text-gm-primary" />
            </span>
            <div class="min-w-0">
              <div class="font-headline text-base font-extrabold text-gm-ink">Ladang Terukur</div>
              <div class="text-base leading-snug text-gm-muted">Setiap tindakan ditakar dengan data.</div>
            </div>
          </div>
          <div class="mt-2.5 flex w-full flex-1 flex-col justify-around gap-2 md:gap-2.5 lg:pl-14">
            <Reveal v-for="(a, i) in answers" :key="a.title" :delay="0.55 + i * 0.12" class="w-full">
              <LatarValveCard :icon="a.icon" :title="a.title" :desc="a.desc" />
            </Reveal>
          </div>
        </template>
      </DeckSplitPanel>

      <LatarRiver class="absolute left-1/2 top-1/2 z-10 hidden w-28 -translate-x-1/2 -translate-y-1/2 lg:block" />
    </div>
  </DeckShell>
</template>
