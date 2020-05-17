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
</style>
