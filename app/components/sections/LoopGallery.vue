<script setup lang="ts">
import gsap from 'gsap'

interface LoopCard {
  src: string
  alt: string
  caption: string
  /** Kata fase yang benar-benar dapat diturunkan dari keterangan. Tanpa tanggal karangan. */
  phase?: string
  /** Kartu hero: satu per lajur, lebar lebih besar untuk variasi ritme. */
  hero?: boolean
}

// Lajur atas: dari riset, produksi, sampai produk. Keterangan merujuk pada label DocGallery.
const rowA: LoopCard[] = [
  { src: '/images/process/pra-brain.webp', alt: 'Tim berdiskusi tentang gagasan awal produk GrowMate', caption: 'Diskusi awal gagasan produk', phase: 'Pra-produksi' },
  { src: '/images/process/pra-wawancara.webp', alt: 'Wawancara untuk menggali masalah calon pengguna', caption: 'Wawancara untuk menggali masalah pengguna', phase: 'Pra-produksi' },
  { src: '/images/process/pra-coding.webp', alt: 'Penulisan firmware di VS Code', caption: 'Penulisan firmware di VS Code', phase: 'Pra-produksi' },
  { src: '/images/process/pra-blender.webp', alt: 'Desain bodi Pods di Blender', caption: 'Desain bodi Pods di Blender', phase: 'Pra-produksi' },
  { src: '/images/process/prod-solder.webp', alt: 'Founder menolder dan merakit unit GrowMate', caption: 'Perakitan dan penyolderan unit', phase: 'Produksi' },
  { src: '/images/process/dok-printer.webp', alt: 'Printer 3D mencetak bodi putih GrowMate', caption: 'Cetak bodi dengan printer 3D', phase: 'Produksi' },
  { src: '/images/process/prod-rakit.webp', alt: 'Perakitan fisik unit di meja produksi', caption: 'Perakitan fisik unit', phase: 'Produksi' },
  { src: '/images/packaging/prod-kemas.webp', alt: 'Pengemasan unit sebelum dikirim', caption: 'Pengemasan unit sebelum dikirim', phase: 'Produksi' },
  { src: '/images/process/prod-flash.webp', alt: 'Founder memprogram firmware unit lewat laptop', caption: 'Flashing firmware ke unit', phase: 'Produksi' },
  { src: '/images/process/prod-diskusi.webp', alt: 'Diskusi evaluasi desain bersama rekan kerja', caption: 'Diskusi evaluasi desain', phase: 'Produksi' },
  { src: '/images/field/lahan-koding.webp', alt: 'Pembacaan data unit GrowMate lewat laptop', caption: 'Pembacaan data unit lewat laptop', phase: 'Lapangan' },
  { src: '/images/products/pods-teras.webp', alt: 'Pods GrowMate dengan bunga di meja teras', caption: 'Pods di meja teras', phase: 'Produk' },
  { src: '/images/products/pods-glow.webp', alt: 'Pods GrowMate disinari lampu tumbuh merah muda', caption: 'Pods dengan lampu tumbuh', phase: 'Produk', hero: true },
  { src: '/images/products/pods-kantor.webp', alt: 'Pengguna bersama GrowMate Pods di meja kantor', caption: 'Pods di meja kantor', phase: 'Produk' },
]

