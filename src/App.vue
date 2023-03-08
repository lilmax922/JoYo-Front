<template>
  <router-view />
</template>

<script setup>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

const App = defineComponent({
  name: 'App'
})
const $q = useQuasar()
$q.dark.set(true)
</script>
