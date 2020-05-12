<template>
  <div>
    <Menu class="menu__open page__section" v-if="isOpenMenu"></Menu>
    <Header @openMenuClick="openMenu" @closeMenuClick="closeMenu" />
    <nuxt />
    <Popup
      v-if="IsShareShow"
      haveClose="true"
      class="share__popup"
      title="Поделитесь"
      @closeClick="closeShare"
    >
      <Share />
    </Popup>
    <Overlay @overlayClick="closeShare" v-if="IsShareShow" />
    <Footer @openShare="openShare" />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Popup from '@/components/PopUp';
import Overlay from '@/components/ui/Overlay';
import Share from '@/components/Share';
import Menu from '~/components/Menu';

export default {
  data() {
    return {
      IsShareShow: false,
      isOpenMenu: false,
    };
  },
  computed: {},
  methods: {
    openMenu() {
      this.isOpenMenu = true;
    },
    closeMenu() {
      this.isOpenMenu = false;
    },
    openShare() {
      this.IsShareShow = true;
    },
    closeShare() {
      this.IsShareShow = false;
    },
  },
  components: {
    Footer,
    Header,
    Popup,
    Overlay,
    Share,
    Menu,
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
@media screen and (max-width: 812px) {
  .menu.menu__open {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    padding-top: 18px;
    padding-bottom: 18px;
  }
}
@media screen and (max-width: 650px) {
  .popup.share__popup {
    width: 290px;
    padding: 35px 0 70px 0;
  }
}
</style>
