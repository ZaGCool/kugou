<template>
  <div id="app">
      <!-- 头部区域 -->
      <div class="header">
        <!-- 最顶部区域 -->
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

export default {
  
  async created(){
    // 发请求 测试酷狗接口 axios
    // console.log(this.$axios);
    // ajax 无法跨域请求
    // let data = await this.$axios.get('/api/?json=true')
    // console.log(data);
  }

}
</script>

