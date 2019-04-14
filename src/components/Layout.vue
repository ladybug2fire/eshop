<template>
  <div>
      <mt-tabbar v-model="selected">
        <mt-tab-item :id="item.label" v-for="item in tabs" :key="item.label">
          <div slot="icon" :class="['iconfont', `icon-${selected === item.label ? item.active : item.inactive}`]"></div>
          {{item.label}}
        </mt-tab-item>
      </mt-tabbar>
      {{selected}}
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

export default {
  components: {
    // MyHeader,
    // MainMenu,
    CartBtn
  },
  data() {
    return {
      selected: null,
      tabs: [
        {label: '首页', active: 'homepage_fill', inactive: 'homepage'},
        {label: '分类', active: 'leimupinleifenleileibie2', inactive: 'leimupinleifenleileibie'},
        {label: '发现', active: 'faxian1', inactive: 'faxian'},
        {label: '购物车', active: 'gouwuche', inactive: 'gouwuche2'},
        {label: '我的', active: 'mine_fill', inactive: 'mine'}
      ]
    }
  },
};
</script>

<style lang="less" scoped>
.main-section{
  padding: 0 10vw;
  padding-bottom: 50px;
}
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #1dd1a1;
}
</style>