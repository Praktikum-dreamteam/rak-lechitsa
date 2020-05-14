<template>
  <header class="header">
    <h2 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <my-menu />
    <mobileIcon class="header__menu-icon" />
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import MobileIcon from '~/components/ui/MobileIcon';
export default {
  components: {
    'my-menu': Menu,
    mobileIcon: MobileIcon,
  },
  data() {
    return {
      isMenuOpen: false,
    };
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
/deep/ .nuxt-link-exact-active {
  border-bottom: 1px solid black;
}
.header__menu-icon {
  display: none;
}
@media screen and (max-width: 1280px) {
  .header {
    padding: 20px 50px;
  }
}
@media screen and (max-width: 792px) {
  .header__menu-icon {
    display: block;
  }
}
@media screen and (max-width: 452px) {
  .header {
    padding: 18px 15px;
  }
  .header__title {
    font-size: 12px;
  }
}
</style>
