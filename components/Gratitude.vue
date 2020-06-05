<template>
  <div class="gratitude">
    <h1 class="gratitude__title">Спасибо что приняли участие</h1>
    <btn @btn-click="close" theme="violet" type="button" class="gratitude__btn"
      >Закрыть</btn
    >
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    btn: Button,
  },
  methods: {
    close() {
      this.$store.commit('popup/close');
      this.$store.commit('popup/toggleIconClose');
    },
  },
};
</script>

<style scoped>
.gratitude {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.gratitude__title {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
}
.gratitude__btn {
  width: 226px;
  margin-top: 432px;
}
</style>
