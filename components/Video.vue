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
      <!-- <button class="button video-button">&#5176</button> -->
      <!-- <button class="button video-button">&#5171</button> -->
      <!-- </div> -->
    </div>
    <figure class="video__card">
      <div class="video__image" alt="Видео"></div>
      <!-- тут будет iframe -->
      <figcaption class="video__caption">
        Все видео вы можете найте на нашем <a href="#">YouTube канале.</a>
      </figcaption>
    </figure>
    пше
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

.video-button {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  margin: 0;
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
