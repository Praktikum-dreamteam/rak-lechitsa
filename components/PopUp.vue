<template>
  <div>
    <div class="popup">
      <div class="popup__header">
        <div v-if="haveClose" @click="close" class="popup__close"></div>
      </div>
      <slot>Содержимое окна</slot>
    </div>
    <Overlay @overlayClick="close"></Overlay>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
import Container from '@/components/Container';
export default {
  props: {
    title: String,
    haveClose: Boolean,
    isTitleCenter: Boolean,
  },
  methods: {
    close() {
      this.$store.commit('popup/close');
    },
  },
  components: {
    Overlay,
    container: Container,
  },
};
</script>

<style scoped>
.test {
  padding: 15px;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 920px;
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
}
.popup__title_center {
  margin: 0 auto;
}
.popup__close {
  cursor: pointer;
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
@media screen and (max-width: 1280px) {
  .popup {
    max-width: 800px;
  }
}

@media screen and (max-width: 900px) {
  .popup {
    max-width: 580px;
  }
}
@media screen and (max-width: 600px) {
  .popup {
    max-width: 450px;
  }
}
@media screen and (max-width: 452px) {
  .popup {
    max-width: 290px;
    padding: 15px;
  }
  .popup__close {
    top: 15px;
    right: 15px;
  }
  .popup__close::after,
  .popup__close::before {
    height: 17px;
  }
}
</style>
