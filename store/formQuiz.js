export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: {
    1: {
      name: 'name',
      title: 'Шаг 1 из 12',
      question: 'Как вас зовут ?',
      description: '',
    },
    2: {
      name: 'cancerStory',
      title: 'Шаг 2 из 12',
      question: 'Было ли у вас онкологическое заболевание?',
      description:
        'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
    },
    3: {
      name: 'pleasureActivities',
      title: 'Шаг 3 из 12',
      question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
      description:
        'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
    },
    4: {
      name: 'commonActivities',
      title: 'Шаг 4 из 12',
      question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
      description: '',
    },
    5: {
      name: 'hobbies',
      title: 'Шаг 5 из 12',
      question: 'Какие сильные увлечения у Вас есть?',
      description:
        'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
    },
    6: {
      name: 'habits',
      title: 'Шаг 6 из 12',
      question:
        'Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?',
      description: '',
    },
    7: {
      name: 'regularActivities',
      title: 'Шаг 7 из 12',
      question:
        'Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно?',
      description: 'Кроме необходимых, таких, как чистка зубов.',
    },
    8: {
      name: 'aloneActivities',
      title: 'Шаг 8 из 12',
      question:
        'Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?',
      description: '',
    },
    9: {
      name: 'calmDownActivities',
      title: 'Шаг 9 из 12',
      question: 'Что Вас успокаивает/умиротворяет лучше всего?',
      description: '',
    },
    10: {
      name: 'weekends',
      title: 'Шаг 10 из 12',
      question: 'Как вы обычно проводите выходные?',
      description: '',
    },
    11: {
      name: 'events',
      title: 'Шаг 11 из 12',
      question:
        'Какие события/ситуации или действия других людей обычно выводят Вас из себя?',
      description: '',
    },
    12: {
      name: 'phone',
      name2: 'email',
      title: 'Шаг 12 из 12',
      question: 'Телефон для связи',
      description: '',
    },
    13: {
      name: 'email',
      title: 'Шаг 12 из 12',
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
  async sendQuiz({ commit, state }) {
    await commit('setCurrentQuestion', { currentQuestion: 1 });
    console.log(state.answers);
    await commit('resetAnswers');
  },
};
