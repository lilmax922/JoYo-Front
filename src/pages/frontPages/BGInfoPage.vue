<script setup>
import { ref, reactive, computed } from 'vue'
import { api } from 'src/boot/axios'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { storeToRefs } from 'pinia'
import { useBoardgameStore } from 'src/stores/boardgame'
import BoardgameCard from 'src/components/BoardgameCard.vue'

const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const boardgameStore = useBoardgameStore()
const { getPostBoardgames } = boardgameStore
const { boardgames } = storeToRefs(boardgameStore)

getPostBoardgames()

const modules = [Autoplay] // Swiper
const slide = ref(0) // q-carousel，它跟 carousel 的 :name 綁定
const carouselSlide = ref([0, 0])
const boardgame = reactive({
  _id: '',
  introduction: '',
  name: '',
  cardImage: '',
  mainImages: [],
  types: [],
  players: '',
  gameTime: 5,
  age: 4,
  ytVideo: '',
  componentImages: [],
  componentTexts: '',
  setup: '',
  gameFlow: '',
  endGame: '',
  post: true
})

const filterHandler = computed(() => {
  return boardgames.value.filter((item) => {
    return (
      item._id !== boardgame._id &&
      item.types.some((type) => boardgame.types.includes(type))
    )
  })
});

// 取桌遊資料
(async () => {
  try {
    const { data } = await api.get('/boardgames/' + route.params.id)
    boardgame._id = data.result._id
    boardgame.introduction = data.result.introduction
    boardgame.name = data.result.name
    boardgame.cardImage = data.result.cardImage
    boardgame.mainImages = data.result.mainImages
    boardgame.types = data.result.types
    boardgame.players = data.result.players
    boardgame.gameTime = data.result.gameTime
    boardgame.age = data.result.age
    boardgame.ytVideo = data.result.ytVideo
    boardgame.componentImages = data.result.componentImages
    boardgame.componentTexts = data.result.componentTexts
    boardgame.setup = data.result.setup
    boardgame.gameFlow = data.result.gameFlow
    boardgame.endGame = data.result.endGame
    boardgame.post = data.result.post

    // 使用者可以看到 title 變更，但對爬蟲沒用
    document.title = '揪遊 | ' + boardgame.name
  } catch (error) {
    $q.notify({
      position: 'top',
      message: error?.response?.data?.message || '發生錯誤',
      color: 'negative'
    })
    router.go(-1)
  }
})()
</script>

<template>
  <q-page id="bg_info" padding>
    <div class="container">
      <!-- 麵包屑 -->
      <div class="breadcrumbs">
        <q-breadcrumbs>
          <q-breadcrumbs-el icon="mdi-home" to="/" />
          <template #separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el label="探索桌遊" to="/exploreBGs" />
          <q-breadcrumbs-el :label="boardgame.name" />
        </q-breadcrumbs>
      </div>

      <section class="row q-mt-xl">
        <div class="col-4">
          <div class="info-area q-mb-lg">
            <div class="introduce column">
              <div class="header text-h6 q-mb-md">遊戲介紹</div>
              <div class="text-h4 text-accent q-mb-md">
                {{ boardgame.name }}
              </div>
              <div v-html="boardgame.introduction" />
              <div class="icon_area flex column q-gutter-sm q-mt-md text-h6">
                <div class="flex items-center">
                  <q-icon
                    class="q-mr-sm"
                    name="mdi-google-downasaur"
                    size="sm"
                  />
                  <q-chip
                    class="type_tag"
                    v-for="(type, i) in boardgame.types"
                    :key="i"
                    color="secondary"
                    text-color="white"
                    size="md"
                  >
                    &#35;{{ type }}
                  </q-chip>
                </div>
                <div>
                  <q-icon name="mdi-account-group q-mr-sm" size="sm" />
                  {{ boardgame.players }} 人
                </div>
                <div>
                  <q-icon name="mdi-timer-sand q-mr-sm" size="sm" />
                  約 {{ boardgame.gameTime }} 分鐘
                </div>
              </div>
            </div>
            <div class="mainImages-area">
              <q-carousel
                swipeable
                animated
                v-model="carouselSlide[1]"
                thumbnails
                infinite
              >
                <q-carousel-slide
                  v-for="(boardgame, i) in boardgame.mainImages"
                  :key="i"
                  :name="i"
                  :img-src="boardgame"
                />
              </q-carousel>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="component-area q-mb-lg">
            <div class="component column">
              <div class="header text-h6 q-mb-md">內容物介紹</div>
              <div class="component_carousel">
                <q-carousel
                  swipeable
                  animated
                  v-model="carouselSlide[0]"
                  thumbnails
                  infinite
                >
                  <q-carousel-slide
                    v-for="(boardgame, i) in boardgame.componentImages"
                    :key="i"
                    :name="i"
                    :img-src="boardgame"
                  />
                </q-carousel>
              </div>
              <div class="q-mt-lg" v-html="boardgame.componentTexts" />
            </div>
          </div>
          <div class="gameflow-area q-mb-lg">
            <div class="gameflow column">
              <div class="header text-h6 q-mb-md">遊戲流程</div>
              <div v-html="boardgame.gameFlow" />
            </div>
          </div>
          <div class="endgame-area q-mb-lg">
            <div class="endgame column">
              <div class="header text-h6 q-mb-md">結束遊戲</div>
              <div v-html="boardgame.endGame" />
            </div>
          </div>
        </div>
      </section>

      <section id="also_like">
        <div class="row">
          <div class="col-12">
            <div class="title text-h4">YOU MAY ALSO LIKE</div>
            <div class="q-mt-lg">
              <Swiper
                class="mySwiper"
                :modules="modules"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }"
                :slidesPerView="1"
                :spaceBetween="30"
                :breakpoints="{
                  '576': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  '1024': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  '1500': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }"
              >
                <SwiperSlide v-for="i in filterHandler" :key="i">
                  <BoardgameCard v-bind="i" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
#bg_info {
  width: 100%;

  .container section:last-of-type {
    // 與 footer 的距離
    margin-bottom: 50px;
  }

  section + section {
    margin-top: 4rem;
  }

  .info-area,
  .component-area,
  .gameflow-area,
  .endgame-area {
    width: 98%;
    background-color: $dark;
    border-radius: 16px;
    padding: 2rem;
  }

  .header {
    margin-bottom: 2rem;
    color: $primary;
  }

  .info-area {
    position: sticky;
    top: 50px;
  }

  .component_carousel {
    margin: 1rem 0 1rem 0;
    border-radius: 16px;
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .mainImages-area {
    width: 98%;
    border-radius: 16px;
    margin-top: 2rem;
  }

  .q-carousel {
    border-radius: 16px;
  }

  #also_like {
    .title {
      border-left: 15px solid $primary;
      padding-left: 1rem;
    }
  }
}
</style>
