<template>
  <div>
    <my-header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header';
export default {
  components: {
    'my-header': Header,
  },
};
</script>
<style>
html {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
