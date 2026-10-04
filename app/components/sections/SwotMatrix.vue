<script setup lang="ts">
import { Motion } from 'motion-v'
import gsap from 'gsap'

const reduced = usePreferredReducedMotion()
const noMotion = computed(() => reduced.value === 'reduce')

const compass = ref<SVGSVGElement | null>(null)

onMounted(() => {
  if (noMotion.value) return
  if (!compass.value) return
  gsap.fromTo(
    compass.value,
    { rotation: 0 },
    { rotation: 360, duration: 0.8, ease: 'power2.out', transformOrigin: '50% 50%' },
  )
})

type Quad = {
  title: string
  icon: string
  iconAnim: string
  iconTone: string
  items: string[]
  reply: string
  replyIcon: string
  card: string
  itemText: string
  dot: string
  replyBar: string
  replyIconTone: string
  from: { x: number; y: number }
  order: string
}

const quads: Quad[] = [
  {
    title: 'Kekuatan',
    icon: 'lucide:sun',
    iconAnim: 'anim-float',
    iconTone: 'text-white',
    items: [
      'Agen AI dan perawatan otomatis',
      'Pemantauan cerdas multititik sensor',
      'Komunitas dan kemasan hijau',
      'Harga terjangkau, servis lokal',
    ],
    reply: 'Aksi SO: rebut pasar milenial dengan AI, harga, dan komunitas.',
    replyIcon: 'lucide:shield-check',
    card: 'border-gm-primary bg-gm-primary rounded-2xl rounded-tl-3xl shadow-[0_14px_32px_rgba(0,77,19,0.30)]',
    itemText: 'text-white/90',
    dot: 'text-white/70',
    replyBar: 'bg-white/15 text-white',
    replyIconTone: 'text-white',
    from: { x: -48, y: -48 },
    order: 'order-1 lg:order-2',
  },
  {
    title: 'Peluang',
    icon: 'lucide:sprout',
    iconAnim: '',
    iconTone: 'text-gm-primary',
    items: [
      'Minat agrikultur Gen Z tinggi',
      'Pasar nasional sangat besar',
      'Asta Cita 2 dan SDGs 12',
      'Kanal luring masih luas',
    ],
    reply: 'Aksi ST: pandu AI dan komunitas agar langganan tetap jalan.',
    replyIcon: 'lucide:shield-check',
    card: 'border-gm-line bg-gm-mist rounded-2xl shadow-[0_10px_24px_rgba(0,77,19,0.12)]',
    itemText: 'text-gm-ink',
    dot: 'text-gm-primary',
    replyBar: 'border border-gm-line bg-white text-gm-ink',
    replyIconTone: 'text-gm-primary',
    from: { x: -48, y: 48 },
    order: 'order-2 lg:order-5',
  },
  {
    title: 'Kelemahan',
    icon: 'lucide:wrench',
    iconAnim: '',
    iconTone: 'text-gm-amber',
    items: [
      'Butuh koneksi atau server',
      'Sensor bisa rusak fisik',
      'Komponen kadang langka',
      'Kemasan rentan lembap',
    ],
    reply: 'Aksi WO: amankan stok, kemas tahan lembap, latih AI dengan data pasar.',
    replyIcon: 'lucide:shield-check',
    card: 'border-gm-line border-l-4 border-l-gm-amber bg-white rounded-2xl shadow-[0_10px_24px_rgba(183,121,31,0.12)]',
    itemText: 'text-gm-ink',
    dot: 'text-gm-amber',
    replyBar: 'border border-gm-amber/30 bg-gm-amberbg text-gm-ink',
    replyIconTone: 'text-gm-amber',
    from: { x: 48, y: -48 },
    order: 'order-3 lg:order-3',
  },
  {
    title: 'Ancaman',
    icon: 'lucide:cloud-lightning',
    iconAnim: 'anim-pulse-dot',
    iconTone: 'text-gm-danger',
    items: [
      'Adopsi petani konvensional sulit',
      'Cuaca ekstrem menggagalkan panen',
      'Kompetitor sejenis bermunculan',
      'Pengguna enggan perpanjang',
    ],
    reply: 'Aksi WT: minimkan gangguan, jaga kemasan, jaga reputasi.',
    replyIcon: 'lucide:shield-check',
    card: 'border-gm-line border-l-4 border-l-gm-danger bg-white rounded-2xl shadow-[0_10px_24px_rgba(192,57,43,0.12)]',
    itemText: 'text-gm-ink',
    dot: 'text-gm-danger',
    replyBar: 'border border-gm-line bg-gm-panel text-gm-ink',
    replyIconTone: 'text-gm-danger',
    from: { x: 48, y: 48 },
    order: 'order-4 lg:order-6',
  },
]

