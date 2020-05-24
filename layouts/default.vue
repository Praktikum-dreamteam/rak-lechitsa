<template>
  <div>
    <client-only>
      <mobile-menu v-if="isMobileMenuOpened" class="menu__open"></mobile-menu>
    </client-only>
    <Header :Content="block('header')" />
    <nuxt />
    <Popup v-if="popupVisible" :haveClose="true" title="Поделитесь">
      <Share v-if="shareVisible" />
      <form-quiz v-if="quizVisible" />
      <Form v-if="formVisible" />
    </Popup>
    <Footer :Content="block('footer')" />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Popup from '@/components/PopUp';
import Share from '@/components/Share';
import Menu from '@/components/Menu';
import Quiz from '@/components/Quiz';
import Form from '@/components/Form';

export default {
  data() {
    return {
      IsShareShow: false,
    };
  },
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
    popupVisible() {
      const { popup } = this.$store.state;
      return popup.visible;
    },
    quizVisible() {
      const { popup } = this.$store.state;
      return popup.isQuiz;
    },
    shareVisible() {
      const { popup } = this.$store.state;
      return popup.isShare;
    },
    formVisible() {
      const { popup } = this.$store.state;
      return popup.isForm;
    },
  },
  components: {
    Footer,
    Header,
    Popup,
    Share,
    Form,
    'mobile-menu': Menu,
    'form-quiz': Quiz,
  },
  methods: {
    block(name) {
      const blocks = this.$store.getters['blocks/getBlocks'];
      const currentBlock = blocks.find(item => item.block === name);
      console.log(currentBlock);
      return currentBlock;
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.menu.menu__open {
  display: none;
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
@media screen and (max-width: 792px) {
  .menu.menu__open {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    padding: 18px 50px;
  }
}
@media screen and (max-width: 650px) {
  .popup.share__popup {
    width: 290px;
    padding: 35px 0 70px 0;
  }
}
@media screen and (max-width: 452px) {
  .menu.menu__open {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 18px 15px;
  }
}
</style>
