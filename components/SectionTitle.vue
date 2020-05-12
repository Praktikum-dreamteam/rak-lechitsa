<template>
  <div>
    <h2 :class="['section-title', `section-title_theme_${theme}`]">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.section-title {
  max-width: 413px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  text-align: left;
}

@media screen and (max-width: 1280px) {
  .section-title {
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .section-title {
    font-size: 24px;
    line-height: 28px;
  }
}

.section-title_theme_violet {
  color: #fff;
}

.section-title_theme_white {
  color: #000000;
}
</style>
