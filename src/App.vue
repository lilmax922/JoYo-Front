<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    onMounted(() => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.classList.add('q-mode-dark')
      }
    })
  }
})
</script>
