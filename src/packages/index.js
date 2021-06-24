import VGoogleTranslate from "./src";

const install = Vue => {
  Vue.component(VGoogleTranslate.name, VGoogleTranslate);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
