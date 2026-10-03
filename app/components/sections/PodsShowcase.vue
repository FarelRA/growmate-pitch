<script setup lang="ts">
const specs = [
  { icon: 'lucide:ruler', title: '20 × 10 × 30 cm', desc: 'rPLA putih tulang, matte' },
  { icon: 'lucide:tag', title: 'Rp803 rb', desc: 'marjin sekitar Rp230 rb' },
  { icon: 'lucide:flower-2', title: 'Demo soka', desc: 'kelopak dapat dimakan jadi teh herbal' },
]
</script>

<template>
  <DeckShell section="pods">
    <DeckSplitPanel>
      <template #primary>
        <Reveal class="w-full">
          <PodsDiagram />
        </Reveal>
      </template>
      <template #secondary>
        <Reveal :delay="0.1" class="w-full">
          <CaseViewer />
        </Reveal>
        <Reveal :delay="0.18" class="w-full">
          <div class="mt-3 grid w-full grid-cols-1 gap-2.5 md:mt-4">
            <UiInfoCard v-for="s in specs" :key="s.title" :icon="s.icon" :title="s.title" :desc="s.desc" compact />
          </div>
        </Reveal>
      </template>
    </DeckSplitPanel>
  </DeckShell>
</template>
