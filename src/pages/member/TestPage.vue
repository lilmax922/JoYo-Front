<script setup>
import { useUserStore } from 'src/stores/user'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { avatar, nickname } = storeToRefs(user)
const userName = nickname.value
</script>

<template>
  <q-page id="my_reservation">
    <div class="container">
      <div class="member_area">
        <div class="setting_area row flex-center">
          <div class="col-2">
            <q-avatar>
              <q-img :src="avatar" />
            </q-avatar>
          </div>
          <div class="col-2">
            <div>{{ userName }}</div>
          </div>
          <q-space></q-space>
          <div>
            <q-btn icon="mdi-pencil" flat round dense color="primary"> </q-btn>
          </div>
        </div>
        <div class="info_area row">
          <div class="col-4 flex flex-center">
            <q-icon class="q-pr-sm" name="mdi-google-downasaur" />
          </div>
          <div class="col-4 flex flex-center">
            <div>我的揪團</div>
          </div>
          <div class="col-4 flex flex-center">
            <div>我的預約</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<!-- <template>
  <div class="q-pa-md q-gutter-md">
    <q-list>
      <q-item-label header>會員資料</q-item-label>

      <q-item>
        <q-item-section avatar top>
          <q-avatar>
            <img :src="avatar">
          </q-avatar>
        </q-item-section>

        <q-item-section top class="col- gt-sm">
          <q-item-label class="q-mt-sm">{{ userName }}</q-item-label>
        </q-item-section>

        <q-space />

        <q-item-section>
          <div class="q-gutter-xs flex justify-end">
            <q-btn class="gt-xs" size="12px" flat dense round icon="mdi-calendar" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="mdi-pencil" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

    </q-list>
  </div>
</template> -->

<style lang="scss" scoped>
#my_reservation {
  .member_area {
    border: 1px solid #eee;
    border-radius: 16px;
    padding: 4rem;

    .row {
      margin: 2rem 0 2rem 0;
    }
  }
}
</style>
