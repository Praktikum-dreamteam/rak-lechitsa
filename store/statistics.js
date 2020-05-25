export const state = () => ({
  statistics: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  async fetchStatistics({ commit }) {
    const stats = await this.$axios.$get('statistics');
    commit('setState', {
      name: 'statistics',
      value: stats,
    });
  },
};

export const getters = {
  getStatistics(state) {
    return state.statistics;
  },
};
