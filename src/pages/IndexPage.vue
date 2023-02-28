<script setup>
import { useQuasar } from 'quasar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { storeToRefs } from 'pinia'
import { useBoardgameStore } from 'src/stores/boardgame'
import { useTeamupStore } from 'src/stores/teamup'
import BoardgameCard from 'src/components/BoardgameCard.vue'
import TeamupCard from 'src/components/TeamupCard.vue'
import FaqAccordion from 'src/components/FaqAccordion.vue'

AOS.init()

const $q = useQuasar()
const boardgameStore = useBoardgameStore()
const teamupStore = useTeamupStore()
const { getPostBoardgames } = boardgameStore
const { getAllTeamups } = teamupStore
const { boardgames } = storeToRefs(boardgameStore)
const { teamups } = storeToRefs(teamupStore)

getPostBoardgames()
getAllTeamups()

// Swiper
const modules = [Autoplay]
</script>

<template>
  <q-page id="index">
    <!-- intro video -->
    <section class="hero flex flex-center">
      <div class="row">
        <div class="inner_container col-12">
          <div class="banner_content text-center">
            <div class="text-h3 text-weight-bold">
              WELCOME <br />
              TO
            </div>
            <br />
            <div class="text-h3 text-weight-bold joyo" data-aos="zoom-in-up" data-aos-duration="2000">
              揪遊
            </div>
            <br />
            <div class="flex flex-xs-center column-xs row-md q-gutter-md q-mt-md">
            <q-btn
              class="hero_btn"
              to="/reservation"
              label="RESERVATION"
            ></q-btn>
            <q-btn class="hero_btn" to="/teamup" label="TEAMUP"></q-btn>
          </div>
          <!-- <div>
          </div> -->
          </div>
        </div>
        <div class="video_container col-12">
          <video
            class="intro_video"
            src="../assets/intro.mp4"
            autoplay
            loop
            muted
          />
        </div>
      </div>
    </section>

    <!-- 關於揪遊 -->
    <section id="about_section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p
              class="about text-h6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              關於揪遊
            </p>
          </div>
          <p
            class="about_title col-12 text-h5 text-accent text-center text-weight-bold"
            data-aos="fade-up-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            桌上遊戲，讓我們拉近人與人的距離。
          </p>
          <p
            class="about_content col-12 q-pt-md text-h6 text-weight-medium text-center"
            data-aos="fade-up-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            一個能夠聚在一起享受桌遊樂趣的地方，透過桌遊，讓人們能夠在揪遊獲得快樂。
          </p>
        </div>
      </div>
    </section>

    <!-- 店內桌遊 Parallax -->
    <section>
      <div class="row">
        <div class="col-12">
          <q-parallax src="../assets/店內桌遊.jpg"> </q-parallax>
        </div>
      </div>
    </section>

    <!-- What You Looking For -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 flex flex-center" style="margin-top: 100px">
            <div
              class="title text-h6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              WHAT YOU LOOKING FOR
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 桌遊 -->
    <section id="boardgame_section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              class="subtitle text-h4"
            >
              Board Games
            </div>
            <!-- boardgame Swiper Area -->
            <div class="content">
              <Swiper
                class="mySwiper"
                :modules="modules"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }"
                :loop="true"
                :slidesPerView="1"
                :spaceBetween="30"
                :breakpoints="{
                  '576': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  '1024': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  '1500': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }"
              >
                <SwiperSlide v-for="i in boardgames" :key="i">
                  <BoardgameCard v-bind="i" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 揪團 -->
    <section v-if="teamups.length >= 1" id="teamup_section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="subtitle text-h4"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Teamups
            </div>
            <div class="content">
              <Swiper
                class="mySwiper"
                :modules="modules"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                }"
                :loop="true"
                :slidesPerView="1"
                :spaceBetween="30"
                :breakpoints="{
                  '576': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  '1024': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  '1500': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }"
              >
                <SwiperSlide v-for="i in teamups" :key="i">
                  <TeamupCard v-bind="i" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq_section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="text-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div class="title text-h6">FAQs</div>
            </div>
            <div class="content">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section id="contact_section">
      <div class="container">
        <div class="row">
          <!-- contact us -->
          <div class="col-12">
            <div
              class="text-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div class="text-h6 title">CONTACT US</div>
            </div>
          </div>
          <!-- phone -->
          <div
            class="col-sm-12 col-md-4 column flex-center content"
            data-aos="fade-right"
            data-aos-duration="2000"
            style="flex-grow: 1"
          >
            <img
              src="https://www.shop1688.com.tw/sys/newSys/phone.png"
              alt="map"
              width="150"
            />
            <b class="q-mt-lg">(02) 2222-7777</b>
          </div>
          <!-- address -->
          <div
            class="col-sm-12 col-md-4 column flex-center content"
            data-aos="zoom-in"
            data-aos-duration="2000"
            style="flex-grow: 1"
          >
            <img
              src="https://www.shop1688.com.tw/sys/newSys/map.png"
              alt="map"
              width="150"
            />
            <b class="q-mt-lg">新北市泰山區貴子里致遠新村55之1號</b>
          </div>
          <!-- opening hours -->
          <div
            class="col-sm-12 col-md-4 column flex-center content"
            data-aos="fade-left"
            data-aos-duration="2000"
            style="flex-grow: 1"
          >
            <img
              src="https://www.shop1688.com.tw/sys/newSys/open.png"
              alt="map"
              width="150"
            />
            <b class="q-mt-lg text-center"
              >Monday to Saturday <br />
              10:00 - 22:00</b
            >
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style lang="scss">
#index {
  overflow-x: hidden;

  .title {
    display: inline-block;
    font-weight: 900;
    border-bottom: 1px solid #fff;
    padding-bottom: 2px;
  }

  .subtitle {
    border-left: 15px solid $primary;
    padding-left: 1rem;
  }

  .content {
    margin: 2rem 0 4.5rem 0;
  }

  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url("../assets/mask.png") no-repeat center/100% 100%;
    // background-size: cover;

    .inner_container {
      display: table;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 0;
      position: relative;
      z-index: 2;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

      .banner_content {
        display: table-cell;
        vertical-align: middle;

        .joyo {
          color: $primary;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        }
      }
    }

    .video_container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;

      .intro_video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .hero_btn {
      width: 200px;
      color: #fff;
      border: 1px solid #fff;

      &:hover {
        color: $dark;
        background-color: $primary;
        border: none;
        transition: 0.5s;
      }
    }

    .hero_content {
      color: $textColor;
    }
  }

  #about_section {
    margin: 150px 0;

    .row {
      width: 100%;
      justify-content: center;
      gap: 1.5rem;

      .about {
        display: inline-block;
        font-weight: 900;
        border-bottom: 1px solid #fff;
        padding-bottom: 2px;
      }

      .about_title,
      .about_content {
        color: $textColor;
      }
    }
  }

  #boardgame_section {
    margin-top: 50px;
  }
}
</style>
