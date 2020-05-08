<template>
  <section class="cover">
    <h1 class="title cover-title">#РАКЛЕЧИТСЯ</h1>
    <a href="" class="cover-polygon"
      ><img src="./../static/polygon.png" alt="стрелка вниз"
    /></a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
}

.cover {
  width: 100%;
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.cover-title {
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
