import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
  instagram: [],
});

export const mutations = {
  addPhotos(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async GET_PHOTOS({ commit }) {
    const data = await this.$axios.$get(
      'https://www.instagram.com/raklechitsa/?__a=1'
    );
    const formatData = getPosts(data);
    return commit('addPhotos', {
      name: 'instagram',
      value: formatData,
    });
  },
};

const getPosts = data => {
  return data.graphql.user.edge_owner_to_timeline_media.edges.map(post => {
    const {
      node: { display_url, accessibility_caption, shortcode },
    } = post;
    return {
      display_url,
      accessibility_caption,
      url: `https://www.instagram.com/p/${shortcode}`,
    };
  });
};

export const getters = {
  getPosts(state) {
    return state.instagram;
  },
};
