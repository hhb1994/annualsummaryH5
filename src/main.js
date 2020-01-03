import Vue from "vue";
import App from "./App.vue";
import TweenLite from "gsap";
Vue.prototype.$tweenLite = TweenLite;

Vue.config.productionTip = false;
import "./assets/scss/main.scss";
import "swiper/css/swiper.min.css";
new Vue({
  render: h => h(App)
}).$mount("#app");
