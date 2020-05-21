<template>
  <div>
    <button
      v-bind:disabled="disabled"
      :type="type"
      @click.prevent="$emit('btn-click')"
      :class="['btn', `btn_theme_${theme}`, { btn_disabled: disabled }]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['theme', 'type', 'disabled'],
};
</script>

<style scoped>
.btn {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
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
  padding: 16px 0;
  width: 100%;
}
.btn_theme_violet:hover {
  opacity: 0.9;
}
.btn_theme_grey {
  color: #666;
  line-height: 19px;
  padding: 0;
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
  transition: 0.3s;
}
.btn_theme_share_long {
  font-size: 18px;
  line-height: 24px;
  padding: 0;
}
.btn_theme_share_long:hover {
  opacity: 0.8;
  transition: 0.3s;
}
.btn_theme_history {
  padding: 0;
  margin-left: 40px;
  font-size: 18px;
  line-height: 24px;
  background-color: transparent;
  border: none;
}

.btn_theme_arrow {
  font-size: 0;
  border: none;
  width: 40px;
  height: 40px;
}

@media screen and (max-width: 1280px) {
  .btn_theme_history {
    font-size: 16px;
    margin-left: 30px;
  }
  .btn_theme_violet {
    padding: 14px 0;
  }
}
@media screen and (max-width: 768px) {
  .btn {
    font-size: 15px;
    line-height: 18px;
  }
}
.btn_theme_share {
  font-size: 16px;
  line-height: 24px;
}
@media screen and (max-width: 452px) {
  .btn {
    font-size: 13px;
    line-height: 16px;
  }
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
