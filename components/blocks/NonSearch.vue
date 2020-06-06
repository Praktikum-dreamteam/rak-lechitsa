<template>
  <div class="non-search">
    <p class="non-search__ups">УПС...</p>
    <p class="non-search__text">По результатам поиска ничего не найдено</p>
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
  font-size: 52px;
  line-height: 56px;
  margin-bottom: 10px;
}

.non-search__text {
  font-size: 36px;
  line-height: 38px;
}

@media (max-width: 700px) {
  .non-search__ups {
    font-size: 32px;
    line-height: 36px;
  }

  .non-search__text {
    font-size: 26px;
    line-height: 28px;
  }
}

@media (max-width: 425px) {
  .non-search__ups {
    font-size: 22px;
    line-height: 26px;
  }

  .non-search__text {
    font-size: 20px;
    line-height: 22px;
  }
}
</style>
