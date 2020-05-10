<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input type="checkbox" class="checkbox__input" />
      <slot> </slot>
    </label>
  </div>
</template>

<script>
export default {
  // props: {
  //   name = String
  // }
};
</script>

<style scoped>
.checkbox__input {
  display: none;
}

.checkbox__label {
  color: #000000;
}
</style>
