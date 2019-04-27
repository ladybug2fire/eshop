<template>
  <div class="layout-tab">
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="item.route" v-for="item in tabs" :key="item.route">
        <div slot="icon" :class="['iconfont', `icon-${selected === item.route ? item.active : item.inactive}`]"></div>
        {{item.label}}
      </mt-tab-item>
    </mt-tabbar>
    <div class="main-section">
      <router-view/>
    </div>
    <CartBtn />
  </div>
</template>

<script>
// import MyHeader from "@/components/Header";
// import MainMenu from "@/components/menu/MainMenu";
import CartBtn from '@/components/good/CartBtn'
import _ from 'lodash'
export default {
  components: {
    // MyHeader,
    // MainMenu,
    CartBtn
  },
  watch:{
    selected(nv, ov){
      if(nv !== ov){
        this.$router.replace(nv)
      }
    },
    '$route.path':{
      handler(nv){
        const one = _.find(this.tabs, e=>nv.match(e.route))
        if(one){
          this.$set(this, 'selected', one.route)
        }
      }
    }
  },
  data() {
    return {
      selected: null,
      tabs: [
        {label: '首页', active: 'homepage_fill', inactive: 'homepage', route: '/home'},
        {label: '分类', active: 'leimupinleifenleileibie2', inactive: 'leimupinleifenleileibie', route:'/cat'},
        {label: '发现', active: 'faxian1', inactive: 'faxian', route: '/discover'},
        {label: '购物车', active: 'gouwuche', inactive: 'gouwuche2', route: '/shopcart'},
        {label: '我的', active: 'mine_fill', inactive: 'mine', route:'/profile'}
      ]
    }
  },
  mounted(){
    const nv = this.$route.path;
    const one = _.find(this.tabs, e=>nv.match(e.route))
    if(one){
      this.$set(this, 'selected', one.route) 
    }
  }
};
</script>

<style lang="less" scoped>
.main-section{
  width: 100vw;
  box-sizing: border-box;
  // padding: 0 20px;
  height: calc(~'100vh - 55px');
  overflow: scroll;
  position: fixed;
  top: 0;
}
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #00d2d3;
}
.layout-tab .iconfont{
  font-size: 20px;
}
</style>