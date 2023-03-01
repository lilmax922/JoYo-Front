<script setup>
import { reactive, watch, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { useTeamupStore } from 'stores/teamup.js'
import { apiAuth } from 'src/boot/axios'

const $q = useQuasar()
const teamupStore = useTeamupStore()
const { submitTeamup } = teamupStore
const { teamups } = storeToRefs(teamupStore)

const date = new Date()
const mask = 'YYYY-MM-DD'
const typeGroup = ref([])
const typeOptions = reactive([
  { label: '陣營', value: '陣營', disable: false },
  { label: '策略', value: '策略', disable: false },
  { label: '抽象', value: '抽象', disable: false },
  { label: '心機', value: '心機', disable: false },
  { label: '卡牌', value: '卡牌', disable: false },
  { label: '派對', value: '派對', disable: false },
  { label: '家庭', value: '家庭', disable: false },
  { label: '兒童', value: '兒童', disable: false }
])

const teamupForm = reactive({
  selectedDate: '',
  selectedTime: '',
  selectedHour: 1,
  currentPeople: 1,
  totalPeople: 4,
  types: [],
  cardImage: undefined,
  title: '',
  content: '',
  _id: teamups._id || '',
  loading: false
})
const rules = {
  required (value) {
    return (value && value.length > 0) || '欄位必填'
  },
  length (value) {
    return (
      (value.length >= 1 && value.length <= 30) || '長度必須為 1 ~ 30 個字'
    )
  }
}

const onRejected = (rejectedEntries) => {
  $q.notify({
    type: 'negative',
    message: '檔案不得超過 10 MB'
  })
}

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
    (btn) => btn.time === teamupForm.selectedTime
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
  () => teamupForm.selectedDate,
  async (value) => {
    try {
      // 沒有選擇日期的話按鈕全部為 false
      if (!teamupForm.selectedDate) {
        availableTimeBtn.forEach((btn) => {
          btn.available = false
          return btn
        })
        return
      }

      teamupForm.selectedTime = ''
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
    } catch (error) {}
  }
)

const onSubmit = async () => {
  teamupForm.loading = true

  const fd = new FormData()
  fd.append('_id', teamupForm._id)
  fd.append('selectedDate', teamupForm.selectedDate)
  fd.append('selectedTime', teamupForm.selectedTime)
  fd.append('selectedHour', teamupForm.selectedHour)
  fd.append('currentPeople', teamupForm.currentPeople)
  fd.append('totalPeople', teamupForm.totalPeople)
  // fd.append('type', typeGroup.value)
  typeGroup.value.forEach((item) => {
    fd.append('types', item)
  })
  fd.append('cardImage', teamupForm.cardImage)
  fd.append('title', teamupForm.title)
  fd.append('content', teamupForm.content)
  await submitTeamup(fd, teamupForm._id)
  teamupForm.loading = false
}

teamupForm.selectedDate = `${date.getFullYear()}-0${
  date.getMonth() + 1
}-${date.getDate()}`
</script>

