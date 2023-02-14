import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.css'

import {createPinia} from "pinia";
const store = createPinia()

import router from "@/router";
import 'nprogress/nprogress.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
