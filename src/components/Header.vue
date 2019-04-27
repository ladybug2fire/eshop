<template>
  <div class="article-header">
    <div class="logo">
      <router-link to="home">
        <img src="../assets/logo.png" alt>
      </router-link>
    </div>
    <el-input class="search-input" v-model="condition" placeholder="请输入菜谱/食材/菜单/作者">
      <template slot="append">
        <div @click="search">搜索</div>
      </template>
    </el-input>
    <div class="login-section">
      <template v-if="!username">
        <div>
          <router-link to="login">登录</router-link>
        </div>
        <div>
          <router-link to="register">注册</router-link>
        </div>
      </template>
      <template v-else>
        <user-menu :username="username" />
      </template>
    </div>
  </div>
</template>

<script>
import userMenu from '@/components/user/userMenu'
import {searchArticle} from '@/api/article'
export default {
  components:{
    userMenu,
  },
  data(){
    return {
      condition: null,
    }
  },
  computed: {
    username() {
      return this.$store.getters.username;
    }
  },
  methods: {
    search() {
      this.$router.push({
        path: '/favordetail',
        query:{
          tag: this.condition
        }
      })
    },
  }
};
</script>

<style lang="less">
.article-header {
  height: 129px;
  width: 100%;
  background-color: #b4010f;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .logo {
    margin-left: 60px;
    color: white;
    font-weight: bolder;
    img {
      height: 50px;
      cursor: pointer;
    }
  }
  .search-input {
    width: 430px;
    height: 36px;
    box-sizing: border-box;
    .el-input-group__append {
      color: white !important;
      width: 80px;
      background-color: #b4010f !important;
      cursor: pointer;
      span {
        widows: 100%;
      }
    }
  }
  .login-section {
    margin-right: 100px;
    color: white;
    display: flex;
    a {
      color: white;
      text-decoration: none;
    }
    div {
      cursor: pointer;
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      margin: 0 5px;
      border-radius: 4px;
      padding: 0 10px;
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
    .username {
      cursor: pointer;
      font-weight: bolder;
      font-size: 16px;
      color: white;
    }
    .user-nickname {
      a {
        text-decoration: none;
      }
    }
  }
}
</style>