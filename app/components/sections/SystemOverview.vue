<script setup lang="ts">
const chips = [
  { icon: 'lucide:radio', title: 'Kalibrasi di server', desc: 'Data mentah dikirim apa adanya. Server mengubah jadi persen lewat data kalibrasi produksi' },
  { icon: 'lucide:shield-check', title: 'Perintah idempoten', desc: 'Dedup snapshotId + acceptedCommandIds. Satu dosis tereksekusi tepat satu kali' },
  { icon: 'lucide:wifi-off', title: 'Siap offline', desc: 'Tech mengantre 24 jam di SQLite. Pods menyimpan konfigurasi di NVS' },
]
</script>

<template>
  <DeckShell section="system">
    <div class="flex w-full flex-col items-center gap-3 md:gap-5">
      <Reveal class="w-full">
        <SystemFlow />
      </Reveal>
      <DeckAutoGrid :cols="3">
        <Reveal v-for="(c, i) in chips" :key="c.title" :delay="0.1 + i * 0.08" class="h-full">
          <UiInfoCard :icon="c.icon" :title="c.title" :desc="c.desc" tone="light" />
        </Reveal>
      </DeckAutoGrid>
    </div>
  </DeckShell>
</template>
