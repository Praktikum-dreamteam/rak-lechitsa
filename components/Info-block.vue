<template>
  <section class="form">
    <Container class="form__container">
      <SectionTitle theme="white">{{ Content.title }}</SectionTitle>
      <div class="form__content">
        <SectionText class="form__subtitle" theme="white">{{
          Content.text
        }}</SectionText>
        <div class="tabs">
          <div class="tabs__radios">
            <Radio
              @radio-click="addLongText"
              class="tabs__radio"
              :class="{ active: isLongText }"
              name="form"
              id="long"
              @mousemove="hover = true"
              @mouseleave="hover = false"
              >{{ Content.extraTexts[0].title }}</Radio
            >
            <Radio
              @radio-click="addShortText"
              class="tabs__radio"
              :class="{ active: !isLongText }"
              name="form"
              id="short"
              @mousemove="hover = true"
              @mouseleave="hover = false"
              >{{ Content.extraTexts[1].title }}</Radio
            >
          </div>
          <div class="tabs__column">
            <div class="tabs__texts">
              <p v-if="isLongText" class="tabs__text">
                {{ Content.extraTexts[0].text }}
              </p>
              <p v-if="!isLongText" class="tabs__text">
                {{ Content.extraTexts[1].text }}
              </p>
            </div>
            <Button
              v-if="isLongText"
              @btn-click="openQuiz"
              class="form__button"
              theme="violet"
              >Заполнить форму</Button
            >
            <Button
              v-if="!isLongText"
              @btn-click="openForm"
              class="form__button"
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
  props: {
    Content: Object,
  },
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
.form {
  background-color: #f7f7f7;
}
.form__container {
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
.form__button {
  max-width: 280px;
}
.form__content {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  height: 100%;
}
.form__stories {
  min-width: 105px;
  list-style: none;
  padding-left: 0;
  margin-left: 195px;
  margin-right: 40px;
}
.form__subtitle {
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
  .form__subtitle {
    max-width: 305px;
  }
  .form__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .form__button {
    max-width: 230px;
  }
}
@media screen and (max-width: 1024px) {
  .form__subtitle {
    max-width: 260px;
  }
}
@media screen and (max-width: 768px) {
  .form__content {
    margin-top: 26px;
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .form__subtitle {
    max-width: 100%;
  }
  .radio.active {
    border-bottom: 2px solid #613a93;
  }
}
@media screen and (max-width: 425px) {
  .form__button {
    max-width: 100%;
  }
}
</style>
