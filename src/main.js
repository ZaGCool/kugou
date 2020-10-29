import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入一个样式初始化的文件
import './assets/base.css'

Vue.config.productionTip = false

// let iw = document.documentElement.clientWidth;
// iw: iphone5 320px  375  

// 引入axios
import axios from 'axios'

// 把axios 挂载 到 vue的构造函数的原型上 所有的组件实例都可以访问了

Vue.prototype.$axios = axios;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')