import Vue from "vue";
import App from "./App.vue";
import GoogleTranslateSelect from "./package/index";

Vue.use(GoogleTranslateSelect);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
