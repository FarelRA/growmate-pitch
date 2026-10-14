<script setup lang="ts">
import gsap from 'gsap'
import { usePreferredReducedMotion, useTransition } from '@vueuse/core'

// Matriks 4 jalur x 3 horizon. Frasa pendek agar muat tanpa gulir. Semua fakta dan angka dipertahankan.
const cols = [
  {
    icon: 'lucide:map', title: 'Ekspansi Pasar',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Bantul: referral, studi kasus. DIY: DKPP, komunitas, sekolah. Luar DIY: Pods online plus demo stan.' },
      { h: 'Menengah • 2-5 thn', t: 'Jateng Jatim: reseller. Jabodetabek Bandung: marketplace. Luar Jawa: pilot pemda plus pendampingan intensif terjadwal.' },
      { h: 'Panjang • >5 thn', t: 'Luar Jawa: distributor. B2B greenhouse, UMKM. Ekspor ASEAN tropis plus layanan purna jual bergaransi resmi.' },
    ],
  },
  {
    icon: 'lucide:flask-conical', title: 'Inovasi Lanjutan',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Validasi 12 mangsa, data lokal. Mode Liburan. Hemat air, nutrisi, energi plus panduan harian bergambar praktis.' },
      { h: 'Menengah • 2-5 thn', t: 'Mangsa Engine 2.0. Anomali iklim. Dosis fase tumbuh. Deteksi hama plus rekomendasi harian.' },
      { h: 'Panjang • >5 thn', t: 'Farm multi-zona komersial. Prediksi panen, jadwal tanam. Kalender multidaerah plus kurikulum tani lokal terapan.' },
    ],
  },
  {
    icon: 'lucide:cpu', title: 'Inovasi Teknologi',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Telemetri cloud, latih Floral. Mode Liburan firmware. Dasbor hemat plus pembaruan berkala otomatis terjadwal.' },
      { h: 'Menengah • 2-5 thn', t: 'API BMKG, model cloud. Dosing EC pH presisi. ESP32-CAM hama plus notifikasi WA instan harian.' },
      { h: 'Panjang • >5 thn', t: 'Gateway MQTT, edge AI offline. ML panen multimusim. Kalender multidaerah plus pendampingan ahli lokal terjadwal rutin.' },
    ],
  },
  {
    icon: 'lucide:trending-up', title: 'Pertumbuhan Usaha',
    rows: [
      { h: 'Pendek • 1-12 bln', t: '8 ke 12 unit per bulan. Rp201 jt (3,4x). 95 AI. Margin 28 persen plus langganan AI bulanan terjangkau untuk petani.' },
      { h: 'Menengah • 2-5 thn', t: '20 ke 100 per bulan, 2.390 total. Rp175 jt per bulan. 1.459 AI plus paket langganan lanjutan tahunan hemat untuk reseller.' },
      { h: 'Panjang • >5 thn', t: '10.000 unit tahun ke-9. Rp500 jt per bulan. 6.100 AI plus unit refurbish terjadwal regional berkala.' },
    ],
  },
]

// Lencana horizon untuk setiap baris. H adalah singkatan horizon.
const horizonBadge = ['H1', 'H2', 'H3']

// Angka pahlawan pada pita lintasan menghitung naik ke 10.000.
// Angka lain pada pita dan matriks tampil sebagai teks statis.
const reduced = usePreferredReducedMotion()
const noMotion = computed(() => reduced.value === 'reduce')
const aimLong = ref(0)
const tLong = useTransition(aimLong, { duration: 1500 })
const heroCount = computed(() => Math.round(tLong.value).toLocaleString('id-ID'))

const root = ref<HTMLElement | null>(null)
const skyLine = ref<SVGPathElement | null>(null)
const ready = ref(false)
let ctx: gsap.Context | null = null

