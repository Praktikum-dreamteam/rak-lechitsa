<template>
  <header class="header" ref="abv">
    <h2 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <div class="header__links">
      <header-nav />
      <header-btn class="header__button">Рассказать историю</header-btn>
    </div>
  </header>
</template>

<script>
import Button from '~/components/ui/Button';
import Nav from '@/components/Nav';
export default {
  components: {
    'header-btn': Button,
    'header-nav': Nav,
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
.header__links {
  display: flex;
  align-items: center;
}
.header__button {
  padding: 0;
  margin-left: 40px;
  font-size: 18px;
  line-height: 24px;
  background-color: transparent;
  border: none;
}
.header__button:hover {
  cursor: pointer;
}
.header /deep/ .nav__link_underline {
  border-bottom: 1px solid black;
}
</style>
