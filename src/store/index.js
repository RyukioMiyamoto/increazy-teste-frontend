import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ceps: [],
  },
  getters: {},
  mutations: {
    ADD_CEP(state, payload) {
      this.state.ceps.push(payload);
      
    },
  },
  actions: {},
  modules: {},
});
