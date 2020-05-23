<template>
  <div class="label">
    <label class="label__main-text" :for="For">{{ labelText }}</label>
    <span class="label__additional-text">{{ additionalText }}</span>
  </div>
</template>

<script>
export default {
  //TODO По случаю переделать компонент
  props: {
    For: String,
    labelText: String,
    additionalText: String,
  },
};
</script>

<style scoped>
.label {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
}
.label__additional-text {
  color: #666;
}

@media screen and (max-width: 1280px) {
  .label {
    font-size: 16px;
    line-height: 22px;
  }
}
@media screen and (max-width: 768px) {
  .label {
    font-size: 15px;
    line-height: 19px;
  }
}

@media screen and (max-width: 650px) {
  .label {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
