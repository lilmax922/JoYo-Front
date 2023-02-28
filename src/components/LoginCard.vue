<script setup>
import { reactive, ref } from 'vue'
import validator from 'validator'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()

const emit = defineEmits(['showRegisterCard', 'closeDialog'])

const loginForm = reactive({
  email: '',
  password: '',
  isPwd: true,
  confirmPassword: ''
})

const rules = {
  email (email) {
    return validator.isEmail(email) || '信箱格式錯誤'
  },
  required (value) {
    return (value && value.length > 0) || '欄位必填'
  },
  length (value) {
    return (
      (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
    )
  }
}

const login = async () => {
  await user.login(loginForm)
  emit('closeDialog')
}
</script>

<template lang="pug">
q-card#login-card(flat style="width:1000px")
  q-card-section(horizontal)
    q-card-section.col-8.text-center
      h5.text-center 會員登入
      q-form(@submit="login").q-gutter-sm
        q-input(rounded standout clearable v-model='loginForm.email' label='電子信箱' :rules="[rules.required ,rules.email]")
          template(v-slot:prepend)
            q-icon(name="mdi-email")
        q-input(rounded standout counter maxlength="12" v-model='loginForm.password' label='密碼' :rules="[rules.password, rules.required, rules.length]" :type="loginForm.isPwd ? 'password' : 'text'")
          template(v-slot:prepend)
            q-icon(name="mdi-lock")
          template(v-slot:append)
            q-icon.cursor-pointer(:name="loginForm.isPwd ? 'visibility_off' : 'visibility'" @click="loginForm.isPwd = !loginForm.isPwd")
        q-btn.confirm_btn(label="登入" type="submit")

    q-separator

    q-card-section.col-4.flex-center.column
      q-img.q-mb-md(src="../assets/logo.png")
      q-btn.close-btn(icon="close" flat v-close-popup)
      p 還沒建立帳號嗎?
      q-btn.action_btn(label="註冊" @click="emit('showRegisterCard', true)")
</template>

<style lang="scss" scoped>
  .close-btn {
    top: -50%;
    left: 35%;
  }

  .action_btn {
    padding: 5px 3px;
      width: 100px;
      border-radius: 8px;
      border: 1px solid #fff;

      &:hover {
        transition: 0.5s;
        color: $dark;
        background-color: #fff;
      }
  }
  .confirm_btn{
      padding: 5px 3px;
      width: 100px;
      color: $dark;
      background-color: $primary;
      border-radius: 8px;

      &:hover {
        transition: 0.5s;
        color: $primary;
        background-color: $dark;
        border: 1px solid $primary;
      }
    }
</style>