// Lajur bawah: lapangan, kemitraan, dan testimoni.
// Kartu momen acara dibiarkan tanpa chip: fase tidak dapat diturunkan dengan jujur.
const rowB: LoopCard[] = [
  { src: '/images/events/dok-demo.webp', alt: 'Founder mendemokan unit GrowMate kepada pengunjung', caption: 'Demo unit ke pengunjung' },
  { src: '/images/events/acara-bazar.webp', alt: 'Demo unit di stan bazar sekolah Bantul', caption: 'Demo unit di stan bazar sekolah' },
  { src: '/images/events/acara-serah.webp', alt: 'Penyerahan unit dan brosur ke pengguna baru', caption: 'Penyerahan unit ke pengguna' },
  { src: '/images/events/gt-mulyo.webp', alt: 'Penandatanganan dokumen konsinyasi dengan Mulyo Tani', caption: 'Konsinyasi Mulyo Tani', phase: 'Kemitraan' },
  { src: '/images/events/mitra-matra.webp', alt: 'Penandatanganan kemitraan produksi dengan Matra', caption: 'Kemitraan produksi dengan Matra 3D', phase: 'Kemitraan' },
  { src: '/images/events/uji-serah.webp', alt: 'Serah terima unit di DKPP Kabupaten Bantul', caption: 'Serah terima unit di DKPP' },
  { src: '/images/misc/hero.webp', alt: 'Pods GrowMate dengan bunga soka di ruang kendali tani', caption: 'Pods dengan bunga soka', phase: 'Produk', hero: true },
  { src: '/images/impact/testi-wabup.webp', alt: 'Aris Suharyanto, Wakil Bupati Bantul', caption: 'Wakil Bupati Bantul', phase: 'Testimoni' },
  { src: '/images/field/lahan-pasang.webp', alt: 'Tim memasang unit GrowMate di tepi lahan', caption: 'Pemasangan unit di tepi lahan', phase: 'Lapangan' },
  { src: '/images/field/lahan-unit.webp', alt: 'Unit GrowMate berdiri di pematang sawah', caption: 'Unit terpasang di pematang', phase: 'Lapangan' },
  { src: '/images/field/lahan-probe.webp', alt: 'Sensor kelembapan tanah dicolokkan ke media tanam', caption: 'Sensor kelembapan tanah', phase: 'Lapangan' },
  { src: '/images/field/lahan-ukur.webp', alt: 'Pembacaan kondisi unit saat pengecekan lapangan', caption: 'Pengecekan unit di lapangan', phase: 'Lapangan' },
  { src: '/images/field/lahan-sawah.webp', alt: 'Unit GrowMate berdiri sendiri di petak sawah', caption: 'Unit di petak sawah', phase: 'Lapangan' },
  { src: '/images/events/mitra-honeycomb.webp', alt: 'Penandatanganan nota kesepahaman dengan Honeycomb', caption: 'Nota kesepahaman dengan Honeycomb', phase: 'Kemitraan' },
  { src: '/images/events/paket-diterima.webp', alt: 'Pelanggan menerima paket unit GrowMate di rumah', caption: 'Paket unit diterima pelanggan' },
  { src: '/images/events/bazar-demo.webp', alt: 'Founder mendemokan unit kepada pengunjung bazar', caption: 'Demo unit di bazar' },
  { src: '/images/events/pameran-stan.webp', alt: 'Stan pameran GrowMate melayani pengunjung', caption: 'Stan pameran dan pengunjung' },
  { src: '/images/events/brosur-serah.webp', alt: 'Penyerahan brosur GrowMate kepada warga', caption: 'Penyerahan brosur kepada warga' },
]

interface LoopCardView extends LoopCard { dup: boolean }

// Konten digandakan x2 untuk putaran mulus. Semua variabel kartu (miring, bayangan,
// fase mengambang) dihitung dari indeks asli (i % panjang) supaya kartu kembar
// identik saat posisi layar bertukar di batas putaran. Panjang lajur genap,
// jadi paritas nth-child kembar juga sama.
const deckA: LoopCardView[] = [...rowA, ...rowA].map((c, i) => ({ ...c, dup: i >= rowA.length }))
const deckB: LoopCardView[] = [...rowB, ...rowB].map((c, i) => ({ ...c, dup: i >= rowB.length }))

// A6: lebar hero deterministik, satu per lajur. Di lg naik satu langkah saja
// (w-72 vs w-64) supaya anggaran tinggi 1366x768 tetap pas tanpa gulir.
const W_BASE = 'w-52 sm:w-60 lg:w-64 2xl:w-72'
const W_HERO = 'w-56 sm:w-64 lg:w-72 2xl:w-96'
function widthClass(c: LoopCardView) { return c.hero ? W_HERO : W_BASE }

// A3: sebaran miring deterministik -1.5 sampai +1.5 derajat, tiga tingkat bayangan.
const SHADOWS = [
  '0 4px 14px rgba(26, 28, 28, 0.06)',
  '0 8px 22px rgba(26, 28, 28, 0.10)',
  '0 14px 30px rgba(26, 28, 28, 0.14)',
]

