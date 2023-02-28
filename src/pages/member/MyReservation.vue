<script setup>
import { storeToRefs } from 'pinia'
import { useReservationStore } from 'src/stores/reservation'

const ReservationStore = useReservationStore()
const { getMyReservation, deleteMyReservation } = ReservationStore
const { reservations } = storeToRefs(ReservationStore)

getMyReservation()

// q-table
const columns = [
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
    name: 'delete',
    label: '刪除',
    field: (row) => row.delete,
    align: 'center'
  }
]
</script>

<template>
  <q-page id="my_reservation" padding>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <q-table
          class="table"
            title="我的預約"
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

            <!-- delete_area -->
            <template v-slot:body-cell-delete="props">
              <q-td class="text-center q-gutter-sm">
                <q-btn
                  icon="delete"
                  color="secondary"
                  fab-mini
                  unelevated
                  @click="deleteMyReservation(props.row._id)"
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
#my_reservation {
  .table {
    margin-top: 100px;
  }
}
</style>
