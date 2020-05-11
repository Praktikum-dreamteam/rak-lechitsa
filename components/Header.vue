<template>
  <header class="header">
    <h2 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <my-menu />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
export default {
  components: {
    'my-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 18px 4%;
  border-bottom: 1px solid #e8e8e8;
}
.header__title {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  max-width: 340px;
}
.header /deep/ .nav__link_underline {
  border-bottom: 1px solid black;
}
</style>
