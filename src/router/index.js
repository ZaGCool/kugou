import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 navs

import navs from './nav'

import Search from '@/views/Search/Search'
import NavSearch from '@/components/nav/NavSearch'

Vue.use(VueRouter)

const routes = [
    ...navs,
    {
        path: '/search',
        name: 'search',
        components: {
            default: Search,
            navBar: NavSearch
        }
    }
]

const router = new VueRouter({
    routes
})

export default router