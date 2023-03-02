<script setup>
import { Notify } from 'quasar'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import validator from 'validator'
import { useUserStore } from 'src/stores/user'

const { register } = useUserStore()
const emit = defineEmits(['showRegisterCard', 'closeDialog'])

const router = useRouter()

const text = ref('')
const registerForm = reactive({
  email: '',
  phone: '',
  nickname: '',
  password: '',
  isPwd: true,
  isConfirmPwd: true,
  confirmPassword: ''
})

const rules = {
  email (email) {
    return validator.isEmail(email) || '信箱格式錯誤'
  },
  phone (phone) {
    return validator.isMobilePhone(phone, 'zh-TW') || '手機號碼格式錯誤'
  },
  required (value) {
    return (value && value.length > 0) || '欄位必填'
  },
  length (value) {
    return (
      (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
    )
  },
  nickname (value) {
    return (value.length >= 1 && value.length <= 12) || '長度必須為 1 ~ 12 個字'
  },
  confirmPassword (value) {
    return value === registerForm.password || '密碼不一致'
  }
}

const registerHandler = async () => {
  await register(registerForm)
  router.push('/')
  emit('closeDialog')
}
</script>

<template lang="pug">
q-card#register-card(flat style="width:1500px")
  q-card-section(horizontal)
    q-card-section.col-4.flex-center.column
      .flex.justify-center
        q-img.q-mb-xl(src="../assets/logo.png")
        q-btn.close-btn(icon="close" flat v-close-popup)
        p 已經註冊過了?
        q-btn.action_btn(label="登入" @click="emit('showRegisterCard', false)")

    q-separator

    q-card-section.col-8.text-center
      q-form(@submit="registerHandler").q-gutter-sm
        q-input.q-mt-lg.bottom-slots(rounded standout clearable counter maxlength="不限" v-model='registerForm.email' label='電子信箱' :rules="[rules.required ,rules.email,]")
          template(v-slot:prepend)
            q-icon(name="mdi-email")
          template(v-slot:append)
            q-icon(v-if="text !== ''" name="fa-solid fa-xmark" @click="text = ''" class="cursor-pointer")
        q-input(rounded standout clearable counter maxlength="10" v-model="registerForm.phone" label="手機號碼" :rules="[rules.required, rules.phone]")
          template(v-slot:prepend)
            q-icon(name="mdi-cellphone")
        q-input(rounded standout clearable counter maxlength="20" v-model="registerForm.nickname" label="暱稱" :rules="[rules.required, rules.nickname]")
          template(v-slot:prepend)
            q-icon(name="mdi-draw")
        q-input(rounded standout counter maxlength="12" v-model='registerForm.password' label='密碼' :rules="[rules.required, rules.password, rules.length]" :type="registerForm.isPwd ? 'password' : 'text'")
          template(v-slot:prepend)
            q-icon(name="mdi-lock")
          template(v-slot:append)
            q-icon.cursor-pointer(:name="registerForm.isPwd ? 'visibility_off' : 'visibility'" @click="registerForm.isPwd = !registerForm.isPwd")
        q-input(rounded standout counter maxlength="12" v-model='registerForm.confirmPassword' label='確認密碼' :rules="[rules.required, rules.confirmPassword, rules.length]" :type="registerForm.isConfirmPwd ? 'password' : 'text'")
          template(v-slot:prepend)
            q-icon(name="mdi-check-all")
          template(v-slot:append)
            q-icon.cursor-pointer(:name="registerForm.isConfirmPwd ? 'visibility_off' : 'visibility'" @click="registerForm.isConfirmPwd = !registerForm.isConfirmPwd")
        q-btn.confirm_btn(label="註冊" type="submit")
</template>

<style lang="scss" scoped>
  .close-btn {
    top: -120%;
    left: 275%;
    z-index: 1;
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
