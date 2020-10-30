<template>
  <div>
    <cell-com :lists="plists">
      <template #default="{ count }">
        <span class="playcount"> <img src="../../assets/img/icon_music.png" alt=""> {{count}}</span>
      </template>
    </cell-com>
  </div>
</template>

<script>
import cellCom from '../Common/CellCom/CellCom'
export default {
  data(){
    return {
      plists: []
    }
  },
  components:{
    cellCom
  },
  async created() {
    let {data:{plist}} = await this.$axios.get('/api/plist/index?json=true')
    console.log(plist);
    this.plists = plist.list.info;
  },
}
</script>

<style lang="less">
  .playcount {
    position: absolute;
    left:4.5rem;
    top:2.6rem;
    font-size: 12px;
    color: #666;
 
    img {
      width: 0.6rem;
      height: 0.6rem;
      position: relative;
      top: -2px;
     
    }
  }
</style>