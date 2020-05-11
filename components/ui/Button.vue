<template>
  <div>
    <button
      @click.prevent="$emit('btn-click')"
      :class="['btn', `btn_theme_${theme}`]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.btn {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 19px;
  background: none;
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .btn {
    width: 230px;
    height: 35px;
  }
}
@media screen and (max-width: 1024px) {
  .btn {
    font-size: 15px;
    line-height: 18px;
  }
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
@media screen and (max-width: 768px) {
  .btn_theme_violet {
    padding: 14px 40px;
  }
}
</style>
