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
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Pozner',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 2,
      cards: {
        id: 2,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Adolf',
        description: 'GERMANY',
      },
    },
    {
      id: 3,
      cards: {
        id: 3,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Stalin',
        description: 'SOVIET UNION',
      },
    },
    {
      id: 4,
      cards: {
        id: 4,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Roosevelt',
        description: 'USA',
      },
    },
    {
      id: 5,
      cards: {
        id: 5,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Roosevelt',
        description: 'USA',
      },
    },
    {
      id: 6,
      cards: {
        id: 6,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Roosevelt',
        description: 'USA',
      },
    },
    {
      id: 7,
      cards: {
        id: 7,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Churchill',
        description: 'USA',
      },
    },
    {
      id: 8,
      cards: {
        id: 8,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Mussolini',
        description: 'Italy',
      },
    },
    {
      id: 9,
      cards: {
        id: 9,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Pozner',
        description:
          'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      },
    },
    {
      id: 10,
      cards: {
        id: 10,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Adolf',
        description: 'GERMANY',
      },
    },
    {
      id: 11,
      cards: {
        id: 11,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Stalin',
        description: 'SOVIET UNION',
      },
    },
    {
      id: 12,
      cards: {
        id: 12,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Roosevelt',
        description: 'USA',
      },
    },
    {
      id: 13,
      cards: {
        id: 13,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Roosevelt',
        description: 'USA',
      },
    },
    {
      id: 14,
      cards: {
        id: 14,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Roosevelt',
        description: 'USA',
      },
    },
    {
      id: 15,
      cards: {
        id: 15,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Churchill',
        description: 'USA',
      },
    },
    {
      id: 16,
      cards: {
        id: 16,
        src: 'https://i.gifer.com/E8SJ.gif',
        name: 'Mussolini',
        description: 'Italy',
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
