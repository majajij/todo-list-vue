import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'
// import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'
// import '../node_modules/@fortawesome/fontawesome-free/css/brands.css'
// import '../node_modules/@fortawesome/fontawesome-free/css/solid.css'
import '../node_modules/@mdi/font/css/materialdesignicons.css'

createApp(App).use(router).use(store).mount('#app')
