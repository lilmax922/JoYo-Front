<script setup>
import { reactive } from 'vue'
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
q-card#login_card(flat)
  q-btn.close-btn(icon="close" flat v-close-popup)
  q-card-section.flex.col-sm
    q-card-section.col-xs-12.col-md-8.column.text-center(style="flex-grow:1")
      q-img.first_logo.q-mb-md(src="../assets/logo.png" style="display:none;")
      //- p.text-h4.text-center 會員登入
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

    q-separator.gt-md

    q-card-section.logo_area.col-xs-12.col-md-4.flex-center.column
      q-img.secondary_logo.q-mb-md(src="../assets/logo.png")

      p 還沒建立帳號嗎?
      q-btn.action_btn(label="註冊" @click="emit('showRegisterCard', true)")
</template>

<style lang="scss" scoped>
#login_card {
  width: 2000px;
    .close-btn {
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 5;
  }

.logo_area {
  flex-grow: 1;
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

    @media (max-width:536px) {
      .first_logo {
        display: block !important;
        width: 60%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
      .secondary_logo {
        display: none;
      }
    }
  }
</style>
