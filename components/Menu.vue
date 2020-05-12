<template>
  <div class="menu">
    <header-nav />
    <header-btn @click="$emit('historyClick')" theme="history"
      >Рассказать историю</header-btn
    >
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Nav from '~/components/ui/Nav';

export default {
  components: {
    'header-btn': Button,
    'header-nav': Nav,
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
}
/deep/ .btn_theme_history {
  padding: 0;
  margin-left: 40px;
  font-size: 18px;
  line-height: 24px;
  background-color: transparent;
  border: none;
}
@media screen and (max-width: 1280px) {
  .btn_theme_history {
    font-size: 16px;
  }
}
@media screen and (max-width: 812px) {
  .menu {
    display: none;
  }
}
</style>
