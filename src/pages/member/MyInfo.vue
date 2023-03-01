<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import validator from 'validator'
import { Notify } from 'quasar'
import { useUserStore } from 'src/stores/user'
import { apiAuth } from 'src/boot/axios'

const user = useUserStore()
const { avatar, email, phone, nickname } = storeToRefs(user)

const rules = {
  phone (phone) {
    return validator.isMobilePhone(phone, 'zh-TW') || '手機號碼格式錯誤'
  },
  length (value) {
    return (
      (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
    )
  }
}

const userForm = reactive({
  phone: phone.value || '',
  nickname: nickname.value || '',
  password: '',
  image: undefined,
  editAvatar: false,
  loading: false
})

const onSubmit = async () => {
  userForm.loading = true
  try {
    const { data } = await apiAuth.patch('/users/editMyself', {
      phone: userForm.phone,
      nickname: userForm.nickname,
      password: userForm.password
    })
    userForm.phone = data.result.phone
    userForm.nickname = data.result.nickname
    userForm.password = data.result.password
    Notify.create({
      message: '修改成功',
      textColor: 'primary',
      icon: 'mdi-emoticon-happy-outline',
      color: 'white'
    })
  } catch (error) {
    Notify.create({
      message: '編輯失敗',
      textColor: 'secondary',
      color: 'white',
      icon: 'mdi-emoticon-dead-outline',
      caption: error?.response?.data?.message || '發生錯誤'
    })
  }
  userForm.loading = false
}
</script>

<template>
  <q-page id="my_info" padding>
    <div class="container">
      <q-form @submit="onSubmit" class="flex flex-center column">
        <div class="row avatar_area">
          <div class="col-12 flex flex-center q-my-xl">
            <q-avatar size="150px">
              <q-img :src="avatar" />
            </q-avatar>
          </div>
        </div>
        <div class="row flex flex-center q-gutter-md">
          <!-- 信箱 -->
          <div class="input col-12">
            <q-input rounded standout bottom-slots :label="email" readonly>
              <template v-slot:prepend>
                <q-icon name="mdi-email" />
              </template>
            </q-input>
          </div>
          <!-- 手機號碼 -->
          <div class="input col-12">
            <q-input
              rounded
              standout
              bottom-slots
              v-model="userForm.phone"
              label="Phone"
              :rules="[rules.phone]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-cellphone" />
              </template>
              <template v-slot:append v-if="userForm.phone">
                <q-icon
                  name="close"
                  @click="userForm.phone = ''"
                  class="cursor-pointer"
                />
              </template>

              <!-- <template v-slot:hint> Field hint </template> -->
            </q-input>
          </div>
          <!-- 暱稱 -->
          <div class="input col-12">
            <q-input
              rounded
              standout
              bottom-slots
              v-model="userForm.nickname"
              label="NickName"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-draw" />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click="userForm.nickname = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
          <!-- 密碼 -->
          <div class="input col-12">
            <q-input
              rounded
              standout
              bottom-slots
              v-model="userForm.password"
              label="Password"
              :rules="[rules.length]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-lock-reset" />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click="userForm.password = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
          <div class="col-12 flex justify-center">
            <q-btn class="submit_btn" label="確認修改" type="submit" />
          </div>
        </div>
      </q-form>
      <q-dialog v-model="userForm.editAvatar">
        <q-card style="min-width: 350px">
          <q-card-section>
            <q-file
              v-model="avatar"
              rounded
              standout
              clearable
              label="請選擇大頭貼"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-image-edit" />
              </template>
            </q-file>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
#my_info {
  .row {
    width: 75%;
  }
  .avatar_area {
    position: relative;
    .editBtn {
      position: absolute;
      left: 55%;
      top: 50%;
    }
  }
  .input {
    display: flex;
    justify-content: center;
  }

  .submit_btn {
    font-size: 16px;
    border-radius: 8px;
    color: #fff;
    background-color: $primary;

    &:hover {
      transition: 0.5s;
      color: $primary;
      background-color: $dark;
      border: 1px solid $primary;
    }
  }

  @media (max-width:992px) {
    .row {
      width: 100%;
    }
  }
}
</style>
