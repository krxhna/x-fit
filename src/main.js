import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// import { firestorePlugin } from 'vuefire'

// Vue.use(firestorePlugin)

createApp(App).use(router).mount('#app')