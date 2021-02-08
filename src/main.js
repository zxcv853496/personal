import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import AOS from "aos";
import 'aos/dist/aos.css'
createApp.AOS = new AOS.init();




createApp(App).use(router).mount('#app')

if (process.env.NODE_ENV == 'development') {
    Vue.config.devtools = true;
} else {
    Vue.config.devtools = false;}
