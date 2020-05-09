<template>
  <section class="video content-margin">
    <div class="video-text">
      <h2 class="content-title video-title">
        Истории людей, победивших рак, но не свои привычки
      </h2>
      <p class="content-subtitle video-subtitle">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </p>
      <div class="video-polygon">
        <button class="button video-button">&#5176;</button>
        <button class="button video-button">&#5171;</button>
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
export default {};
</script>

<style scoped>
.button {
  background-color: #fbfbfb;
}

.content-title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: left;
}

.content-subtitle {
  max-width: 413px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  text-align: left;
}

.content-margin {
  margin: 100px 60px;
}

.video {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
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
}

.video__card {
  max-width: 867px;
  max-height: 450px;
}

.video__caption {
  text-align: left;
}
</style>
