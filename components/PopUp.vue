<template>
  <div>
    <div class="container">
      <div class="popup">
        <div class="popup__header">
          <div v-if="haveClose" @click="close" class="popup__close"></div>
        </div>
        <slot>Содержимое окна</slot>
      </div>
      <div v-if="haveError" class="popup__error">
        <p class="popup__error-text">
          Ошибка отправки данных, пожалуйста, попробуйте еще раз.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Container from '@/components/Container';
export default {
  props: {
    title: String,
    isTitleCenter: Boolean,
  },
  methods: {
    close() {
      this.$store.commit('popup/close');
    },
  },
  components: {
    container: Container,
  },
  computed: {
    haveClose() {
      const { popup } = this.$store.state;
      return popup.isHaveClose;
    },
    haveError() {
      const { popup } = this.$store.state;
      return popup.isError;
    },
  },
};
</script>

<style scoped>
.popup {
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 1;
  padding: 38px;
  background-color: #fff;
}
.popup__error {
  background-color: #f0f0f0;
  padding: 16px 0;
  text-align: center;
}
.popup__error-text {
  color: red;
  font-size: 14px;
  line-height: 17px;
}
.container {
  box-sizing: border-box;
  position: fixed;
  max-width: 920px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
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
.popup.share__popup {
  padding: 40px 0 108px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 800px;
}

@media screen and (max-width: 900px) {
  .popup.share__popup {
    width: 580px;
    padding: 25px 0 70px 0;
  }
}

@media screen and (max-width: 650px) {
  .popup.share__popup {
    width: 290px;
    padding: 35px 0 70px 0;
  }
}
@media screen and (max-width: 1280px) {
  .container {
    max-width: 800px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    max-width: 580px;
  }
}
@media screen and (max-width: 600px) {
  .container {
    max-width: 450px;
  }
  .popup__error {
    padding: 18px 0;
  }
  .popup__error-text {
    font-size: 11px;
    line-height: 13px;
  }
}
@media screen and (max-width: 452px) {
  .popup {
    max-width: 290px;
    padding: 15px;
  }
  .popup__error {
    max-width: 290px;
    margin: 0 auto;
  }
  .popup__close {
    top: 15px;
    right: 15px;
  }
  .popup__close::after,
  .popup__close::before {
    height: 17px;
  }
  .popup__error {
    padding: 12px 25px;
  }
}
@media screen and (max-height: 750px) {
  .container {
    height: 100vh;
    overflow: auto;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding-top: 85px;
    padding-bottom: 85px;
  }
  .container::-webkit-scrollbar {
    width: 0;
  }
}
</style>
