<template>
  <section class="cover">
    <Container>
      <h1 class="cover__title">{{ Content.hashtag }}</h1>
      <button class="cover__btn" v-on:click="openQuiz">
        Расссказать историю
      </button>
      <button class="cover__polygon" v-on:click="setActive()">
        <img src="/polygon.png" alt="стрелка вниз" />
      </button>
    </Container>
  </section>
</template>

<script>
import Container from '~/components/blocks/Container';
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
    openQuiz() {
      this.$store.commit('popup/openQuiz');
    },
  },
};
</script>

<style scoped>
.cover {
  position: relative;
  width: 100%;
  height: calc(100vh - 85px);
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
  margin-bottom: 30px;
}
.cover__btn {
  display: block;
  color: #fff;
  margin: 0 auto;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  padding: 12px 37px;
  border: 2px solid #ffffff;
  border-radius: 60px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.cover__btn:hover {
  opacity: 0.6;
  transition: 0.3s;
}
.cover__polygon {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  min-width: 36px;
  min-height: 12px;
  color: #fff;
  bottom: 35px;
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
    font-size: 78px;
    line-height: 94px;
  }
  .cover__btn {
    font-size: 22px;
    padding: 11px 27px;
  }
}
@media screen and (max-width: 1024px) {
  .cover__title {
    font-size: 78px;
    line-height: 94px;
    margin-bottom: 20px;
  }
  .cover__btn {
    font-size: 20px;
    padding: 10px 17px;
  }
}
@media screen and (max-width: 768px) {
  .cover__title {
    font-size: 64px;
    line-height: 77px;
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 600px) {
  .cover {
    height: calc(100vh - 64px);
  }
  .cover__title {
    margin-bottom: 18px;
    font-size: 42px;
    line-height: 44px;
  }
  .cover__btn {
    font-size: 18px;
    line-height: 24px;
    padding: 12px;
  }
}
@media screen and (max-width: 420px) {
  .cover__title {
    font-size: 36px;
    line-height: 44px;
  }
  .cover__btn {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
