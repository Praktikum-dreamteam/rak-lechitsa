<template>
  <Container>
    <section class="video" id="video">
      <div class="video__text">
        <SectionTitle class="video__title" theme="white">{{
          Content.title
        }}</SectionTitle>
        <div class="video__subtitle" v-html="Content.text"></div>
      </div>
      <div class="video__image" alt="Видео">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="slide in slides" :key="slides.indexOf(slide)">
            <Slide :src="slide.url" :background="getBg(slide)" />
          </swiper-slide>
        </swiper>
      </div>
      <p class="video__caption">
        Все видео вы можете найте на нашем
        <a
          class="video__link"
          href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ"
          target="_blank"
          >YouTube канале</a
        >.
      </p>
      <btn theme="arrow" class="video__button video__button_next">
        <img class="video__button-img" src="/next.svg" alt="Следующее видео" />
      </btn>
      <btn theme="arrow" class="video__button video__button_prev">
        <img class="video__button-img" src="/prev.svg" alt="Предыдущее видео" />
      </btn>
    </section>
  </Container>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import Container from '@/components/Container';
import Button from '@/components/ui/Button';
import Slide from '@/components/Slide';

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  props: {
    Content: Object,
  },
  directives: {
    swiper: directive,
  },

  name: 'swiper-example-navigation',
  title: 'Navigation',
  components: {
    Swiper,
    Slide,
    SwiperSlide,
    SectionTitle,
    Container,
    btn: Button,
  },
  computed: {
    slides() {
      return this.$store.getters['slider/getSlides'];
    },
  },
  beforeMount() {
    this.$store.dispatch('slider/fetchSlides');
  },
  methods: {
    getBg(slide) {
      return `/video/${slide.id}.jpg`;
    },
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.video__button_next',
          prevEl: '.video__button_prev',
        },
      },
    };
  },
};
</script>

<style scoped>
.button {
  background-color: #fbfbfb;
}
.video {
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 40px auto 1fr;
  grid-template-rows: auto auto auto;
}

.video__caption {
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
}

.video__link {
  border-bottom: 1px solid #000;
}

.video__link:hover {
  transition: 0.3s ease;
  opacity: 0.8;
}

.video__text {
  grid-column: 1/3;
  width: 100%;
  max-width: 470px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.video__title {
  margin-top: 10px;
  margin-bottom: 30px;
  max-width: 413px;
}

.video__subtitle {
  max-width: 340px;
  color: #666;
  font-size: 18px;
  line-height: 22px;
}

.video__polygon {
  margin-top: 150px;
  margin-left: 0;
  display: flex;
}

.video__card {
  flex-grow: 1;
}

.video__caption {
  grid-column: 3;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  text-align: left;
}

.video__image {
  position: relative;
  align-self: end;
  grid-row: 1/3;
  grid-column: 3;
  width: 100%;
  padding-top: 56.25%;
}

.video__button {
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  grid-row: 2;
  align-self: end;
  bottom: 110px;
}

.video__button_prev {
  grid-column: 1;
}
.video__button_next {
  margin-left: 10px;
}

.video__link {
  text-decoration: none;
  color: inherit;
  font-size: 12px;
  line-height: 16px;
}
.video__button-img {
  vertical-align: middle;
}
.swiper-button-disabled .video__button-img {
  opacity: 0.5;
}
@media screen and (max-width: 1280px) {
  .video {
    padding-top: 90px;
  }
  .video__title {
    max-width: 367px;
  }

  .video__subtitle {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .video {
    padding-top: 80px;
  }
  .video__title {
    max-width: 288px;
  }

  .video__subtitle {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
  }
  .video__text {
    margin-right: 30px;
  }
}
@media screen and (max-width: 768px) {
  .video {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 14px;
  }
  .video__image {
    grid-row: 2;
    grid-column: 2;
  }
  .video__caption {
    grid-row: -1;
    grid-column: 2;
    margin-top: 20px;
  }
  .video__text {
    grid-row: 1;
    grid-column: 1/-1;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: 60px;
    justify-self: center;
  }
  .video__title {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 0;
    max-width: 380px;
    margin-bottom: 26px;
  }
  .video__subtitle {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 380px;
  }
  .video__card {
    width: 100%;
    padding-left: 55px;
    padding-right: 55px;
  }
  .video__button {
    margin: 0;
    grid-row: 2;
    align-self: center;
  }
  .video__button_prev {
    grid-column: 1;
  }
  .video__button_next {
    grid-column: 3;
  }
}
@media screen and (max-width: 550px) {
  .video__caption {
    display: none;
  }
  .video {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0;
  }
  .video__image {
    grid-column: 1/-1;
  }
  .video__button {
    background-color: transparent;
    z-index: 2;
  }
}
.swiper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}
</style>
