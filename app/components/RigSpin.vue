<script setup lang="ts">
import { useLoop } from '@tresjs/core'

defineProps<{ model: object | null }>()

const rig = ref<any>(null)
const { onRender } = useLoop()
onRender((ctx: any) => {
  const d = ctx?.delta ?? 0.016
  const o = rig.value
  if (o && o.rotation) o.rotation.y += d * 0.45
})
</script>

<template>
  <TresGroup ref="rig">
    <primitive v-if="model" :object="model" />
    <template v-else>
      <!-- Stylized Pods stand-in: bone-white body on a green base, sprout on top -->
      <TresMesh :position="[0, 1.05, 0]">
        <TresBoxGeometry :args="[1.5, 1.9, 0.9]" />
        <TresMeshStandardMaterial color="#fdfbf3" roughness="0.55" />
      </TresMesh>
      <TresMesh :position="[0, 0.14, 0]">
        <TresBoxGeometry :args="[1.8, 0.28, 1.2]" />
        <TresMeshStandardMaterial color="#006e1c" roughness="0.5" />
      </TresMesh>
      <TresMesh :position="[0, 2.25, 0]">
        <TresSphereGeometry :args="[0.3, 24, 24]" />
        <TresMeshStandardMaterial color="#4caf50" roughness="0.4" />
      </TresMesh>
      <TresMesh :position="[0, 2.62, 0]">
        <TresSphereGeometry :args="[0.18, 24, 24]" />
        <TresMeshStandardMaterial color="#7ccf8a" roughness="0.4" />
      </TresMesh>
    </template>
  </TresGroup>
</template>
