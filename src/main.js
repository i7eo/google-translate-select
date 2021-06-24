import Vue from "vue";
import VGoogleTranslate from "./packages/index.js";
import App from "./App.vue";
import "./styles/index.scss";

Vue.use(VGoogleTranslate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
