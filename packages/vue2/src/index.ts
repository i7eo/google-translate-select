import Select from './google-translate-select.vue'

const withInstall = (Vue: any) => {
  Vue.component((Select as any).extendOptions.name, Select)
}

if (typeof window !== 'undefined' && window.Vue) {
  withInstall(window.Vue)
}

export const GoogleTranslateSelect = withInstall(Select)
export default {
  install: withInstall,
}

export * from './types/props'
