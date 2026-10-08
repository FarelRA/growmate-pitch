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
    iconAnim: '',
    iconTone: 'text-white',
    items: [
      'Agen AI dan rawat otomatis',
      'Pantau cerdas sensor titik',
      'Komunitas dan kemas hijau',
      'Harga hemat servis lokal',
    ],
    reply: 'Aksi SO: rebut pasar milenial.',
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
    reply: 'Aksi ST: jaga langganan lewat AI.',
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
    reply: 'Aksi WO: amankan stok dan kemasan.',
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
    iconAnim: '',
    iconTone: 'text-gm-danger',
    items: [
      'Adopsi petani konvensional sulit',
      'Cuaca ekstrem gagalkan panen',
      'Kompetitor sejenis bermunculan',
      'Enggan perpanjang langganan',
    ],
    reply: 'Aksi WT: cegah gangguan jaga nama.',
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
    <div class="relative flex min-h-full w-full flex-col justify-center overflow-hidden rounded-2xl border border-gm-line bg-gm-panel p-2 text-left shadow-sm">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 hidden lg:block">
        <div class="absolute bottom-2 left-1/2 top-2 w-px bg-gm-line lg:ml-[53px]" />
        <div class="absolute left-2 right-2 top-1/2 h-px bg-gm-line" />
      </div>

      <div aria-hidden="true" class="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block lg:ml-[53px]">
        <span class="grid size-16 place-items-center rounded-full border border-gm-line bg-white shadow-md">
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
            <text x="28" y="14" text-anchor="middle" font-size="16" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">S</text>
            <text x="45" y="33" text-anchor="middle" font-size="16" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">W</text>
            <text x="28" y="52" text-anchor="middle" font-size="16" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">O</text>
            <text x="11" y="33" text-anchor="middle" font-size="16" font-weight="800" fill="#004d13" font-family="Manrope, sans-serif">T</text>
          </svg>
        </span>
      </div>

      <div class="relative grid w-full flex-1 grid-cols-1 content-stretch gap-1.5 lg:auto-rows-fr lg:grid-cols-[96px_1fr_1fr]">
        <div class="hidden min-w-0 items-center justify-start lg:flex lg:order-1">
          <span class="rounded-full border border-gm-line bg-white px-3 py-1.5 text-left font-headline text-base font-extrabold uppercase leading-tight tracking-wide text-gm-muted shadow-sm">Faktor dalam</span>
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
          <article :class="q.card" class="flex h-full min-w-0 flex-col border-2 p-2.5 text-left">
            <div
              v-if="q.title === 'Kekuatan'"
              aria-hidden="true"
              class="relative h-[56px] w-full shrink-0 overflow-hidden rounded-xl bg-white/10 lg:h-[60px]"
            >
              <svg viewBox="0 0 440 56" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                <line x1="28" y1="50" x2="412" y2="50" stroke="#ffffff" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" />
                <g stroke="#ffffff" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round">
                  <path d="M60 50 v-6 M56 45 q4 -5 8 0 M68 45 q4 -5 8 0" fill="none" />
                  <path d="M356 50 v-6 M352 45 q4 -5 8 0 M364 45 q4 -5 8 0" fill="none" />
                  <path d="M104 50 v-5 M100 46 q4 -4 8 0" fill="none" stroke-opacity="0.35" />
                  <path d="M320 50 v-5 M316 46 q4 -4 8 0" fill="none" stroke-opacity="0.35" />
                </g>
                <g class="swot-rays" style="transform-origin: 220px 28px">
                  <g stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-opacity="0.9">
                    <line x1="220" y1="8" x2="220" y2="14" />
                    <line x1="220" y1="42" x2="220" y2="48" stroke-opacity="0.35" />
                    <line x1="198" y1="28" x2="204" y2="28" />
                    <line x1="236" y1="28" x2="242" y2="28" />
                    <line x1="204.4" y1="12.4" x2="208.6" y2="16.6" />
                    <line x1="231.4" y1="43.4" x2="235.6" y2="47.6" stroke-opacity="0.35" />
                    <line x1="235.6" y1="12.4" x2="231.4" y2="16.6" />
                    <line x1="208.6" y1="43.4" x2="204.4" y2="47.6" stroke-opacity="0.35" />
                  </g>
                </g>
                <circle cx="220" cy="28" r="11" fill="#ffffff" />
                <circle cx="220" cy="28" r="7.5" fill="#ffd84d" />
                <circle cx="217.5" cy="26" r="2" fill="#ffffff" fill-opacity="0.9" />
              </svg>
            </div>

            <div
              v-else-if="q.title === 'Kelemahan'"
              aria-hidden="true"
              class="relative h-[56px] w-full shrink-0 overflow-hidden rounded-xl bg-[#eef0ea] lg:h-[60px]"
            >
              <svg viewBox="0 0 440 56" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                <g class="swot-drift-a" fill="#c9cfc9">
                  <ellipse cx="80" cy="18" rx="16" ry="7" />
                  <ellipse cx="92" cy="15" rx="11" ry="6" />
                </g>
                <g class="swot-drift-b" fill="#d8dcd8">
                  <ellipse cx="360" cy="16" rx="18" ry="7" />
                  <ellipse cx="348" cy="13" rx="10" ry="5.5" />
                </g>
                <g transform="rotate(-35 220 29)" stroke="#b7791f" stroke-width="4" stroke-linecap="round" fill="none">
                  <line x1="220" y1="32" x2="220" y2="50" />
                </g>
                <g transform="rotate(-35 220 29)">
                  <circle cx="220" cy="22" r="9" fill="none" stroke="#b7791f" stroke-width="4" />
                  <circle cx="220" cy="22" r="9" fill="none" stroke="#eef0ea" stroke-width="2.5" stroke-dasharray="6 5" transform="rotate(40 220 22)" />
                </g>
              </svg>
              <span class="swot-drip" style="left: 19%" />
              <span class="swot-drip swot-drip-b" style="left: 81%" />
            </div>

            <div
              v-else-if="q.title === 'Peluang'"
              aria-hidden="true"
              class="relative h-[56px] w-full shrink-0 overflow-hidden rounded-xl bg-white lg:h-[60px]"
            >
              <svg viewBox="0 0 440 56" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                <line x1="100" y1="48" x2="320" y2="48" stroke="#006e1c" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" />
                <path d="M210 48 C210 38 210 32 210 24" stroke="#006e1c" stroke-width="2.5" stroke-linecap="round" fill="none" />
                <path d="M210 36 C200 36 194 30 192 22 C202 23 209 28 210 36 Z" fill="#2e9e4f" />
                <path d="M210 32 C220 32 226 26 228 18 C218 19 211 24 210 32 Z" fill="#006e1c" />
                <circle cx="210" cy="18" r="3" fill="#2e9e4f" />
                <g stroke="#006e1c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" class="swot-rise">
                  <line x1="330" y1="44" x2="330" y2="20" />
                  <polyline points="321,29 330,19 339,29" />
                </g>
                <g fill="#b7791f">
                  <path class="swot-twinkle" d="M122 14 l1.6 3.4 3.4 1.6 -3.4 1.6 -1.6 3.4 -1.6 -3.4 -3.4 -1.6 3.4 -1.6 Z" />
                  <path class="swot-twinkle swot-twinkle-b" d="M262 10 l1.3 2.8 2.8 1.3 -2.8 1.3 -1.3 2.8 -1.3 -2.8 -2.8 -1.3 2.8 -1.3 Z" />
                  <path class="swot-twinkle swot-twinkle-c" d="M388 32 l1.3 2.8 2.8 1.3 -2.8 1.3 -1.3 2.8 -1.3 -2.8 -2.8 -1.3 2.8 -1.3 Z" />
                </g>
                <circle class="swot-twinkle swot-twinkle-b" cx="292" cy="20" r="2" fill="#2e9e4f" />
              </svg>
            </div>

            <div
              v-else
              aria-hidden="true"
              class="relative h-[56px] w-full shrink-0 overflow-hidden rounded-xl bg-[#2e3533] lg:h-[60px]"
            >
              <svg viewBox="0 0 440 56" class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                <g stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round">
                  <line class="swot-wind" x1="16" y1="16" x2="104" y2="16" />
                  <line class="swot-wind swot-wind-b" x1="8" y1="26" x2="80" y2="26" />
                  <line class="swot-wind swot-wind-c" x1="352" y1="40" x2="428" y2="40" />
                </g>
                <g fill="#4a5552">
                  <ellipse cx="220" cy="20" rx="26" ry="10" />
                  <ellipse cx="204" cy="16" rx="14" ry="8" />
                  <ellipse cx="236" cy="16" rx="15" ry="8.5" />
                </g>
                <g fill="#3a423f">
                  <ellipse cx="220" cy="23" rx="22" ry="7" />
                </g>
                <polygon class="swot-bolt" points="228,26 216,40 223,40 219,52 233,37 225,37 230,26" fill="#ffd84d" />
              </svg>
            </div>

            <div class="mt-2 flex min-w-0 items-center justify-start gap-2 text-left">
              <span class="grid size-8 shrink-0 place-items-center rounded-lg" :class="q.title === 'Kekuatan' ? 'bg-white/15' : 'bg-white'">
                <Icon :name="q.icon" :class="[q.iconTone, q.iconAnim]" class="size-5" />
              </span>
              <h2 class="min-w-0 text-left font-headline text-base font-extrabold leading-tight" :class="q.title === 'Kekuatan' ? 'text-white' : 'text-gm-ink'">{{ q.title }}</h2>
            </div>
            <ul class="mt-2 space-y-0.5 text-left">
              <li v-for="it in q.items" :key="it" :class="q.itemText" class="flex min-w-0 items-start gap-2 break-words text-left text-base leading-snug">
                <span aria-hidden="true" :class="q.dot" class="mt-0 shrink-0 font-bold">•</span>
                <span class="min-w-0">{{ it }}</span>
              </li>
            </ul>
            <div aria-hidden="true" class="min-h-2 flex-1" />
            <div :class="q.replyBar" class="flex min-w-0 items-start gap-2 rounded-xl px-2.5 py-1 text-left text-base font-bold leading-snug">
              <Icon :name="q.replyIcon" :class="q.replyIconTone" class="mt-0.5 size-4 shrink-0" />
              <span class="min-w-0 break-words">{{ q.reply }}</span>
            </div>
          </article>
        </Motion>
        <div class="hidden min-w-0 items-center justify-start lg:flex lg:order-4">
          <span class="rounded-full border border-gm-line bg-white px-3 py-1.5 text-left font-headline text-base font-extrabold uppercase leading-tight tracking-wide text-gm-muted shadow-sm">Faktor luar</span>
        </div>
      </div>
    </div>
  </DeckShell>
