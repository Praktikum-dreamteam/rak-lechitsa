<template>
  <section class="info">
    <Container class="info__container">
      <p class="info__title">{{ Content.hashtag }}</p>
      <SectionTitle theme="violet">{{ Content.title }}</SectionTitle>
      <div class="info__content">
        <div class="info__column">
          <div class="info__subtitle" v-html="Content.text"></div>
          <btn @btn-click="openPopup" theme="history" class="info__button"
            >Рассказать историю</btn
          >
        </div>
        <div class="tabs">
          <div class="tabs__radios">
            <Radio
              @radio-click="addLongText"
              class="tabs__radio"
              :class="{ active: isLongText }"
              name="about"
              id="project"
              @mousemove="hover = true"
              @mouseleave="hover = false"
              >{{ Content.extraTexts[0].title }}</Radio
            >
            <Radio
              @radio-click="addShortText"
              class="tabs__radio"
              :class="{ active: !isLongText }"
              name="about"
              id="found"
              @mousemove="hover = true"
              @mouseleave="hover = false"
              >{{ Content.extraTexts[1].title }}</Radio
            >
          </div>
          <div class="tabs__texts">
            <div
              v-if="isLongText"
              class="tabs__text tabs__text_theme_violet"
              v-html="Content.extraTexts[0].text"
            ></div>
            <div
              v-else
              class="tabs__text tabs__text_theme_violet"
              v-html="Content.extraTexts[1].text"
            ></div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import Radio from '@/components/ui/Radio';
import Button from '@/components/ui/Button';
import Container from '@/components/Container';
export default {
  props: {
    Content: Object,
  },
  components: {
    SectionTitle,
    Radio,
    Container,
    btn: Button,
  },
  computed: {
    isLongText() {
      return this.$store.getters['info/getTextState'];
    },
  },
  methods: {
    addLongText() {
      this.$store.commit('info/addLong');
    },
    addShortText() {
      this.$store.commit('info/addShort');
    },
    openPopup() {
      this.$store.commit('popup/openQuiz');
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.info__title {
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 73px;
}

.info {
  width: 100%;
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.info__container {
  width: 100%;
  padding-top: 90px;
  padding-bottom: 100px;
}

.info__button {
  color: #000;
  background-color: #fff;
}

.info__content {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.info__subtitle {
  max-width: 340px;
  color: #dedede;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 32px;
}
.radio /deep/ {
  color: #c9c9c9;
}
.radio.active {
  color: #ffffff;
  font-weight: 500;
}
@media screen and (max-width: 1280px) {
  .info__subtitle {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }
  .tabs__radio {
    min-width: 160px;
  }
  .info__title {
    font-size: 58px;
    line-height: 70px;
    margin-bottom: 60px;
  }
  .info__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media screen and (max-width: 1024px) {
  .info__subtitle {
    max-width: 260px;
  }
  .info__title {
    font-size: 52px;
    line-height: 63px;
    margin-bottom: 46px;
  }
}

@media screen and (max-width: 768px) {
  .info__title {
    display: none;
  }
  .info__content {
    margin-top: 26px;
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-bottom: 120px;
  }
  .info__button {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-50%);
  }
  .info__subtitle {
    max-width: 100%;
    font-size: 13px;
    line-height: 16px;
  }
  .radio.active {
    border-bottom: 2px solid white;
  }
}
@media screen and (max-width: 550px) {
  .info__content {
    width: 100%;
    padding-bottom: 80px;
  }
}
</style>
