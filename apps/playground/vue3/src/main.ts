import { createApp } from 'vue'
import GoogleTranslateSelect from '@google-translate-select/vue3'
import '@google-translate-select/theme-chalk/src/index.scss'
import App from './App.vue'
import './style.css'

createApp(App).use(GoogleTranslateSelect).mount('#app')
