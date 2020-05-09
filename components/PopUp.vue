<template>
  <div class="popup">
    <div class="popup__header">
      <h2 class="popup__title">Шаг 1 из 12</h2>
      <div class="popup__close"></div>
    </div>
    <slot>Содержимое окна</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 66%;
  box-sizing: border-box;
  z-index: 2;
  padding: 38px;
  background-color: #fff;
}
.popup__header {
  display: flex;
  justify-content: space-between;
}
.popup__title {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  font-family: Inter;
}
.popup__close {
  position: absolute;
  top: 35px;
  right: 35px;
  width: 20px;
  height: 20px;
}
.popup__close::after,
.popup__close::before {
  position: absolute;
  content: ' ';
  left: 9px;
  width: 2px;
  height: 20px;
  background-color: #000;
}
.popup__close::before {
  transform: rotate(45deg);
}
.popup__close::after {
  transform: rotate(-45deg);
}
</style>
