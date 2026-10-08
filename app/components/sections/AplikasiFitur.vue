<script setup lang="ts">
const features = [
  { src: '/photos/app-dash.webp', alt: 'Ringkasan sensor live di aplikasi GrowMate', icon: 'lucide:gauge', title: 'Ringkasan', desc: 'Tanah, cahaya, tangki, dan jadwal tiap unit dalam satu layar.' },
  { src: '/photos/app-rawat.webp', alt: 'Rutinitas perawatan di aplikasi GrowMate', icon: 'lucide:calendar-check', title: 'Perawatan', desc: 'Rutinitas harian terpandu dari tanam sampai panen.' },
  { src: '/photos/app-pasar.webp', alt: 'Pasar perlengkapan dan panen di aplikasi GrowMate', icon: 'lucide:store', title: 'Pasar', desc: 'Produk resmi, lapak komunitas, dan studio penjual.' },
  { src: '/photos/app-komunitas.webp', alt: 'Feed komunitas pengguna di aplikasi GrowMate', icon: 'lucide:users', title: 'Komunitas', desc: 'Feed, komentar, dan papan peringkat sesama growers.' },
  { src: '/photos/app-asisten.webp', alt: 'Floral Assistant menjawab di aplikasi GrowMate', icon: 'lucide:bot', title: 'Floral Assistant', desc: 'Tanya gejala tanaman, dapat dosis dan langkah.' },
  { src: '/photos/app-tanam.webp', alt: 'Pustaka tanaman di aplikasi GrowMate', icon: 'lucide:leaf', title: 'Pustaka Tanaman', desc: 'Profil kemangi sampai Monstera per fase tumbuh.' },
]

const sel = ref(0)

function nextShot() {
  if (typeof document !== 'undefined' && document.hidden) return
  sel.value = (sel.value + 1) % features.length
}

const { pause: pauseCycle, resume: resumeCycle } = useIntervalFn(nextShot, 3000)

function selectShot(i: number) {
  sel.value = i
  pauseCycle()
  resumeCycle()
}

onMounted(resumeCycle)
onUnmounted(pauseCycle)
</script>

<template>
  <DeckShell section="aplikasi">
    <div class="flex min-h-full w-full min-w-0 flex-col justify-center gap-2 md:gap-2.5">
      <div class="grid w-full min-w-0 grid-cols-1 items-center gap-3 lg:grid-cols-12">
        <div class="mx-auto w-full min-w-0 max-w-[180px] lg:col-span-4 xl:max-w-[210px] 2xl:max-w-[230px]">
          <div class="w-full overflow-hidden rounded-[1.75rem] border-2 border-gm-ink bg-white">
            <div class="flex flex-col items-center gap-1 border-b-2 border-gm-line bg-gm-panel px-2 pb-1.5 pt-2">
              <span class="h-1.5 w-16 shrink-0 rounded-full bg-gm-ink" aria-hidden="true" />
              <span class="flex w-full min-w-0 items-center justify-start gap-1 rounded-full bg-white px-2 py-0.5 text-left">
                <Icon name="lucide:sprout" class="size-3.5 shrink-0 text-gm-primary" />
                <span class="truncate text-base font-semibold text-gm-ink">{{ features[sel]!.title }} • GrowMate App</span>
              </span>
            </div>
            <div class="p-1.5">
              <Transition name="deck" mode="out-in">
                <img
                  :key="sel"
                  :src="features[sel]!.src"
                  :alt="features[sel]!.alt"
                  class="h-auto w-full rounded-2xl border-2 border-gm-line"
                  draggable="false"
                />
              </Transition>
            </div>
          </div>
          <div class="mt-2 grid w-full grid-cols-6 gap-1.5">
            <button
              v-for="(f, i) in features"
              :key="f.src"
              type="button"
              :aria-label="`Lihat ${f.title}`"
              class="overflow-hidden rounded-lg border-2 transition-all"
              :class="i === sel ? 'border-gm-primary shadow-md' : 'border-gm-line opacity-70 hover:opacity-100'"
              @click="selectShot(i)"
            >
              <img :src="f.src" :alt="f.title" class="h-10 w-full object-cover object-top" draggable="false" />
            </button>
          </div>
        </div>
        <ol class="grid w-full min-w-0 grid-cols-1 gap-1.5 sm:grid-cols-2 lg:col-span-8">
          <li
            v-for="(f, i) in features"
            :key="f.title"
          >
            <button
              type="button"
              class="flex h-full w-full items-start justify-start gap-2.5 rounded-2xl border-2 p-2.5 text-left transition-all"
              :class="i === sel ? 'border-gm-primary bg-gm-amberbg/60 shadow-md' : 'border-gm-line bg-white'"
              @click="selectShot(i)"
            >
              <span
                class="grid size-10 shrink-0 place-items-center rounded-xl"
                :class="i === sel ? 'bg-gm-primary text-white' : 'bg-gm-mist text-gm-primary'"
              >
                <Icon :name="f.icon" class="size-5" />
              </span>
              <span class="min-w-0">
                <span class="block font-headline text-base font-extrabold leading-tight text-gm-ink">{{ i + 1 }}. {{ f.title }}</span>
                <span class="mt-0.5 block text-base leading-snug text-gm-muted">{{ f.desc }}</span>
              </span>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </DeckShell>
</template>
