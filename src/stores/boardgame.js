import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { Notify } from 'quasar'

export const useBoardgameStore = defineStore('boardgame', () => {
  const boardgames = reactive([])

  // 取張貼桌遊
  const getPostBoardgames = async () => {
    try {
      const { data } = await apiAuth.get('/boardgames')
      boardgames.splice(0, boardgames.length, ...data.result)
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

  // 取所有桌遊
  const getAllBoardgames = async () => {
    try {
      const { data } = await apiAuth.get('/boardgames/all')
      boardgames.splice(0, boardgames.length, ...data.result)
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

  // 刪除桌遊
  const deleteBoardgame = async (_id) => {
    try {
      await apiAuth.patch('/boardgames/delete/' + _id, {
        status: 1
      })
      const index = boardgames.findIndex((item) => item._id === _id)
      boardgames.splice(index, 1)
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

  // 上傳桌遊
  const submitBoardgame = async (fd, _id) => {
    try {
      if (_id === '') {
        const { data } = await apiAuth.post('/boardgames', fd)
        boardgames.push(data.result)
        Notify.create({
          message: '新增成功',
          textColor: 'primary',
          icon: 'mdi-emoticon-happy-outline',
          color: 'white'
        })
      } else {
        const { data } = await apiAuth.patch('/boardgames/' + _id, fd)
        const index = boardgames.findIndex((item) => item._id === _id)
        boardgames[index] = data.result
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

  return {
    boardgames,
    getPostBoardgames,
    getAllBoardgames,
    deleteBoardgame,
    submitBoardgame
  }
})
