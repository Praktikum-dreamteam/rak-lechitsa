<template>
  <section class="cover">
    <h1 class="cover__title">#Раклечится</h1>
    <a href class="cover__polygon">
      <img src="./../static/polygon.png" alt="стрелка вниз" />
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  position: relative;
  width: 100%;
  height: calc(100vh - 76px);
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cover__title {
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
}
.cover__polygon {
  position: absolute;
  min-width: 36px;
  min-height: 12px;
  color: #ffffff;
  bottom: 40px;
  right: 50%;
  transform: translateX(50%);
}
@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: 72px;
    line-height: 94px;
  }
}
@media screen and (max-width: 768px) {
  .cover__title {
    font-size: 64px;
    line-height: 77px;
  }
}
@media screen and (max-width: 550px) {
  .cover {
    height: calc(100vh - 64px);
  }
  .cover__title {
    font-size: 42px;
    line-height: 44px;
  }
}
@media screen and (max-width: 420px) {
  .cover__title {
    font-size: 36px;
    line-height: 44px;
  }
}
</style>
