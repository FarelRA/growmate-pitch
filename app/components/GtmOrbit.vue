<script setup lang="ts">
const nodes = [
  { icon: 'lucide:instagram', name: 'Instagram', handle: '@grow.mateai' },
  { icon: 'lucide:message-circle', name: 'WhatsApp', handle: '+62 877-8445-4555' },
  { icon: 'lucide:music-2', name: 'TikTok', handle: '@growmate.41' },
  { icon: 'lucide:shopping-bag', name: 'Shopee', handle: 'grow_mate' },
]
</script>

<template>
  <div class="w-full rounded-3xl border-2 border-gm-line bg-white p-1.5 text-left">
    <div class="flex items-center justify-start gap-2 text-left">
      <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-gm-mist">
        <Icon name="lucide:satellite" class="size-5 text-gm-primary" />
      </span>
      <p class="font-headline text-lg font-extrabold uppercase tracking-[0.08em] text-gm-primary">
        Penemuan daring
      </p>
      <span class="ml-auto flex shrink-0 items-center gap-1.5">
        <span class="anim-pulse-dot size-2 rounded-full bg-gm-amber" aria-hidden="true" />
        <span class="text-base font-semibold text-gm-muted">sinyal aktif</span>
      </span>
    </div>
    <div class="relative mt-0.5">
      <div class="absolute left-[10%] right-[10%] top-[16px] h-0.5 rounded-full bg-gm-amber/50" aria-hidden="true" />
      <div class="grid grid-cols-4 gap-1">
        <div v-for="n in nodes" :key="n.handle" class="gtm-orbit-node flex min-w-0 flex-col items-center gap-0.5 text-center">
          <span class="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-gm-ink ring-4 ring-white">
            <Icon :name="n.icon" class="size-5 text-gm-amber" />
          </span>
          <span class="min-w-0">
            <span class="block text-base font-extrabold leading-none text-gm-ink">{{ n.name }}</span>
            <span class="block break-all text-base font-medium leading-none text-gm-muted">{{ n.handle }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
