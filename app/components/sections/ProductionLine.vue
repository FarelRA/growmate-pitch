<script setup lang="ts">
const stages = [
  { n: 'Tahap 1', title: 'Validasi Konsep', desc: 'Sirkuit terbuka di breadboard. Satu sensor statis dan aktuasi relai manual.', icon: 'lucide:circuit-board' },
  { n: 'Tahap 2', title: 'Integrasi Modular', desc: 'PCB permanen dalam housing awal. Jaringan baca meluas ke 6 titik sensor.', icon: 'lucide:cpu' },
  { n: 'Tahap 3', title: 'Produk Final', desc: 'Offline fallback, UI dan AI terintegrasi. Siap diproduksi massal.', icon: 'lucide:package-check' },
]
const flow = ['Brainstorming', 'Validasi pasar', 'Kode', 'Desain 3D', 'Solder', 'Rakit', 'Flashing', 'QC', 'Kemas', 'Kirim']
const shots = [
  { src: '/photos/prod-solder.webp', alt: 'Penyolderan komponen GrowMate' },
  { src: '/photos/prod-printer.webp', alt: 'Cetak bodi GrowMate Pods dengan printer 3D' },
  { src: '/photos/prod-bench.webp', alt: 'Purwarupa breadboard tahap validasi konsep' },
  { src: '/photos/prod-alpha.webp', alt: 'Purwarupa modular tahap integrasi alpha' },
]
</script>

<template>
  <DeckShell section="produksi">
    <DeckSplitPanel>
      <template #primary>
        <div class="flex w-full flex-col justify-center gap-2.5">
          <Reveal v-for="(s, i) in stages" :key="s.n" :delay="i * 0.07" class="w-full">
            <div class="flex w-full items-center justify-start gap-3 rounded-3xl border-2 border-gm-line bg-white p-3 text-left md:p-3.5">
              <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-gm-mist md:size-12">
                <Icon :name="s.icon" class="size-6 text-gm-primary md:size-7" />
              </span>
              <div class="flex-1">
                <div class="font-headline text-base font-extrabold text-gm-ink md:text-lg">
                  {{ s.n }} • {{ s.title }}
                </div>
                <div class="text-sm text-gm-muted">{{ s.desc }}</div>
              </div>
            </div>
          </Reveal>
          <Reveal :delay="0.24" class="w-full">
            <div class="flex w-full flex-wrap items-center justify-start gap-1.5 rounded-3xl bg-gm-ink p-3 text-left md:p-3.5">
              <span
                v-for="(f, i) in flow"
                :key="f"
                class="flex items-center gap-1.5 rounded-full bg-white/[0.08] px-2.5 py-1 text-xs font-bold text-white md:text-[13px]"
              >
                <span class="font-mono text-emerald-300">{{ i + 1 }}</span> {{ f }}
              </span>
            </div>
          </Reveal>
        </div>
      </template>
      <template #secondary>
        <Reveal class="w-full">
          <div class="grid w-full grid-cols-2 gap-2.5">
            <UiPhotoFigure
              v-for="s in shots"
              :key="s.src"
              :src="s.src"
              :alt="s.alt"
              ratio="4 / 3"
            />
          </div>
        </Reveal>
        <Reveal :delay="0.14" class="w-full">
          <UiCalloutBanner icon="lucide:recycle" tone="brand" class="mt-2.5 md:mt-3">
            Lolos QC lalu dikemas kardus daur ulang, honeycomb, dan jerami. Tanpa plastik.
          </UiCalloutBanner>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
