<template>
  <div class="container">
    <mt-header class="header" title="个人中心">
    </mt-header>
    <div class="profile-card">
      <div class="left">
        <img class="avatar" :src="HOST + userInfo.avatar" alt>
      </div>
      <div class="right">
        <div>{{username}}</div>
        <div>{{userInfo.phone|fuse}}</div>
      </div>
      <div class="iconfont icon-brush_fill edit-profile" @click="toEdit">编辑</div>
    </div>
    <div class="group">
      <div class="section" @click="seeFavor">
        <span class="iconfont icon-like_fill"></span>我的收藏
      </div>
      <div class="section" @click="seeMoreOrder">
        <span class="iconfont icon-icon"></span>我的订单
      </div>
      <div class="section">
        <span class="iconfont icon-label_fill"></span>我的关注
      </div>
    </div>
    <div class="profile-section">
      <div class="section-title">
        我的订单
        <span class="seemore" @click="seeMoreOrder">查看更多</span>
      </div>
      <order-item v-for="item in orderlist" :key="item._id" :item="item"></order-item>
    </div>
    <div class="profile-section">
      <div class="section-title">
        我的收藏
        <span class="seemore">查看更多</span>
      </div>
      <order-item></order-item>
    </div>
    <mt-button class="mt-btn primary logout-btn" type="danger" @click="logout">退出登录</mt-button>
  </div>
</template>

<script>
import OrderItem from "@/components/order/OrderItem";
import { list } from "@/api/order";
import { HOST } from "@/config/myconfig";
import _ from 'lodash'
export default {
  components: {
    OrderItem
  },
  data() {
    return {
      HOST,
    }
  },
  filters: {
    fuse: function (value) {
      if(value && value.length === 11){
        const list = value.split('');
        list.splice(3,5,...new Array(5).fill('*')).join('')
        return list.join('');
      }
      return value
    }
  },
  computed:{
      orderlist(){
          return _.take(this.$store.getters.orderlist, 3);
      },
      username(){
        return this.$store.getters.username;
      },
      userInfo(){
        return this.$store.getters.userInfo;
      }
  },
  methods: {
    seeMoreOrder() {
      this.$router.replace("/profile/orderlist");
    },
    logout(){
      this.$store.commit('logout')
      this.$router.replace('/home')
    },
    toEdit(){
      this.$router.push('/profile/edit')
    },
    seeFavor(){
      this.$router.push({
        path: '/discover/homepage',
        query:{
          username: '我的收藏',
          pre: '/profile',
          type: 'favor'
        }
      })
    }
  },
  mounted() {
      this.$store.dispatch('getOrderList')
  }
};
</script>

<style lang="less" scoped>
.container {
  background: #f8f8f8;
  padding: 40px 0;
  .logout-btn{
    width: calc(100% - 40px);
    margin: 20px;
  }
  .header {
    height: 50px;
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: white;
    color: black;
    border-bottom: 1px solid #ebeef5;
  }
  .edit-profile{
    flex-grow: 1;
    text-align: right;
    line-height: 60px;
    cursor: pointer;
  }
}
.profile-card {
  width: calc(~"100% - 40px");
  box-sizing: border-box;
  margin: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 5px grey;
  padding: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  .left {
    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 60px;
      object-fit: cover;
    }
    margin-right: 10px;
  }
  // border-bottom: 1px solid #EBEEF5;
}
.group {
  display: flex;
  flex-direction: row;
  // border-bottom: 1px solid #EBEEF5;
  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    margin-right: 10px;
    width: calc(~"(100% - 40px)/3");
    text-align: center;
    background-color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
    .icon-like_fill {
      color: pink;
      font-size: 25px;
    }
    .icon-icon {
      color: #00d2d3;
      font-size: 20px;
    }
    .icon-label_fill {
      color: #ee5253;
      font-size: 25px;
    }
    border: 1px solid #f2f6fc;
    &:first-of-type {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      margin-left: 20px;
    }
    &:not(:last-of-type) {
      margin-right: 0;
      border-right: none;
    }
    &:last-of-type {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
}
.section-title {
  font-size: 14px;
  color: #606266;
  padding: 10px 20px;
  border-bottom: 1px solid #ebeef5;
}
.profile-section {
  background: white;
  margin-bottom: 20px;
  .seemore {
    float: right;
    color: #00d2d3;
  }
}
</style>