const trans = (i: number) => ({
  duration: noMotion.value ? 0 : 0.55,
  delay: noMotion.value ? 0 : 0.08 + i * 0.08,
  ease: [0.22, 1, 0.36, 1],
})
</script>

<template>
  <DeckShell section="swot">
    <div class="relative w-full overflow-hidden rounded-3xl border border-gm-line bg-gm-panel p-2 shadow-sm md:p-2.5">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 hidden lg:block">
        <div class="absolute bottom-2 left-1/2 top-2 w-px bg-gm-line lg:ml-[53px]" />
        <div class="absolute left-2 right-2 top-1/2 h-px bg-gm-line" />
      </div>

      <div aria-hidden="true" class="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block lg:ml-[53px]">
        <span class="grid size-14 place-items-center rounded-full border border-gm-line bg-white shadow-md">
          <svg ref="compass" width="56" height="56" viewBox="0 0 56 56" role="img" aria-label="Kompas Pranata Mangsa">
            <circle cx="28" cy="28" r="25" fill="#ffffff" />
            <circle cx="28" cy="28" r="19" fill="#f6f8f5" stroke="#006e1c" stroke-opacity="0.25" stroke-width="1" />
            <g>
              <polygon points="28,9 31,25 28,28 25,25" fill="#006e1c" />
              <polygon points="47,28 31,31 28,28 31,25" fill="#b7791f" />
              <polygon points="28,47 25,31 28,28 31,31" fill="#006e1c" />
              <polygon points="9,28 25,25 28,28 25,31" fill="#b7791f" />
            </g>
            <circle cx="28" cy="28" r="4.5" fill="#006e1c" />
            <circle cx="28" cy="28" r="1.8" fill="#ffffff" />
            <text x="28" y="8.5" text-anchor="middle" font-size="8" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">S</text>
            <text x="49.5" y="31" text-anchor="middle" font-size="8" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">W</text>
            <text x="28" y="53.5" text-anchor="middle" font-size="8" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">O</text>
            <text x="6.5" y="31" text-anchor="middle" font-size="8" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">T</text>
          </svg>
        </span>
      </div>

      <div class="relative grid w-full grid-cols-1 gap-2 lg:grid-cols-[96px_1fr_1fr] lg:gap-2.5">
        <div class="hidden min-w-0 items-center justify-start lg:flex lg:order-1">
          <span class="rounded-full border border-gm-line bg-white px-2 py-1 text-left font-headline text-[10px] font-extrabold uppercase leading-tight tracking-wide text-gm-muted shadow-sm">Faktor dalam</span>
        </div>
        <Motion
          v-for="(q, i) in quads"
          :key="q.title"
          :initial="{ opacity: 0, x: q.from.x, y: q.from.y }"
          :animate="{ opacity: 1, x: 0, y: 0 }"
          :transition="trans(i)"
          :class="q.order"
          class="min-w-0"
        >
          <article :class="q.card" class="flex h-full min-w-0 flex-col border-2 p-2.5 text-left md:p-3">
            <div class="flex min-w-0 items-center justify-start gap-1.5">
              <span class="grid size-7 shrink-0 place-items-center rounded-lg" :class="q.title === 'Kekuatan' ? 'bg-white/15' : 'bg-white'">
                <Icon :name="q.icon" :class="[q.iconTone, q.iconAnim]" class="size-4 md:size-5" />
              </span>
              <h2 class="min-w-0 font-headline text-[13px] font-extrabold leading-tight md:text-sm" :class="q.title === 'Kekuatan' ? 'text-white' : 'text-gm-ink'">{{ q.title }}</h2>
            </div>
            <ul class="mt-1 space-y-0.5">
              <li v-for="it in q.items" :key="it" :class="q.itemText" class="flex min-w-0 items-start gap-1.5 break-words text-left text-[11px] leading-snug md:text-xs">
                <span aria-hidden="true" :class="q.dot" class="mt-0 shrink-0 font-bold">•</span>
                <span class="min-w-0">{{ it }}</span>
              </li>
            </ul>
            <div :class="q.replyBar" class="mt-1.5 flex min-w-0 items-start gap-1.5 rounded-xl px-2 py-1 text-left text-[11px] font-bold leading-snug md:text-xs">
              <Icon :name="q.replyIcon" :class="q.replyIconTone" class="mt-0.5 size-3.5 shrink-0" />
              <span class="min-w-0 break-words">{{ q.reply }}</span>
            </div>
          </article>
        </Motion>
        <div class="hidden min-w-0 items-center justify-start lg:flex lg:order-4">
          <span class="rounded-full border border-gm-line bg-white px-2 py-1 text-left font-headline text-[10px] font-extrabold uppercase leading-tight tracking-wide text-gm-muted shadow-sm">Faktor luar</span>
        </div>
      </div>
    </div>
  </DeckShell>
</template>
