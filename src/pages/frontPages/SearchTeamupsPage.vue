<script setup>
import { ref, reactive, computed } from 'vue'
import { storeToRefs } from 'pinia'
import _ from 'lodash'
import { useTeamupStore } from 'src/stores/teamup'
import TeamupCard from 'src/components/TeamupCard.vue'

const teamupStore = useTeamupStore()
const { getAllTeamups } = teamupStore
const { teamups } = storeToRefs(teamupStore)

const chips = ref([])
const types = ['陣營', '策略', '心機', '抽象', '卡牌', '派對', '家庭', '兒童']
const filterInput = ref('')

const currentDate = new Date().toLocaleDateString()
const filterCondition = reactive({
  types: ['陣營', '策略', '心機', '抽象', '卡牌', '派對', '家庭', '兒童'],
  date: currentDate
})

const addChip = () => {
  chips.value = filterCondition.types.map((type) => type)
}
const delChip = (i) => {
  filterCondition.types.splice(i, 1)
  chips.value.splice(i, 1)
}

const filterFunc = computed(() => {
  return teamups.value.filter((teamup) => {
    const mouth = (new Date(teamup.date).getMonth() + 1)
      .toString()
      .padStart(2, '0')
    const date = new Date(teamup.date).getDate().toString().padStart(2, '0')
    if (filterInput.value === '') {
      return (
        parseInt(_.intersection(teamup.types, filterCondition.types).length) !==
        0
      )
    } else {
      return (
        parseInt(_.intersection(teamup.types, filterCondition.types).length) !== 0 &&
        (date.includes(filterInput.value) ||
          mouth.includes(filterInput.value) ||
          teamup.title.includes(filterInput.value))
      )
    }
  })
})

getAllTeamups()
</script>

<template>
  <q-page id="searchTeamups" padding>
    <div class="container">
      <!-- 麵包屑 -->
      <div class="breadcrumb">
        <q-breadcrumbs>
          <template #separator>
            <q-icon size="1.5em" name="chevron_right" />
          </template>
          <q-breadcrumbs-el icon="mdi-home" to="/" />
          <q-breadcrumbs-el label="揪團組隊" />
        </q-breadcrumbs>
      </div>
      <section class="header flex items-center q-mt-xl">
        <div class="header-text text-h3 q-pr-lg">揪團組隊</div>
        <q-btn class="teamup_btn gt-sm" label="我要揪團" to="/teamup" />
      </section>

      <section class="teamupList">
        <div class="search_container bg-dark row">
          <div class="col-sm-12 col-md-12">
            <div class="search-bar col-12 q-mb-sm">
              <div class="flex items-center q-mb-sm">
                <q-icon class="q-pl-md" name="mdi-text-search" size="sm" />
                <div class="text-h6 q-ml-sm">關鍵字搜尋</div>
              </div>
              <div>
                <q-input
                  v-model="filterInput"
                  name="search"
                  rounded
                  standout
                  placeholder="請輸入關鍵字"
                >
                  <template v-slot:append>
                    <q-btn icon="search" flat rounded />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="game-types col-12 q-mb-sm">
              <div class="flex items-center">
                <q-icon class="q-pl-md" name="mdi-tag" size="sm" />
                <div class="text-h6 q-ml-sm">喜歡的桌遊類型</div>
              </div>
              <div class="row flex flex-center">
                <div class="col-12">
                  <q-select
                    v-model="filterCondition.types"
                    rounded
                    standout
                    multiple
                    :options="types"
                    label="新增標籤"
                    bottom-slots
                  >
                    <template #append>
                      <q-btn round dense flat icon="add" @click="addChip" />
                    </template>
                  </q-select>
                </div>
                <div>
                  <q-chip
                    v-for="(chip, i) in chips"
                    :key="i"
                    v-model="chips"
                    color="secondary"
                    text-color="white"
                    clickable
                    icon="mdi-close-circle"
                    icon-color="white"
                    @click="delChip(i)"
                  >
                    {{ chip }}
                  </q-chip>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="game_time">
              <div class="flex items-center">
                <q-icon class="q-pl-md" name="mdi-timer-sand" size="sm" />
                <div class="text-h6 q-pa-md">遊戲時間</div>
                <q-slider
                  v-model="filterCondition.gameTime"
                  class="q-px-lg"
                  :min="0"
                  :max="60"
                  markers
                  marker-labels
                  thumb-color="secondary"
                  :step="10"
                  snap
                />
              </div>
            </div> -->
        </div>

        <div class="cards_container">
          <div class="row q-mx-auto">
            <div
              class="col-12 col-md-6 col-lg-4 col-xl-3 flex flex-center q-mb-lg"
              v-for="(teamup, i) in filterFunc"
              :key="i"
            >
              <TeamupCard class="teamup_card q-mb-lg" v-bind="teamup" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style lang="scss">
#searchTeamups {
  width: 100%;

  .header {
    padding-bottom: 55px;
    .header-text {
      border-left: 15px solid $primary;
      padding-left: 1rem;
    }
  }
  .teamup_btn {
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

  .teamupList {
    width: 100%;

    .cards_container {
      padding-top: 55px;

      .teamup_card {
        width: 300px;
        height: 500px;
      }
    }

    .search_container {
      border-radius: 16px;
      padding: 1rem;
    }
  }
}
</style>
