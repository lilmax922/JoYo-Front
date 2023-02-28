import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { Notify } from 'quasar'
import { apiAuth } from 'src/boot/axios'

export const useTeamupStore = defineStore('teamup', () => {
  const teamups = reactive([])
  const joinedTeamups = reactive([])

  // 發起揪團
  async function submitTeamup (form, _id) {
    try {
      if (_id === '') {
        const { data } = await apiAuth.post('/teamups', form)
        teamups.push(data.result)
        Notify.create({
          message: '揪團成功',
          textColor: 'primary',
          icon: 'mdi-emoticon-happy-outline',
          color: 'white'
        })
      } else {
        const { data } = await apiAuth.patch('/teamups/' + _id, form)
        const index = teamups.findIndex((teamup) => teamup._id === _id)
        teamups[index] = data.result
        Notify.create({
          message: '修改成功',
          textColor: 'primary',
          icon: 'mdi-emoticon-happy-outline',
          color: 'white'
        })
      }
    } catch (error) {
      Notify.create({
        message: '失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  // 取所有揪團
  const getAllTeamups = async () => {
    try {
      const { data } = await apiAuth.get('/teamups/all')
      teamups.splice(0, teamups.length, ...data.result)
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

  // 會員取自己的所有揪團
  const getMyTeamup = async () => {
    try {
      const { data } = await apiAuth.get('/teamups/member?people=organizer')
      const { data: data2 } = await apiAuth.get(
        '/teamups/member?people=participant'
      )
      teamups.splice(0, teamups.length, ...data.result)
      joinedTeamups.splice(0, joinedTeamups.length, ...data2.result)
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

  // 會員刪除發起的揪團
  const deleteMyTeamup = async (_id) => {
    try {
      console.log(_id)
      await apiAuth.patch('/teamups/delete/member/' + _id)
      const index = teamups.findIndex((teamup) => teamup._id === _id)
      teamups.splice(index, 1)
      Notify.create({
        message: '刪除成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      Notify.create({
        message: '資料刪除失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  // 會員刪除參加的揪團
  const deleteMyJoinedTeamup = async (_id) => {
    try {
      await apiAuth.post('/teamups/' + _id)
      const index = joinedTeamups.findIndex((teamup) => teamup._id === _id)
      joinedTeamups.splice(index, 1)
      Notify.create({
        message: '刪除成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      Notify.create({
        message: '資料刪除失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  // 刪除揪團
  const deleteTeamup = async (_id) => {
    try {
      await apiAuth.patch('/teamups/delete/' + _id)
      const index = teamups.findIndex((teamup) => teamup._id === _id)
      teamups.splice(index, 1)
      Notify.create({
        message: '刪除成功',
        textColor: 'primary',
        icon: 'mdi-emoticon-happy-outline',
        color: 'white'
      })
    } catch (error) {
      Notify.create({
        message: '資料刪除失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  return {
    teamups,
    joinedTeamups,
    submitTeamup,
    getAllTeamups,
    getMyTeamup,
    deleteTeamup,
    deleteMyTeamup,
    deleteMyJoinedTeamup
  }
})
