import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { Notify } from 'quasar'
import { apiAuth } from 'src/boot/axios'

export const useReservationStore = defineStore('reservation', () => {
  const reservations = reactive([])

  async function submitReservation (form, _id) {
    try {
      if (form._id === '') {
        const { data } = await apiAuth.post('/reservations', form)
        reservations.push(data.result)
        Notify.create({
          message: '預約成功',
          textColor: 'primary',
          icon: 'mdi-emoticon-happy-outline',
          color: 'white'
        })
      } else {
        const { data } = await apiAuth.patch('/reservations/' + form._id, form)
        const index = reservations.findIndex(reservation => reservation._id === form._id)
        reservations[index] = data.result
        Notify.create({
          message: '修改成功',
          textColor: 'primary',
          icon: 'mdi-emoticon-happy-outline',
          color: 'white'
        })
      }
    } catch (error) {
      Notify.create({
        message: '資料上傳失敗',
        textColor: 'secondary',
        color: 'white',
        icon: 'mdi-emoticon-dead-outline',
        caption: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const getAllReservations = async () => {
    try {
      const { data } = await apiAuth.get('/reservations/all')
      reservations.splice(0, data.result.length, ...data.result)
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

  // 會員刪除預約
  const deleteMyReservation = async (_id) => {
    try {
      await apiAuth.patch('/reservations/delete/member/' + _id)
      const index = reservations.findIndex(reservation => reservation._id === _id)
      reservations.splice(index, 1)
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

  // 管理員刪除預約
  const deleteReservation = async (_id) => {
    try {
      await apiAuth.patch('/reservations/delete/' + _id)
      const index = reservations.findIndex(reservation => reservation._id === _id)
      reservations.splice(index, 1)
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

  const getMyReservation = async () => {
    try {
      const { data } = await apiAuth.get('/reservations/getmyreservation')
      reservations.splice(0, data.result.length, ...data.result)
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

  return {
    reservations,
    submitReservation,
    getAllReservations,
    getMyReservation,
    deleteReservation,
    deleteMyReservation
  }
})
