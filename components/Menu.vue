<template>
  <div class="menu">
    <header-nav />
    <header-btn @click="$emit(historyClick)" class="header__button"
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
</style>
