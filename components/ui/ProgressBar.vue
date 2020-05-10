<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%`;
    },
  },
};
</script>

<style scoped>
.progress-bar {
  width: 260px;
  height: 40px;
  position: relative;
  background: #f4f4f4;
}

.progress-bar__fill {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: #613a93;
}
</style>
