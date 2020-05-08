<template>
  <div class="container">
    <div class="test">
      <Cover />
      <Video />
      <Slogan />
      <History />
      <Slogan />
      <Instagram />
      <Forma />git
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
export default {
  components: {
    Logo,
    Cover,
    Video,
    Slogan,
    History,
    Instagram,
    Forma,
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
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
