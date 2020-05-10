<template>
  <div>
    <p :class="['section-text', `section-text_theme_${theme}`]">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.section-text {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
}

.section-text_theme_violet {
  color: #dedede;
}

.section-text_theme_white {
  color: #666666;
}
</style>
