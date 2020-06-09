<template>
  <div class="slide">
    <div
      class="slide__background"
      :style="`background-image: url(${background})`"
    >
      <button class="slide__button" @click="showIframe">
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="slide__play"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM36.0659 63.8536L63.3131 46.6923C64.5586 45.9078 64.5586 44.0922 63.3131 43.3077L36.0659 26.1464C34.734 25.3076 33 26.2647 33 27.8387V62.1613C33 63.7353 34.734 64.6924 36.0659 63.8536Z"
            fill="#CECECE"
          />
        </svg>
      </button>
    </div>
    <iframe
      v-if="iframeShown"
      class="slide__content"
      :src="src"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeShown: false,
    };
  },
  props: {
    src: String,
    background: String,
  },
  methods: {
    showIframe() {
      this.iframeShown = !this.iframeShown;
    },
  },
};
</script>

<style scoped>
.slide {
  position: relative;
  height: 100%;
  width: 100%;
}
.slide__background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.slide__button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.8;
}
.slide__button:hover .slide__play {
  fill: #582b71;
}
.slide__content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: none;
  z-index: 2;
}
</style>
