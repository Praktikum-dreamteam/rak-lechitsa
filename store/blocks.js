import axios from 'axios';

export const state = () => ({
  blocks: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};
export const actions = {
  fetchBlocks(state) {
    return axios.get('https://strapi.kruzhok.io/blocks').then(response => {
      return state.commit('setState', {
        name: 'blocks',
        value: response.data,
      });
    });
  },
};
export const getters = {
  getBlocks(state) {
    return state.blocks;
  },
  getCurrentBlock: state => blockName => {
    return state.blocks.find(block => block.block === blockName);
  },
};
