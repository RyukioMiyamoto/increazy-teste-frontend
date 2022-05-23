import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ButtonPrimary from "@/components/ButtonPrimary";
import VueMask from "v-mask";

Vue.config.productionTip = false;
Vue.component("ButtonPrimary", ButtonPrimary);
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
