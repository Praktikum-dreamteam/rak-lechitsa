<template>
  <div class="menu">
    <header-nav />
    <header-btn @btn-click="openPopup" theme="history"
      >Рассказать историю</header-btn
    >
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Nav from '@/components/ui/Nav';

export default {
  components: {
    'header-btn': Button,
    'header-nav': Nav,
  },
  methods: {
    openPopup() {
      this.$store.commit('popup/openQuiz');
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 792px) {
  .menu {
    display: none;
  }
}
</style>
