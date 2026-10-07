<script setup lang="ts">
import gsap from 'gsap'

const wrap = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const cols = [
  { icon: 'lucide:truck', title: 'Pemasok', items: ['Komponen IoT', 'Cetak bodi 3D', 'Cloud dan AI', 'Kemasan hijau'], hero: false, src: '/photos/sipoc-pemasok.webp', alt: 'Tim belanja komponen di toko elektronik', scene: 'supplier' },
  { icon: 'lucide:package', title: 'Masukan', items: ['Mikrokontroler dan relai', 'Bodi Pods dan Tech', 'Firmware dan model AI', 'Dataset tanaman', 'Kardus, honeycomb, jerami'], hero: false, src: '/photos/sipoc-masukan.webp', alt: 'Isi kemasan Pods dan buku panduan', scene: 'input' },
  { icon: 'lucide:cog', title: 'Proses', items: ['Desain 3D', 'Rakit dan solder', 'Flashing firmware', 'Kalibrasi', 'Kemas', 'Dampingi'], hero: true, src: '/photos/sipoc-kalibrasi.webp', alt: 'Kalibrasi sensor GrowMate di tanah', scene: 'process' },
  { icon: 'lucide:shopping-bag', title: 'Keluaran', items: ['Pods indoor', 'Tech dan Add-on lapangan', 'Dasbor + Floral Assistant', 'Data telemetri'], hero: false, src: '/photos/sipoc-pods.webp', alt: 'Pods dan tanaman siap pakai', scene: 'output' },
  { icon: 'lucide:users', title: 'Pelanggan', items: ['Tech farmer', 'Pengembang properti', 'Perkantoran hijau', 'Komunitas urban farming'], hero: false, src: '/photos/sipoc-serah.webp', alt: 'Serah terima unit ke petani mitra', scene: 'customer' },
]

function lightStations(tl: gsap.core.Timeline, stations: HTMLElement[]) {
  stations.forEach((el, i) => {
    tl.to(el, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, 0.3 + i * 1.12)
  })
  const last = stations[stations.length - 1]
  if (last)
    tl.to(last, { scale: 1.05, duration: 0.26, ease: 'power2.out', yoyo: true, repeat: 1 }, 5.7)
}

