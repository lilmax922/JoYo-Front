<script setup>
import { ref, reactive, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { isValidUrl, getVideoId } from 'is-youtube-url'
import { useBoardgameStore } from 'stores/boardgame'

const $q = useQuasar()
const boardgameStore = useBoardgameStore()
const { deleteBoardgame, submitBoardgame, getAllBoardgames } = boardgameStore
const { boardgames } = storeToRefs(boardgameStore)
getAllBoardgames()

const playerRange = ref({
  min: 1,
  max: 12
})
const bgTypes = reactive({
  camp: {
    type: false,
    label: '陣營'
  },
  strategy: {
    type: false,
    label: '策略'
  },
  abstract: {
    type: false,
    label: '抽象'
  },
  crafty: {
    type: false,
    label: '心機'
  },
  card: {
    type: false,
    label: '卡牌'
  },
  party: {
    type: false,
    label: '派對'
  },
  family: {
    type: false,
    label: '家庭'
  },
  children: {
    type: false,
    label: '兒童'
  }
})
const cardImage = ref('')
const mainImages = ref([])
const componentImages = ref([]) // 存所有圖片，用來預覽圖片用
const bgForm = reactive({
  _id: '', // 空的代表新增，有東西代表編輯
  introduction: '',
  name: '',
  cardImage: undefined,
  mainImages: [],
  types: [],
  players: '',
  gameTime: 0,
  age: 0,
  ytVideo: '',
  componentImages: [],
  componentTexts: '',
  setup: '',
  gameFlow: '',
  endGame: '',
  post: false,
  loading: false,
  dialog: false,
  index: -1
})

const previewUrlHandler = (file, data) => {
  if (file && typeof file !== 'string' && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.addEventListener('load', (event) => {
      if (typeof data === 'object') {
        data.push(event.target.result)
      } else {
        // string
        cardImage.value = event.target.result
      }
    })
    reader.readAsDataURL(file)
  } else {
    if (typeof data === 'object') {
      data.push(file)
    } else {
      cardImage.value = file
    }
  }
}
watch(() => bgForm.cardImage, (value) => {
  cardImage.value = ''
  previewUrlHandler(value, cardImage.value)
}
)
watch(
  () => bgForm.mainImages,
  (value) => {
    mainImages.value = []

    value.forEach((img) => {
      previewUrlHandler(img, mainImages.value)
    })
  }
)
watch(
  () => bgForm.componentImages,
  (value) => {
    componentImages.value = []

    value.forEach((img) => {
      previewUrlHandler(img, componentImages.value)
    })
  }
)

//  <----- q-table ----->
const filter = ref('')
const columns = [
  {
    name: 'image',
    label: '桌遊圖',
    field: (row) => row.cardImage,
    align: 'center'
  },
  {
    name: 'name',
    label: '桌遊名稱',
    field: (row) => row.name,
    align: 'center',
    sortable: true
  },
  {
    name: 'types',
    label: '類型',
    field: (row) => row.types,
    align: 'center',
    sortable: true,
    format: (val) => val.join(' ')
  },
  {
    name: 'post',
    label: '張貼',
    field: (row) => row.post,
    align: 'center',
    sortable: true
  },
  {
    name: 'edit',
    label: '編輯/刪除',
    field: (row) => row.edit,
    align: 'center'
  }
]

//  <----- q-edit ----->
const toolbar = reactive([
  [
    {
      label: $q.lang.editor.align,
      icon: $q.iconSet.editor.align,
      fixedLabel: true,
      list: 'only-icons',
      options: ['left', 'center', 'right', 'justify']
    },
    {
      label: $q.lang.editor.align,
      icon: $q.iconSet.editor.align,
      fixedLabel: true,
      options: ['left', 'center', 'right', 'justify']
    }
  ],
  ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
  ['token', 'hr', 'link', 'custom_btn'],
  ['print', 'fullscreen'],
  [
    {
      label: $q.lang.editor.formatting,
      icon: $q.iconSet.editor.formatting,
      list: 'no-icons',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
    },
    {
      label: $q.lang.editor.fontSize,
      icon: $q.iconSet.editor.fontSize,
      fixedLabel: true,
      fixedIcon: true,
      list: 'no-icons',
      options: [
        'size-1',
        'size-2',
        'size-3',
        'size-4',
        'size-5',
        'size-6',
        'size-7'
      ]
    },
    {
      label: $q.lang.editor.defaultFont,
      icon: $q.iconSet.editor.font,
      fixedIcon: true,
      list: 'no-icons',
      options: [
        'default_font',
        'arial',
        'arial_black',
        'comic_sans',
        'courier_new',
        'impact',
        'lucida_grande',
        'times_new_roman',
        'verdana'
      ]
    },
    'removeFormat'
  ],
  ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
  ['undo', 'redo'],
  ['viewsource']
])
const font = reactive({
  arial: 'Arial',
  arial_black: 'Arial Black',
  comic_sans: 'Comic Sans MS',
  courier_new: 'Courier New',
  impact: 'Impact',
  lucida_grande: 'Lucida Grande',
  times_new_roman: 'Times New Roman',
  verdana: 'Verdana'
})

const rules = {
  required (value) {
    return (value && value.length > 0) || '欄位必填'
  },
  isYtUrl (url) {
    return isValidUrl(url) || 'Youtube 網址錯誤'
  },
  gameTime (time) {
    return (time && time >= 10) || '不得小於 10'
  },
  age (age) {
    return (age && age >= 4) || '不得小於 4'
  }
}

const openDialog = (index) => {
  // 被 pinia 引用的值要加 value
  const idx = boardgames.value.findIndex(
    (boardgame) => boardgame._id === index
  )
  if (index === -1) {
    // -1 = 新增
    bgForm._id = ''
    bgForm.introduction = ''
    bgForm.name = ''
    bgForm.cardImage = undefined
    bgForm.mainImages = []
    bgForm.types = []
    bgForm.players = ''
    bgForm.gameTime = 0
    bgForm.age = 0
    bgForm.ytVideo = ''
    bgForm.componentImages = []
    bgForm.componentTexts = ''
    bgForm.setup = ''
    bgForm.gameFlow = ''
    bgForm.endGame = ''
    playerRange.value.min = 1
    playerRange.value.max = 12
    bgForm.post = false
    bgForm.loading = false
    bgForm.index = -1
  } else {
    bgForm._id = boardgames.value[idx]._id
    bgForm.introduction = boardgames.value[idx].introduction
    bgForm.name = boardgames.value[idx].name
    bgForm.cardImage = boardgames.value[idx].cardImage
    bgForm.mainImages = boardgames.value[idx].mainImages
    bgForm.types = boardgames.value[idx].types
    bgForm.gameTime = boardgames.value[idx].gameTime
    bgForm.age = boardgames.value[idx].age
    bgForm.ytVideo = `https://www.youtube.com/watch?v=${boardgames.value[idx].ytVideo}`
    bgForm.componentImages = boardgames.value[idx].componentImages
    bgForm.componentTexts = boardgames.value[idx].componentTexts
    bgForm.setup = boardgames.value[idx].setup
    bgForm.gameFlow = boardgames.value[idx].gameFlow
    bgForm.endGame = boardgames.value[idx].endGame
    bgForm.post = boardgames.value[idx].post
    bgForm.loading = false
    bgForm.idx = idx
    playerRange.value.min = boardgames.value[idx].players.split('~')[0]
    playerRange.value.max = boardgames.value[idx].players.split('~')[1]
  }
  bgForm.dialog = true
}

const onSubmit = async () => {
  bgForm.loading = true

  const fd = new FormData()
  // fd.append(key, value)
  fd.append('introduction', bgForm.introduction)
  fd.append('name', bgForm.name)
  fd.append('cardImage', bgForm.cardImage)
  for (const i of bgForm.mainImages) {
    fd.append('mainImages', i)
  }
  const typesArray = Object.entries(bgTypes)
  typesArray.forEach((item) => {
    if (item[1].type) {
      fd.append('types', item[1].label)
    }
  })
  const players = `${playerRange.value.min} ~ ${playerRange.value.max}`
  fd.append('players', players)
  fd.append('gameTime', bgForm.gameTime)
  fd.append('age', bgForm.age)
  fd.append('ytVideo', getVideoId(bgForm.ytVideo))
  for (const i of bgForm.componentImages) {
    fd.append('componentImages', i)
  }
  fd.append('componentTexts', bgForm.componentTexts)
  fd.append('setup', bgForm.setup)
  fd.append('gameFlow', bgForm.gameFlow)
  fd.append('endGame', bgForm.endGame)
  fd.append('post', bgForm.post)
  await submitBoardgame(fd, bgForm._id)
  bgForm.loading = false
  bgForm.dialog = false
}
</script>

<template lang="pug">
q-page#manage_boardgames(padding)
  .container
    .row
      .col-12
        // 桌遊表單
        q-table.table(:rows="boardgames" :columns="columns" row-key="_id" :filter="filter" :rows-per-page-options="[5,10,15,0]")

          template(v-slot:top-left)
            q-btn.add_btn(@click="openDialog(-1)" label="新增桌遊")

          template(v-slot:top-right)
            q-input(debounce="300" v-model="filter" placeholder="Search")
              template(v-slot:append)
                q-icon(name="search")

          template(v-slot:body-cell-image="props")
            q-img(:src="props.row.cardImage" height="200px")

          template(v-slot:body-cell-post="props")
            q-td.text-center
              q-toggle(v-model="props.row.post" color="accent")

          template(v-slot:body-cell-edit="props")
            q-td.text-center.q-gutter-sm
              q-btn(icon="edit" color="info" fab-mini unelevated size="sm" @click="openDialog(props.row._id)")
              q-btn(icon="delete" color="secondary" fab-mini unelevated @click="deleteBoardgame(props.row._id)")

    // 新增/編輯商品 dialog
    q-dialog(v-model="bgForm.dialog" persistent)
      q-layout.edit(container)
        q-card(flat)
          q-form(@submit="onSubmit")
            q-card-section.flex.justify-end
              q-btn(push icon="mdi-close" v-close-popup)
            .text-h4.text-center {{ bgForm._id.length > 0 ? '編輯桌遊' : '新增桌遊' }}
            q-card-section.justify-center.q-mx-lg
              q-card-section
                // 桌遊名稱
                .text-h6 桌遊名稱
                q-input(v-model="bgForm.name" filled label="請輸入桌遊名稱" clearable clear-icon="close" :rules="[rules.required]")
                // 桌遊介紹
                .text-h6 桌遊介紹
                q-editor(
                  v-model="bgForm.introduction" :dense="$q.screen.lt.md" :toolbar="toolbar" :fonts="font" min-height="5rem"
                  placeholder="請輸入桌遊介紹"
                )
                  q-card(flat bordered)
                    q-card-section
                      pre(style="white-space: pre-line") {{ bgForm.introduction }}
                // 桌遊卡片圖
                .text-h6 桌遊卡片圖
                q-file(filled v-model="bgForm.cardImage" use-chips label="請選擇卡片圖(單選)")
                  template(v-slot:prepend)
                    q-icon(name="attach_file")
                div.row.q-pa-md
                  q-card
                    q-img(v-if="bgForm.cardImage" :src="cardImage" width="100px")
                // 桌遊主圖
                .text-h6 桌遊主圖
                q-file(filled v-model="bgForm.mainImages" label="請選擇主圖片(可複選)" use-chips multiple)
                  template(v-slot:prepend)
                    q-icon(name="attach_file")
                div.row.q-pa-md
                  q-card.q-mr-sm(v-for="mainImage in mainImages" :key="mainImage")
                    q-img(:src="mainImage" width="100px")
                // YtVideo
                .text-h6.q-pt-md Youtube教學影片
                q-input(v-model="bgForm.ytVideo" type="url" filled label="請輸入影片網址" clearable :rules="[rules.isYtUrl]")
                // 遊戲時間 & 適合年齡
                q-item
                  q-item-section.items-center
                    .text-h6 遊戲時間
                    .count.flex.flex-center.col-12
                      q-btn.remove(icon='remove' @click='bgForm.gameTime--')
                      q-input.num(v-model='bgForm.gameTime' :rules="[rules.gameTime]" suffix="分鐘")
                      q-btn.add(icon='add' @click='bgForm.gameTime++')

                    //- q-input(v-model.number="bgForm.gameTime" type="number" filled suffix="分鐘")
                  q-item-section.items-center
                    .text-h6 適合年齡
                    .count.flex.flex-center.col-12
                      q-btn.remove(icon='remove' @click='bgForm.age--')
                      q-input.num(v-model='bgForm.age' :rules="[rules.age]" suffix="歲")
                      q-btn.add(icon='add' @click='bgForm.age++')
                    //- q-input(v-model.number="bgForm.age" type="number" filled suffix="歲")
                // 桌遊類型
                div.row.items-center
                  .text-h6.q-mr-sm 桌遊類型?
                  .text-subtitle1 (可複選)
                div.q-gutter-lg
                  q-checkbox(size="lg" v-model="bgTypes.camp.type" :label="bgTypes.camp.label")
                  q-checkbox(size="lg" v-model="bgTypes.strategy.type" :label="bgTypes.strategy.label")
                  q-checkbox(size="lg" v-model="bgTypes.abstract.type" :label="bgTypes.abstract.label")
                  q-checkbox(size="lg" v-model="bgTypes.crafty.type" :label="bgTypes.crafty.label")
                  q-checkbox(size="lg" v-model="bgTypes.card.type" :label="bgTypes.card.label")
                  q-checkbox(size="lg" v-model="bgTypes.party.type" :label="bgTypes.party.label")
                  q-checkbox(size="lg" v-model="bgTypes.family.type" :label="bgTypes.family.label")
                  q-checkbox(size="lg" v-model="bgTypes.children.type" :label="bgTypes.children.label")
                // 遊玩人數
                q-item
                  .text-h6 遊玩人數
                q-item.items-start
                  q-item-section(avatar)
                    q-icon(name="mdi-account-group" size="md")
                  q-item-section
                    q-range(
                    v-model="playerRange"
                    :min="1"
                    :max="12"
                    label
                    markers
                    marker-labels
                    snap
                    )
                    .text-h6.text-center.q-pt-md(color="secondary") {{ playerRange.min }} ~ {{ playerRange.max }} 人
              q-card-section.q-gutter-sm
                // 內容物介紹
                .text-h6 內容物介紹
                q-editor(v-model="bgForm.componentTexts" :dense="$q.screen.lt.md" :toolbar="toolbar" :fonts="font" min-height="5rem" placeholder="請輸入內容物介紹")
                  q-card(flat bordered)
                    q-card-section
                      pre(style="white-space: pre-line") {{ bgForm.componentTexts }}
                // 內容物圖片
                .text-h6 內容物圖片
                q-file(filled v-model="bgForm.componentImages" label="選擇圖片(可複選)" use-chips multiple)
                  template(v-slot:prepend)
                    q-icon(name="attach_file")
                div.row.q-pa-md
                  q-card.q-mr-sm(v-for="componentImage in componentImages" :key="componentImage")
                    q-img(:src="componentImage" width="100px")
                // 遊戲配置
                .text-h6 遊戲配置
                q-editor(
                  v-model="bgForm.setup" :dense="$q.screen.lt.md" :toolbar="toolbar" :fonts="font" min-height="5rem"
                  placeholder="請輸入遊戲配置")
                  q-card(flat bordered)
                    q-card-section
                      pre(style="white-space: pre-line") {{ bgForm.setup }}
                // 遊戲流程
                .text-h6 遊戲流程
                q-editor(
                  v-model="bgForm.gameFlow" :dense="$q.screen.lt.md" :toolbar="toolbar" :fonts="font" min-height="5rem"
                  placeholder="請輸入遊戲配置")
                  q-card(flat bordered)
                    q-card-section
                      pre(style="white-space: pre-line") {{ bgForm.gameFlow }}
                // 遊戲結束
                .text-h6 遊戲結束
                q-editor(
                  v-model="bgForm.endGame" :dense="$q.screen.lt.md" :toolbar="toolbar" :fonts="font" min-height="5rem"
                  placeholder="請輸入遊戲配置")
                  q-card(flat bordered)
                    q-card-section
                      pre(style="white-space: pre-line") {{ bgForm.endGame }}
                // 張貼桌遊
                q-checkbox.q-mt-md(label="張貼桌遊" v-model="bgForm.post" size="lg" :rules="[rules.required]")
            q-card-actions.flex.justify-center.q-pb-md.q-gutter-md
              q-btn(label='取消' @click="bgForm.dialog = false" :disable="bgForm.loading")
              q-btn.submit_btn(label='送出' type="submit" :disable="bgForm.loading")
</template>

<style lang="scss" scoped>
.table {
  margin-top: 100px;
}
.add_btn,.submit_btn {
  color: $dark;
  background-color: $primary;
  border-radius: 8px;
  transition: 0.5s;
  &:hover {
    color: $primary;
    background-color: $dark;
    border: 1px solid $primary;
  }
 }

  .edit {
    max-width: 1000px !important;
  }
  .count {
    height: 10vh;
    .num {
      width: 50%;
    }
    .add {
      width: 5vh;
      height: 2vh;
      margin: 0 0 1rem 1rem;
    }
    .remove {
      width: 5vh;
      height: 2vh;
      margin: 0 1rem 1rem 0;
    }
  }
</style>
