import { createApp } from 'vue'
import App from './App.vue'

import {createPinia} from "pinia";
const store = createPinia()

import router from "@/router";
import 'nprogress/nprogress.css';
import '@layui/layui-vue/lib/index.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
