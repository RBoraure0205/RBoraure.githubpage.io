import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "jquery";
import "popper.js";
import router from "./router";
import "vue-loaders/dist/vue-loaders.css";
import VueLoadersPacman from "vue-loaders/dist/loaders/pacman";
import StoryblokVue from "storyblok-vue";

Vue.use(StoryblokVue);
Vue.use(VueLoadersPacman);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
