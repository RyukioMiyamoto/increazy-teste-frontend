import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ceps: {},
    addresses: {},
  },
  mutations: {
    ADD_CEP(state, payload) {
      Vue.set(this.state.ceps, payload.cep.replace("-", ""), payload);
      window.localStorage.setItem(
        "ceps",
        JSON.stringify(Object.keys(this.state.ceps))
      );
    },

    ADD_ADDRESS(state, payload) {
      Vue.set(this.state.addresses, payload.cep.replace("-", ""), payload);
    },

    REMOVE_CEP(state, payload) {
      Vue.delete(this.state.ceps, payload.cep.replace("-", ""));
      window.localStorage.setItem(
        "ceps",
        JSON.stringify(Object.keys(this.state.ceps))
      );
    },

    REMOVE_ADDRESS(state, payload) {
      Vue.delete(this.state.addresses, payload.cep.replace("-", ""));
    },
  },
  actions: {
    deleteCepAndAddress(context, payload) {
      context.commit("REMOVE_CEP", payload);
      context.commit("REMOVE_ADDRESS", payload);
    },
  },
});
