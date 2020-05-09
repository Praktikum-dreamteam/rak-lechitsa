<template>
  <div class="container">
    <div class="test">
      <Cover />
      <Video />
      <Slogan />
      <History />
      <Slogan2 />
      <Instagram />
      <InfoBlock @openFormClick="openOrCloseForm" />
      <Statistics />
      <Info />
      <Popup v-if="IsFormShow" @closeClick="openOrCloseForm">
        <Form class="container__form"></Form>
      </Popup>
      <Overlay v-if="IsFormShow" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import Slogan from '@/components/Slogan';
import History from '@/components/History';
import Slogan2 from '@/components/Slogan2';
import Instagram from '@/components/Instagram';
import InfoBlock from '@/components/Info-block';
import Statistics from '@/components/Statistics';
import Info from '@/components/Info';
import Popup from '@/components/PopUp';
import Form from '@/components/Form';
import Overlay from '@/components/ui/Overlay';
export default {
  data() {
    return {
      IsFormShow: false,
    };
  },
  methods: {
    openOrCloseForm() {
      this.IsFormShow = !this.IsFormShow;
    },
  },
  components: {
    Logo,
    Cover,
    Video,
    Slogan,
    History,
    Slogan2,
    Instagram,
    InfoBlock,
    Statistics,
    Info,
    Form,
    Popup,
    Overlay,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  width: 1440px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__form {
  min-height: 520px;
}
.title {
  font-family: 'Inter', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.test {
  width: 100%;
}
</style>
