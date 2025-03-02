import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDoFHLlMFXy5bjZhyyjPUB17I0QAUaHGQA",
    authDomain: "curso-vue-88716.firebaseapp.com",
    projectId: "curso-vue-88716",
    storageBucket: "curso-vue-88716.firebasestorage.app",
    messagingSenderId: "1011976796417",
    appId: "1:1011976796417:web:5653307b50d3284867c300",
    measurementId: "G-QCR80PHE5F"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
