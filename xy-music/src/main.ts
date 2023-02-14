import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.css'
import {createPinia} from "pinia";
const store = createPinia()
import router from "@/router";
import 'nprogress/nprogress.css';


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
