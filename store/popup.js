export const state = () => ({
  visible: false,
  isShare: false,
  isQuiz: false,
  isForm: false,
  isHaveClose: true,
  isError: false,
  isLoading: false,
});

export const mutations = {
  openShare(state) {
    state.visible = true;
    state.isShare = true;
    state.isQuiz = false;
    state.isForm = false;
  },
  openQuiz(state) {
    state.visible = true;
    state.isShare = false;
    state.isQuiz = true;
    state.isForm = false;
  },
  openForm(state) {
    state.visible = true;
    state.isShare = false;
    state.isQuiz = false;
    state.isForm = true;
  },
  close(state) {
    state.visible = false;
    state.isShare = false;
    state.isQuiz = false;
    state.isForm = false;
    state.isError = false;
  },
  toggleIconClose(state) {
    state.isHaveClose = !state.isHaveClose;
  },
  addErrorElement(state) {
    state.isError = true;
  },
  removeErrorElement(state) {
    state.isError = false;
  },
  toggleLoading(state) {
    state.isLoading = !state.isLoading;
  },
};
