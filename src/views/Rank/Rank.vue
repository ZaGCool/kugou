<template>
  <div id="rank">
      <cell-com :lists="ranklists"></cell-com>
  </div>
</template>

<script>

// 导入cellCom组件
import cellCom from '../Common/CellCom/CellCom'

export default {
  data(){
    return {
      // 排行数据
      ranklists: []
    }
  },
  components:{
    cellCom
  },
  
  async created() {
    let {data} = await this.$axios.get('/api/rank/list?json=true')

    console.log(data);
    this.ranklists = data.rank.list;
  },
}
</script>

<style lang="less">
   
</style>