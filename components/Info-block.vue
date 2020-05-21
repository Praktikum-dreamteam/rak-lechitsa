<template>
  <section class="info-block">
    <Container class="info-block__container">
      <SectionTitle theme="white">Расскажите свою историю</SectionTitle>
      <div class="info-block__content">
        <SectionText class="info-block__subtitle" theme="white">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </SectionText>
        <div class="tabs">
          <div class="tabs__radios">
            <Radio
              @radio-click="addLongText"
              class="tabs__radio"
              :class="{ active: isLongText }"
              name="info-block"
              id="long"
              @mousemove="hover = true"
              @mouseleave="hover = false"
              >1-й вариант</Radio
            >
            <Radio
              @radio-click="addShortText"
              class="tabs__radio"
              :class="{ active: !isLongText }"
              name="info-block"
              id="short"
              @mousemove="hover = true"
              @mouseleave="hover = false"
              >2-й вариант</Radio
            >
          </div>
          <div class="tabs__column">
            <div class="tabs__texts">
              <p v-if="isLongText" class="tabs__text">
                Заполнить подробную форму прямо на сайте и мы опубликуем вашу
                историю после проверки. Пожалуйста, заполняйте все пункты
                корректно, если вы испытаете какие-то сложности, воспользуйтесь
                2-м вариантом.
              </p>
              <p v-if="!isLongText" class="tabs__text">
                Оставить контакт (почту или номер телефона) и мы свяжемся с
                вами, зададим вопросы, уточним детали вашей истории.
              </p>
            </div>
            <Button
              v-if="isLongText"
              @btn-click="openQuiz"
              class="info-block__button"
              theme="violet"
              >Заполнить форму</Button
            >
            <Button
              v-if="!isLongText"
              @btn-click="openForm"
              class="info-block__button"
              theme="violet"
              >Оставить контакт</Button
            >
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Button from '@/components/ui/Button';
import Radio from '@/components/ui/Radio';
import SectionTitle from '@/components/SectionTitle';
import SectionText from '@/components/SectionText';
import Container from '@/components/Container';
export default {
  components: {
    Button,
    Radio,
    SectionTitle,
    SectionText,
    Container,
  },
  computed: {
    isLongText() {
      return this.$store.getters['infoBlock/getTextState'];
    },
  },
  methods: {
    addLongText() {
      this.$store.commit('infoBlock/addLong');
    },
    addShortText() {
      this.$store.commit('infoBlock/addShort');
    },
    openQuiz() {
      this.$store.commit('popup/openQuiz');
    },
    openForm() {
      this.$store.commit('popup/openForm');
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
.info-block {
  background-color: #f7f7f7;
}
.info-block__container {
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.info-block__button {
  max-width: 280px;
}
.info-block__content {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  height: 100%;
}
.info-block__stories {
  min-width: 105px;
  list-style: none;
  padding-left: 0;
  margin-left: 195px;
  margin-right: 40px;
}
.info-block__subtitle {
  max-width: 340px;
}
.tabs__column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}
.radio /deep/ {
  color: #a2a2a2;
}
.radio.active {
  color: #000000;
}
@media screen and (max-width: 1280px) {
  .info-block__subtitle {
    max-width: 305px;
  }
  .info-block__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .info-block__button {
    max-width: 230px;
  }
}
@media screen and (max-width: 1024px) {
  .info-block__subtitle {
    max-width: 260px;
  }
}
@media screen and (max-width: 768px) {
  .info-block__content {
    margin-top: 26px;
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .info-block__subtitle {
    max-width: 100%;
  }
  .radio.active {
    border-bottom: 2px solid #613a93;
  }
}
@media screen and (max-width: 425px) {
  .info-block__button {
    max-width: 100%;
  }
}
</style>
