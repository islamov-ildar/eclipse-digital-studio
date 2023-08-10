import { createStore } from 'vuex';

export default createStore({
  state: {
    date: '',
    previousDate: '',
    timestamp: '',
    valute: {},
  },
  getters: {
  },
  mutations: {
    addActualValute(state, valuteObj) {
      state.valute = valuteObj;
    },
  },
  actions: {
    setValute({ commit }, valuteObj) {
      commit('addActualValute', valuteObj);
    },
  },
  modules: {
  },
});
