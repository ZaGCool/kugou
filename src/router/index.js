import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 navs

import navs from './nav'

Vue.use(VueRouter)

const routes = [
    ...navs,
]

const router = new VueRouter({
    routes
})

export default router