import { boot } from 'quasar/wrappers'
import VImageInput from 'vue3-img-input'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.component('v-image-input', VImageInput)
})