</template>

<style scoped>
.swot-rays {
  animation: swot-spin 16s linear infinite;
  transform-box: fill-box;
}
.swot-drift-a {
  animation: swot-drift-a 7s ease-in-out infinite alternate;
}
.swot-drift-b {
  animation: swot-drift-b 9s ease-in-out infinite alternate;
}
.swot-twinkle {
  animation: swot-twinkle 2.4s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.swot-twinkle-b {
  animation-delay: 0.7s;
}
.swot-twinkle-c {
  animation-delay: 1.3s;
}
.swot-bolt {
  animation: swot-flash 2.8s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
.swot-rise {
  animation: swot-rise 2.6s ease-in-out infinite;
}
.swot-wind {
  animation: swot-wind 3.2s ease-in-out infinite;
}
.swot-wind-b {
  animation-delay: 0.6s;
}
.swot-wind-c {
  animation-delay: 1.1s;
}
.swot-drip {
  position: absolute;
  top: 22px;
  width: 4px;
  height: 4px;
  border-radius: 9999px;
  background: #9aa5a0;
  opacity: 0;
  animation: swot-drip 3.4s ease-in infinite;
}
.swot-drip-b {
  animation-delay: 1.7s;
}
@keyframes swot-spin {
  to { transform: rotate(360deg); }
}
@keyframes swot-drift-a {
  from { transform: translateX(-8px); }
  to { transform: translateX(10px); }
}
@keyframes swot-drift-b {
  from { transform: translateX(9px); }
  to { transform: translateX(-9px); }
}
@keyframes swot-twinkle {
  0%, 100% { opacity: 0.25; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.15); }
}
@keyframes swot-flash {
  0%, 100% { opacity: 1; }
  8% { opacity: 0.25; }
  16% { opacity: 1; }
  52% { opacity: 1; }
  60% { opacity: 0.4; }
  68% { opacity: 1; }
}
@keyframes swot-rise {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-3px); opacity: 0.85; }
}
@keyframes swot-wind {
  0%, 100% { opacity: 0.25; transform: translateX(0); }
  50% { opacity: 0.6; transform: translateX(4px); }
}
@keyframes swot-drip {
  0% { opacity: 0; transform: translateY(0); }
  25% { opacity: 0.9; }
  70% { opacity: 0.7; transform: translateY(12px); }
  100% { opacity: 0; transform: translateY(16px); }
}
@media (prefers-reduced-motion: reduce) {
  .swot-rays,
  .swot-drift-a,
  .swot-drift-b,
  .swot-twinkle,
  .swot-bolt,
  .swot-rise,
  .swot-wind,
  .swot-drip {
    animation: none;
  }
  .swot-twinkle,
  .swot-bolt {
    opacity: 1;
  }
}
</style>
