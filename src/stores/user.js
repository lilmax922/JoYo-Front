import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { Notify } from 'quasar'
import { api, apiAuth } from 'boot/axios.js'

export const useUserStore = defineStore('user', () => {
  const _id = ref('')
  const email = ref('')
  const phone = ref('')
  const nickname = ref('')
  const token = ref('')
  const role = ref(0)
  const showLoginCard = ref(false)
  const accounts = reactive([])

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })
  const avatar = computed(() => {
    return `https://source.boringavatars.com/beam/256/${email.value}?colors=C4DDD6,D4DDD6,E4DDD6,E4E3CD,ECECDD`
  })

  async function register (form) {
    try {
      await api.post('/users', form)
      Notify.create({
        message: '註冊成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      Notify.create({
        message: error?.response?.data?.message || '發生錯誤',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline'
      })
    }
  }

  async function login (form) {
    try {
      const { data } = await api.post('/users/login', form)
      _id.value = data.result._id
      email.value = data.result.email
      phone.value = data.result.phone
      nickname.value = data.result.nickname
      token.value = data.result.token
      role.value = data.result.role
      Notify.create({
        message: '登入成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      Notify.create({
        message: '登入失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  async function logout () {
    try {
      await apiAuth.delete('/users/logout')
      _id.value = ''
      token.value = ''
      email.value = ''
      role.value = 0
      this.router.push('/')
      Notify.create({
        message: '登出成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      Notify.create({
        message: error?.response?.data?.message || '發生錯誤',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline'
      })
    }
  }

  function isLoginHandler () {
    if (token.value.length > 0) {
      return true
    }
    showLoginCard.value = true
    return false
  }

  async function getMyself () {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/myself')
      _id.value = data.result._id
      email.value = data.result.email
      nickname.value = data.result.nickname
      phone.value = data.result.phone
      role.value = data.result.role
    } catch (error) {
      logout()
    }
  }

  const getAllUsers = async () => {
    try {
      const { data } = await apiAuth.get('/users/allusers')
      accounts.splice(0, accounts.length, ...data.result)
    } catch (error) {
      Notify.create({
        message: '資料取得失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const editUser = async (form) => {
    try {
      await apiAuth.patch('/users/edituser', form)
      Notify.create({
        message: '修改成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      Notify.create({
        message: '資料取得失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const deleteUser = async (_id) => {
    console.log(_id)
    try {
      await apiAuth.patch('/users/deleteUser/' + _id, { status: 1 })
      const index = accounts.findIndex((user) => user._id === _id)
      accounts.splice(index, 1)
      Notify.create({
        message: '刪除成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      console.log(error)
      Notify.create({
        message: '資料取得失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  return {
    _id,
    token,
    email,
    phone,
    nickname,
    role,
    avatar,
    register,
    login,
    logout,
    getMyself,
    getAllUsers,
    editUser,
    deleteUser,
    isLogin,
    isAdmin,
    showLoginCard,
    accounts,
    isLoginHandler
  }
}, {
  persist: {
    key: 'user',
    paths: ['token']
  }
})