onMounted(() => {
  ready.value = true
  if (noMotion.value) {
    aimLong.value = 10000
    return
  }
  window.setTimeout(() => { aimLong.value = 10000 }, 400)
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    const line = skyLine.value
    if (line) {
      const len = line.getTotalLength()
      gsap.set(line, { strokeDasharray: len, strokeDashoffset: len })
      tl.to(line, { strokeDashoffset: 0, duration: 0.9 }, 0.1)
    }
    tl.from('.scale-sun', { scale: 0, transformOrigin: '50% 50%', duration: 0.6 }, 0.05)
    tl.from('.scale-col', { y: 26, opacity: 0, duration: 0.55, stagger: 0.09 }, 0.15)
    tl.from('.scale-row', { y: 14, opacity: 0, duration: 0.4, stagger: 0.05 }, 0.3)
    tl.fromTo('.scale-shine', { xPercent: -160 }, { xPercent: 340, duration: 0.9, ease: 'power1.inOut', stagger: 0.12 }, 0.55)
    tl.from('.scale-flag', { scale: 0, transformOrigin: '0% 100%', duration: 0.5, ease: 'back.out(2)' }, 0.75)
  }, root.value ?? undefined)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <DeckShell section="scaleup">
    <section ref="root" class="flex min-h-full w-full flex-1 flex-col justify-between gap-1.5 text-left">
      <!-- Pita langit lebar. Matahari bersinar, awan hanyut, bintang data berkelip, -->
      <!-- pesawat penarik spanduk melintas tiap 9 detik menuju puncak berbendera. -->
      <div class="relative overflow-hidden rounded-2xl border border-gm-line">
        <svg
          viewBox="0 0 1200 96"
          preserveAspectRatio="xMidYMid slice"
          class="block h-12 w-full sm:h-14 md:h-[60px]"
          role="img"
          aria-label="Langit pendakian GrowMate dari Bantul menuju puncak ketahanan pangan"
        >
          <defs>
            <linearGradient id="scaleSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#d9e9f2" />
              <stop offset="0.62" stop-color="#eef4ec" />
              <stop offset="1" stop-color="#e9f4ea" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1200" height="96" fill="url(#scaleSky)" />
          <!-- Partikel bintang data yang berkelip -->
          <g fill="#2471a3">
            <circle class="sky-star" cx="240" cy="18" r="2.5" style="animation-delay: 0s" />
            <circle class="sky-star" cx="330" cy="34" r="2" style="animation-delay: 0.5s" />
            <circle class="sky-star" cx="470" cy="14" r="2.8" style="animation-delay: 1.1s" />
            <circle class="sky-star" cx="590" cy="26" r="2" style="animation-delay: 0.3s" />
            <circle class="sky-star" cx="700" cy="12" r="2.5" style="animation-delay: 1.6s" />
            <circle class="sky-star" cx="830" cy="22" r="2" style="animation-delay: 0.9s" />
            <circle class="sky-star" cx="960" cy="14" r="2.8" style="animation-delay: 1.9s" />
            <circle class="sky-star" cx="1120" cy="52" r="2.3" style="animation-delay: 0.7s" />
          </g>
          <!-- Matahari dengan sinar berputar -->
          <g class="scale-sun">
            <g class="sky-rays" stroke="#b7791f" stroke-width="3.5" stroke-linecap="round">
              <line x1="90" y1="9" x2="90" y2="19" />
              <line x1="90" y1="69" x2="90" y2="79" />
              <line x1="55" y1="44" x2="65" y2="44" />
              <line x1="115" y1="44" x2="125" y2="44" />
              <line x1="64" y1="18" x2="71" y2="25" />
              <line x1="109" y1="63" x2="116" y2="70" />
              <line x1="116" y1="18" x2="109" y2="25" />
              <line x1="71" y1="63" x2="64" y2="70" />
            </g>
            <circle cx="90" cy="44" r="17" fill="#f4c430" stroke="#b7791f" stroke-width="3" />
            <circle cx="84" cy="38" r="3.5" fill="#fff7dd" opacity="0.9" />
          </g>
          <!-- Tiga awan yang hanyut berulang -->
          <g class="sky-cloud" style="animation-duration: 11s" fill="#ffffff" opacity="0.95">
            <ellipse cx="300" cy="30" rx="32" ry="12" />
            <ellipse cx="324" cy="24" rx="22" ry="11" />
            <ellipse cx="278" cy="24" rx="17" ry="9" />
          </g>
          <g class="sky-cloud" style="animation-duration: 15s; animation-delay: 1.2s" fill="#ffffff" opacity="0.9">
            <ellipse cx="640" cy="22" rx="37" ry="13" />
            <ellipse cx="668" cy="16" rx="25" ry="11" />
            <ellipse cx="614" cy="16" rx="19" ry="10" />
          </g>
          <g class="sky-cloud" style="animation-duration: 19s; animation-delay: 2.1s" fill="#ffffff" opacity="0.85">
            <ellipse cx="970" cy="32" rx="30" ry="11" />
            <ellipse cx="992" cy="26" rx="20" ry="10" />
            <ellipse cx="950" cy="26" rx="16" ry="9" />
          </g>
          <!-- Lahan hijau dan gunung pendakian -->
          <rect x="0" y="78" width="1200" height="18" fill="#d9e8da" />
          <g stroke="#9fbfA6" stroke-width="2" opacity="0.8">
            <line x1="60" y1="86" x2="700" y2="86" />
            <line x1="60" y1="91" x2="700" y2="91" />
          </g>
          <polygon points="740,78 880,34 1020,78" fill="#bcd6bf" />
          <polygon points="900,78 1052,22 1200,78" fill="#8fb695" />
          <polygon points="1032,32 1052,22 1072,32 1062,38 1042,38" fill="#ffffff" />
          <line x1="1052" y1="22" x2="1052" y2="8" stroke="#1a1c1c" stroke-width="2.5" />
          <polygon class="scale-flag sky-flag" points="1052,8 1070,12 1052,16" fill="#006e1c" />
          <!-- Garis daki yang tergambar saat masuk -->
          <path
            ref="skyLine"
            d="M 40 84 C 300 84 430 72 620 64 S 900 46 1044 30"
            fill="none"
            stroke="#006e1c"
            stroke-width="3"
            stroke-linecap="round"
            opacity="0.85"
          />
          <g fill="#006e1c" opacity="0.9">
            <circle cx="40" cy="84" r="4" />
            <circle cx="430" cy="70" r="4" />
            <circle cx="730" cy="55" r="4" />
          </g>
          <!-- Pesawat kecil penarik spanduk GrowMate melintas tiap 9 detik -->
          <g v-if="!ready || !noMotion">
            <animateMotion dur="9s" repeatCount="indefinite" path="M -190 30 L 1390 34" />
            <line x1="-8" y1="0" x2="-62" y2="0" stroke="#1a1c1c" stroke-width="1.5" />
            <rect x="-170" y="-13" width="108" height="26" rx="10" fill="#ffffff" stroke="#006e1c" stroke-width="2" />
            <text x="-116" y="6" text-anchor="middle" font-size="19" font-weight="800" fill="#006e1c" font-family="Manrope, sans-serif">GrowMate</text>
            <polygon points="0,-5 19,0 0,5 5,0" fill="#c0392b" />
            <polygon points="-2,-4 -12,-11 -7,-2" fill="#2471a3" />
            <polygon points="-2,4 -12,11 -7,2" fill="#2471a3" />
          </g>
          <g v-else>
            <line x1="1044" y1="34" x2="1094" y2="34" stroke="#1a1c1c" stroke-width="1.5" />
            <rect x="1094" y="21" width="108" height="26" rx="10" fill="#ffffff" stroke="#006e1c" stroke-width="2" />
            <text x="1148" y="39" text-anchor="middle" font-size="19" font-weight="800" fill="#006e1c" font-family="Manrope, sans-serif">GrowMate</text>
            <polygon points="1044,29 1063,34 1044,39 1049,34" fill="#c0392b" />
          </g>
        </svg>
        <div class="scale-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden="true" />
      </div>

      <!-- Pita lintasan angka. Angka pahlawan menghitung naik, sisanya teks statis. -->
      <div class="relative flex flex-wrap items-center justify-start gap-x-2 gap-y-1 overflow-hidden rounded-2xl border border-gm-line bg-white px-3 py-1 text-left">
        <span class="flex shrink-0 items-center justify-start gap-1.5">
          <Icon name="lucide:flag" class="scale-flag size-5 text-gm-primary" />
          <span class="font-headline text-lg font-extrabold uppercase tracking-wide text-gm-primary">Lintasan angka</span>
        </span>
        <span class="text-base font-bold text-gm-ink">8 ke 12 unit per bulan</span>
        <span aria-hidden="true" class="text-base font-bold text-gm-primary">•</span>
        <span class="text-base font-bold text-gm-ink">2.390 kumulatif</span>
        <span aria-hidden="true" class="text-base font-bold text-gm-primary">•</span>
        <span class="text-base font-bold text-gm-ink"><strong class="font-headline font-extrabold tabular-nums text-gm-primary">{{ heroCount }}</strong> unit tahun ke-9</span>
        <span aria-hidden="true" class="text-base font-bold text-gm-primary">•</span>
        <span class="text-base font-bold text-gm-ink">Rp201 jt</span>
        <span aria-hidden="true" class="text-base font-bold text-gm-primary">•</span>
        <span class="text-base font-bold text-gm-ink">Rp500 jt per bulan</span>
        <div class="scale-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-gm-mist/80 to-transparent" aria-hidden="true" />
      </div>

      <!-- Matriks 4 jalur x 3 horizon. Warna menanjak makin gelap ke puncak. -->
      <div class="grid w-full grid-cols-1 gap-1.5 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="(c, i) in cols"
          :key="c.title"
          class="scale-col flex h-full min-w-0 flex-col rounded-2xl border-2 border-gm-line bg-white p-2.5 text-left"
        >
          <div class="flex min-w-0 items-center justify-start gap-2">
            <span class="grid size-8 shrink-0 place-items-center rounded-lg bg-gm-mist">
              <Icon :name="c.icon" class="size-5 text-gm-primary" />
            </span>
            <h2 class="min-w-0 flex-1 font-headline text-lg font-extrabold leading-tight text-gm-ink">{{ c.title }}</h2>
            <span class="shrink-0 rounded-full bg-gm-ink px-2.5 py-1 font-headline text-base font-extrabold tabular-nums text-white">J{{ i + 1 }}</span>
          </div>
          <div class="mt-1.5 flex flex-1 flex-col gap-1">
            <div
              v-for="(r, j) in c.rows"
              :key="r.h"
              class="scale-row relative min-w-0 overflow-hidden rounded-xl border px-2 py-1"
              :class="j === 0 ? 'border-gm-line bg-gm-panel' : j === 1 ? 'border-gm-primary/30 bg-gm-mist/60' : 'border-gm-deep bg-gm-primary'"
            >
              <div class="flex min-w-0 items-center justify-start gap-1.5">
                <span
                  class="shrink-0 rounded-md px-3 py-1.5 font-headline text-base font-extrabold tabular-nums"
                  :class="j === 2 ? 'bg-white/30 font-extrabold text-white' : 'bg-gm-primary text-white'"
                >{{ horizonBadge[j] }}</span>
                <div
                  class="min-w-0 font-headline text-base font-extrabold uppercase tracking-wide"
                  :class="j === 2 ? 'text-white' : 'text-gm-primary'"
                >{{ r.h }}</div>
              </div>
              <div
                class="mt-0.5 min-w-0 break-words text-base font-medium leading-snug"
                :class="j === 2 ? 'font-bold text-white' : 'text-gm-ink'"
              >{{ r.t }}</div>
              <div v-if="j === 2" class="scale-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </article>
      </div>
    </section>
  </DeckShell>
</template>

<style scoped>
@keyframes scale-spin {
  to { transform: rotate(360deg); }
}
@keyframes scale-drift {
  0%, 100% { transform: translateX(-18px); }
  50% { transform: translateX(18px); }
}
@keyframes scale-twinkle {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
}
@keyframes scale-flag {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.18); }
}
.sky-rays {
  transform-box: fill-box;
  transform-origin: center;
  animation: scale-spin 26s linear infinite;
}
.sky-cloud {
  animation-name: scale-drift;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.sky-star {
  animation: scale-twinkle 2.6s ease-in-out infinite;
}
.sky-flag {
  transform-box: fill-box;
  transform-origin: left bottom;
  animation: scale-flag 1.8s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .sky-rays, .sky-cloud, .sky-star, .sky-flag {
    animation: none !important;
  }
}
</style>
