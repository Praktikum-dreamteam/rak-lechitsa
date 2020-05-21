<template>
  <div>
    <p class="personal-data">
      Нажимая на кнопку «отправить», вы даете согласие на
      <nuxt-link
        @click.native="closePopup"
        class="personal-data__link"
        to="/policy"
        >обработку персональных данных</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      console.log('ste');
      this.$store.commit('popup/close');
    },
  },
};
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
