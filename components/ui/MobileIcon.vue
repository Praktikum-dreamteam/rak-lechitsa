<template>
  <div
    :class="['mobile-button', { 'mobile-button_type_close': isMenuOpened }]"
    @click="toggleMobile"
  ></div>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMenu');
    },
  },
};
</script>

<style scoped>
.mobile-button {
  width: 32px;
  height: 26px;
  background-image: url("data:image/svg+xml, %3Csvg width='32' height='26' viewBox='0 0 32 26' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cline y1='1.5' x2='32' y2='1.5' stroke='black' stroke-width='3' /%3E%3Cline y1='12.5' x2='32' y2='12.5' stroke='black' stroke-width='3' /%3E%3Cline y1='22.5' x2='32' y2='22.5' stroke='black' stroke-width='3' /%3E%3C/svg%3E");
}
.mobile-button.mobile-button_type_close {
  width: 26px;
  background-image: url("data:image/svg+xml, %3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cline x1='1.62684' y1='24.2528' x2='24.2543' y2='1.6254' stroke='black' stroke-width='3' /%3E%3Cline x1='24.2557' y1='24.3741' x2='1.62833' y2='1.74672' stroke='black' stroke-width='3' /%3E%3C/svg%3E");
}
.mobile-button:hover {
  cursor: pointer;
}
</style>
