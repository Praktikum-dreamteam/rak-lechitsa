<template>
  <nav class="nav">
    <input id="nav__toggle" type="checkbox" />
    <label class="nav__btn" for="nav__toggle">
      <span></span>
    </label>
    <ul class="nav__list-items">
      <li class="nav__list-item">
        <nuxt-link
          to="/"
          :class="['nav__link', { nav__link_underline: $route.path == '/' }]"
          >Главная</nuxt-link
        >
      </li>
      <li class="nav__list-item">
        <nuxt-link
          to="/stories"
          :class="[
            'nav__link',
            { nav__link_underline: $route.path == '/stories' },
          ]"
          >Истории</nuxt-link
        >
      </li>
      <li v-if="isHeader" class="nav__list-item">
        <header-btn @click="$emit('historyClick')" theme="history"
          >Рассказать историю</header-btn
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  props: ['isHeader'],
  components: {
    'header-btn': Button,
  },
};
</script>
<style scoped>
.nav {
  position: relative;
}
.nav__list-items {
  display: flex;
  list-style: none;
  padding: 0;
}
.nav__list-item {
  margin-left: 40px;
}
.nav__list-item:first-child {
  margin: 0;
}
.nav__link {
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: black;
}
.nav__link_underline {
  border-bottom: 1px solid black;
}
/*Бургер меню */
#nav__toggle {
  visibility: hidden;
}
/*Label который выглядит как бургер меню*/
.nav__btn {
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
/*3 полоски*/
.nav__btn > span,
.nav__btn > span::before,
.nav__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #000;
}
.nav__btn > span::before {
  content: '';
  top: -8px;
}
.nav__btn > span::after {
  content: '';
  top: 8px;
}
/* стили которые применяются при клике на Label */
#nav__toggle:checked ~ .nav__btn > span {
  transform: rotate(45deg);
}
#nav__toggle:checked ~ .nav__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#nav__toggle:checked ~ .nav__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#nav__toggle:checked ~ .nav__list-items {
  display: flex;
}

@media screen and (max-width: 1280px) {
  .nav__link {
    font-size: 16px;
  }
}
@media screen and (max-width: 992px) {
  .footer.nav.nav__list-items /deep/ {
    display: flex;
    flex-direction: column;
  }
  .footer.nav.nav__list-item /deep/ {
    margin: 0 0 14px 0;
  }
}
/* Я начал писать стили, но не закончил...*/
@media screen and (max-width: 768px) {
  .nav__list-items {
    display: none;
    margin-top: 20px;
    flex-direction: column;
  }
  .nav__list-item {
    margin: 0;
  }
  .nav__btn {
    display: flex;
  }
}
@media screen and (max-width: 320px) {
  .nav__link {
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
