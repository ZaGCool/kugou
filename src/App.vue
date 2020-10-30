<template>
  <div id="app">
      <!-- 头部区域 -->
      <div class="header">
        <!-- 最顶部区域 -->
        <mt-header title="">
          <router-link to="/" slot="left">
            <mt-button class="logo_icon"></mt-button>
          </router-link>
          <mt-button icon="search" slot="right" @click.native="gotoSearch"></mt-button>
        </mt-header>
        <!-- 导航区域 -->
        <!-- 准备具名路由视图 -->
       
        <router-view name="navBar"></router-view>
      </div>
      <!-- 主体区域 -->
      <div class="container">
        <!-- 默认路由视图 -->
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Header,Button } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
export default {
  
   created(){
    // 发请求 测试酷狗接口 axios
    // console.log(this.$axios);
    // ajax 无法跨域请求
    // let data = await this.$axios.get('/api/?json=true')
    // console.log(data);
  },
  methods: {
    gotoSearch(){
      this.$router.push({'path': "/search"})
    }
  }

}
</script>
<style lang="less">

    .header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 4.3rem;
      z-index: 2;
      .mint-header {

        .logo_icon {
          width: 5.1rem;
          height: 1.2rem;
          background: url(./assets/img/logo.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .container {
      margin-top: 4.5rem;
    }
  
</style>

