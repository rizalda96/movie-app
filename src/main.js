import './assets/main.css'
import '../node_modules/flowbite-vue/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'


import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 60 }

    return { top: 0 }
  },
  routes,
})
app.use(router)

app.mount('#app')
