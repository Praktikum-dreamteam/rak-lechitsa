<template>
  <div class="error">
    <h1 class="error-title">404</h1>
    <p class="error-subtitle">
      Страница не найдена.
      <nuxt-link to="/" class="error-subtitle_link"
        >Перейти на главную.</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default {
  layout: 'errorpage',
};
</script>

<style scoped>
.error {
  width: 100%;
  padding-top: 166px;
  padding-bottom: 238px;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.error-title {
  font-size: 144px;
  line-height: 174px;
}
.error-subtitle {
  max-width: 200px;
  font-size: 16px;
  line-height: 20px;
}
.error-subtitle_link {
  color: #000000;
}
@media screen and (max-width: 768px) {
  .error {
    padding-top: 346px;
    padding-bottom: 400px;
  }
}
@media screen and (max-width: 320px) {
  .error {
    padding-top: 243px;
    padding-bottom: 288px;
  }
  .error-title {
    font-size: 72px;
    line-height: 87px;
  }
  .error-subtitle {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
