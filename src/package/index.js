import Select from "./google-translate-select.vue";

const withInstall = (Vue) => {
  Vue.component(Select.name, Select);
};

if (typeof window !== "undefined" && window.Vue) {
  withInstall(window.Vue);
}

export const GoogleTranslateSelect = withInstall;
export default GoogleTranslateSelect;
