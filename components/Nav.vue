<template>
  <nav class="nav">
    <ul class="nav__list-items">
      <li class="nav__list-item">
        <nuxt-link v-if="$route.path !== '/'" to="/" class="nav__link">
          Главная
        </nuxt-link>
        <nuxt-link v-else to="/" class="nav__link nav__link_underline">
          Главная
        </nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link
          v-if="$route.path !== '/stories'"
          to="/stories"
          class="nav__link"
          >Истории
        </nuxt-link>
        <nuxt-link v-else to="/stories" class="nav__link nav__link_underline">
          Истории
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['classes'],
};
</script>

<style scoped>
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
</style>
