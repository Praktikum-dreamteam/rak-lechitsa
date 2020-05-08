<template>
  <section class="cover">
    <p class="cover-title">#РАКЛЕЧИТСЯ</p>
    <a href="" class="cover-polygon"
      ><img src="./../static/polygon.png" alt="стрелка вниз"
    /></a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  width: 100%;
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.cover-title {
  font-weight: bold;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 290px;
}
.cover-polygon {
  min-width: 36px;
  min-height: 12px;
  color: #ffffff;
  margin-top: 237px;
}
</style>
