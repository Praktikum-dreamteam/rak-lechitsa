<template>
  <div>
    <p class="personal-data">
      Нажимая на кнопку «отправить», вы даете согласие на
      <nuxt-link class="personal-data__link" to="/policy" target="_blank"
        >обработку персональных данных</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.personal-data {
  max-width: 378px;
  font-size: 14px;
  line-height: 17px;
  color: #666;
}
.personal-data__link {
  color: #666;
}
@media screen and (max-width: 900px) {
  .personal-data {
    max-width: 278px;
    font-size: 11px;
    line-height: 13px;
  }
}
@media screen and (max-width: 650px) {
  .personal-data {
    max-width: 100%;
  }
}
</style>
