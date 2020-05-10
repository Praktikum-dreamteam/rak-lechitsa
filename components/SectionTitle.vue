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

.section-title_theme_violet {
  color: #fff;
}

.section-title_theme_white {
  color: #000000;
}
</style>
