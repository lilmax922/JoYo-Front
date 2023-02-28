<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { avatar, nickname } = storeToRefs(user)
const { logout } = user

const lists = [
  { icon: 'mdi-google-downasaur', text: '桌遊管理', to: '/admin/manageBG' },
  { icon: 'mdi-account-edit', text: '帳號管理', to: '/admin/manageAccount' },
  {
    icon: 'mdi-calendar-edit',
    text: '預約管理',
    to: '/admin/manageReservation'
  },
  { icon: 'mdi-account-group', text: '揪團管理', to: '/admin/manageTeamup' }
]
</script>

<template>
  <q-layout id="adminlayout" view="hHh lpR fff">
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
          <!-- 使用者下拉選單 -->
          <q-btn-dropdown class="q-ml-sm" flat>
            <template #label>
              <q-avatar>
                <q-img :src="avatar" />
              </q-avatar>
            </template>
            <q-list class="q-pa-xs">
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img :src="avatar" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="flex-center">
                  {{ nickname }}
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item-label class="q-pa-sm" overline>我的主頁</q-item-label>
              <!-- 管理者 -->
              <q-item v-for="list in lists" :key="list" :to="list.to" clickable>
                <q-item-section avatar>
                  <q-icon :name="list.icon" />
                </q-item-section>
                <q-item-section>{{ list.text }}</q-item-section>
              </q-item>

              <q-separator />
              <q-item>
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

    <q-drawer class="drawer" show-if-above :width="200" :breakpoint="500">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
        <q-list padding>
          <q-item-label class="q-pa-sm" overline>後台編輯</q-item-label>
          <q-item
            v-for="list in lists"
            :key="list"
            :to="list.to"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon :name="list.icon" />
            </q-item-section>
            <q-item-section>{{ list.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="../assets/backImage.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <div class="flex items-center">
            <q-avatar class="q-mb-sm" size="56px">
              <img :src="avatar" alt="avatar" />
            </q-avatar>
            <div class="text-weight-bold text-h5 text-primary q-ml-md">
              {{ nickname }}
            </div>
          </div>
          <div class="flex justify-end">
            <q-btn
              @click="logout"
              class="logout_btn"
              icon="fa-solid fa-person-walking-arrow-right"
              label="登出"
              dense
            />
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
#adminlayout {
  width: 100%;
  .header {
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    padding-bottom: 5px;
    border-bottom: 1px solid #aaa;

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
  .q-drawer {
    height: 400px;
    top: 235px !important;
    left: 50px;
    border-radius: 16px;
    overflow: hidden;
  }
  .logout_btn {
    width: 50%;
    border-radius: 8px;
    background-color: $dark;
    color: #fff;

    &:hover {
      transition: 0.5s;
      color: $dark;
      background-color: #fff;
    }
  }
}
</style>
