<template>
  <div class="double-progress-bar">
    <div
      class="double-progress-bar__fill double-progress-bar__fill_type_old"
      :style="oldStyle"
    ></div>
    <div
      class="double-progress-bar__fill double-progress-bar__fill_type_new"
      :style="newStyle"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    oldValue: Number,
    newValue: Number,
    maxValue: Number,
  },
  computed: {
    oldStyle() {
      return `width: ${(this.oldValue / this.maxValue) * 100}%`;
    },
    newStyle() {
      return `width: ${(this.newValue / this.maxValue) * 100}%`;
    },
  },
};
</script>

<style scoped>
.double-progress-bar {
  width: 100%;
  height: 40px;
  position: relative;
}
@media screen and (max-width: 1280px) {
  .double-progress-bar {
    height: 35px;
  }
}
@media screen and (max-width: 1024px) {
  .double-progress-bar {
    height: 28px;
  }
}
@media screen and (max-width: 768px) {
  .double-progress-bar {
    height: 28px;
  }
}
.double-progress-bar__fill {
  position: absolute;
  height: 50%;
  left: 0;
}
.double-progress-bar__fill_type_old {
  top: 0;
  background: #f4f4f4;
}
.double-progress-bar__fill_type_new {
  bottom: 0;
  background: #613a93;
}
</style>
