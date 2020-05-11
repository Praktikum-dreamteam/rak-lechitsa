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

@media screen and (max-width: 1280px) {
  .section-text {
    font-size: 16px;
    line-height: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .section-text {
    font-size: 13px;
    line-height: 16px;
  }
}

.section-text_theme_violet {
  color: #dedede;
}

.section-text_theme_white {
  color: #666666;
}
</style>
