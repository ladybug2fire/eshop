<template>
  <div class="follow-list">
    <mt-header class="header" title="我的关注">
      <router-link to="/profile" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="user-item" v-for="item in list" :key="item._id" :item="item">
          <img class="avatar" :src="HOST+item.avatar" alt="">
          <div>{{item.username}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { HOST } from "@/config/myconfig";
import { myfollow } from "@/api/article";
import _ from 'lodash'
export default {
  data() {
      return {
          list: []
      }
  },
    mounted(){
        myfollow({
            id: this.$store.getters.userid
        }).then(res=>{
            if(_.get(res, 'data.code')==200){
                this.$set(this, 'list', _.get(res, 'data.data'))
            }
        })
    }
};
</script>

<style lang="less" scoped>
.follow-list{
  padding-top: 50px;
  .header {
    height: 50px;
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: white;
    color: black;
    border-bottom: 1px solid #ebeef5;
  }
  .useritem{
      border-bottom: 1px solid #F2F6FC;
  }
}
</style>