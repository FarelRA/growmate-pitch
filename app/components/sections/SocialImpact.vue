<script setup lang="ts">
import { Motion } from 'motion-v'

const reduced = usePreferredReducedMotion()
const noMotion = computed(() => reduced.value === 'reduce')
const spring = (delay: number) => ({
  duration: noMotion.value ? 0 : 0.45,
  delay: noMotion.value ? 0 : delay,
  ease: [0.22, 1, 0.36, 1],
})

const frames = [
  {
    no: 'Estafet 1',
    icon: 'lucide:sprout',
    title: 'Regenerasi petani teknologi',
    desc: 'Mentor AI membimbing anak muda bertani dengan data.',
    halo: true,
    leaf: false,
  },
  {
    no: 'Estafet 2',
    icon: 'lucide:handshake',
    title: 'Transfer antargenerasi',
    desc: 'Komunitas GrowMate mempertemukan petani senior dan junior.',
    halo: false,
    leaf: false,
  },
  {
    no: 'Estafet 3',
    icon: 'lucide:timer',
    title: 'Biaya operasional turun',
    desc: 'Rawat 45 menit menjadi 5 menit. Air dan pupuk tepat sasaran.',
    halo: false,
    leaf: true,
  },
]
</script>

<template>
  <DeckShell section="sosial">
    <div class="relative flex min-h-full flex-col justify-center overflow-x-clip">
      <svg
        viewBox="0 0 1200 620"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      >
        <g stroke="#006e1c" stroke-width="2">
          <line x1="40" y1="0" x2="40" y2="620" />
          <line x1="140" y1="0" x2="140" y2="620" />
          <line x1="240" y1="0" x2="240" y2="620" />
          <line x1="340" y1="0" x2="340" y2="620" />
          <line x1="440" y1="0" x2="440" y2="620" />
          <line x1="540" y1="0" x2="540" y2="620" />
          <line x1="640" y1="0" x2="640" y2="620" />
          <line x1="740" y1="0" x2="740" y2="620" />
          <line x1="840" y1="0" x2="840" y2="620" />
          <line x1="940" y1="0" x2="940" y2="620" />
          <line x1="1040" y1="0" x2="1040" y2="620" />
          <line x1="1140" y1="0" x2="1140" y2="620" />
        </g>
        <g fill="none" stroke="#006e1c" stroke-width="2">
          <rect x="28" y="40" width="24" height="24" rx="6" />
          <rect x="428" y="180" width="24" height="24" rx="6" />
          <rect x="828" y="320" width="24" height="24" rx="6" />
          <circle cx="240" cy="480" r="10" />
          <circle cx="740" cy="120" r="10" />
          <circle cx="1040" cy="500" r="10" />
        </g>
      </svg>

      <DeckSplitPanel class="sosial-split relative z-10">
        <template #primary>
          <div class="relative min-w-0 pl-8 text-left md:pl-10">
            <SosialVine />
            <div class="relative z-10 flex w-full flex-col justify-center gap-1.5">
              <Motion
                v-for="(f, i) in frames"
                :key="f.title"
                :initial="{ opacity: 0, scale: 0.9 }"
                :animate="{ opacity: 1, scale: 1 }"
                :transition="spring(0.12 + i * 0.12)"
                class="w-full"
              >
                <article class="flex w-full items-start justify-start gap-2.5 rounded-2xl border-2 border-gm-line bg-white p-2 text-left">
                  <span class="relative grid size-10 shrink-0 place-items-center rounded-xl bg-gm-mist">
                    <Icon :name="f.icon" class="size-6 text-gm-primary" />
                    <span
                      v-if="f.halo"
                      class="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-gm-ink ring-2 ring-gm-soft/60"
                    >
                      <Icon name="lucide:sparkles" class="size-3.5 text-emerald-300" />
                    </span>
                    <span
                      v-if="f.leaf"
                      class="absolute -bottom-1 -right-1 grid size-6 place-items-center rounded-full bg-gm-primary ring-2 ring-white"
                    >
                      <Icon name="lucide:leaf" class="size-3.5 text-white" />
                    </span>
                  </span>
                  <span class="min-w-0 text-left">
                    <span class="inline-block rounded-full bg-gm-mist px-2.5 py-0.5 font-headline text-base font-extrabold uppercase tracking-wide text-gm-deep">{{ f.no }}</span>
                    <span class="mt-1 block font-headline text-base font-extrabold leading-tight text-gm-ink lg:text-lg">{{ f.title }}</span>
                    <span class="mt-1 block text-base leading-snug text-gm-muted">{{ f.desc }}</span>
                  </span>
                </article>
              </Motion>
            </div>
          </div>
        </template>

        <template #secondary>
          <div class="flex w-full min-w-0 flex-col text-left">
            <div class="mt-1.5 w-full px-0.5">
              <SosialTimer />
            </div>
            <div class="mt-1.5 flex w-full items-center justify-start gap-2.5 rounded-2xl bg-gm-primary px-4 py-1.5 text-left text-white">
              <Icon name="lucide:badge-check" class="size-6 shrink-0 lg:size-7" />
              <p class="font-headline text-base font-extrabold leading-tight lg:text-lg">8 testimoni resmi terdokumentasi</p>
            </div>
          </div>
        </template>
      </DeckSplitPanel>
    </div>
  </DeckShell>
</template>

<style scoped>
@media (max-width: 1023px) {
  .sosial-split > div:first-child {
    order: 2;
  }
  .sosial-split > div:last-child {
    order: 1;
  }
}
</style>
