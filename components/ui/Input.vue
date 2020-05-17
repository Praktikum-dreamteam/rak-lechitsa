<template>
  <div>
    <input
      @input="handleInput"
      class="input"
      :type="type"
      :placeholder="placeholder"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    type: String,
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content);
    },
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
