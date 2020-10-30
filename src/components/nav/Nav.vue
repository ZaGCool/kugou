<template>
  <div>
   <mt-navbar v-model="selected">
      <mt-tab-item :id="item.name"
      v-for="item in navs"
      :key="item.name"
      @click.native="gotoCom(item)"
      >{{item.meta.title}}</mt-tab-item>
    
    </mt-navbar>
  </div>
</template>

<script>
import navs from '@/router/nav.js'
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
  data(){
    return {
      navs,
      selected: this.$route.name
    }
  },
  methods: {
    gotoCom(item) {
      this.$router.push({'name': item.name})
    }
  }
}
</script>

<style>

</style>