<script setup>
import { reactive, watch, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useReservationStore } from 'stores/reservation.js'
import { apiAuth } from 'src/boot/axios'

const reservationStore = useReservationStore()
const { submitReservation } = reservationStore
const { reservations } = storeToRefs(reservationStore)

const date = new Date()
const mask = 'YYYY-MM-DD'
const reservationForm = reactive({
  selectedDate: '',
  selectedTime: '',
  selectedHour: 1,
  selectedPeople: 1,
  reserver: '',
  _id: reservations._id || '',
  loading: false
})

const availableTimeBtn = reactive([
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: true },
  { time: '12:00 PM', available: true },
  { time: '01:00 PM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: true },
  { time: '05:00 PM', available: true },
  { time: '06:00 PM', available: true },
  { time: '07:00 PM', available: true },
  { time: '08:00 PM', available: true },
  { time: '09:00 PM', available: true }
])

const max = computed(() => {
  const startIdx = availableTimeBtn.findIndex(
    (btn) => btn.time === reservationForm.selectedTime
  )
  if (startIdx > -1) {
    let i = startIdx
    while (availableTimeBtn[i] && availableTimeBtn[i].available) {
      i++
    }
    return i - startIdx
  } else return 12 // 總共 12 個時段
})

watch(
  () => reservationForm.selectedDate,
  async (value) => {
    try {
      // 沒有選擇日期的話按鈕全部為 false
      if (!reservationForm.selectedDate) {
        availableTimeBtn.forEach((btn) => {
          btn.available = false
          return btn
        })
        return
      }

      reservationForm.selectedTime = ''
      // 取得使用者選擇的當天日期
      const { data } = await apiAuth.post('/reservations/getdate', {
        selectedDate: value
      })

      // 被預訂的時間與時數
      const reservedTimeAndHours = []
      availableTimeBtn.forEach((btn) => {
        btn.available = true
        return btn
      })
      // info 會是 controller 傳進來的 result
      data.result.forEach((info) => {
        reservedTimeAndHours.push({
          reservedTime: info.time,
          reservedHours: info.hour
        })
      })

      reservedTimeAndHours.forEach((info) => {
        const index = availableTimeBtn.findIndex(
          (availableTime) => availableTime.time === info.reservedTime
        )
        for (let i = index; i <= index + info.reservedHours; i++) {
          availableTimeBtn[i].available = false
          if (
            // disabled後，選的時間 btn = 最後一個時間 btn 的話
            availableTimeBtn[i] ===
            availableTimeBtn[availableTimeBtn.length - 1]
          ) {
            return
          }
        }
      })
    } catch (error) {
    }
  }
)

const onSubmit = async () => {
  reservationForm.loading = true

  await submitReservation({
    // 對應到 model 裡的取的參數
    _id: reservationForm._id,
    selectedDate: reservationForm.selectedDate,
    selectedTime: reservationForm.selectedTime,
    selectedHour: reservationForm.selectedHour,
    totalPeople: reservationForm.selectedPeople
  })
  reservationForm.loading = false
}

reservationForm.selectedDate = `${date.getFullYear()}-0${date.getMonth() + 1
  }-${date.getDate()}`
</script>

