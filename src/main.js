import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 样式重置和rem计算文件
import './assets/css/reset.css'
import './assets/js/rem.js'

// 引入第三方库
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus).mount('#app')