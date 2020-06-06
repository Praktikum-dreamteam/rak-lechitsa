<template>
  <p class="copyright"><slot></slot></p>
</template>

<script></script>

<style scoped>
.copyright {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}

@media screen and (max-width: 1280px) {
  .copyright {
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
