<script setup lang="ts">
import { Motion } from 'motion-v'

const quads = [
  {
    icon: 'lucide:leaf',
    title: 'Planet',
    desc: 'Bodi rPLA serta boks dari kayu limbah, honeycomb, dan jerami yang dapat dipakai ulang.',
    border: 'border-gm-primary',
    badge: 'bg-gm-mist text-gm-primary',
    dot: 'bg-gm-primary',
    photo: '/images/impact/quad-planet.webp',
    alt: 'Pods rPLA dan boks kayu bertenaga surya dari GrowMate',
    from: { x: -24, y: -24 },
  },
  {
    icon: 'lucide:coins',
    title: 'Profit',
    desc: 'Perangkat keras lokal dan langganan AI dengan biaya di bawah produk impor.',
    border: 'border-gm-amber',
    badge: 'bg-gm-amberbg text-gm-amber',
    dot: 'bg-gm-amber',
    photo: '/images/impact/quad-profit.webp',
    alt: 'Unit Tech berbodi kayu beserta kemasan ritel yang siap dijual',
    from: { x: 24, y: -24 },
  },
  {
    icon: 'lucide:users',
    title: 'People',
    desc: 'Florist dan komunitas mendampingi pemula sampai menjadi pembeli.',
    border: 'border-gm-sky',
    badge: 'bg-gm-panel text-gm-sky',
    dot: 'bg-gm-sky',
    photo: '/images/impact/quad-people.webp',
    alt: 'Tim GrowMate berdiskusi dengan komunitas di kebun',
    from: { x: -24, y: 24 },
  },
  {
    icon: 'lucide:target',
    title: 'Purpose',
    desc: 'Selaras dengan Asta Cita 2, Indonesia Emas 2045, dan SDGs 12.',
    border: 'border-gm-deep',
    badge: 'bg-gm-mist text-gm-deep',
    dot: 'bg-gm-deep',
    photo: '/images/impact/quad-purpose.webp',
    alt: 'Pods GrowMate menyala di samping kemasan berlabel Petani Makmur Tanpa Lumpur',
    from: { x: 24, y: 24 },
  },
]

const tilts = ['-1deg', '1deg', '-1deg', '1deg']
</script>

<template>
  <DeckShell section="quad">
    <div class="flex min-h-0 w-full flex-1 flex-col justify-center overflow-x-clip overflow-y-clip">
      <div class="grid min-h-0 w-full grid-cols-2 items-stretch gap-2.5 tabular-nums md:gap-3">
        <Motion
          v-for="(q, i) in quads"
          :key="q.title"
          :initial="{ opacity: 0, x: q.from.x, y: q.from.y, scale: 0.96 }"
          :animate="{ opacity: 1, x: 0, y: 0, scale: 1 }"
          :transition="{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 + i * 0.08 }"
          class="h-full min-h-0"
        >
          <article
            class="flex h-full min-h-0 flex-row items-stretch gap-2.5 rounded-3xl border-2 bg-white p-2.5 text-left shadow-[0_8px_20px_rgba(0,77,19,0.07)]"
            :class="q.border"
            :style="{ transform: `rotate(${tilts[i]})` }"
          >
            <img
              :src="q.photo"
              :alt="q.alt"
              loading="lazy"
              draggable="false"
              class="min-h-[120px] w-24 shrink-0 self-stretch rounded-2xl border border-gm-line object-cover sm:w-32 lg:w-40"
            />
            <div class="flex min-w-0 flex-1 flex-col items-start justify-center text-left">
              <span class="grid size-6 shrink-0 place-items-center rounded-xl" :class="q.badge">
                <Icon :name="q.icon" class="size-4" />
              </span>
              <h2 class="mt-1.5 flex items-center gap-1.5 font-headline text-xl font-extrabold leading-tight text-gm-ink md:text-2xl">
                <span class="size-1.5 shrink-0 rounded-full" :class="q.dot" />
                <span>{{ q.title }}</span>
                <Icon v-if="q.title === 'Purpose'" name="lucide:star" class="anim-pulse-dot size-4 shrink-0 text-gm-amber" />
              </h2>
              <p class="mt-1 text-base font-semibold leading-[1.35] text-gm-ink">{{ q.desc }}</p>
            </div>
          </article>
        </Motion>
      </div>
    </div>
  </DeckShell>
</template>
