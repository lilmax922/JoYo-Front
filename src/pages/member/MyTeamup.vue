<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTeamupStore } from 'src/stores/teamup'

const teamupStore = useTeamupStore()
const { getMyTeamup, deleteMyTeamup, deleteMyJoinedTeamup } = teamupStore
const { teamups, joinedTeamups } = storeToRefs(teamupStore)

getMyTeamup()

const filter1 = ref('')
const filter2 = ref('')

// q-table
const columns = [
  {
    name: 'title',
    label: '揪團標題',
    field: row => row.title,
    align: 'left'
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
    name: 'currentPeople',
    label: '目前人數',
    field: (row) => row.currentPeople,
    align: 'left',
    sortable: true
  },
  {
    name: 'totalPeople',
    label: '總人數',
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
  <q-page id="my_teamup" padding>
    <div class="container">

      <!-- 發起的揪團 -->
      <div class="row">
        <div class="col-12">
          <q-table
            class="table"
            title="發起的揪團"
            :rows="teamups"
            :columns="columns"
            row-key="_id"
            :rows-per-page-options="[10, 15, 0]"
            :filter="filter1"
          >
            <!-- filter_area -->
            <template v-slot:top-right>
              <q-input debounce="300" v-model="filter1" placeholder="Search">
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
                  @click="deleteMyTeamup(props.row._id)"
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <!-- 參加的揪團 -->
      <div class="row q-mt-xl">
        <div class="col-12">
          <q-table
            title="參加的揪團"
            :rows="joinedTeamups"
            :columns="columns"
            row-key="_id"
            :rows-per-page-options="[10, 15, 0]"
            :filter="filter2"
          >

            <!-- filter_area -->
            <template v-slot:top-right>
              <q-input debounce="300" v-model="filter2" placeholder="Search">
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
                  @click="deleteMyJoinedTeamup(props.row._id)"
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
#my_teamup {
  .table {
    margin-top: 100px;
  }
}
</style>
