<script setup lang="ts">
const rows = [
  { icon: 'lucide:tractor', title: '3 lahan pilot', desc: '6 m2 cukup. Hardware kami yang bawa' },
  { icon: 'lucide:building-2', title: '2 mitra properti', desc: 'Penghijauan atap dan lobi yang menyiram sendiri' },
  { icon: 'lucide:mail', title: 'contact@growmate.bond', desc: 'Satu email untuk pilot, mitra, dan pertanyaan tersulit' },
]
</script>

<template>
  <div class="scale-ticket relative w-full overflow-hidden rounded-3xl bg-gm-ink p-2.5 text-left text-white md:p-3">
    <div class="flex items-center justify-start gap-2">
      <span class="grid size-8 shrink-0 place-items-center rounded-xl bg-white/10">
        <Icon name="lucide:ticket" class="size-4 text-amber-300" />
      </span>
      <div class="min-w-0">
        <div class="font-headline text-sm font-extrabold md:text-base">Yang kami minta hari ini</div>
        <div class="text-[11px] leading-snug text-white/60">Tiket Basecamp menuju puncak</div>
      </div>
    </div>
    <div class="relative my-2 flex items-center" aria-hidden="true">
      <span class="absolute -left-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-white" />
      <span class="absolute -right-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-white" />
      <span class="w-full border-t-2 border-dashed border-white/25" />
    </div>
    <div class="flex w-full flex-col gap-1.5">
      <div v-for="r in rows" :key="r.title" class="flex items-center justify-start gap-2.5 rounded-2xl bg-white/[0.07] p-1.5 text-left">
        <Icon :name="r.icon" class="size-5 shrink-0 text-emerald-300" />
        <div class="min-w-0">
          <div class="font-headline text-[13px] font-extrabold leading-tight md:text-sm">{{ r.title }}</div>
          <div class="text-[11px] leading-snug text-white/65 md:text-xs">{{ r.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
