import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);
import "swiper/dist/css/swiper.css";
new Vue({
  render: h => h(App)
}).$mount("#app");
