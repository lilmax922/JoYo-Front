<script setup>
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useReservationStore } from 'src/stores/reservation'

const ReservationStore = useReservationStore()
const { getAllReservations, deleteReservation, submitReservation } =
  ReservationStore
const { reservations } = storeToRefs(ReservationStore)

getAllReservations()

const reservationForm = reactive({
  _id: '',
  date: Date,
  time: '',
  hour: 0,
  totalPeople: 0,
  loading: false,
  dialog: false
})

// q-table
const filter = ref('')
const columns = [
  {
    name: 'reserver',
    label: '預約人',
    field: (row) => row.reserver.nickname,
    align: 'left',
    sortable: true
  },
  {
    name: 'phone',
    label: '聯絡電話',
    field: (row) => row.reserver.phone,
    align: 'left',
    sortable: true
  },
  {
    name: 'date',
    label: '日期',
    field: (row) => {
      const date = new Date(row.date).toLocaleDateString()
      return date
    },
    align: 'left',
    sortable: true
  },
  {
    name: 'time',
    label: '時間',
    field: (row) => row.time,
    align: 'left',
    sortable: true
  },
  {
    name: 'hour',
    label: '時數',
    field: (row) => row.hour,
    align: 'left',
    sortable: true
  },
  {
    name: 'totalPeople',
    label: '人數',
    field: (row) => row.totalPeople,
    align: 'left',
    sortable: true
  },
  {
    name: 'edit',
    label: '編輯/刪除',
    field: (row) => row.edit,
    align: 'center'
  },
  {
    headerStyle: 'font-size 20px'
  }
]

const openDialog = (index) => {
  const idx = reservations.value.findIndex(
    (reservation) => reservation._id === index
  )
  reservationForm._id = reservations.value[idx]._id
  reservationForm.totalPeople = reservations.value[idx].totalPeople
  reservationForm.dialog = true
}
const onSubmit = async () => {
  reservationForm.loading = true
  await submitReservation({
    _id: reservationForm._id,
    totalPeople: reservationForm.totalPeople
  })
  reservationForm.loading = false
  reservationForm.dialog = false
}
</script>

<template>
  <q-page id="manage_reservation" padding>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <q-table
            class="table"
            title="預約管理"
            :rows="reservations"
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
                  @click="deleteReservation(props.row._id)"
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <!-- 編輯預約資料 dialog -->
      <q-dialog v-model="reservationForm.dialog" persistent>
        <q-layout class="edit_dialog" container>
          <q-card>
            <q-form @submit="onSubmit">
              <q-card-section class="flex justify-end">
                <q-btn push dense icon="mdi-close" v-close-popup />
              </q-card-section>
              <div class="text-h4 text-center">編輯預約</div>
              <q-card-section>
                <div class="text-subtitle1">預約人數</div>
                <q-slider
                  v-model="reservationForm.totalPeople"
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
                  :loading="reservationForm.loading"
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
.edit_dialog {
  position: absolute;
  top: 25%;
  .submit_btn {
    color: #fff;
    background-color: $primary;
    border-radius: 8px;
  }
}
</style>
