<template>
  <div class="main-menu" >
    <div class="menu-items">
      <div :class="['menu-item', {'active': path === '/home'}]" @click="jump('/home')">首页</div>
      <menu-item :active="path === '/foodlist'" :groups="foodoptions" title="菜谱大全" />
      <menu-item :active="path === '/menulist'" :groups="dietoptions" title="饮食健康" />
      <div :class="['menu-item', {'active': path === '/menus'}]" @click="jump('/menus')">美食菜单</div>
      <div :class="['menu-item', {'active': path === '/shop'}]" @click="jump('/shop')">菜市场</div>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  components:{
    MenuItem,
  },
  data() {
    return {
      menuShow: false,
      fitShow: false,
    };
  },
  computed:{
    path(){
      return this.$route.path;
    },
    foodoptions(){
      return this.$store.getters.foodoptions;
    },
    dietoptions(){
      return this.$store.getters.dietoptions;
    }
  },
  methods:{
    jump(url){
      this.$router.replace(url);
    }
  },
  mounted(){
    console.log(this.$route.path)
  }
};
</script>
<style lang="less">
  @import url('./index.less');
</style>