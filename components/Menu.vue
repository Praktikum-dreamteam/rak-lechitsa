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
import Nav from '@/components/ui/Nav';

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

@media screen and (max-width: 792px) {
  .menu {
    display: none;
  }
}
</style>
