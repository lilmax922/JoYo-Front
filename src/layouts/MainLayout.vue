<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
import LoginCard from 'src/components/LoginCard.vue'
import RegisterCard from 'src/components/RegisterCard.vue'

const user = useUserStore()
const { isLogin, isAdmin, avatar, nickname, showLoginCard } = storeToRefs(user)
const { logout } = user

const showRegisterCard = ref(false)
const memberDropdown = [
  { icon: 'mdi-account-edit', text: '會員資料', to: '/member/myInfo' },
  {
    icon: 'mdi-google-downasaur',
    text: '我的預約',
    to: '/member/myReservation'
  },
  { icon: 'mdi-account-group', text: '我的揪團', to: '/member/myTeamup' }
]
const adminDropdown = [
  { icon: 'mdi-google-downasaur', text: '桌遊管理', to: '/admin/manageBG' },
  { icon: 'mdi-account-edit', text: '帳號管理', to: '/admin/manageAccount' },
  {
    icon: 'mdi-calendar-edit',
    text: '預約管理',
    to: '/admin/manageReservation'
  },
  { icon: 'mdi-account-group', text: '揪團管理', to: '/admin/manageTeamup' }
]

const toggleRegisterCardHandler = (type) => {
  showRegisterCard.value = type
}

const close = () => {
  showLoginCard.value = false
}

// onMounted(() => {
//   const navbar = this.$refs.navbar

//   window.addEventListener('scroll', () => {
//     // Change navbar color when scrolling up
//     if (window.scrollY > 0) {
//       navbar.style.backgroundColor = 'orange'
//     } else {
//       navbar.style.backgroundColor = ''
//     }
//   })
// })
</script>

<template>
  <q-layout id="mainlayout" view="hHh lpR fff">
    <q-header class="header flex flex-center" reveal>
      <q-toolbar class="row" style="width: 100%">
        <q-toolbar-title class="col-xs-4 col-md-3">
          <router-link to="/">
            <img class="logo" src="../assets/logo.png" />
          </router-link>
        </q-toolbar-title>

        <!-- 分頁 -->
        <q-tabs
          active-color="primary"
          dense
          class="gt-md col-md-6 flex items-end"
        >
          <q-route-tab to="/" label="首頁" />
          <q-route-tab to="/exploreBGs" label="探索桌遊" />
          <q-route-tab to="/searchTeamups" label="揪團組隊" />
          <q-route-tab to="/teamup" label="我要揪團" />
          <q-route-tab to="/reservation" label="手刀預約" />
        </q-tabs>
        <q-space />

        <!-- navbar right_area -->
        <div class="flex items-center justify-end col-xs-8 col-md-3">
          <!-- 通知 btn -->
          <!-- <q-btn v-if="isLogin" icon="mdi-bell" dense rounded flat>
              <q-badge color="secondary" floating :label="5" />
              <q-menu fit anchor="bottom left" self="top middle">
                <q-card>
                  <q-item>
                    <q-item-label class="q-pa-sm" overline>我的通知</q-item-label>
                  </q-item>
                  <q-card-section> 內容 </q-card-section>
                  <q-card-section></q-card-section>
                </q-card>
              </q-menu>
            </q-btn> -->

          <!-- 登入/註冊 btn -->
          <q-btn
            v-if="!isLogin"
            @click="showLoginCard = true"
            icon="mdi-account-circle"
            flat
            dense
            size="lg"
          />
          <!-- 使用者下拉選單 -->
          <q-btn-dropdown v-if="isLogin" class="q-ml-sm" flat>
            <template #label>
              <q-avatar>
                <q-img :src="avatar" />
              </q-avatar>
            </template>
            <q-list class="q-pa-xs">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img :src="avatar"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section class="flex-center">
                  {{ nickname }}
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item-label v-if="!isAdmin" class="q-pa-sm" overline
                >我的主頁</q-item-label
              >
              <q-item-label v-if="isAdmin" class="q-pa-sm" overline
                >後台管理</q-item-label
              >
              <!-- 管理者 -->
              <div v-if="isLogin && isAdmin">
                <q-item
                  v-for="i in adminDropdown"
                  :key="i"
                  :to="i.to"
                  clickable
                >
                  <q-item-section avatar>
                    <q-icon :name="i.icon" />
                  </q-item-section>
                  <q-item-section>{{ i.text }}</q-item-section>
                </q-item>
              </div>

              <!-- 會員 -->
              <div v-if="!isAdmin">
                <q-item
                  v-for="i in memberDropdown"
                  :key="i"
                  :to="i.to"
                  clickable
                >
                  <q-item-section avatar>
                    <q-icon :name="i.icon" />
                  </q-item-section>
                  <q-item-section>{{ i.text }}</q-item-section>
                </q-item>
              </div>

              <q-separator v-if="isLogin" />

              <q-item v-if="isLogin">
                <q-item-section>
                  <q-btn
                    @click="logout"
                    icon="fa-solid fa-person-walking-arrow-right"
                    label="登出"
                    flat
                    dense
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn class="lt-lg" dense flat round icon="menu">
            <q-menu transition-show="jump-down" transition-hide="jump-up">
              <q-list style="min-width: 100px">
                <q-item clickable to="/">
                  <q-item-section>首頁</q-item-section>
                </q-item>
                <q-item clickable to="/exploreBGs">
                  <q-item-section>探索桌遊</q-item-section>
                </q-item>
                <q-item clickable to="/searchTeamups">
                  <q-item-section>揪團組隊</q-item-section>
                </q-item>
                <q-item clickable to="/teamup">
                  <q-item-section>我要揪團</q-item-section>
                </q-item>
                <q-item clickable to="/reservation">
                  <q-item-section>手刀預約</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="2000"
        :offset="[18, 18]"
        duration="500"
      >
        <q-btn fab icon="mdi-arrow-up" color="primary" />
      </q-page-scroller>
    </q-page-container>

    <q-dialog v-model="showLoginCard" persistent>
      <LoginCard
        v-if="!showRegisterCard"
        @showRegisterCard="toggleRegisterCardHandler"
        @closeDialog="close"
      />
      <RegisterCard
        v-if="showRegisterCard"
        @showRegisterCard="toggleRegisterCardHandler"
        @closeDialog="close"
      />
    </q-dialog>

    <q-footer class="bg-primary text-dark">
      <q-toolbar>
        <q-avatar class="q-mr-sm">
          <img src="../assets/logo.png" />
        </q-avatar>
        <span class="text-center" style="font-size: 14px"
          >©2023 泰山職訓 網頁專題設計 by 胡俊宇</span
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
#mainlayout {
  width: 100%;
  .header {
    width: 100%;
    background-color: rgba(255, 255, 255, 0);

    .logo {
      height: 90%;
      position: absolute;
      top: 10%;
      left: 6.5%;
      filter: drop-shadow(0px 0px 3px $primary);
    }

    .q-toolbar {
      width: 100%;
      height: 80px;
    }

    .q-tabs {
      color: #fff;
    }

    .q-tab__label {
      font-size: 16px;
      font-weight: 500;

      &:hover {
        color: $primary;
        transition: 0.5s;
      }
    }

    .q-tab__indicator {
      height: 3.5px;
    }
  }
}
</style>
