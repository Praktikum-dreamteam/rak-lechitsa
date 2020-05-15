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
  /deep/ .btn_theme_history {
    font-size: 16px;
    margin-left: 30px;
  }
}
@media screen and (max-width: 792px) {
  .menu {
    display: none;
  }
}
@media screen and (max-width: 452px) {
  /deep/ .btn_theme_history {
    margin: 0 0 18px 0;
  }
  .menu /deep/ .nav__list-items {
    flex-direction: column;
    align-items: flex-start;
  }
  .menu /deep/ .nav__list-item {
    margin: 0 0 18px 0;
  }
  .menu /deep/ .nav__list-item:first-child {
    margin: 0 0 18px 0;
  }
  .menu /deep/ .btn_theme_history {
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