function cardVars(c: LoopCardView, i: number, len: number) {
  const j = i % len
  return {
    '--tilt': `${(((j * 37) % 31) - 15) / 10}deg`,
    '--sh': SHADOWS[j % 3]!,
    '--ph': String(-((j % 11) * 0.42)),
  }
}

/* ---------- mesin lajur (B7 silinder, B8 paralaks kursor, B9 seret) ----------
 * Keputusan mekanisme B9: lajur digerakkan penuh oleh transform JS, bukan
 * animasi CSS. Posisi alur (flow) adalah satu variabel kontinu per lajur;
 * jarak silinder, paralaks kursor, dan seretan pointer semuanya menumpang pada
 * satu translateX. Jeda hover, momentum inersia, dan kembali ke alur otomatis
 * dikerjakan pada variabel yang sama, sehingga batas putaran (flow modulo
 * setengah lebar trek) tidak mungkin melompati seam: salinan kembar selalu
 * menerima perlakuan identik karena didorong oleh posisi dokumen, bukan indeks. */

const rootEl = ref<HTMLElement | null>(null)
const rowEls: (HTMLElement | null)[] = [null, null]
const trackEls: (HTMLElement | null)[] = [null, null]
const cardEls: HTMLElement[][] = [[], []]

function setRow(r: number, el: unknown) { rowEls[r] = el as HTMLElement | null }
function setTrack(r: number, el: unknown) { trackEls[r] = el as HTMLElement | null }
function setCard(r: number, i: number, el: unknown) {
  if (el) cardEls[r]![i] = el as HTMLElement
}

interface RowState {
  dir: -1 | 1
  dur: number
  flow: number
  half: number
  speed: number
  rowLeft: number
  centers: number[]
  par: number
  parTarget: number
  dragOff: number
  dragV: number
  dragging: boolean
  hovered: boolean
}

const states: RowState[] = [
  { dir: -1, dur: 55, flow: 0, half: 1, speed: 0, rowLeft: 0, centers: [], par: 0, parTarget: 0, dragOff: 0, dragV: 0, dragging: false, hovered: false },
  { dir: 1, dur: 68, flow: 0, half: 1, speed: 0, rowLeft: 0, centers: [], par: 0, parTarget: 0, dragOff: 0, dragV: 0, dragging: false, hovered: false },
]

const reduced = ref(false)
let finePointer = false
let visible = false
let raf = 0
let last = 0
const timers: ReturnType<typeof setTimeout>[] = []

