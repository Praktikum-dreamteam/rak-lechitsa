<template>
  <section class="info">
    <Container class="info__container">
      <p class="info__title">#раклечится</p>
      <SectionTitle theme="violet">О проекте</SectionTitle>
      <div class="info__content">
        <SectionText class="info__subtitle" theme="violet">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </SectionText>
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
              >Рак Лечится</Radio
            >
            <Radio
              @radio-click="addShortText"
              class="tabs__radio"
              :class="{ active: !isLongText }"
              name="about"
              id="found"
              @mousemove="hover = true"
              @mouseleave="hover = false"
              >Фонд Хабенского</Radio
            >
          </div>
          <div class="tabs__texts">
            <p v-if="isLongText" class="tabs__text tabs__text_theme_violet">
              Есть вещи, которые не лечатся. Особенности характера, страстные
              увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
              приобрели в детстве. Список можно продолжать до бесконечности, но
              одна болезнь в него точно не войдет. Эта болезнь — рак. Рак
              лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.
            </p>
            <p class="tabs__text tabs__text_theme_violet">
              Рак лечится — проект Благотворительного Фонда Константина
              Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
              изменить отношение людей к раку и заставить каждого поверить:
              онкологическое заболевание — это не приговор.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
import Radio from '@/components/ui/Radio';
import Container from '@/components/Container';
export default {
  components: {
    SectionTitle,
    SectionText,
    Radio,
    Container,
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
  /* margin: 0 auto; */
}

.info__container {
  padding-top: 60px;
  padding-bottom: 100px;
}

.info__content {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.info__subtitle {
  max-width: 340px;
}
.radio /deep/ {
  color: #c9c9c9;
}
.radio.active {
  color: #ffffff;
}
@media screen and (max-width: 1280px) {
  .info__subtitle {
    max-width: 305px;
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
  }
  .info__subtitle {
    max-width: 100%;
  }
  .radio.active {
    border-bottom: 2px solid white;
  }
}
</style>
