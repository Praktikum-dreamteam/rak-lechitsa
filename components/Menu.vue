<template>
  <div class="menu">
    <header-nav />
    <header-btn @click="$emit('historyClick')" theme="history"
      >Рассказать историю</header-btn
    >
    <menu-btn theme="menu">
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
</template>

<script>
import Button from '@/components/ui/Button';
import Nav from '~/components/ui/Nav';

export default {
  components: {
    'header-btn': Button,
    'header-nav': Nav,
    'menu-btn': Button,
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
}
.btn_theme_history {
  padding: 0;
  margin-left: 40px;
  font-size: 18px;
  line-height: 24px;
  background-color: transparent;
  border: none;
}
.btn_theme_menu {
  display: none;
}
@media screen and (max-width: 1280px) {
  .btn_theme_history {
    font-size: 16px;
  }
}
@media screen and (max-width: 812px) {
  .nav {
    display: none;
  }
  .btn_theme_history {
    display: none;
  }
  .btn_theme_menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .svg {
    margin-bottom: 4px;
  }
}
</style>
