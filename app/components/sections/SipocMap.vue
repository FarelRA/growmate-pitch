<script setup lang="ts">
import gsap from 'gsap'

const wrap = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const cols = [
  { icon: 'lucide:truck', title: 'Pemasok', items: ['Komponen IoT', 'Cetak bodi 3D', 'Cloud dan AI', 'Kemasan hijau'], hero: false, slotLabel: 'Foto gudang komponen', slotSpec: 'Rak komponen IoT pemasok, 16/10' },
  { icon: 'lucide:package', title: 'Masukan', items: ['Mikrokontroler dan relai', 'Bodi Pods dan Tech', 'Firmware dan model AI', 'Dataset tanaman', 'Kardus, honeycomb, jerami'], hero: false, slotLabel: 'Foto kit dan bodi', slotSpec: 'Mikrokontroler, bodi Pods dan Tech, 16/10' },
  { icon: 'lucide:cog', title: 'Proses', items: ['Desain 3D', 'Rakit dan solder', 'Flashing firmware', 'Kalibrasi', 'Kemas', 'Dampingi'], hero: true, slotLabel: 'Foto meja rakit dan QC', slotSpec: 'Perakitan, flashing, kalibrasi, 16/10' },
  { icon: 'lucide:shopping-bag', title: 'Keluaran', items: ['Pods indoor', 'Tech dan Add-on lapangan', 'Dasbor + Floral Assistant', 'Data telemetri'], hero: false, slotLabel: 'Foto produk dan dasbor', slotSpec: 'Pods, Tech, layar dasbor Floral, 16/10' },
  { icon: 'lucide:users', title: 'Pelanggan', items: ['Tech farmer', 'Pengembang properti', 'Perkantoran hijau', 'Komunitas urban farming'], hero: false, slotLabel: 'Foto serah terima', slotSpec: 'Serah terima unit ke petani mitra, 16/10' },
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
    gsap.set(track.querySelectorAll('.sipoc-station'), { opacity: 1, scale: 1 })
    return
  }
  ctx = gsap.context(() => {
    const stations = gsap.utils.toArray<HTMLElement>('.sipoc-station')
    const drop = track.querySelector<HTMLElement>('.sipoc-drop')
    if (!drop || stations.length === 0)
      return
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
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
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
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
    <div ref="wrap" class="relative w-full overflow-x-clip">
      <div class="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <div class="sipoc-drop absolute left-0 top-0 grid size-7 place-items-center rounded-full bg-gm-primary opacity-0 shadow-md ring-4 ring-gm-mist">
          <Icon name="lucide:droplet" class="size-4 text-white" />
        </div>
      </div>
      <div class="flex w-full flex-col items-stretch lg:flex-row">
        <Reveal :delay="0" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[0]!.icon" :title="cols[0]!.title" :items="cols[0]!.items" :slot-label="cols[0]!.slotLabel" :slot-spec="cols[0]!.slotSpec" />
        </Reveal>
        <SipocPipe />
        <Reveal :delay="0.05" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[1]!.icon" :title="cols[1]!.title" :items="cols[1]!.items" :slot-label="cols[1]!.slotLabel" :slot-spec="cols[1]!.slotSpec" />
        </Reveal>
        <SipocPipe pulse />
        <Reveal :delay="0.1" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[2]!.icon" :title="cols[2]!.title" :items="cols[2]!.items" hero :slot-label="cols[2]!.slotLabel" :slot-spec="cols[2]!.slotSpec" />
        </Reveal>
        <SipocPipe pulse />
        <Reveal :delay="0.15" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[3]!.icon" :title="cols[3]!.title" :items="cols[3]!.items" :slot-label="cols[3]!.slotLabel" :slot-spec="cols[3]!.slotSpec" />
        </Reveal>
        <SipocPipe />
        <Reveal :delay="0.2" class="flex w-full min-w-0 lg:flex-1">
          <SipocStation :icon="cols[4]!.icon" :title="cols[4]!.title" :items="cols[4]!.items" :slot-label="cols[4]!.slotLabel" :slot-spec="cols[4]!.slotSpec" />
        </Reveal>
      </div>
    </div>
  </DeckShell>
</template>
