<script setup lang="ts">
import gsap from 'gsap'
import { usePreferredReducedMotion, useTransition } from '@vueuse/core'

// Matriks 4 jalur x 3 horizon. Teks dipertahankan sama persis.
// Baris ketiga memakai kartu gelap sebagai puncak pendakian.
const cols = [
  {
    icon: 'lucide:map', title: 'Ekspansi Pasar',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Kuatkan Bantul via referral dan studi kasus. Meluas ke DIY via DKPP, komunitas, sekolah. Uji luar DIY via Pods online.' },
      { h: 'Menengah • 2-5 thn', t: 'Jateng dan Jatim via reseller. Jabodetabek dan Bandung via marketplace. Pilot Add-On luar Jawa via pemda.' },
      { h: 'Panjang • >5 thn', t: 'Sentra luar Jawa via distributor. Segmen B2B greenhouse dan UMKM. Pilot ekspor ASEAN tropis.' },
    ],
  },
  {
    icon: 'lucide:flask-conical', title: 'Inovasi Lanjutan',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Validasi 12 mangsa penuh dan data tanaman lokal. Mode Liburan hemat. Laporan hemat air, nutrisi, energi.' },
      { h: 'Menengah • 2-5 thn', t: 'Mangsa Engine 2.0: prediksi anomali iklim. Dosis nutrisi fase tumbuh. Deteksi dini hama penyakit.' },
      { h: 'Panjang • >5 thn', t: 'GrowMate Farm multi-zona komersial. Prediksi panen dan jadwal tanam. Kalender tani multi-daerah.' },
    ],
  },
  {
    icon: 'lucide:cpu', title: 'Inovasi Teknologi',
    rows: [
      { h: 'Pendek • 1-12 bln', t: 'Telemetri cloud dan latih ulang Floral. Mode Liburan di firmware. Dasbor laporan hemat.' },
      { h: 'Menengah • 2-5 thn', t: 'API cuaca BMKG dan model cloud. Dosing EC dan pH presisi. ESP32-CAM deteksi hama.' },
      { h: 'Panjang • >5 thn', t: 'Gateway MQTT multi-lokasi dan edge AI offline. ML panen multi-musim. Kalender daerah plus ahli lokal.' },
    ],
  },
  {
    icon: 'lucide:trending-up', title: 'Pertumbuhan Usaha',
    rows: [
      { h: 'Pendek • 1-12 bln', t: '8 ke 12 unit per bulan. Pendapatan ±Rp201 jt (3,4x). 95 pelanggan AI. Margin ≥28%.' },
      { h: 'Menengah • 2-5 thn', t: '20 ke 100 unit per bulan (2.390 kumulatif). ±Rp175 jt per bulan. 1.459 AI. Badan usaha dan sertifikasi.' },
      { h: 'Panjang • >5 thn', t: '≥10.000 unit tahun ke-9. ±Rp500 jt per bulan. 6.100 AI. Refurbish regional dan dataset tropis.' },
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
    <section ref="root" class="flex w-full flex-1 flex-col gap-2 text-left md:gap-2.5">
      <!-- Pita langit ramping. Matahari bersinar, awan hanyut, bintang data berkelip, -->
      <!-- pesawat penarik spanduk melintas tiap 9 detik menuju puncak berbendera. -->
      <div class="relative overflow-hidden rounded-2xl border border-gm-line">
        <svg
          viewBox="0 0 1200 96"
          preserveAspectRatio="xMidYMid slice"
          class="block h-12 w-full sm:h-16 md:h-[72px]"
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
            <circle class="sky-star" cx="240" cy="18" r="2" style="animation-delay: 0s" />
            <circle class="sky-star" cx="330" cy="34" r="1.6" style="animation-delay: 0.5s" />
            <circle class="sky-star" cx="470" cy="14" r="2.2" style="animation-delay: 1.1s" />
            <circle class="sky-star" cx="590" cy="26" r="1.6" style="animation-delay: 0.3s" />
            <circle class="sky-star" cx="700" cy="12" r="2" style="animation-delay: 1.6s" />
            <circle class="sky-star" cx="830" cy="22" r="1.6" style="animation-delay: 0.9s" />
            <circle class="sky-star" cx="960" cy="14" r="2.2" style="animation-delay: 1.9s" />
            <circle class="sky-star" cx="1120" cy="52" r="1.8" style="animation-delay: 0.7s" />
          </g>
          <!-- Matahari dengan sinar berputar -->
          <g class="scale-sun">
            <g class="sky-rays" stroke="#b7791f" stroke-width="3" stroke-linecap="round">
              <line x1="90" y1="14" x2="90" y2="22" />
              <line x1="90" y1="66" x2="90" y2="74" />
              <line x1="60" y1="44" x2="68" y2="44" />
              <line x1="112" y1="44" x2="120" y2="44" />
              <line x1="69" y1="23" x2="74" y2="28" />
              <line x1="106" y1="60" x2="111" y2="65" />
              <line x1="111" y1="23" x2="106" y2="28" />
              <line x1="74" y1="60" x2="69" y2="65" />
            </g>
            <circle cx="90" cy="44" r="14" fill="#f4c430" stroke="#b7791f" stroke-width="3" />
            <circle cx="85" cy="40" r="3" fill="#fff7dd" opacity="0.9" />
          </g>
          <!-- Tiga awan yang hanyut berulang -->
          <g class="sky-cloud" style="animation-duration: 11s" fill="#ffffff" opacity="0.95">
            <ellipse cx="300" cy="30" rx="26" ry="10" />
            <ellipse cx="320" cy="25" rx="18" ry="9" />
            <ellipse cx="282" cy="25" rx="14" ry="7" />
          </g>
          <g class="sky-cloud" style="animation-duration: 15s; animation-delay: 1.2s" fill="#ffffff" opacity="0.9">
            <ellipse cx="640" cy="22" rx="30" ry="11" />
            <ellipse cx="664" cy="17" rx="20" ry="9" />
            <ellipse cx="618" cy="17" rx="15" ry="8" />
          </g>
          <g class="sky-cloud" style="animation-duration: 19s; animation-delay: 2.1s" fill="#ffffff" opacity="0.85">
            <ellipse cx="970" cy="32" rx="24" ry="9" />
            <ellipse cx="988" cy="27" rx="16" ry="8" />
            <ellipse cx="954" cy="27" rx="13" ry="7" />
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
            stroke-width="2.5"
            stroke-linecap="round"
            opacity="0.85"
          />
          <g fill="#006e1c" opacity="0.9">
            <circle cx="40" cy="84" r="3.5" />
            <circle cx="430" cy="70" r="3.5" />
            <circle cx="730" cy="55" r="3.5" />
          </g>
          <!-- Pesawat kecil penarik spanduk GrowMate melintas tiap 9 detik -->
          <g v-if="!ready || !noMotion">
            <animateMotion dur="9s" repeatCount="indefinite" path="M -170 30 L 1370 34" />
            <line x1="-8" y1="0" x2="-58" y2="0" stroke="#1a1c1c" stroke-width="1.5" />
            <rect x="-122" y="-9" width="64" height="18" rx="9" fill="#ffffff" stroke="#006e1c" stroke-width="2" />
            <text x="-90" y="4" text-anchor="middle" font-size="11" font-weight="800" fill="#006e1c" font-family="Manrope, sans-serif">GrowMate</text>
            <polygon points="0,-4 16,0 0,4 4,0" fill="#c0392b" />
            <polygon points="-2,-3 -10,-9 -6,-2" fill="#2471a3" />
            <polygon points="-2,3 -10,9 -6,2" fill="#2471a3" />
          </g>
          <g v-else>
            <line x1="1052" y1="34" x2="1102" y2="34" stroke="#1a1c1c" stroke-width="1.5" />
            <rect x="1102" y="25" width="64" height="18" rx="9" fill="#ffffff" stroke="#006e1c" stroke-width="2" />
            <text x="1134" y="38" text-anchor="middle" font-size="11" font-weight="800" fill="#006e1c" font-family="Manrope, sans-serif">GrowMate</text>
            <polygon points="1052,30 1068,34 1052,38 1056,34" fill="#c0392b" />
          </g>
        </svg>
        <div class="scale-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden="true" />
      </div>

      <!-- Pita lintasan angka. Angka pahlawan menghitung naik, sisanya teks statis. -->
      <div class="relative flex flex-wrap items-center justify-start gap-x-2 gap-y-1 overflow-hidden rounded-2xl border border-gm-line bg-white px-2.5 py-1.5 text-left md:px-3">
        <span class="flex shrink-0 items-center justify-start gap-1.5">
          <Icon name="lucide:flag" class="scale-flag size-4 text-gm-primary" />
          <span class="font-headline text-[11px] font-extrabold uppercase tracking-wide text-gm-primary md:text-xs">Lintasan angka</span>
        </span>
        <span class="text-[11px] font-semibold text-gm-ink md:text-xs">8 ke 12 unit per bulan</span>
        <span aria-hidden="true" class="text-[11px] font-bold text-gm-primary">•</span>
        <span class="text-[11px] font-semibold text-gm-ink md:text-xs">2.390 kumulatif</span>
        <span aria-hidden="true" class="text-[11px] font-bold text-gm-primary">•</span>
        <span class="text-[11px] font-semibold text-gm-ink md:text-xs"><strong class="font-headline font-extrabold tabular-nums text-gm-primary">{{ heroCount }}</strong> unit tahun ke-9</span>
        <span aria-hidden="true" class="text-[11px] font-bold text-gm-primary">•</span>
        <span class="text-[11px] font-semibold text-gm-ink md:text-xs">Rp201 jt</span>
        <span aria-hidden="true" class="text-[11px] font-bold text-gm-primary">•</span>
        <span class="text-[11px] font-semibold text-gm-ink md:text-xs">Rp500 jt per bulan</span>
        <div class="scale-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-gm-mist/80 to-transparent" aria-hidden="true" />
      </div>

      <!-- Matriks 4 jalur x 3 horizon. Warna menanjak makin gelap ke puncak. -->
      <div class="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:gap-2.5 xl:grid-cols-4">
        <article
          v-for="(c, i) in cols"
          :key="c.title"
          class="scale-col flex h-full min-w-0 flex-col rounded-2xl border-2 border-gm-line bg-white p-2 text-left md:p-2.5"
        >
          <div class="flex min-w-0 items-center justify-start gap-1.5">
            <span class="grid size-7 shrink-0 place-items-center rounded-lg bg-gm-mist">
              <Icon :name="c.icon" class="size-4 text-gm-primary" />
            </span>
            <h2 class="min-w-0 flex-1 font-headline text-xs font-extrabold leading-tight text-gm-ink md:text-sm">{{ c.title }}</h2>
            <span class="shrink-0 rounded-full bg-gm-ink px-1.5 py-0.5 font-headline text-[10px] font-extrabold tabular-nums text-white">J{{ i + 1 }}</span>
          </div>
          <div class="mt-1.5 flex flex-1 flex-col gap-1.5">
            <div
              v-for="(r, j) in c.rows"
              :key="r.h"
              class="scale-row relative min-w-0 overflow-hidden rounded-xl border px-2 py-1.5"
              :class="j === 0 ? 'border-gm-line bg-gm-panel' : j === 1 ? 'border-gm-primary/30 bg-gm-mist/60' : 'border-gm-deep bg-gm-primary'"
            >
              <div class="flex min-w-0 items-center justify-start gap-1.5">
                <span
                  class="shrink-0 rounded-md px-1.5 py-0.5 font-headline text-[10px] font-extrabold tabular-nums"
                  :class="j === 2 ? 'bg-white/20 text-white' : 'bg-gm-primary text-white'"
                >{{ horizonBadge[j] }}</span>
                <div
                  class="min-w-0 font-headline text-[10px] font-extrabold uppercase tracking-wide md:text-[11px]"
                  :class="j === 2 ? 'text-white' : 'text-gm-primary'"
                >{{ r.h }}</div>
              </div>
              <div
                class="mt-0.5 min-w-0 break-words text-[11px] leading-snug md:text-xs"
                :class="j === 2 ? 'text-white/95' : 'text-gm-ink'"
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
