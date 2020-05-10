<template>
  <div>
    <button
      v-bind:disabled="isDisabledActive"
      :type="type"
      @click.prevent="$emit('btn-click')"
      :class="['btn', `btn_theme_${theme}`, { btn_disabled: isDisabledActive }]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['theme', 'type', 'isDisabledActive'],
};
</script>

<style scoped>
.btn {
  font-size: 16px;
  line-height: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}
.btn_theme_violet {
  color: #fff;
  background: #613a93;
  line-height: 19px;
  padding: 16px 80px;
}
.btn_theme_grey {
  color: #666;
  line-height: 19px;
}
.btn_disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
@media screen and (max-width: 768px) {
  .btn_theme_violet {
    padding: 14px 40px;
  }
}
</style>
