<template>
  <section class="video page__section">
    <div class="video__text">
      <SectionTitle class="video__title" theme="white">
        Истории людей, победивших рак, но не свои привычки
      </SectionTitle>
      <SectionText class="video__subtitle" theme="white">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </SectionText>
      <!-- <div class="video__polygon"> -->
      <button class="button video__button video__button_next">
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 17L9 9L1 1" stroke="black" />
        </svg>
      </button>
      <button class="button video__button video__button_prev">
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 17L9 9L1 1" stroke="black" />
        </svg>
      </button>
      <!-- </div> -->
    </div>
    <figure class="video__card">
      <div class="video__image" alt="Видео"></div>
      <!-- тут будет iframe -->
      <figcaption class="video__caption">
        Все видео вы можете найте на нашем
        <a href="#" class="video__link">YouTube канале</a>.
      </figcaption>
    </figure>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
export default {
  components: {
    SectionTitle,
    SectionText,
  },
};
</script>

<style scoped>
.button {
  background-color: #fbfbfb;
}

.video {
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
}

.video__text {
  margin-right: 40px;
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
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  text-align: left;
}

.video__image {
  width: 100%;
  padding-top: 56.25%;
  background-color: #ededed;
}

.video__button {
  border: none;
  position: absolute;
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  bottom: 90px;
}

.video__button_prev {
  transform: rotate(180deg);
  left: 90px;
}
.video__button_next {
  left: 130px;
}

.video__link {
  text-decoration: none;
  color: inherit;
  font-size: 12px;
  line-height: 16px;
}
@media screen and (max-width: 1280px) {
  .video__title {
    max-width: 367px;
  }

  .video__subtitle {
    max-width: 305px;
  }
}
@media screen and (max-width: 1024px) {
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
    flex-direction: column;
    align-items: center;
  }
  .video__text {
    margin: 0;
    margin-bottom: 60px;
  }
  .video__title {
    max-width: 380px;
    margin-bottom: 26px;
  }
  .video__subtitle {
    max-width: 380px;
  }
  .video__card {
    width: 100%;
  }
}
</style>
