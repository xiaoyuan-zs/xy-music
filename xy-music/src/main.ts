import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.css'

import {createPinia} from "pinia";
const store = createPinia()

import router from "@/router";
import 'nprogress/nprogress.css';

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
