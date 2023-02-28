<script setup>
const props = defineProps({
  _id: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: ''
  },
  time: {
    type: String,
    default: ''
  },
  participant: {
    type: Array,
    default () {
      return []
    }
  },
  currentPeople: {
    type: Number,
    default: 1
  },
  totalPeople: {
    type: Number
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
  title: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div id="teamup_card">
    <q-card flat>
      <div class="image_area">
        <q-img :ratio="4/3" :src="cardImage" />
      </div>
      <q-card-section>
        <div class="types_area q-mb-sm">
          <q-chip class="types_tag" v-for="(type, i) in types" :key="i" color="secondary" text-color="white" size="sm">
            &#35;{{ type }}
          </q-chip>
        </div>
        <div class="text-h5 teamup_title">{{ title }}</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="flex-center" horizontal>
        <q-card-section class="col-8 q-pt-none">
          <q-list>
            <q-item class="q-pa-none">
              <q-item-section>
                <q-icon name="mdi-calendar-check" size="xs" />
              </q-item-section>
              <q-item-section style="font-size: 18px">
                &nbsp; {{ new Date(date).toLocaleDateString() }}
              </q-item-section>
            </q-item>
            <q-item class="q-pa-none">
              <q-item-section>
                <q-icon name="mdi-clock-time-four-outline" size="xs" />
              </q-item-section>
              <q-item-section style="font-size: 18px">
                &nbsp; {{ time }}
              </q-item-section>
            </q-item>
            <q-item class="q-pa-none">
              <q-item-section>
                <q-icon name="mdi-account-group" size="xs" />
              </q-item-section>
              <q-item-section style="font-size: 18px">
                &nbsp; {{ currentPeople }} / {{ totalPeople }} 人
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section class="col-4 q-pa-none flex justify-center">
          <q-btn class="moreBtn" :to="'/joinTeamup/' + _id" label="More" />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.q-item__section--main {
  flex: none;
  margin-left: 0;
}
</style>
