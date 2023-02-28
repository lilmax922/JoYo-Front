<script setup>
defineProps({
  _id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  cardImage: {
    type: String,
    default: ''
  },
  types: {
    type: Array,
    default () {
      return []
    }
  },
  players: {
    type: String,
    default: ''
  },
  gameTime: {
    type: Number,
    default: 0
  },
  post: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div id="bg_card">
    <q-card flat>
      <div class="image_area">
        <q-img :ratio="4 / 3" :src="cardImage" />
      </div>
      <q-card-section>
        <div class="types_area q-mb-sm">
          <q-chip
            class="type_tag"
            v-for="(type, i) in types"
            :key="i"
            color="secondary"
            text-color="white"
            size="sm"
          >
            &#35;{{ type }}
          </q-chip>
        </div>
        <div class="text-h5 bg_name">{{ name }}</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="flex-center" horizontal>
        <q-card-section class="col-8 q-pt-none">
          <q-list>
            <q-item class="q-pa-none">
              <q-item-section>
                <q-icon name="mdi-account-multiple" size="xs" />
              </q-item-section>
              <q-item-section style="font-size: 18px">
                &nbsp;{{ players }} 人
              </q-item-section>
            </q-item>
            <q-item class="q-pa-none">
              <q-item-section class="flex-auto">
                <q-icon name="mdi-clock" size="xs" />
              </q-item-section>
              <q-item-section> &nbsp;約 {{ gameTime }} 分鐘 </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section class="col-4 q-pa-none flex justify-center">
          <q-btn class="moreBtn" :to="'/BGInfo/' + _id" label="More"></q-btn>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>
