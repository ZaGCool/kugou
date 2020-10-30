<template>
  <div id="newsong">
    <!-- 轮播图 -->
    <mt-swipe :auto="2000">
      <mt-swipe-item
      v-for="item in bannerlists"
      :key="item.id"
      >
        <img class="swipe_img" :src="item.imgurl" :title="item.title" :alt="item.title">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 歌曲列表区域 -->
    <mt-cell :title="item.filename"
    v-for="item in datalists"
    :key="item.hash"
    >
     
      <img slot="icon" src="../../assets/img/download_icon.png" width="15" height="15" class="fr">
    </mt-cell>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data(){
    return {
      // 轮播图数组
      bannerlists: [],
      // 歌曲数据
      datalists: []
    }
  },
  async created() {
    let {data } = await this.$axios.get('/api/?json=true')
    console.log(data)
    this.bannerlists = data.banner;
    this.datalists = data.data;
  },
}
</script>

<style lang="less">
  #newsong {

    .mint-swipe {
      height: 120px;
      margin: 0.3rem;

      .swipe_img {
        width:100%;
      }
    }

    .mint-cell {
      height: 2.5rem;

       .mint-cell-text {
        font-size: 0.7rem !important;
      }
    }
   
  }
  
  
</style>