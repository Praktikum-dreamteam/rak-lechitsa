<template>
  <section class="video page__section">
    <div class="video__text">
      <SectionTitle class="content-title video__title" theme="white">
        Истории людей, победивших рак, но не свои привычки
      </SectionTitle>
      <SectionText class="content-subtitle video-subtitle" theme="white">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </SectionText>
      <div class="video__polygon">
        <!-- <button class="button video-button">&#5176</button> -->
        <!-- <button class="button video-button">&#5171</button> -->
      </div>
    </div>
    <figure class="video__card">
      <img class="video__image" src="./../static/video.png" alt="Видео" />
      <figcaption class="video__caption">
        Все видео вы можете найте на нашем <a href="">YouTube канале.</a>
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
}

.video__subtitle {
  padding-right: 70px;
}

.video__polygon {
  margin-top: 150px;
  margin-left: 0;
  display: flex;
}

.video__card {
  max-width: 867px;
  max-height: 450px;
}

.video__caption {
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  text-align: left;
}

.video-button {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  margin: 0;
}
</style>
