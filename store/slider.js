import Vue from 'vue';
import Vuex from 'vuex';
import axios from '~/plugins/axios';

Vue.use(Vuex);

export const state = () => ({
  slides: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchSlides({ commit }) {
    const slides = await this.$axios.$get('videos');
    console.log({ slides });
    commit('setState', {
      name: 'slides',
      value: slides,
    });
  },
};

export const getters = {
  getSlides(state) {
    return state.slides;
  },
};
