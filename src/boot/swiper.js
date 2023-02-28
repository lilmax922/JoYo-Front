import { boot } from 'quasar/wrappers'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default boot(({ app }) => {
  app.use(Swiper)
  app.use(SwiperSlide)
})
