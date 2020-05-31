import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
<<<<<<< HEAD
  render: h => h(App)
=======
  render: (h) => h(App),
>>>>>>> 33b0879543fec0b19ce6ac4ece1697ac9e3ab6ad
}).$mount("#app");
