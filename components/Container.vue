<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 60px;
  padding-right: 60px;
}
@media screen and (max-width: 1280px) {
  .container {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media screen and (max-width: 452px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
