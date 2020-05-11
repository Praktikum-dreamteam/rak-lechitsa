<template>
  <section class="video content-margin page__section">
    <div class="video-text">
      <SectionTitle class="content-title video-title">
        Истории людей, победивших рак, но не свои привычки
      </SectionTitle>
      <p class="content-subtitle video-subtitle">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </p>
      <div class="video-polygon">
        <!-- <button class="button video-button">&#5176</button> -->
        <!-- <button class="button video-button">&#5171</button> -->
      </div>
    </div>
    <figure class="video__card">
      <img class="video__image" src="./../static/video.png" alt="Видео" />
      <figcaption class="video__caption">
        Все видео вы можете найте на нашем YouTube канале.
      </figcaption>
    </figure>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
export default {
  components: {
    SectionTitle,
  },
};
</script>

<style scoped>
.button {
  background-color: #fbfbfb;
}

.content-subtitle {
  max-width: 413px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
}

.video {
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
}

.video-text {
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.video-title {
  margin-top: 10px;
  margin-bottom: 30px;
}

.video-subtitle {
  padding-right: 70px;
}

.video-polygon {
  margin-top: 150px;
  margin-left: 0;
  display: flex;
}

.video__card {
  max-width: 867px;
  max-height: 450px;
}

.video__caption {
  text-align: left;
}

.video-button {
  width: 40px;
  height: 40px;
  background: #fbfbfb;
  margin: 0;
}
</style>
