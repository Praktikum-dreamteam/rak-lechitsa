export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: {
    1: {
      title: 'Шаг 1 из 12',
      question: 'Как вас зовут ?',
      description: '',
    },
    2: {
      title: 'Шаг 2 из 12',
      question: 'Было ли у вас онкологическое заболевание?',
      description:
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    },
    3: {
      title: 'Шаг 3 из 12',
      question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
      description:
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    },
    4: {
      title: 'Шаг 4 из 12',
      question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      description: '',
    },
    5: {
      title: 'Шаг 5 из 12',
      question: 'Какие сильные увлечения у Вас есть?',
      description:
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    },
    6: {
      title: 'Шаг 6 из 12',
      question:
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      description: '',
    },
    7: {
      title: 'Шаг 7 из 12',
      question:
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
      description: 'Кроме необходимых, таких, как чистка зубов.',
    },
    8: {
      title: 'Шаг 8 из 12',
      question:
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      description: '',
    },
    9: {
      title: 'Шаг 9 из 12',
      question: 'Что Вас успокаивает/умиротворяет лучше всего?',
      description: '',
    },
    10: {
      title: 'Шаг 10 из 12',
      question: 'Как вы обычно проводите выходные?',
      description: '',
    },
    11: {
      title: 'Шаг 11 из 12',
      question:
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      description: '',
    },
    12: {
      title: 'Шаг 12 из 12',
      question: 'Почта или телефон для связи',
      description:
        'Укажите удобный для вас формат связи. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    },
  },
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[currentQuestion] = answer;
  },
  setCurrentQuestion(state, { currentQuestion }) {
    state.currentQuestion = currentQuestion;
  },
  setQuestions(state, questions) {
    state.questions = questions;
  },
  resetAnswers(state) {
    state.answers = {};
  },
};

export const actions = {
  async nextQuestion({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion + 1,
    });
  },
  prevQuestion({ commit, state }) {
    const { currentQuestion } = state;
    if (currentQuestion === 1) {
      return;
    }
    commit('setCurrentQuestion', { currentQuestion: currentQuestion - 1 });
  },
  async sendQuiz({ commit, state }) {
    await commit('setCurrentQuestion', { currentQuestion: 1 });
    console.log(state.answers);
    await commit('resetAnswers');
  },
};
