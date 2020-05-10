<template>
  <div class="radio">
    <label :class="['radio__label', `radio__label_theme_${theme}`]">
      <input type="radio" class="radio__input" />
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.radio__input {
  display: none;
}

.radio__label_theme_violet {
  color: #fff;
}

.radio__label_theme_white {
  color: #000000;
}

.radio__label_theme_violet.radio__label_checked {
  color: #c9c9c9;
}

.radio__label_theme_white.radio__label_checked {
  color: #a2a2a2;
}
</style>
