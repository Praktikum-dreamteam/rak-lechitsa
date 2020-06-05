<template>
  <div class="quiz">
    <gratitude v-if="isGratitudeShow"></gratitude>
    <form v-else class="quiz__form">
      <h3 class="quiz__title">
        Шаг {{ numberCurrentQuestion }} из {{ numberAllQuestions }}
      </h3>
      <p class="quiz__question">
        <span class="quiz__text-main">{{ currentQuestion.question }}</span>
        <span class="quiz__text-additional">
          {{ currentQuestion.description }}
        </span>
      </p>
      <inputForm
        class="quiz__input"
        placeholder="Напишите тут"
        type="text"
        @input="valid"
        v-model="answer"
        :isValid="isValid"
        :textError="textError"
      />
      <div class="quiz__footer">
        <div class="quiz__buttons">
          <btn
            :disabled="numberCurrentQuestion === 1"
            type="button"
            @btn-click="prevQuestion"
            class="quiz__button"
            theme="grey"
            >Назад</btn
          >
          <!-- TODO: Исправить условия -->
          <btn
            v-if="numberCurrentQuestion !== numberAllQuestions"
            :disabled="!isValid || answer == ''"
            type="submit"
            @btn-click="nextQuestion"
            class="quiz__button quiz__button_next"
            theme="violet"
            >Далее</btn
          >
          <btn
            v-if="numberCurrentQuestion === numberAllQuestions"
            :disabled="!isValid || answer == ''"
            type="submit"
            @btn-click="sendQuiz"
            class="quiz__button quiz__button_next"
            theme="violet"
            >Отправить</btn
          >
        </div>
        <personal-data-consent
          class="quiz__personal-data"
          v-if="numberCurrentQuestion === numberAllQuestions"
        />
      </div>
    </form>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import PersonalDataConsent from '@/components/PersonalDataConsent';
import Gratitude from '@/components/Gratitude';
export default {
  components: {
    btn: Button,
    inputForm: Input,
    'personal-data-consent': PersonalDataConsent,
    gratitude: Gratitude,
  },
  data() {
    return {
      answer: '',
      isGratitudeShow: false,
      isValid: true,
      textError: '',
    };
  },
  computed: {
    currentQuestion() {
      const { formQuiz } = this.$store.state;
      const { currentQuestion, questions } = formQuiz;
      return questions[currentQuestion];
    },
    numberCurrentQuestion() {
      const { formQuiz } = this.$store.state;
      return formQuiz.currentQuestion;
    },
    numberAllQuestions() {
      return this.$store.getters['formQuiz/getNumberAllQuestions'];
    },
    initialAnswer() {
      const { formQuiz } = this.$store.state;
      const { currentQuestion, answers } = formQuiz;
      return answers[this.currentQuestion.name] || '';
    },
    isValidInput() {
      return this.isValid;
    },
  },
  methods: {
    valid() {
      const rePhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.currentQuestion.name == 'phone') {
        this.isValid = rePhone.test(this.answer);
        this.textError = 'Введите корректный номер телефона';
        return;
      }
      if (this.currentQuestion.name === 'email') {
        this.isValid = reEmail.test(this.answer);
        this.textError = 'Введите корректный адрес электронной почты';
        return;
      }
      this.isValid = this.answer !== '';
      this.textError = 'Поле необходимо заполнить';
    },
    async nextQuestion() {
      await this.$store.dispatch('formQuiz/nextQuestion', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer;
    },
    async prevQuestion() {
      await this.$store.dispatch('formQuiz/prevQuestion');
      this.answer = this.initialAnswer;
    },
    async sendQuiz() {
      await this.$store.dispatch('formQuiz/nextQuestion', {
        answer: this.answer,
      });
      await this.$store.commit('popup/toggleLoading');
      await this.$store
        .dispatch('formQuiz/SEND_QUIZ')
        .then(() => {
          this.isGratitudeShow = true;
          this.$store.commit('popup/removeErrorElement');
          this.$store.commit('popup/toggleIconClose');
        })
        .catch(err => {
          this.$store.commit('popup/addErrorElement');
        })
        .finally(() => this.$store.commit('popup/toggleLoading'));
    },
  },
};
</script>

<style scoped>
.quiz__title {
  font-size: 28px;
  line-height: 32px;
  color: #000;
}
.quiz__question {
  font-size: 16px;
  line-height: 22px;
  margin-top: 40px;
  min-height: 115px;
}
.quiz__text-main {
  font-weight: 500;
}
.quiz__text-additional {
  color: #666;
}
.quiz__footer {
  display: flex;
  margin-top: 200px;
  align-items: center;
}
.quiz__buttons {
  margin-right: 30px;
  display: flex;
  align-items: center;
}
.quiz__input {
  margin-top: 41px;
}
.quiz__button {
  margin-right: 30px;
}
.quiz__button:last-child {
  margin-right: 0;
}
.quiz__button_next {
  width: 226px;
}
@media screen and (max-width: 1280px) {
  .quiz__footer {
    margin-top: 170px;
  }
  .quiz__button_next {
    width: 200px;
  }
  .quiz__input {
    margin-top: 0px;
  }
}
@media screen and (max-width: 1024px) {
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
  .quiz__question {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
}
@media screen and (max-width: 600px) {
  .quiz__footer {
    flex-wrap: wrap;
  }
  .quiz__personal-data {
    margin-top: 10px;
  }
  .quiz__input {
    margin-top: 6px;
  }
}
@media screen and (max-width: 452px) {
  .quiz__title {
    font-size: 18px;
    line-height: 21px;
  }
  .quiz__question {
    font-size: 13px;
    line-height: 16px;
    min-height: 130px;
  }
  .quiz__input {
    margin-top: 42px;
  }
  .quiz__button {
    margin-right: 15px;
  }
  .quiz__button_next {
    width: 206px;
  }
}
</style>
