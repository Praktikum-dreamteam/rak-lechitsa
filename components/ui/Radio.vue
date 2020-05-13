<template>
  <div class="radio">
    <input type="radio" class="radio__input" :id="id" :name="name" />
    <label :class="['radio__label', `radio__label_theme_${theme}`]" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: ['theme', 'name', 'id'],
};
</script>

<style scoped>
.radio {
  width: 160px;
}
.radio__input {
  display: none;
}

.radio__label {
  font-size: 18px;
  line-height: 22px;
}

.radio__input:checked + .radio__label_theme_violet {
  color: #fff;
}

.radio__input:checked + .radio__label_theme_white {
  color: #000000;
}

.radio__label_theme_violet {
  color: #c9c9c9;
}

.radio__label_theme_white {
  color: #a2a2a2;
}

@media screen and (max-width: 1280px) {
  .radio {
    width: 130px;
  }
  .radio__label {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 768px) {
  .radio {
    width: auto;
  }
  .radio__label {
    padding-bottom: 6px;
    border-bottom: 2px solid transparent;
  }
  .radio__input:checked + .radio__label_theme_violet {
    border-bottom: 2px solid #ffffff;
  }
  .radio__input:checked + .radio__label_theme_white {
    border-bottom: 2px solid #613a93;
  }
}
</style>
