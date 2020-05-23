import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//data storage
export const state = () => ({
  stories: [
    {
      id: 1,
      cards: {
        id: 1,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 2,
      cards: {
        id: 2,
        src: '/history.png',
        name: 'Владимир Познер',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 3,
      cards: {
        id: 3,
        src: '/history.png',
        name: 'Александр Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 4,
      cards: {
        id: 4,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 5,
      cards: {
        id: 5,
        src: '/history.png',
        name: 'Владимир Познер',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 6,
      cards: {
        id: 6,
        src: '/history.png',
        name: 'Александр Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 7,
      cards: {
        id: 7,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 8,
      cards: {
        id: 8,
        src: '/history.png',
        name: 'Владимир Познер',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 9,
      cards: {
        id: 9,
        src: '/history.png',
        name: 'Александр Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 10,
      cards: {
        id: 10,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 11,
      cards: {
        id: 11,
        src: '/history.png',
        name: 'Владимир Познер',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 12,
      cards: {
        id: 12,
        src: '/history.png',
        name: 'Александр Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 13,
      cards: {
        id: 13,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 14,
      cards: {
        id: 14,
        src: '/history.png',
        name: 'Владимир Познер',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 15,
      cards: {
        id: 15,
        src: '/history.png',
        name: 'Александр Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 16,
      cards: {
        id: 16,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 17,
      cards: {
        id: 17,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 18,
      cards: {
        id: 18,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 19,
      cards: {
        id: 19,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 20,
      cards: {
        id: 20,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 21,
      cards: {
        id: 21,
        src: '/history.png',
        name: 'Владимир Познер213123',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 22,
      cards: {
        id: 22,
        src: '/history.png',
        name: 'Александр Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 23,
      cards: {
        id: 23,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 24,
      cards: {
        id: 24,
        src: '/history.png',
        name: 'Владимир Познер151251521',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 25,
      cards: {
        id: 25,
        src: '/history.png',
        name: 'Александр Тарханов8564564',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 26,
      cards: {
        id: 26,
        src: '/history.png',
        name: 'Владимир Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 27,
      cards: {
        id: 27,
        src: '/history.png',
        name: 'Владимир Познер',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 28,
      cards: {
        id: 28,
        src: '/history.png',
        name: 'Александр Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 29,
      cards: {
        id: 29,
        src: '/history.png',
        name: 'Владимир Тен3124124124',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 30,
      cards: {
        id: 30,
        src: '/history.png',
        name: 'Владимир231231231 Познер',
        description: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      },
    },
    {
      id: 31,
      cards: {
        id: 31,
        src: '/history.png',
        name: 'Александр12312313 Тарханов',
        description:
          'Я не могу победить свою пунктуальность в отличии от рака.',
      },
    },
    {
      id: 32,
      cards: {
        id: 32,
        src: '/history.png',
        name: 'Владимир 123123132Тен',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 33,
      cards: {
        id: 33,
        src: '/history.png',
        name: 'Владимир 123123132Тен',
        description: 'Я ненавижу пагинацию всем сердцем.',
      },
    },
  ],
});

//data changer
export const mutations = {};

//get data about state
export const getters = {
  getStories(state) {
    return state.stories;
  },
};
