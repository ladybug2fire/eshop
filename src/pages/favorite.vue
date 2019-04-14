<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <!-- <el-button type="primary" size="small" @click="createNew">创建新菜单</el-button> -->
    <template v-for="menu in menus">
      <div class="favor-container" @click="jumpDetail(menu._id)" :key="menu._id">
        <menu-group :data="menu"></menu-group>
      </div>
    </template>
  </div>
</template>

<script>
/**
 * 我的菜单/我的收藏
 */
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import menuGroup from "@/components/MenuGroup"
import {getMyMenus} from '@/api/menu'

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
      menus: [{
        menuname:'默认',
        desc: '不错很养生',
        username: '我就是我'
      }],
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
    getMyMenus({params:{id: this.$store.getters.userid}}).then(res=>{
      console.log(res)
      let data = res.data;
      if(data.code === 200){
        this.$set(this, 'menus', data.data)
      }
    })
  }
};
</script>

<style lang="less" scoped>
.favor-container{
  cursor: pointer;
}
</style>