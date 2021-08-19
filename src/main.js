import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import firebaseConfig from './api.js';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App).use(router).mount('#app')
