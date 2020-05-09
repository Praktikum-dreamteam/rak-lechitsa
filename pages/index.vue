<template>
  <div class="container">
    <div class="test">
      <Cover />
      <Video />
      <Slogan />
      <History />
      <Slogan />
      <Instagram />
      <Forma />
      <Statistics />
      <Info />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import Slogan from '@/components/Slogan';
import History from '@/components/History';
import Instagram from '@/components/Instagram';
import Forma from '@/components/Forma';
import Statistics from '@/components/Statistics';
import Info from '@/components/Info';
export default {
  components: {
    Logo,
    Cover,
    Video,
    Slogan,
    History,
    Instagram,
    Forma,
    Statistics,
    Info,
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 1440px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.test {
  width: 100%;
}
</style>
