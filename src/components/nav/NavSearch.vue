<template>
  <div class="search">
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      
    </mt-header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">

  .search {
    .mint-header {
      background-color: #fff;
      color: #333;

      .mintui {
        font-size: 22px;
        color: #999;
      }
    }
  }

</style>