onMounted(() => {
  const track = wrap.value
  if (!track)
    return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(track.querySelectorAll('.sipoc-station, .sipoc-scene'), { opacity: 1, scale: 1, y: 0, clearProps: 'transform' })
    return
  }
  ctx = gsap.context(() => {
    const stations = gsap.utils.toArray<HTMLElement>('.sipoc-station')
    const scenes = gsap.utils.toArray<HTMLElement>('.sipoc-scene')
    const drop = track.querySelector<HTMLElement>('.sipoc-drop')
    gsap.fromTo(stations,
      { y: 26, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' })
    if (scenes.length > 0) {
      gsap.fromTo(scenes,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, stagger: 0.12, ease: 'back.out(1.8)', delay: 0.15 })
    }
    if (!drop || stations.length === 0)
      return
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 1.1 })
      tl.set(stations, { opacity: 0.4, scale: 0.95, transformOrigin: '50% 50%' }, 0)
      tl.set(drop, { left: 0, top: '50%', xPercent: -50, yPercent: -50, y: 0, x: 28, opacity: 1, scale: 1 }, 0)
      tl.fromTo(drop, { x: 28 }, { x: () => Math.max(track.clientWidth - 56, 60), duration: 6, ease: 'power1.inOut' }, 0)
      lightStations(tl, stations)
      tl.to(drop, { opacity: 0, scale: 0.5, duration: 0.4, ease: 'power1.in' }, 6)
      return () => {
        tl.kill()
      }
    })
    mm.add('(max-width: 1023px)', () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 1.1 })
      tl.set(stations, { opacity: 0.4, scale: 0.95, transformOrigin: '50% 50%' }, 0)
      tl.set(drop, { left: '50%', top: 0, xPercent: -50, yPercent: 0, x: 0, y: 12, opacity: 1, scale: 1 }, 0)
      tl.fromTo(drop, { y: 12 }, { y: () => Math.max(track.clientHeight - 52, 120), duration: 6, ease: 'power1.inOut' }, 0)
      lightStations(tl, stations)
      tl.to(drop, { opacity: 0, scale: 0.5, duration: 0.4, ease: 'power1.in' }, 6)
      return () => {
        tl.kill()
      }
    })
  }, track)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="sipoc">
    <div ref="wrap" class="relative w-full max-w-full overflow-x-clip">
      <div class="sipoc-sky relative mb-1 flex h-7 items-center gap-1.5 overflow-hidden rounded-xl border border-gm-line bg-gradient-to-r from-gm-mist via-white to-gm-mist px-2" aria-hidden="true">
        <Icon name="lucide:factory" class="size-3.5 shrink-0 text-gm-primary" />
        <span class="relative block h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-gm-mist">
          <svg viewBox="0 0 300 8" preserveAspectRatio="none" class="absolute inset-0 h-full w-full" fill="none">
            <line x1="2" y1="4" x2="298" y2="4" stroke="#4caf50" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="8 10" class="anim-flow" />
          </svg>
        </span>
        <span class="sipoc-sky-crate absolute top-1/2 grid size-5 -translate-y-1/2 place-items-center rounded-md bg-gm-primary shadow-sm ring-2 ring-gm-mist">
          <Icon name="lucide:package" class="size-3 text-white" />
        </span>
        <span class="flex shrink-0 items-end gap-0.5">
          <i class="sipoc-puff p1" /><i class="sipoc-puff p2" /><i class="sipoc-puff p3" />
        </span>
        <Icon name="lucide:store" class="size-3.5 shrink-0 text-gm-primary" />
      </div>
      <div class="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <div class="sipoc-drop absolute left-0 top-0 grid size-7 place-items-center rounded-full bg-gm-primary opacity-0 shadow-md ring-4 ring-gm-mist">
          <Icon name="lucide:package" class="size-4 text-white" />
        </div>
      </div>
      <div class="flex w-full min-w-0 flex-col items-stretch lg:flex-row">
        <Reveal :delay="0" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[0]!.icon" :title="cols[0]!.title" :items="cols[0]!.items" :scene="cols[0]!.scene" :src="cols[0]!.src" :alt="cols[0]!.alt" />
        </Reveal>
        <SipocPipe />
        <Reveal :delay="0.05" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[1]!.icon" :title="cols[1]!.title" :items="cols[1]!.items" :scene="cols[1]!.scene" :src="cols[1]!.src" :alt="cols[1]!.alt" />
        </Reveal>
        <SipocPipe pulse />
        <Reveal :delay="0.1" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[2]!.icon" :title="cols[2]!.title" :items="cols[2]!.items" hero :scene="cols[2]!.scene" :src="cols[2]!.src" :alt="cols[2]!.alt" />
        </Reveal>
        <SipocPipe pulse />
        <Reveal :delay="0.15" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[3]!.icon" :title="cols[3]!.title" :items="cols[3]!.items" :scene="cols[3]!.scene" :src="cols[3]!.src" :alt="cols[3]!.alt" />
        </Reveal>
        <SipocPipe />
        <Reveal :delay="0.2" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[4]!.icon" :title="cols[4]!.title" :items="cols[4]!.items" :scene="cols[4]!.scene" :src="cols[4]!.src" :alt="cols[4]!.alt" />
        </Reveal>
      </div>
    </div>
  </DeckShell>
</template>

<style scoped>
.sipoc-sky-crate {
  left: 28px;
  animation: sipoc-sky-run 6s linear infinite;
}
@keyframes sipoc-sky-run {
  0% { left: 28px; opacity: 0; }
  8% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: calc(100% - 44px); opacity: 0; }
}
.sipoc-puff {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 9999px;
  background: #4caf50;
  opacity: 0.55;
  animation: sipoc-puff-bop 2.4s ease-in-out infinite;
}
.sipoc-puff.p2 { animation-delay: 0.4s; height: 6px; }
.sipoc-puff.p3 { animation-delay: 0.8s; }
@keyframes sipoc-puff-bop {
  0%, 100% { transform: translateY(1.5px); opacity: 0.35; }
  50% { transform: translateY(-1.5px); opacity: 0.8; }
}
@media (prefers-reduced-motion: reduce) {
  .sipoc-sky-crate,
  .sipoc-puff {
    animation: none !important;
  }
  .sipoc-sky-crate { opacity: 0; }
}
</style>