<template>
  <q-page id="reservation" padding>
    <div class="container">
      <div class="breadcrumbs">
        <q-breadcrumbs>
          <template #separator>
            <q-icon name="chevron_right" size="1.5em" />
          </template>
          <q-breadcrumbs-el icon="mdi-home" to="/" />
          <q-breadcrumbs-el label="手刀預約" />
        </q-breadcrumbs>
      </div>

      <section class="notice q-mt-xl">
        <div class="text-h3 notice-header">手刀預約</div>
      </section>

      <section class="reservation_card flex justify-center">
        <q-card class="card_wrap" flat>
          <div class="q-pa-lg">
            <div class="text-h6">預約須知</div>
            <p class="q-mt-md">
              1.
              假日位置如遇客滿將保留１０分鐘，超過時間自動取消訂位不另行通知，請準時進場。
            </p>
            <p>
              2. 攜帶外食將酌收每人５０元清潔費，生日蛋糕、水、嬰兒食品除外。
            </p>
            <p>
              3.
              資料送出後待門市確認訂位狀況，並電話回覆訂位成功後才算完成訂位哦！（營業時間２４Ｈ內回覆）
            </p>
            <p>4. 如有其他問題、特殊情況可來電聯繫店內工作人員。</p>
          </div>

          <q-form class="q-gutter-md flex flex-center column" @submit="onSubmit">
            <q-card-section class="row flex justify-around">
              <q-card-section class="form_area col-xs-12 q-gutter-md">
                <div class="text-h6">預約日期</div>
                <div class="row justify-between">
                  <q-date class="col-xs-12 col-xl-7 q-mb-xs-lg q-mb-xl-none" v-model="reservationForm.selectedDate" subtitle="請選擇預約日期" text-color="dark"
                    :mask="mask" today-btn navigation-min-year-month="2023/02" navigation-max-year-month="2023/12" />
                  <div v-if="reservationForm.selectedDate !== ''" class="col-xs-12 col-xl-5 q-gutter-md flex justify-center">
                    <q-btn class="timeBtn" :color="
                      timeBtn.time === reservationForm.selectedTime
                        ? 'info'
                        : 'secondary'
                    " @click="reservationForm.selectedTime = timeBtn.time" v-for="timeBtn in availableTimeBtn"
                      :key="timeBtn.time" :disable="!timeBtn.available" checked-icon="task_alt"
                      unchecked-icon="panorama_fish_eye">
                      {{ timeBtn.time }}
                    </q-btn>
                  </div>
                  <div class="text-h6 q-mt-md">預約時數</div>
                  <q-slider class="col-xs-12" v-model="reservationForm.selectedHour" markers marker-labels thumb-color="secondary" :min="1"
                    :max="max" />
                  <div class="text-h6">預約人數</div>
                  <q-slider class="col-xs-12" v-model="reservationForm.selectedPeople" markers marker-labels thumb-color="secondary"
                    :min="1" :max="10" />
                </div>
              </q-card-section>
              <q-card-section class="confirm_area col-xs-12 flex justify-around items-center column">
                <div class="confirm_text text-h4 text-center q-pb-xl">--- 預約確認 ---</div>
                <div class="flex items-start column">
                  <p class="text-h6">
                    時間: {{ reservationForm.selectedDate }}
                    {{ reservationForm.selectedTime }}
                  </p>
                  <p class="text-h6">
                    時數: {{ reservationForm.selectedHour }} 小時
                  </p>
                  <p class="text-h6">
                    人數: {{ reservationForm.selectedPeople }} 人
                  </p>
                </div>
                <div class="text-center">
                  <q-btn class="submit_btn" label="送出預約" type="submit" :disable="reservationForm.loading" />
                </div>
              </q-card-section>
            </q-card-section>
          </q-form>
        </q-card>
      </section>
    </div>
  </q-page>
</template>

<style lang="scss">
#reservation {
  .notice {
    padding-bottom: 50px;

    .notice-header {
      border-left: 15px solid $primary;
      padding-left: 1rem;
    }
  }

  .reservation_card {
    margin-bottom: 50px;

    .card_wrap {
      border-radius: 16px;
      // padding: 2rem;

      .timeBtn {
        width: 100px;
        height: 50px;
        border-radius: 8px;
      }

      .confirm_text {
        color: $accent;
      }

      .submit_btn {
        font-size: 20px;
        padding: 5px 3px;
        width: 150px;
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
    }
  }

  @media (min-width:1400px) {
    .form_area {
      width: 70%;
    }
    .confirm_area {
      width: 30%;
    }
  }
}
</style>
