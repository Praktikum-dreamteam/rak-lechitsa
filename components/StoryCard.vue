<template>
  <li class="history-card">
    <nuxt-link class="history-card__link" :to="`/stories/${id}`">
      <img
        class="history-card__img"
        src="./../static/history.png"
        alt="Фотография"
      />
      <h2 class="history-card__title">{{ name }}</h2>
      <p class="history-card__subtitle">{{ description }}</p>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'src', 'name', 'description'],
};
</script>

<style scoped>
.history-card__link {
  text-decoration: none;
}
.history-card__title {
  margin-top: 20px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000;
}
.history-card__subtitle {
  max-width: 245px;
  margin-top: 14px;
  font-size: 14px;
  line-height: 18px;
  color: #666;
}
.history-card__img {
  object-fit: cover;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .history-card__title {
    margin-top: 14px;
  }
  .history-card__subtitle {
    max-width: 195px;
  }
}
@media screen and (max-width: 950px) {
  .history-card__title {
    font-size: 18px;
    line-height: 22px;
  }
  .history-card__subtitle {
    font-size: 13px;
    max-width: 190px;
    line-height: 16px;
  }
}
@media screen and (max-width: 450px) {
  .history-card__subtitle {
    max-width: 290px;
    margin-top: 12px;
  }
}
</style>