<template>
  <q-page id="teamup" padding>
    <div class="container q-gutter-md">
      <div class="breadcrumbs">
        <q-breadcrumbs>
          <template #separator>
            <q-icon name="chevron_right" size="1.5em" />
          </template>
          <q-breadcrumbs-el icon="mdi-home" to="/" />
          <q-breadcrumbs-el label="揪團組隊" />
        </q-breadcrumbs>
      </div>

      <section class="flex justify-center q-mt-xl">
        <q-card class="card_wrap" flat>
          <q-form class="q-gutter-md" @submit="onSubmit">
            <!-- Choose teamup date & time -->
            <q-card-section >
              <div class="text-h4 text-center q-my-lg">選擇揪團日期</div>
              <div class="row">
                <!-- Calendar_area -->
                <div class="col-xs-12 col-xl-6 text-center q-mb-xs-lg q-mb-xl-none">
                  <q-date
                    v-model="teamupForm.selectedDate"
                    subtitle="請選擇揪團日期"
                    :mask="mask"
                    today-btn
                    navigation-min-year-month="2023/02"
                    navigation-max-year-month="2023/12"
                    style="width: 60%"
                    text-color="dark"
                  />
                </div>

                <!-- time_area -->
                <div class="col-xs-12 col-xl-6 flex column justify-xs-center justify-xl-around">
                  <!-- timeBtn -->
                  <div
                    v-if="teamupForm.selectedDate !== ''"
                    class="q-gutter-md q-mb-xs-lg q-mb-xl-none flex justify-center"
                  >
                    <q-btn
                      class="timeBtn"
                      v-for="timeBtn in availableTimeBtn"
                      :key="timeBtn.time"
                      :color="
                        timeBtn.time === teamupForm.selectedTime
                          ? 'info'
                          : 'secondary'
                      "
                      @click="teamupForm.selectedTime = timeBtn.time"
                      :disable="!timeBtn.available"
                      checked-icon="task_alt"
                      unchecked-icon="panorama_fish_eye"
                    >
                      {{ timeBtn.time }}
                    </q-btn>
                  </div>
                  <!-- hour -->
                  <div class="hour flex flex-center column">
                    <div class="text-h6">預約時數</div>
                    <q-slider
                    class="text-center"
                      v-model="teamupForm.selectedHour"
                      markers
                      marker-labels
                      thumb-color="secondary"
                      :min="1"
                      :max="max"
                      style="max-width: 650px"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>

            <!-- teamup info -->
            <q-card-section class="q-gutter-md">
              <div class="text-h4 text-center q-my-lg">填寫揪團資料</div>
              <div class="row">
                <div class="title col-xs-12 col-xl-6" style="flex-grow: 1;">
                  <div class="text-h6">來點酷酷的標題吧!</div>
                  <q-input
                    v-model="teamupForm.title"
                    rounded
                    standout
                    label="請新增標題"
                    autogrow
                    clearable
                    style="max-width: 95%"
                    :rules="[rules.required, rules.length]"
                  />
                </div>

                <div class="content col-xs-12 col-xl-6" style="flex-grow: 1;">
                  <div class="text-h6">想新增甚麼內容嗎?</div>
                  <q-input
                    v-model="teamupForm.content"
                    rounded
                    standout
                    label="請新增內容"
                    autogrow
                    clearable
                    style="max-width: 95%"
                    :rules="[rules.required]"
                  />
                </div>

                <div class="card_image col-xs-12 col-xl-6" style="flex-grow: 1;">
                  <div class="text-h6">上傳揪團圖片</div>
                  <q-file
                    rounded
                    standout
                    v-model="teamupForm.cardImage"
                    use-chips
                    label="請選擇卡片圖"
                    hint="Max file size (10 MB)"
                    style="max-width: 95%"
                    max-file-size="10485760"
                    @rejected="onRejected"
                  >
                  </q-file>
                </div>

                <div class="types col-xs-12 col-xl-6">
                  <div class="text-h6">我有興趣的類型</div>
                  <q-option-group
                    class="text-center"
                    v-model="typeGroup"
                    :options="typeOptions"
                    color="primary"
                    inline
                    type="checkbox"
                  />
                </div>

                <div class="current_people col-xs-12 col-xl-6">
                  <div class="text-h6">目前人數</div>
                  <q-slider
                    v-model="teamupForm.currentPeople"
                    markers
                    marker-labels
                    thumb-color="secondary"
                    :min="1"
                    :max="10"
                    style="max-width: 95%"
                  />
                </div>

                <div class="total_people col-xs-12 col-xl-6">
                  <div class="text-h6">揪團總人數</div>
                  <q-slider
                    v-model="teamupForm.totalPeople"
                    markers
                    marker-labels
                    thumb-color="secondary"
                    :min="1"
                    :max="10"
                    style="max-width: 95%"
                  />
                </div>
              </div>
            </q-card-section>
            <q-card-actions class="flex flex-center q-mb-md">
              <q-btn
                class="submit_btn"
                label="送出揪團"
                type="submit"
                :disable="teamupForm.loading"
              />
            </q-card-actions>
          </q-form>
        </q-card>
      </section>
    </div>
  </q-page>
</template>

<style lang="scss">
#teamup {
  .text-h4 {
    color: $accent;
  }
  .card_wrap {
    border-radius: 16px;

    .timeBtn {
      width: 100px;
      height: 50px;
      border-radius: 8px;
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

    .title,
    .content,
    .main,
    .types,
    .current_people,
    .total_people,
    .card_image {
      padding-bottom: 1.5rem;
    }
  }
}
</style>
