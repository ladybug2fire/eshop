<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <template v-for="menu in menus">
      <div class="favor-container" @click="jumpDetail(menu._id)" :key="menu._id">
        <menu-group :data="menu"></menu-group>
      </div>
    </template>
  </div>
</template>

<script>
/**
 * 美食菜单就是共享的菜单合集
 */
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import menuGroup from "@/components/MenuGroup"
import {allMenu} from '@/api/menu'
export default {
  components: {
    myBreadCrumb,
    menuGroup
  },
  data() {
    return {
      routes: [
        { name: "首页", url: "/home" },
        { name: "个人中心", url: "/profile" },
        { name: "我的菜单" }
      ],
      menus: [],
    };
  },
  methods:{
    jumpDetail(id){
      this.$router.push({path: '/favordetail',query: {id}})
    },
    createNew(){
      
    }
  },
  mounted(){
    allMenu().then(res=>{
      if(res.data.code === 200)this.$set(this, 'menus', res.data.data)
    })
  }

};
</script>

<style lang="less" scoped>
.favor-container{
  cursor: pointer;
}
</style>