<template>
  <header class="header">
    <h2 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <my-menu />
    <div class="header__container">
      <menu-btn
        v-if="!isMenuOpen"
        theme="menu"
        @btn-click="[addClose(), $emit('openMenuClick')]"
      >
        <svg
          class="svg"
          width="32"
          height="3"
          viewBox="0 0 32 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="32" y2="1.5" stroke="black" stroke-width="3" />
        </svg>
        <svg
          class="svg"
          width="32"
          height="3"
          viewBox="0 0 32 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="32" y2="1.5" stroke="black" stroke-width="3" />
        </svg>
        <svg
          width="32"
          height="3"
          viewBox="0 0 32 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="32" y2="1.5" stroke="black" stroke-width="3" />
        </svg>
      </menu-btn>
    </div>
    <close-menu
      v-if="isMenuOpen"
      @btn-click="[addMenuBtn(), $emit('closeMenuClick')]"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.62684"
          y1="24.2528"
          x2="24.2543"
          y2="1.6254"
          stroke="black"
          stroke-width="3"
        />
        <line
          x1="24.2557"
          y1="24.3741"
          x2="1.62833"
          y2="1.74672"
          stroke="black"
          stroke-width="3"
        />
      </svg>
    </close-menu>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Button from '~/components/ui/Button';
export default {
  components: {
    'my-menu': Menu,
    'menu-btn': Button,
    'close-menu': Button,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {},
  methods: {
    addClose() {
      this.isMenuOpen = true;
    },
    addMenuBtn() {
      this.isMenuOpen = false;
    },
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
  padding: 20px 60px;
  border-bottom: 1px solid #e8e8e8;
}
.header__title {
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  max-width: 340px;
}
.header /deep/ .nav__link_underline {
  border-bottom: 1px solid black;
}
.header__container {
  display: none;
}
/deep/ .btn_theme_menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.svg {
  margin-bottom: 4px;
}
.btn_theme_close {
  display: none;
}
@media screen and (max-width: 1280px) {
  .header {
    padding: 20px 50px;
  }
}
@media screen and (max-width: 812px) {
  .header__container {
    display: block;
  }
}
</style>
