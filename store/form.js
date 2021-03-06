export const state = () => ({
  dataForm: {},
});
export const mutations = {
  saveData(state, data) {
    state.dataForm = data;
  },
};
export const actions = {
  async SEND_FORM({ commit, state }, data) {
    await commit('saveData', data);
    await this.$axios.$post('forms/contacts', state.dataForm);
  },
};
