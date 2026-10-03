<script setup lang="ts">
import gsap from 'gsap'

const track = ref<HTMLElement | null>(null)
const packet = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      packet.value,
      { left: '12.5%' },
      { left: '87.5%', duration: 3.4, ease: 'power1.inOut', repeat: -1, repeatDelay: 0.5 },
    )
  }, track.value ?? undefined)
})
onUnmounted(() => ctx?.revert())

const stations = [
  { icon: 'lucide:sprout', name: 'Ukur', desc: 'Pods dan Tech mengirim bacaan mentah + JPEG', chip: 'snapshotId • ageMs' },
  { icon: 'lucide:database', name: 'Serap', desc: 'Convex menyimpan status kini dan 90 hari riwayat', chip: 'POST /api/v1/sensors' },
  { icon: 'lucide:brain-circuit', name: 'Putuskan', desc: 'Aturan ambang + tool Floral Assistant mengantrekan dosis', chip: 'queuedCommands' },
  { icon: 'lucide:droplets', name: 'Eksekusi', desc: 'Dosis idempoten dieksekusi presisi, status dilaporkan', chip: 'acceptedCommandIds' },
]
</script>

<template>
  <div ref="track" class="rounded-2xl border-2 border-gm-line bg-gm-panel p-4 md:rounded-[20px] md:p-[30px]">
    <div class="relative hidden xl:block">
      <div class="absolute left-[12.5%] right-[12.5%] top-[30px] h-[12px] -translate-y-1/2 rounded-full bg-gm-line" />
      <div ref="packet" class="absolute top-[30px] z-10 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gm-primary ring-8 ring-gm-mist" />
      <div class="relative grid grid-cols-4">
        <div v-for="s in stations" :key="s.name" class="flex flex-col items-center text-center">
          <div class="grid h-[60px] w-[60px] place-items-center rounded-2xl border-2 border-gm-line bg-white shadow-sm">
            <Icon :name="s.icon" class="h-[30px] w-[30px] text-gm-primary" />
          </div>
          <div class="mt-[12px] font-headline text-[15px] font-extrabold text-gm-ink">{{ s.name }}</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-[20px] xl:mt-[26px] xl:grid-cols-4">
      <div v-for="s in stations" :key="s.name" class="flex items-start gap-3 rounded-2xl border-2 border-gm-line bg-white p-4 md:block md:p-[20px]">
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gm-mist xl:hidden">
          <Icon :name="s.icon" class="h-6 w-6 text-gm-primary" />
        </span>
        <div>
          <p class="text-[14px] leading-snug text-gm-muted md:text-[17px]">{{ s.desc }}</p>
          <span class="mt-2 inline-block rounded-full bg-gm-mist px-3 py-1 font-mono text-[11px] font-semibold text-gm-deep md:mt-[12px] md:px-[14px] md:py-[6px] md:text-[14px]">{{ s.chip }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
