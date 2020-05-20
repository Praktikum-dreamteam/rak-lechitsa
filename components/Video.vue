<template>
  <Container>
    <section class="video" id="video">
      <div class="video__text">
        <SectionTitle class="video__title" theme="white">
          Истории людей, победивших рак, но не свои привычки
        </SectionTitle>
        <SectionText class="video__subtitle" theme="white">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </SectionText>
      </div>
      <div class="video__image" alt="Видео">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="slide in slides" :key="slide">
            <Slide :src="slide.src" :background="slide.background" />
          </swiper-slide>
        </swiper>
      </div>
      <p class="video__caption">
        Все видео вы можете найте на нашем
        <a href="#" class="video__link">YouTube канале</a>.
      </p>
      <btn theme="next" class="video__button video__button_next"> </btn>
      <btn theme="prev" class="video__button video__button_prev"> </btn>
    </section>
  </Container>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
import Container from '@/components/Container';
import Button from '@/components/ui/Button';
import Slide from '@/components/Slide';

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
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
    SectionText,
    Container,
    btn: Button,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.video__button_next',
          prevEl: '.video__button_prev',
        },
      },
      slides: [
        {
          src: 'https://www.youtube.com/embed/coOppM34GtI',
          background:
            'https://i0.wp.com/pozneronline.ru/wp-content/uploads/2018/11/pozner_solovetsky.jpg?resize=660%2C330&ssl=1',
        },
        {
          src: 'https://www.youtube.com/embed/FFrioIZ65q0',
          background:
            'https://pimg.mycdn.me/getImage?disableStub=true&type=VIDEO_S_720&url=https%3A%2F%2Fvdp.mycdn.me%2FgetImage%3Fid%3D145732143782%26idx%3D0%26thumbType%3D37%26f%3D1&signatureToken=ZktJPom0cAXZG1DvUSMldA',
        },
      ],
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
  background-color: #ededed;
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
@media screen and (max-width: 1280px) {
  .video {
    padding-top: 90px;
  }
  .video__title {
    max-width: 367px;
  }

  .video__subtitle {
    max-width: 305px;
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
    grid-column: 2;
    margin: 0;
    margin-bottom: 60px;
    justify-self: center;
  }
  .video__title {
    margin-top: 0;
    max-width: 380px;
    margin-bottom: 26px;
  }
  .video__subtitle {
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
