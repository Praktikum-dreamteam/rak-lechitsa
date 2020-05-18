<template>
  <div>
    <button
      v-bind:disabled="isDisabledActive"
      :type="type"
      @click.prevent="$emit('btn-click')"
      :class="['btn', `btn_theme_${theme}`, { btn_disabled: isDisabledActive }]"
      @mousemove="hover = true"
      @mouseleave="hover - false"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['theme', 'type', 'isDisabledActive'],
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.btn {
  font-family: 'Inter', sans-serif;
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
.btn_theme_violet:hover {
  opacity: 0.9;
}
.btn_theme_grey {
  color: #666;
  line-height: 19px;
}
.btn_disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn_theme_share {
  padding: 0;
  font-size: 18px;
  line-height: 24px;
}
.btn_theme_share:hover {
  opacity: 0.8;
}
.btn_theme_history {
  padding: 0;
  margin-left: 40px;
  font-size: 18px;
  line-height: 24px;
  background-color: transparent;
  border: none;
}
@media screen and (max-width: 1280px) {
  .btn_theme_history {
    font-size: 16px;
    margin-left: 30px;
  }
}
@media screen and (max-width: 768px) {
  .btn_theme_violet {
    padding: 14px 40px;
  }
}
.btn_theme_share {
  font-size: 16px;
  line-height: 24px;
}
@media screen and (max-width: 452px) {
  .btn_theme_share {
    font-size: 13px;
    line-height: 15px;
  }
  .btn_theme_history {
    margin: 0 0 18px 0;
  }
  .menu .btn_theme_history {
    font-size: 13px;
    line-height: 15px;
  }
}
</style>
