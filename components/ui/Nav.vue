<template>
  <nav class="nav">
    <ul class="nav__list-items">
      <li class="nav__list-item" v-for="link in links" :key="link.id">
        <nuxt-link :to="link.to" class="nav__link">{{ link.text }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          to: '/',
          text: 'Главная',
        },
        {
          id: 2,
          to: '/stories',
          text: 'Истории',
        },
      ],
    };
  },
};
</script>

<style scoped>
/deep/ .nuxt-link-exact-active {
  pointer-events: none;
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
.nav__link:hover {
  opacity: 0.8;
  transition: 0.3s;
}
@media screen and (max-width: 1280px) {
  .nav__link {
    font-size: 16px;
  }
  .nav__list-item {
    margin-left: 30px;
  }
}
@media screen and (max-width: 992px) {
  .footer .nav .nav__list-items {
    display: flex;
    flex-direction: column;
  }
  .footer .nav .nav__list-item {
    margin: 0 0 14px 0;
  }
}
@media screen and (max-width: 452px) {
  .nav__link {
    font-size: 13px;
    line-height: 15px;
  }
  .menu .nav__list-items {
    flex-direction: column;
    align-items: flex-start;
  }
  .menu .nav__list-item {
    margin: 0 0 18px 0;
  }
  .menu .nav__list-item:first-child {
    margin: 0 0 18px 0;
  }
}
</style>
