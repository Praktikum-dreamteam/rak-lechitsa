<template>
  <section class="cover">
    <Container>
      <h1 class="cover__title">{{ Content.hashtag }}</h1>
      <button class="cover__polygon" v-on:click="setActive()">
        <img src="/polygon.png" alt="стрелка вниз" />
      </button>
    </Container>
  </section>
</template>

<script>
import Container from '@/components/Container';
export default {
  props: {
    Content: Object,
  },
  components: {
    Container,
  },
  methods: {
    setActive(index, event) {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.cover {
  position: relative;
  width: 100%;
  height: calc(100vh - 76px);
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cover__title {
  color: #fff;
  text-align: center;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
}
.cover__polygon {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  min-width: 36px;
  min-height: 12px;
  color: #fff;
  bottom: 40px;
  right: 50%;
  transform: translateX(50%);
}

.cover__polygon:active {
  outline: none;
}

.cover__polygon:focus {
  outline: none;
}
@media screen and (max-width: 1280px) {
  .cover__title {
    font-size: 72px;
    line-height: 94px;
  }
}
@media screen and (max-width: 768px) {
  .cover__title {
    font-size: 64px;
    line-height: 77px;
  }
}
@media screen and (max-width: 600px) {
  .cover {
    height: calc(100vh - 64px);
  }
  .cover__title {
    font-size: 42px;
    line-height: 44px;
  }
}
@media screen and (max-width: 420px) {
  .cover__title {
    font-size: 36px;
    line-height: 44px;
  }
}
</style>
