export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: {
    1: {
      name: 'full_name',
      title: 'Шаг 1 из 13',
      question: 'Как вас зовут ?',
      description: '',
    },
    2: {
      name: 'story',
      title: 'Шаг 2 из 13',
      question: 'Было ли у вас онкологическое заболевание?',
      description:
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    },
    3: {
      name: 'pleas_act',
      title: 'Шаг 3 из 13',
      question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
      description:
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    },
    4: {
      name: 'common_act',
      title: 'Шаг 4 из 13',
      question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      description: '',
    },
    5: {
      name: 'hobbies',
      title: 'Шаг 5 из 13',
      question: 'Какие сильные увлечения у Вас есть?',
      description:
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    },
    6: {
      name: 'habits',
      title: 'Шаг 6 из 13',
      question:
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      description: '',
    },
    7: {
      name: 'reg_act',
      title: 'Шаг 7 из 13',
      question:
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
      description: 'Кроме необходимых, таких, как чистка зубов.',
    },
    8: {
      name: 'alone_act',
      title: 'Шаг 8 из 13',
      question:
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      description: '',
    },
    9: {
      name: 'calm_act',
      title: 'Шаг 9 из 13',
      question: 'Что Вас успокаивает/умиротворяет лучше всего?',
      description: '',
    },
    10: {
      name: 'events',
      title: 'Шаг 10 из 13',
      question:
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      description: '',
    },
    11: {
      name: 'weekends',
      title: 'Шаг 11 из 13',
      question: 'Как вы обычно проводите выходные?',
      description: '',
    },
    12: {
      name: 'phone',
      name2: 'email',
      title: 'Шаг 12 из 13',
      question: 'Телефон для связи',
      description: '',
    },
    13: {
      name: 'email',
      title: 'Шаг 13 из 13',
      question: 'Электронная почта.',
      description:
        'После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.',
    },
  },
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[state.questions[currentQuestion].name] = answer;
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
export const getters = {
  getNumberAllQuestions(state) {
    return Object.keys(state.questions).length;
  },
};
export const actions = {
  async nextQuestion({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });

    if (currentQuestion < getters.getNumberAllQuestions(state)) {
      await commit('setCurrentQuestion', {
        currentQuestion: currentQuestion + 1,
      });
    }
  },
  prevQuestion({ commit, state }) {
    const { currentQuestion } = state;
    if (currentQuestion === 1) {
      return;
    }
    commit('setCurrentQuestion', { currentQuestion: currentQuestion - 1 });
  },
  async SEND_QUIZ({ commit, state }) {
    await this.$axios.$post('forms/stories', state.answers);
    await commit('setCurrentQuestion', { currentQuestion: 1 });
    await commit('resetAnswers');
  },
};
