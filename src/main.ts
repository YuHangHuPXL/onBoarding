import './assets/main.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { i18nPlugin } from '@/plugins/i18n/i18n'
import { router } from '@/router/router'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(router).use(i18nPlugin).use(VueQueryPlugin)

app.mount('#app')
