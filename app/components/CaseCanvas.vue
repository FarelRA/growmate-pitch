<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const model = shallowRef<object | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('models/case.glb', { method: 'HEAD' })
    if (res.ok) {
      const gltf = await new GLTFLoader().loadAsync('models/case.glb')
      model.value = gltf.scene
    }
  } catch {
    model.value = null
  }
})
</script>

<template>
  <TresCanvas clear-color="#f6f8f5">
    <TresPerspectiveCamera :position="[3.4, 2.6, 4.4]" :look-at="[0, 1.1, 0]" />
    <TresAmbientLight :intensity="1.25" />
    <TresDirectionalLight :position="[4, 6, 3]" :intensity="1.7" />
    <RigSpin :model="model" />
  </TresCanvas>
</template>
