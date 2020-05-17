<template>
  <div>
    <input
      @input="$emit('input', $event.target.value)"
      class="input"
      :id="id"
      :type="type || 'text'"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    placeholder: String,
    type: String,
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 0;
  border: none;
  font-size: 18px;
  line-height: 24px;
  font-family: inherit;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
  color: #000;
}
.input:focus {
  outline: none;
  border-bottom: 1px solid #3c9dd0;
}
</style>