function measure() {
  for (let r = 0; r < 2; r++) {
    const s = states[r]!
    const track = trackEls[r]
    const row = rowEls[r]
    const cards = cardEls[r]!
    if (!track || !row || !cards.length) continue
    s.half = Math.max(track.scrollWidth / 2, 1)
    s.speed = s.half / s.dur
    s.rowLeft = row.getBoundingClientRect().left
    s.centers = cards.map(el => (el ? el.offsetLeft + el.offsetWidth / 2 : 0))
    if (reduced.value) {
      // Susunan statis: lajur kanan mulai dari salinan kedua, tanpa kurva silinder.
      track.style.transform = `translate3d(${s.dir === -1 ? 0 : -s.half}px, 0, 0)`
    }
  }
}
function loop(now: number) {
  raf = requestAnimationFrame(loop)
  const dt = Math.min((now - last) / 1000, 0.05)
  last = now
  const cX = window.innerWidth / 2
  for (let r = 0; r < 2; r++) {
    const s = states[r]!
    const track = trackEls[r]
    const cards = cardEls[r]!
    if (!track) continue
    if (!s.dragging && !s.hovered) s.flow += s.speed * dt
    if (s.flow >= s.half) s.flow -= s.half
    // Inersia seretan: pengereman eksponensial lalu kembali halus ke alur otomatis.
    if (!s.dragging && s.dragOff !== 0) {
      s.dragOff += s.dragV * dt
      s.dragV *= Math.exp(-3.4 * dt)
      if (Math.abs(s.dragV) < 14) {
        s.dragOff *= Math.exp(-6 * dt)
        if (Math.abs(s.dragOff) < 0.4 && Math.abs(s.dragV) < 1) { s.dragOff = 0; s.dragV = 0 }
      }
    }
    // B8: paralaks kursor berlawanan arah, dilerpkan dalam bingkai yang sama.
    s.par += (s.parTarget - s.par) * (1 - Math.exp(-5 * dt))
    const x = (s.dir === -1 ? -s.flow : -(s.half - s.flow)) + s.dragOff + s.par
    track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`
    // B7: jarak kartu dari pusat viewport menggerakkan lengkung silinder.
    // Nilai yang tidak berubah (kartu jauh yang sudah jenuh terklip) tidak
    // ditulis ulang, supaya beban bingkai tetap kecil.
    const base = s.rowLeft + x
    for (let i = 0; i < cards.length; i++) {
      const el = cards[i]
      if (!el) continue
      let d = (base + (s.centers[i] ?? 0) - cX) / cX
      if (d > 1) d = 1
      else if (d < -1) d = -1
      const ad = d < 0 ? -d : d
      const t = `perspective(1200px) rotateY(${(d * 20).toFixed(2)}deg) translateZ(${(-ad * 64).toFixed(1)}px)`
      const o = (1 - ad * 0.3).toFixed(3)
      if (el.style.transform !== t) el.style.transform = t
      if (el.style.opacity !== o) el.style.opacity = o
    }
  }
}

function start() {
  if (raf || reduced.value || !visible) return
  last = performance.now()
  raf = requestAnimationFrame(loop)
}
function stop() {
  if (raf) cancelAnimationFrame(raf)
  raf = 0
}

/* ---------- seret pointer (B9, hanya mouse/pen) ---------- */
let dragRow = -1
let dragStartX = 0
let dragLastX = 0
let dragLastT = 0
let dragMoved = false
let suppressClick = false

function onDown(r: number, e: PointerEvent) {
  if (reduced.value || !finePointer || e.pointerType === 'touch' || e.button !== 0) return
  const s = states[r]!
  s.dragging = true
  dragRow = r
  dragMoved = false
  suppressClick = false
  dragStartX = dragLastX = e.clientX
  dragLastT = performance.now()
  s.dragV = 0
  rowEls[r]?.setPointerCapture(e.pointerId)
  rowEls[r]?.classList.add('gal-grabbing')
}

function onMove(e: PointerEvent) {
  if (dragRow < 0) return
  const s = states[dragRow]!
  if (!s.dragging) return
  const now = performance.now()
  const dt = Math.max((now - dragLastT) / 1000, 1 / 240)
  const dx = e.clientX - dragLastX
  s.dragOff += dx
  s.dragV = 0.7 * s.dragV + 0.3 * (dx / dt)
  if (s.dragV > 2400) s.dragV = 2400
  else if (s.dragV < -2400) s.dragV = -2400
  dragLastX = e.clientX
  dragLastT = now
  if (Math.abs(e.clientX - dragStartX) > 5) dragMoved = true
}

function onUp(e: PointerEvent) {
  if (dragRow < 0) return
  const s = states[dragRow]!
  if (!s.dragging) return
  s.dragging = false
  if (Math.abs(s.dragV) < 30) { s.dragOff = 0; s.dragV = 0 }
  rowEls[dragRow]?.releasePointerCapture?.(e.pointerId)
  rowEls[dragRow]?.classList.remove('gal-grabbing')
  suppressClick = dragMoved
  dragRow = -1
}

// Klik yang mengikuti seretan nyata tidak boleh bocor ke navigasi klik deck
// (klik kiri deck = slide sebelumnya). Klik tanpa seretan tetap seperti semula.
function onRowClick(e: MouseEvent) {
  if (suppressClick) {
    e.stopPropagation()
    e.preventDefault()
  }
  suppressClick = false
}

/* ---------- paralaks kursor global (B8) ---------- */
function onWinMove(e: PointerEvent) {
  if (reduced.value || e.pointerType === 'touch') return
  const n = (e.clientX / window.innerWidth) * 2 - 1
  states[0]!.parTarget = -n * 5
  states[1]!.parTarget = -n * 9
}

let io: IntersectionObserver | null = null
let ro: ResizeObserver | null = null

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  finePointer = window.matchMedia('(pointer: fine)').matches
  measure()
  // Transisi masuk deck menggeser stage beberapa ratus milidetik; ukur ulang
  // setelah transisi tuntas supaya offset kartu akurat.
  timers.push(setTimeout(measure, 400))
  timers.push(setTimeout(measure, 900))
  document.fonts?.ready.then(() => measure()).catch(() => {})
  if (reduced.value) return

  for (let r = 0; r < 2; r++) {
    const row = rowEls[r]!
    row.addEventListener('pointerdown', e => onDown(r, e))
    row.addEventListener('pointermove', onMove)
    row.addEventListener('pointerup', onUp)
    row.addEventListener('pointercancel', onUp)
    row.addEventListener('pointerenter', () => { states[r]!.hovered = true })
    row.addEventListener('pointerleave', () => { states[r]!.hovered = false })
    row.addEventListener('click', onRowClick)
  }
  window.addEventListener('pointermove', onWinMove, { passive: true })

  // A4: masuk per kartu, geser dan redup, jarak 35ms antar kartu unik (kembar
  // masuk bersamaan), tuntas di bawah 1 detik sejak slide masuk.
  for (let r = 0; r < 2; r++) {
    const len = r === 0 ? rowA.length : rowB.length
    const step = r === 0 ? 0.035 : 0.03
    const targets = cardEls[r]!.map(el => el?.firstElementChild).filter(Boolean) as Element[]
    gsap.from(targets, {
      opacity: 0,
      y: 22,
      duration: 0.42,
      delay: 0.06,
      ease: 'power2.out',
      stagger: (i: number) => (i % len) * step,
      clearProps: 'transform,opacity',
    })
  }

  // RAF hanya berjalan selama slide terlihat; tanpa itu putaran di latar bocor.
  if (rootEl.value) {
    io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting
      if (visible) start()
      else stop()
    }, { threshold: 0 })
    io.observe(rootEl.value)
    ro = new ResizeObserver(() => measure())
    ro.observe(rootEl.value)
  } else {
    visible = true
    start()
  }
})

onUnmounted(() => {
  stop()
  io?.disconnect()
  ro?.disconnect()
  timers.forEach(t => clearTimeout(t))
  window.removeEventListener('pointermove', onWinMove)
})
</script>

<template>
  <DeckShell section="galeri">
    <div ref="rootEl" class="flex min-h-0 flex-1 flex-col justify-center gap-2 overflow-hidden">
      <div :ref="el => setRow(0, el)" class="gal-row" aria-label="Galeri riset, produksi, dan produk">
        <div :ref="el => setTrack(0, el)" class="gal-track">
          <figure
            v-for="(c, i) in deckA"
            :key="`a-${i}`"
            :ref="el => setCard(0, i, el)"
            :aria-hidden="c.dup"
            class="gal-card shrink-0"
            :class="[widthClass(c), c.hero ? 'gal-hero' : '']"
            :style="cardVars(c, i, rowA.length)"
          >
            <div class="gal-entrance">
              <div class="gal-float">
                <div class="gal-media">
                  <div class="gal-clip">
                    <img :src="c.src" :alt="c.dup ? '' : c.alt" loading="lazy" decoding="async" draggable="false" class="gal-img" />
                  </div>
                  <figcaption class="mt-1.5 line-clamp-2 min-h-11 font-headline text-base font-bold leading-snug text-gm-ink">{{ c.caption }}</figcaption>
                  <span v-if="c.phase" class="gal-chip">{{ c.phase }}</span>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div :ref="el => setRow(1, el)" class="gal-row" aria-label="Galeri lapangan dan kemitraan">
        <div :ref="el => setTrack(1, el)" class="gal-track">
          <figure
            v-for="(c, i) in deckB"
            :key="`b-${i}`"
            :ref="el => setCard(1, i, el)"
            :aria-hidden="c.dup"
            class="gal-card shrink-0"
            :class="[widthClass(c), c.hero ? 'gal-hero' : '']"
            :style="cardVars(c, i, rowB.length)"
          >
            <div class="gal-entrance">
              <div class="gal-float">
                <div class="gal-media">
                  <div class="gal-clip">
                    <img :src="c.src" :alt="c.dup ? '' : c.alt" loading="lazy" decoding="async" draggable="false" class="gal-img" />
                  </div>
                  <figcaption class="mt-1.5 line-clamp-2 min-h-11 font-headline text-base font-bold leading-snug text-gm-ink">{{ c.caption }}</figcaption>
                  <span v-if="c.phase" class="gal-chip">{{ c.phase }}</span>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <Reveal :delay="0.2" class="w-full">
        <p class="flex items-center justify-start gap-2 text-left font-headline text-base font-bold text-gm-muted">
          <Icon name="lucide:infinity" class="size-5 shrink-0 text-gm-primary" />
          Galeri berputar otomatis. Arahkan kursor untuk menjeda sejenak, seret lajur untuk menggeser.
        </p>
      </Reveal>
    </div>
  </DeckShell>
</template>

<style scoped>
.gal-row {
  overflow-x: clip;
  overflow-y: visible;
  cursor: grab;
  mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
  /* Potongan topeng dibatalkan ke luar kotak: gerak mengambang dan masuk
     kartu tidak boleh terpotong tepi baris, hanya redup di kiri dan kanan. */
  mask-clip: no-clip;
}
/* B7: silinder perspektif. `perspective()` ditaruh sebagai fungsi di
   transform tiap kartu, bukan `perspective` + `preserve-3d` pada induk:
   kombinasi itu merusak hit-testing :hover di Chromium (kartu yang bergerak
   tiap bingkai tak pernah tersorot kursor). Tiap kartu tetap memakai titik
   hilang sendiri, yang pada rotasi ±20° tampil nyaris sama. */
.gal-row.gal-grabbing {
  cursor: grabbing;
}
.gal-track {
  display: flex;
  width: max-content;
  position: relative;
  align-items: flex-start;
}
.gal-track > .gal-card {
  margin-right: 0.75rem;
}
.gal-card {
  text-align: left;
}
.gal-float {
  animation: gal-floaty 5s ease-in-out infinite;
  animation-delay: calc(var(--ph, 0) * 1s);
  transition: opacity 300ms ease;
}
@keyframes gal-floaty {
  0%, 100% { transform: translateY(4px); }
  50% { transform: translateY(-4px); }
}
/* A3 + A5: miring sebaran bertahan saat disorot; hanya skala, angkat, dan
   bayangan yang naik. */
.gal-media {
  border: 1px solid var(--color-gm-line);
  border-radius: 1rem;
  background: #ffffff;
  padding: 0.5rem;
  box-shadow: var(--sh, 0 8px 22px rgba(26, 28, 28, 0.1));
  transform: rotate(var(--tilt, 0deg));
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms ease;
}
.gal-card:hover .gal-media {
  transform: rotate(var(--tilt, 0deg)) translateY(-4px) scale(1.04);
  box-shadow: 0 18px 36px rgba(26, 28, 28, 0.18);
}
/* A5: kartu yang tidak disorot meredup samar lewat :has() murni CSS. */
.gal-row:has(.gal-card:hover) .gal-card:not(:hover) .gal-float {
  opacity: 0.9;
}
.gal-clip {
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid var(--color-gm-line);
}
.gal-img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  animation: gal-ken-a 14s ease-in-out infinite alternate;
}
/* A1: arah hembus bergantian mengikuti paritas; kartu kembar sama arah. */
.gal-card:nth-child(even) .gal-img {
  animation-name: gal-ken-b;
}
@keyframes gal-ken-a {
  from { transform: scale(1) translate(0, 0); }
  to { transform: scale(1.08) translate(-1.6%, -1%); }
}
@keyframes gal-ken-b {
  from { transform: scale(1) translate(0, 0); }
  to { transform: scale(1.08) translate(1.6%, 1%); }
}
/* A6: chip fase pil di bawah keterangan, hanya bila fase dapat diturunkan. */
.gal-chip {
  margin-top: 0.25rem;
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid var(--color-gm-line);
  background: var(--color-gm-mist);
  padding: 0.125rem 0.625rem;
  font-family: var(--font-headline);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--color-gm-muted);
}
@media (prefers-reduced-motion: reduce) {
  .gal-float,
  .gal-img {
    animation: none !important;
  }
}
</style>
