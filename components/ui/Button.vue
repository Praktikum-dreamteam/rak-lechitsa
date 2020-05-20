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

.btn_theme_next {
  border: none;
  width: 40px;
  height: 40px;
  background-image: url("data:image/svg+xml, %3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M1 17L9 9L1 1' stroke='black' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}
.btn_theme_prev {
  border: none;
  width: 40px;
  height: 40px;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='black'/%3E%3C/svg%3E%0A");
  background-position: center;
  background-repeat: no-repeat;
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
