<template>
  <form class="form-quiz">
    <h3 class="form-quiz__title">{{ currentQuestion.title }}</h3>
    <p class="form-quiz__question">
      <span class="form-quiz__text-main">{{ currentQuestion.question }}</span>
      <span class="form-quiz__text-additional">{{
        currentQuestion.description
      }}</span>
    </p>
    <inputForm
      class="form-quiz__input"
      placeholder="Напишите тут"
      type="text"
      v-model="answer"
    />
    <div class="form-quiz__buttons">
      <btn
        :disabled="this.$store.state.formQuiz.currentQuestion === 1"
        type="button"
        @btn-click="prevQuestion"
        class="form-quiz__button"
        theme="grey"
        >Назад</btn
      >
      <!-- TODO: Исправить условия -->
      <btn
        v-if="this.$store.state.formQuiz.currentQuestion !== 12"
        type="submit"
        @btn-click="nextQuestion"
        class="form-quiz__button form-quiz__button_next"
        theme="violet"
        >Далее</btn
      >
      <btn
        v-if="this.$store.state.formQuiz.currentQuestion === 12"
        type="submit"
        @btn-click="sendQuiz"
        class="form-quiz__button form-quiz__button_next"
        theme="violet"
        >Отправить</btn
      >
      <p
        v-if="this.$store.state.formQuiz.currentQuestion === 12"
        class="form-quiz__personal-data-agreement"
      >
        Нажимая на кнопку «отправить», вы даете согласие на
        <nuxt-link class="form-quiz__link" to="/policy"
          >обработку персональных данных</nuxt-link
        >
      </p>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
export default {
  components: {
    btn: Button,
    inputForm: Input,
  },
  data() {
    return {
      answer: '',
    };
  },
  computed: {
    currentQuestion() {
      const { formQuiz } = this.$store.state;
      const { currentQuestion, questions } = formQuiz;
      return questions[currentQuestion];
    },
    initialAnswer() {
      const { formQuiz } = this.$store.state;
      const { currentQuestion, answers } = formQuiz;
      return answers[currentQuestion] || '';
    },
  },
  methods: {
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
    sendQuiz() {
      console.log('Пошла форма!');
    },
  },
};
</script>

<style scoped>
.form-quiz__title {
  font-size: 28px;
  line-height: 32px;
  color: #000;
}
.form-quiz__question {
  font-size: 16px;
  line-height: 22px;
  margin-top: 40px;
}
.form-quiz__text-main {
  font-weight: 500;
}
.form-quiz__text-additional {
  color: #666;
}
.form-quiz__buttons {
  margin-top: 200px;
  display: flex;
  align-items: center;
}
.form-quiz__input {
  margin-top: 134px;
}
.form-quiz__button {
  margin-right: 30px;
}
.form-quiz__button:last-child {
  margin-right: 0;
}
.form-quiz__button_next {
  width: 226px;
}
@media screen and (max-width: 1280px) {
  .form-quiz__buttons {
    margin-top: 170px;
  }
  .form-quiz__button_next {
    width: 200px;
  }
  .form-quiz__input {
    margin-top: 100px;
  }
}
@media screen and (max-width: 1024px) {
  .form-quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
  .form-quiz__question {
    font-size: 15px;
    line-height: 19px;
  }
}
@media screen and (max-width: 768px) {
  .form-quiz__title {
    font-size: 26px;
    line-height: 30px;
  }
}
@media screen and (max-width: 452px) {
  .form-quiz__title {
    font-size: 18px;
    line-height: 21px;
  }
  .form-quiz__question {
    font-size: 13px;
    line-height: 16px;
  }
  .form-quiz__input {
    margin-top: 100px;
  }
  .form-quiz__button {
    margin-right: 15px;
  }
  .form-quiz__button_next {
    width: 206px;
  }
}
</style>
