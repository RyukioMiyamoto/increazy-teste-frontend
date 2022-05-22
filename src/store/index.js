import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ceps: {},
    addresses: {},
  },
  getters: {},
  mutations: {
    ADD_CEP(state, payload) {
      Vue.set(this.state.ceps, payload.cep.replace("-", ""), payload);
    },

    ADD_ADDRESS(state, payload) {
      Vue.set(this.state.addresses, payload.cep.replace("-", ""), payload);
    },
  },
  actions: {},
  modules: {},
});
''