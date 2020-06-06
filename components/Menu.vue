<template>
  <div class="menu">
    <header-nav />
    <header-btn @btn-click="openPopup" theme="history" class="menu__button"
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

.menu__button {
  background-color: #613a93;
  color: #fff;
  margin-left: 40px;
}

.menu.menu__open {
  display: none;
}
@media screen and (max-width: 1280px) {
  .menu__button {
    margin-left: 30px;
  }
}
@media screen and (max-width: 792px) {
  .menu {
    display: none;
  }
  .menu.menu__open {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    padding: 18px 50px;
  }
}
@media screen and (max-width: 452px) {
  .menu.menu__open {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 18px 15px;
  }
  .menu__button {
    margin: 0 0 18px 0;
  }
}
</style>
