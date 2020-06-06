import Vue from 'vue';
import Vuex from 'vuex';
import axios from '~/plugins/axios';

Vue.use(Vuex);

//data storage
export const state = () => ({
  mainStoriesId: [8, 7, 6, 5],
  stories: [],
  currentStory: {},
});

export const actions = {
  async fetchStories({ commit, state }) {
    const stories = await this.$axios.$get('stories');

    commit('setState', {
      name: 'stories',
      value: stories,
    });
  },
};

//data changer
export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

//get data about state
export const getters = {
  getStories(state) {
    return state.stories;
  },
  getСelebritiesStories(state) {
    const celebritiesStories = [];
    state.stories.forEach(item => {
      if (item.celebrity) {
        celebritiesStories.push(item);
      }
    });
    return celebritiesStories;
  },
  getCurrentStory(state) {
    return state.currentStory;
  },
};
