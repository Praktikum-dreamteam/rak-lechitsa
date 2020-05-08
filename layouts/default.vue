<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    'my-header': Header,
    'my-footer': Footer,
  },
};
</script>
<style>
html {
  font-family: 'Inter', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
