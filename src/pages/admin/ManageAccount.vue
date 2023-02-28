<script setup>
import { reactive, ref } from 'vue'
import validator from 'validator'
import { Notify } from 'quasar'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const userStore = useUserStore()
const { getAllUsers, editUser, register, deleteUser } = userStore
const { accounts } = storeToRefs(userStore)

getAllUsers()

const filter = ref('')
const accountForm = reactive({
  _id: '',
  email: '',
  phone: '',
  nickname: '',
  password: '',
  confirmPassword: '',
  isPwd: true,
  isConfirmPwd: true,
  dialog: false,
  loading: false
})

const rules = {
  email (email) {
    return validator.isEmail(email) || '信箱格式錯誤'
  },
  phone (phone) {
    return validator.isMobilePhone(phone, 'zh-TW') || '手機號碼格式錯誤'
  },
  required (value) {
    return (value && value.length > 0) || '欄位必填'
  },
  length (value) {
    return (
      (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
    )
  },
  nickname (value) {
    return (
      (value.length >= 1 && value.length <= 12) || '長度必須為 1 ~ 12 個字'
    )
  },
  confirmPassword (value) {
    return value === accountForm.password || '密碼不一致'
  }
}

const columns = [
  {
    name: 'email',
    label: '信箱',
    field: (row) => row.email,
    align: 'left',
    sortable: true
  },
  {
    name: 'phone',
    label: '電話',
    field: (row) => row.phone,
    align: 'left',
    sortable: true
  },
  {
    name: 'nickname',
    label: '暱稱',
    field: (row) => row.nickname,
    align: 'left',
    sortable: true
  },
  {
    name: 'edit',
    label: '編輯/刪除',
    field: (row) => row.edit,
    align: 'center'
  }
]
const openDialog = (index) => {
  const idx = accounts.value.findIndex((account) => {
    return account._id === index
  })

  if (index === -1) {
    accountForm._id = ''
    accountForm.email = ''
    accountForm.phone = ''
    accountForm.nickname = ''
    accountForm.password = ''
    accountForm.confirmPassword = ''
    accountForm.loading = false
    accountForm.index = -1
  } else {
    accountForm._id = accounts.value[idx]._id
    accountForm.email = accounts.value[idx].email
    accountForm.phone = accounts.value[idx].phone
    accountForm.nickname = accounts.value[idx].nickname
    accountForm.password = accounts.value[idx].password
    accountForm.loading = false
    accountForm.index = idx
  }
  accountForm.dialog = true
}

const onSubmit = async () => {
  if (accountForm._id === '') {
    await register({
      email: accountForm.email,
      phone: accountForm.phone,
      nickname: accountForm.nickname,
      password: accountForm.password
    })
  } else {
    await editUser({
      _id: accountForm._id,
      email: accountForm.email,
      phone: accountForm.phone,
      nickname: accountForm.nickname,
      password: accountForm.password
    })
  }

  accountForm.dialog = false
}
</script>

<template>
  <q-page id="manage_account" padding>
    <div class="container">
      <div class="row">
        <!-- account table -->
        <div class="col-12">
          <q-table
            class="table"
            title="Account Management"
            :rows="accounts"
            :columns="columns"
            :row-key="_id"
            :filter="filter"
            :rows-per-page-options="[10, 15, 0]"
            no-data-label="目前尚無資料"
          >
            <!-- add_btn -->
            <template v-slot:top-left>
              <q-btn class="add_btn" label="新增帳號" @click="openDialog(-1)" />
            </template>

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
                  @click="deleteUser(props.row._id)"
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </div>

      <q-dialog class="dialog" v-model="accountForm.dialog" persistent>
        <q-layout container>
          <q-card flat>
            <q-form @submit="onSubmit">
              <q-card-section class="flex justify-end">
                <q-btn push icon="mdi-close" v-close-popup />
              </q-card-section>
              <div class="text-h4 text-center q-mb-md">
                {{ accountForm._id.length > 0 ? "編輯帳號" : "新增帳號" }}
              </div>
              <q-card-section>
                <div class="row">
                  <!-- e-mail -->
                  <div class="input col-12">
                    <q-input
                      rounded
                      standout
                      bottom-slots
                      v-model="accountForm.email"
                      label="E-mail"
                      :rules="[rules.required, rules.email]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-email" />
                      </template>

                      <template v-slot:append>
                        <q-icon
                          name="close"
                          @click="accountForm.email = ''"
                          class="cursor-pointer"
                        />
                      </template>
                    </q-input>
                  </div>

                  <!-- phone -->
                  <div class="input col-12">
                    <q-input
                      rounded
                      standout
                      bottom-slots
                      v-model="accountForm.phone"
                      label="Phone"
                      :rules="[rules.required, rules.phone]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-cellphone" />
                      </template>
                      <template v-slot:append v-if="accountForm.phone">
                        <q-icon
                          name="close"
                          @click="accountForm.phone = ''"
                          class="cursor-pointer"
                        />
                      </template>
                    </q-input>
                  </div>

                  <!-- nickname -->
                  <div class="input col-12">
                    <q-input
                      rounded
                      standout
                      bottom-slots
                      v-model="accountForm.nickname"
                      label="NickName"
                      :rules="[rules.required, rules.nickname]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-draw" />
                      </template>
                      <template v-slot:append>
                        <q-icon
                          name="close"
                          @click="accountForm.nickname = ''"
                          class="cursor-pointer"
                        />
                      </template>
                    </q-input>
                  </div>

                  <!-- password -->
                  <div class="input col-12">
                    <q-input
                      rounded
                      standout
                      bottom-slots
                      v-model="accountForm.password"
                      label="Password"
                      :rules="[rules.required, rules.length]"
                      :type="accountForm.isPwd ? 'password' : 'text'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-lock" />
                      </template>
                      <template v-slot:append>
                        <q-icon
                          class="cursor-pointer"
                          :name="
                            accountForm.isPwd ? 'visibility_off' : 'visibility'
                          "
                          @click="accountForm.isPwd = !accountForm.isPwd"
                        />
                      </template>
                    </q-input>
                  </div>

                  <!-- confirmPassword -->
                  <div class="input col-12">
                    <q-input
                      rounded
                      standout
                      bottom-slots
                      v-model="accountForm.confirmPassword"
                      label="Confirm Password"
                      :rules="[
                        rules.required,
                        rules.length,
                        rules.confirmPassword,
                      ]"
                      :type="accountForm.isConfirmPwd ? 'password' : 'text'"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-check-all" />
                      </template>
                      <template v-slot:append>
                        <q-icon
                          class="cursor-pointer"
                          :name="
                            accountForm.isConfirmPwd
                              ? 'visibility_off'
                              : 'visibility'
                          "
                          @click="
                            accountForm.isConfirmPwd = !accountForm.isConfirmPwd
                          "
                        />
                      </template>
                    </q-input>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions class="flex flex-center">
                <q-btn
                  class="submit_btn q-mb-sm"
                  type="submit"
                  :label="accountForm._id.length > 0 ? '編輯' : '新增'"
                />
              </q-card-actions>
            </q-form>
          </q-card>
        </q-layout>
      </q-dialog>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.table {
  margin-top: 100px;
}
.input {
  padding-bottom: 1rem;
}
.add_btn,
.submit_btn {
  color: $dark;
  background-color: $primary;
  border-radius: 8px;
  transition: 0.5s;
  &:hover {
    color: $primary;
    background-color: $dark;
    border: 1px solid $primary;
  }
}
.submit_btn {
  font-size: 16px;
  padding: 0 15px;
}
</style>
