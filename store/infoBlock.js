export const state = () => ({
  longText: true,
});

export const mutations = {
  addLong(state) {
    return (state.longText = true);
  },
  addShort(state) {
    return (state.longText = false);
  },
};

export const getters = {
  getTextState(state) {
    return state.longText;
  },
};
