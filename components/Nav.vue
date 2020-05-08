<template>
  <nav class="nav">
    <ul class="nav__lists">
      <nuxt-link v-if="$route.path !== '/'" to="/" class="nav__link"
        >Главная</nuxt-link
      >
      <nuxt-link v-else to="/" class="nav__link nav__link_underline"
        >Главная</nuxt-link
      >
      <nuxt-link
        v-if="$route.path !== '/stories'"
        to="/stories"
        class="nav__link"
        >Истории</nuxt-link
      >
      <nuxt-link v-else to="/stories" class="nav__link nav__link_underline"
        >Истории</nuxt-link
      >
    </ul>
  </nav>
</template>

<script></script>

<style scoped>
.nav__lists {
  display: flex;
  list-style: none;
  padding: 0;
}
.nav__link {
  text-decoration: none;
  color: black;
  margin-left: 40px;
}
.nav__link:first-child {
  margin: 0;
}
.nav__link_underline {
  text-decoration: underline;
}
</style>
