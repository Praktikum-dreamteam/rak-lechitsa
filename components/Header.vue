<template>
  <header class="header">
    <Container class="header__container">
      <nuxt-link to="/" class="header__link"
        ><h2 class="header__title">
          Проект Благотворительного Фонда Константина Хабенского
        </h2></nuxt-link
      >
      <my-menu />
      <mobileIcon class="header__menu-icon" />
    </Container>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import MobileIcon from '@/components/ui/MobileIcon';
import Container from '@/components/Container';
export default {
  components: {
    'my-menu': Menu,
    mobileIcon: MobileIcon,
    Container,
  },
};
</script>

<style scoped>
.header__container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.header {
  width: 100%;
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

.header__link {
  text-decoration: none;
  color: inherit;
  border: none;
}
@media screen and (max-width: 792px) {
  .header__menu-icon {
    display: block;
  }
}
@media screen and (max-width: 452px) {
  .header__container {
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .header__title {
    font-size: 12px;
  }
}
</style>
