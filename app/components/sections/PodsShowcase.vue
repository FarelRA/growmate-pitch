<script setup lang="ts">
import PodsDiagram from '~/components/PodsDiagram.vue'

const specs = [
  { icon: 'lucide:ruler', title: '20 × 10 × 30 cm', desc: 'rPLA putih tulang, matte' },
  { icon: 'lucide:tag', title: 'Rp803 rb', desc: 'marjin sekitar Rp230 rb' },
  { icon: 'lucide:flower-2', title: 'Demo soka', desc: 'kelopak dapat dimakan, jadi teh herbal' },
]
</script>

<template>
  <div class="flex min-h-0 w-full min-w-0 flex-col gap-1.5 text-left">
    <Reveal class="w-full">
      <PodsDiagram />
    </Reveal>
    <Reveal :delay="0.1" class="w-full">
      <div class="grid w-full grid-cols-1 gap-1 sm:grid-cols-3">
        <div
          v-for="s in specs"
          :key="s.title"
          class="flex min-w-0 items-center gap-2 rounded-2xl border-2 border-gm-line bg-white px-2.5 py-1.5 text-left"
        >
          <Icon :name="s.icon" class="size-5 shrink-0 text-gm-primary" />
          <span class="min-w-0">
            <span class="block font-headline text-base font-extrabold leading-tight tabular-nums text-gm-ink">{{ s.title }}</span>
            <span class="block truncate text-base leading-snug text-gm-muted">{{ s.desc }}</span>
          </span>
        </div>
      </div>
    </Reveal>
  </div>
</template>
