import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// 挂载UI框架 Element Plus
import 'element-plus/dist/index.css'

// 挂载路由配置
import router from './router/index'

// 挂载Vuex
import store from './store/index'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
