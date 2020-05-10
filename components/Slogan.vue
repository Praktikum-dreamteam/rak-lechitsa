<template>
  <section class="slogan">
    <p class="content-slogan">
      <slot> </slot>
      <span class="slogan-title"> #этонелечится</span>
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.slogan {
  width: 100%;
  text-align: center;
  color: #ffffff;
  background-color: #613a93;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
}

.content-slogan {
  max-width: 750px;
  margin: auto;
}

.slogan-title {
  font-weight: bold;
  font-size: 32px;
}
</style>
