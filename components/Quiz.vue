<template>
  <form class="form-quiz">
    <h3 class="form-quiz__title">{{ currentQuestion.title }}</h3>
    <p class="form-quiz__question">
      <span class="form-quiz__text-main">{{ currentQuestion.question }}</span>
      <span class="form-quiz__text-additional">
        {{ currentQuestion.description }}
      </span>
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
        class="form-quiz__button"
        theme="violet"
        >Далее</btn
      >
      <btn
        v-if="this.$store.state.formQuiz.currentQuestion === 12"
        type="submit"
        @btn-click="sendQuiz"
        class="form-quiz__button"
        theme="violet"
        >Отправить</btn
      >
      <p
        v-if="this.$store.state.formQuiz.currentQuestion === 12"
        class="form__personal-data-agreement"
      >
        Нажимая на кнопку «отправить», вы даете согласие на
        <nuxt-link class="form__link" to="/policy"
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
.form__button:last-child {
  margin-right: 0;
}
.form__personal-data-agreement {
  max-width: 378px;
  font-size: 14px;
  line-height: 17px;
  color: #666;
}
.form__link {
  color: #666;
}
</style>
