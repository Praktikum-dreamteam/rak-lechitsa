<template>
  <div>
    <label class="label" for>{{ labelText }}</label>
    <span class="label__description">{{ description }}</span>
  </div>
</template>

<script>
export default {
  props: ['for', 'labelText', 'description'],
};
</script>

<style scoped>
.label {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
}
.label__description {
  color: #666;
}
</style>
