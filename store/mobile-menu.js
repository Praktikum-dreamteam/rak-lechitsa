export const state = () => ({
  mobileOpened: false,
});

export const mutations = {
  toggleMenu(state) {
    return (state.mobileOpened = !state.mobileOpened);
  },
  closeMenu(state) {
    return (state.mobileOpened = false);
  },
};

export const getters = {
  getMobileMenuState(state) {
    return state.mobileOpened;
  },
};
