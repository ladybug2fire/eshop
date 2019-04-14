<template>
  <el-dropdown class="user-nickname" @command="jump">
    <span class="username">
      {{username}}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item in menus" :key="item.url" :command="item.url">{{item.label}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: ["username"],
  data() {
    return {
      menus: [
        {
          label: "个人信息",
          url: "/profile"
        },
        {
          label: "我的订单",
          url: "/orderlist"
        },
        {
          label: "我的菜单",
          url: "/favorite"
        },
        {
          label: "发布菜谱",
          url: "/newpost"
        },
        {
          label: "菜篮子",
          url: "/shopcart"
        },
        {
          label: "我的发布",
          url: "/minepub"
        },
        {
          label: "退出",
          url: "/logout"
        }
      ]
    };
  },
  methods: {
    jump(url) {
      if (url === "/logout") {
        this.$store.commit('logout')
        this.$router.replace('/home')
      } else if(url === '/minepub'){
        this.$router.push({
          path: 'favordetail',
          query: {
            tag: this.username,
          }
        })
      }
      else {
        this.$router.replace(url);
      }
    }
  }
};
</script>

<style scoped>
</style>