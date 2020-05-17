import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
  posts: [
    {
      id: 1,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
    {
      id: 2,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
    {
      id: 3,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
    {
      id: 4,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
    {
      id: 5,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
    {
      id: 6,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
    {
      id: 7,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
    {
      id: 8,
      data: {
        url: 'instagram.com/raklechitsa',
        img: '/instagram.png',
        alt: 'Пост в инстаграмме раклечится',
      },
    },
  ],
});

export const mutations = {};

export const getters = {
  getPosts(state) {
    return state.posts;
  },
};
