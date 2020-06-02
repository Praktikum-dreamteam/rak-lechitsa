<template>
  <div>
    <client-only>
      <transition name="menu">
        <mobile-menu v-if="isMobileMenuOpened" class="menu__open"></mobile-menu>
      </transition>
    </client-only>
    <Header :Content="block('header')" />
    <nuxt />
    <transition name="fade">
      <Popup v-if="popupVisible" :haveClose="true" title="Поделитесь">
        <Share v-if="shareVisible" />
        <form-quiz v-if="quizVisible" />
        <Form v-if="formVisible" />
      </Popup>
    </transition>
    <transition name="overlay">
      <Overlay @overlayClick="closeByOverlay" v-if="popupVisible" />
    </transition>
    <Footer :Content="block('footer')" />
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
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
    Overlay,
  },
  methods: {
    block(name) {
      const blocks = this.$store.getters['blocks/getBlocks'];
      const currentBlock = blocks.find(item => item.block === name);
      return currentBlock;
    },
    closeByOverlay() {
      this.$store.commit('popup/close');
    },
  },
};
</script>

<style></style>
