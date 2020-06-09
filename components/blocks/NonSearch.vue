<template>
  <div class="non-search">
    <p class="non-search__ups">Ничего не найдено</p>
    <p class="non-search__text">Попробуйте еще раз.</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.non-search {
  margin: 0 auto 60px;
  text-align: center;
}
.non-search__ups {
  font-size: 48px;
  line-height: 58px;
  margin-bottom: 10px;
}

.non-search__text {
  font-size: 16px;
  line-height: 20px;
}

@media (max-width: 700px) {
  .non-search__ups {
    font-size: 32px;
    line-height: 36px;
  }
}

@media (max-width: 425px) {
  .non-search__ups {
    font-size: 22px;
    line-height: 26px;
  }
}
</style>
