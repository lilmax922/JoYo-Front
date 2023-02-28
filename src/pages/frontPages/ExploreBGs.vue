<script setup>
import { ref, reactive, computed } from 'vue'
import { storeToRefs } from 'pinia'
import _ from 'lodash'
import { useBoardgameStore } from 'src/stores/boardgame'
import BoardgameCard from 'src/components/BoardgameCard.vue'

const boardgameStore = useBoardgameStore()
const { getPostBoardgames } = boardgameStore
getPostBoardgames()
const { boardgames } = storeToRefs(boardgameStore)

const chips = ref([])
const filterInput = ref('')
const types = ['陣營', '策略', '心機', '抽象', '卡牌', '派對', '家庭', '兒童']

const filterCondition = reactive({
  types: ['陣營', '策略', '心機', '抽象', '卡牌', '派對', '家庭', '兒童'],
  gameTime: 0,
  players: {
    min: 1,
    max: 10
  }
})

const addChip = () => {
  chips.value = filterCondition.types.map((type) => type)
}
const delChip = (i) => {
  filterCondition.types.splice(i, 1)
  chips.value.splice(i, 1)
}

const filterHandler = computed(() => {
  return boardgames.value.filter((boardgame) => {
    const players = boardgame.players.split('~')
    const trimmedPlayers = players.map((player) => player.trim())

    if (filterInput.value === '') {
      return (
        filterCondition.players.min <= boardgame.players.split('~').map(Number)[0] &&
        filterCondition.players.max >= boardgame.players.split('~').map(Number)[1] &&
        filterCondition.gameTime <= boardgame.gameTime &&
        parseInt(_.intersection(filterCondition.types, boardgame.types).length) !== 0
      )
    } else {
      return (
        (filterCondition.players.min <= boardgame.players.split('~').map(Number)[0] &&
        filterCondition.players.max >= boardgame.players.split('~').map(Number)[1] &&
        filterCondition.gameTime <= boardgame.gameTime &&
        parseInt(_.intersection(filterCondition.types, boardgame.types).length) !== 0) &&

        (trimmedPlayers.includes(filterInput.value) ||
        boardgame.name.includes(filterInput.value) ||
        boardgame.gameTime.toString() === filterInput.value)
      )
    }
  })
})
// && players.includes(filterInput.value)

// (filterCondition.players.min <= boardgame.players.split('~').map(Number)[0] &&
//            filterCondition.players.max >= boardgame.players.split('~').map(Number)[1] &&
//            filterCondition.gameTime <= boardgame.gameTime &&
//            parseInt(_.intersection(filterCondition.types, boardgame.types).length) !== 0)
</script>

<template>
  <q-page id="explore" padding>
    <div class="container">
      <!-- 麵包屑 -->
      <div class="breadcrumb">
        <q-breadcrumbs>
          <template #separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el icon="mdi-home" to="/" />
          <q-breadcrumbs-el label="探索桌遊" />
        </q-breadcrumbs>
      </div>
      <section class="header flex items-center q-mt-xl">
        <div class="header-text text-h3 q-pr-lg">探索桌遊</div>
        <q-btn class="reservation_btn gt-sm" label="我要預約" to="/reservation" />
      </section>
      <section class="boardgameList">
        <div class="search_container bg-dark row">
          <div class="col-sm-12 col-md-12 col-lg-6" style="flex-grow: 1">
            <div class="search-bar col-12 q-mb-sm">
              <div class="flex items-center q-mb-sm">
                <q-icon class="q-pl-md" name="mdi-text-search" size="sm" />
                <div class="text-h6 q-ml-sm">關鍵字搜尋</div>
              </div>
              <div>
                <q-input v-model="filterInput" name="search" rounded standout placeholder="請輸入關鍵字"
                  style="max-width: 700px">
                  <template v-slot:append>
                    <q-btn icon="search" flat rounded />
                  </template>
                </q-input>
              </div>
            </div>

            <div class="game-types col-12 q-mb-sm">
              <div class="flex items-center">
                <q-icon class="q-pl-md" name="mdi-tag" size="sm" />
                <div class="text-h6 q-ml-sm">桌遊類型</div>
              </div>
              <div class="row flex flex-center">
                <div class="col-12">
                  <!-- <q-option-group
                            v-model="typeGroup"
                            :options="types"
                            type="checkbox"
                            inline
                            size="lg"
                          /> -->
                  <q-select v-model="filterCondition.types" rounded standout multiple :options="types" label="新增標籤"
                    bottom-slots style="max-width: 700px">
                    <template #append>
                      <q-btn round dense flat icon="add" @click="addChip" />
                    </template>
                  </q-select>
                </div>
                <div>
                  <q-chip v-for="(chip, i) in chips" :key="i" v-model="chips" color="secondary" text-color="white"
                    clickable icon="mdi-close-circle" icon-color="white" @click="delChip(i)">
                    {{ chip }}
                  </q-chip>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6" style="flex-grow: 1">
            <div class="game_time col-12 q-mb-md">
              <div class="flex items-center q-mb-sm">
                <q-icon class="q-pl-md" name="mdi-timer-sand" size="sm" />
                <div class="text-h6 q-ml-sm">遊戲時間</div>
              </div>
              <div>
                <q-slider v-model="filterCondition.gameTime" class="q-px-lg" :min="0" :max="60" markers marker-labels
                  thumb-color="secondary" :step="10" snap />
              </div>
            </div>

            <div class="players col-12 q-mb-md">
              <div class="flex items-center q-mb-sm">
                <q-icon class="q-pl-md" name="mdi-account-group" size="sm" />
                <div class="text-h6 q-ml-sm">遊玩人數</div>
              </div>
              <div>
                <q-range v-model="filterCondition.players" class="q-px-lg" :min="1" :max="10" markers marker-labels
                  thumb-color="secondary" snap />
              </div>
            </div>
          </div>
        </div>

        <!-- 桌遊卡片 -->
        <div class="cards_container">
          <div class="row q-mx-auto">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 flex flex-center q-mb-lg"
              v-for="(boardgame, i) in filterHandler" :key="i">
              <BoardgameCard class="bg_card q-mb-lg" v-bind="boardgame" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style lang="scss">
#explore {
  width: 100%;

  .header {
    padding-bottom: 55px;

    .header-text {
      border-left: 15px solid $primary;
      padding-left: 1rem;
    }
  }

  .reservation_btn {
    border-radius: 8px;
    background-color: $primary;
    color: $dark;

    &:hover {
      transition: 0.5s;
      color: $primary;
      background-color: $dark;
      border: 1px solid $primary;
    }
  }

  .boardgameList {
    width: 100%;

    .cards_container {
      padding-top: 55px;

      .bg_card {
        width: 300px;
      }
    }

    .search_container {
      border-radius: 16px;
      padding: 1rem;
      width: 100%;
    }
  }
}
</style>
