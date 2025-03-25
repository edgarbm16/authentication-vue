import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap"
import { initializeApp } from "firebase/app";
import { Amplify } from "aws-amplify"
import awsExports from "./aws-exports"
import Emitter from 'tiny-emitter'

Amplify.configure(awsExports);

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

const app = createApp(App)

app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter.TinyEmitter()

app.use(router).mount('#app')
