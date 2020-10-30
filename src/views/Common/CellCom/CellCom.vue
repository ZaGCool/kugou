<template>
  <div class="cell">
    <mt-cell
      v-for="item in lists"
      :key="item.rankid || item.specialid"
      :title="item.rankname || item.specialname"
      to="//github.com"
      >
      <!-- 这是默认插槽 待会儿单独定制一下歌单的播放量 -->
      <slot :count="item.playcount"></slot>
      <img slot="icon" :src="item.imgurl | filterImg" class="img_icon" width="75" height="75">
      <img slot="icon" src="../../../assets/img/arrow_icon.png" alt="" width="12" height="12" class="fr arrow_icon">
    </mt-cell>
  </div>
</template>

<script>
export default {
  props: {
    lists: Array
  },
  filters:{
    filterImg(inp){
      return inp.replace(/{size}/, '400')
    }
  },
}
</script>

<style lang="less">
   .cell{

      .mint-cell {
        margin: 5px 0;

        .img_icon {
          margin-top: 0.35rem;
        }
        .arrow_icon {
          margin-top: 1.75rem;
        }
        .mint-cell-text {
          position: absolute;
          left:58%;
          top:50%;
          transform: translate(-50%,-50%);
          font-size: 14px;
          width: 9.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
</style>