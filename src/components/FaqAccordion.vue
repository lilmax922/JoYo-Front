<script setup>
import { reactive } from 'vue'

const faqs = reactive([
  {
    icon: 'mdi-help-circle-outline',
    label: '桌遊是甚麼？',
    text: '桌遊是「桌上遊戲」（Board Game） 的簡稱，是近年來歐美國家新興的熱門休閒娛樂，舉凡能夠在桌面上進行的圖版、骰子、卡片等「不插電」遊戲，都屬於「桌遊」的範疇。在台灣最廣為人知的桌遊就是「大富翁」（由地產大亨Monopoly改編），該款遊戲集合骰子和輕度的策略，配合經濟發展、建設城市的主題風靡一時。'
  },
  {
    icon: 'mdi-help-circle-outline',
    label: '桌遊店提供哪些遊戲？',
    text: '揪遊提供各種類型的桌遊，包括策略遊戲、派對遊戲、家庭遊戲等等。在店裡您可以自由選擇並遊玩。'
  },
  {
    icon: 'mdi-help-circle-outline',
    label: '有提供桌遊教學嗎？免費嗎？',
    text: '有的，店內大部分除了「自研遊戲區」外的遊戲都有提供免費教學，但若是遇到假日或人多時，店員稍微忙就暫時無法提供這額外的服務哦，屆時請您多多擔待。'
  },
  {
    icon: 'mdi-help-circle-outline',
    label: '我可以自己帶桌遊嗎？',
    text: '當然可以，揪遊提供的是一個可以安心歡樂暢快玩桌遊不用擔心吵到別人或被趕的環境，因此自帶桌遊一樣正常計費哦。'
  },
  {
    icon: 'mdi-help-circle-outline',
    label: '能帶外食嗎',
    text: '攜帶外食將酌收每人５０元清潔費，生日蛋糕、水、嬰兒食品除外。'
  }
])
</script>

<template>
    <q-list bordered>
      <q-expansion-item
        v-for="faq in faqs"
        :key="faq"
        group="faq_group"
        :icon="faq.icon"
        :label="faq.label"
        expand-separator
        header-class="text-primary"
        :default-opened="faq === faqs[0]"
        popup
      >
        <q-card>
          <q-card-section>
            {{ faq.text }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
</template>
