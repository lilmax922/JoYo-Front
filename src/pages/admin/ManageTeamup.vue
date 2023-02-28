<script setup>
import { ref, reactive, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTeamupStore } from 'src/stores/teamup'

const teamupStore = useTeamupStore()
const { getAllTeamups, submitTeamup, deleteTeamup } = teamupStore
const { teamups } = storeToRefs(teamupStore)

getAllTeamups()

const cardImage = ref('')
const teamupForm = reactive({
  _id: '',
  organizer: '',
  participant: [],
  date: Date,
  time: '',
  hour: 0,
  currentPeople: 0,
  totalPeople: 0,
  cardImage: undefined,
  types: [],
  title: '',
  content: '',
  loading: false,
  dialog: false
})

// q-table
const filter = ref('')
const columns = [
  {
    name: 'image',
    label: '揪團圖片',
    field: row => row.cardImage,
    align: 'center'
  },
  {
    name: 'organizer',
    label: '揪團發起人',
    field: (row) => row.organizer.nickname,
    align: 'center',
    sortable: true
  },
  {
    name: 'phone',
    label: '發起人電話',
    field: row => row.organizer.phone,
    align: 'center',
    sortable: true
  },
  {
    name: 'participant',
    label: '參加人資訊',
    field: row => row.participant,
    align: 'center',
    sortable: true,
    format: (val, row) => {
      return row.participant.map(p => `${p.nickname} (${p.phone})`).join('\n')
    }
  },
  {
    name: 'date',
    label: '日期',
    field: (row) => {
      const date = new Date(row.date).toLocaleDateString()
      return date
    },
    align: 'center',
    sortable: true
  },
  {
    name: 'time',
    label: '時間',
    field: (row) => row.time,
    align: 'center',
    sortable: true
  },
  {
    name: 'hour',
    label: '時數',
    field: (row) => row.hour,
    align: 'center',
    sortable: true
  },
  {
    name: 'currentPeople',
    label: '目前人數',
    field: (row) => row.currentPeople,
    align: 'center',
    sortable: true
  },
  {
    name: 'totalPeople',
    label: '揪團人數',
    field: (row) => row.totalPeople,
    align: 'center',
    sortable: true
  },
  {
    name: 'edit',
    label: '編輯/刪除',
    field: (row) => row.edit,
    align: 'center'
  }
]

const previewUrlHandler = (file, data) => {
  if (file && typeof file !== 'string' && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.addEventListener('load', (event) => {
      cardImage.value = event.target.result
    })
    reader.readAsDataURL(file)
  } else {
    if (typeof data === 'object') {
      data.push(file)
    } else {
      cardImage.value = file
    }
  }
}

watch(() => teamupForm.cardImage, (value) => {
  cardImage.value = ''
  previewUrlHandler(value, cardImage.value)
})

const openDialog = (index) => {
  const idx = teamups.value.findIndex(
    (teamup) => teamup._id === index
  )

  teamupForm._id = teamups.value[idx]._id
  teamupForm.organizer = teamups.value[idx].organizer
  teamupForm.participant = teamups.value[idx].participant
  teamupForm.date = teamups.value[idx].date
  teamupForm.time = teamups.value[idx].time
  teamupForm.hour = teamups.value[idx].hour
  teamupForm.currentPeople = teamups.value[idx].currentPeople
  teamupForm.totalPeople = teamups.value[idx].totalPeople
  teamupForm.cardImage = teamups.value[idx].cardImage
  teamupForm.title = teamups.value[idx].title
  teamupForm.content = teamups.value[idx].content

  teamupForm.dialog = true
}
const onSubmit = async () => {
  teamupForm.loading = true

  const fd = new FormData()
  fd.append('cardImage', teamupForm.cardImage)
  fd.append('currentPeople', teamupForm.currentPeople)
  fd.append('totalPeople', teamupForm.totalPeople)
  await submitTeamup(fd, teamupForm._id)
  teamupForm.loading = false
  teamupForm.dialog = false
}
</script>

<template>
  <q-page id="manage_reservation" padding>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <q-table
            class="table"
            title="Teamups"
            :rows="teamups"
            :columns="columns"
            row-key="_id"
            :rows-per-page-options="[10, 15, 0]"
            :filter="filter"
          >
            <!-- filter_area -->
            <template v-slot:top-right>
              <q-input debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

            <!-- cardImage_area -->
            <template v-slot:body-cell-image="props">
              <q-img :src="props.row.cardImage" height="150px" />
            </template>

            <!-- edit_area -->
            <template v-slot:body-cell-edit="props">
              <q-td class="text-center q-gutter-sm">
                <q-btn
                  icon="mdi-pencil"
                  color="info"
                  fab-mini
                  unelevated
                  size="sm"
                  @click="openDialog(props.row._id)"
                />
                <q-btn
                  icon="delete"
                  color="secondary"
                  fab-mini
                  unelevated
                  @click="deleteTeamup(props.row._id)"
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <!-- 編輯揪團資料 dialog -->
      <q-dialog v-model="teamupForm.dialog" persistent>
        <q-layout class="edit_dialog" container>
          <q-card>
            <q-form @submit="onSubmit">
              <q-card-section class="flex justify-end">
                <q-btn push dense icon="mdi-close" v-close-popup />
              </q-card-section>
              <div class="text-h4 text-center">編輯揪團資料</div>
              <q-card-section>
                <div class="text-subtitle1">揪團卡片圖</div>
                <q-file
                    rounded
                    standout
                    v-model="teamupForm.cardImage"
                    use-chips
                    label="請選擇卡片圖"
                  >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
                <div class="row q-pa-md flex flex-center">
                  <q-card>
                    <q-img class="text-center" :src="cardImage" width="200px" height="200px" />
                  </q-card>
                </div>

                <div class="text-subtitle1">目前人數</div>
                <q-slider
                  v-model="teamupForm.currentPeople"
                  markers
                  marker-labels
                  thumb-color="secondary"
                  :min="1"
                  :max="10"
                />

                <div class="text-subtitle1">揪團人數</div>
                <q-slider
                  v-model="teamupForm.totalPeople"
                  markers
                  marker-labels
                  thumb-color="secondary"
                  :min="1"
                  :max="10"
                />
              </q-card-section>

              <q-card-actions class="flex justify-center q-pa-md">
                <q-btn
                  class="submit_btn text-center"
                  type="submit"
                  label="確認修改"
                  :loading="teamupForm.loading"
                />
              </q-card-actions>
            </q-form>
          </q-card>
        </q-layout>
      </q-dialog>
    </div>
  </q-page>
</template>

<style lang="scss">
.table {
  margin-top: 100px;
}

// 參加者資訊換行
.q-table tbody td {
  white-space: pre-wrap;
}

.edit_dialog {
  position: absolute;
  top: 10%;
  .submit_btn {
    color: #fff;
    background-color: $primary;
    border-radius: 8px;
  }
}
</style>
