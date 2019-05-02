<template>
  <div class="follow-list">
    <mt-header class="header" title="我的关注">
      <router-link to="/profile" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="user-item" v-for="(item, i) in list" :key="item._id" :item="item"
        @click="seeSomeOne(item._id, item)"
      >
        <img class="avatar" :src="HOST+item.avatar" alt>
        <div>{{item.username}}</div>
        <button class="unfollow" @click.stop="unFollow(item._id, i)">取消关注</button>
      </div>
    </div>
  </div>
</template>

<script>
import { HOST } from "@/config/myconfig";
import { myfollow, follow } from "@/api/article";
import _ from "lodash";
export default {
  data() {
    return {
      HOST,
      list: []
    };
  },
  methods:{
      seeSomeOne(userid, user){
          this.$router.push({
              path: '/discover/homepage',
              query:{
                  type: 'somebody',
                  id: userid,
                  title: user.username,
                  pre: '/follow'
              }
          })
      },
      unFollow(userid,i){
        follow({
          id: this.$store.getters.userid,
          userid: userid,
          like: false
        }).then(res => {
          if (_.get(res, "data.code") == 200) {
            this.$store.commit('follow', {
                id: userid,
                like: false
            })
            this.$delete(this.list, i)
          } else {
            Toast({
              message: "收藏失败",
            });
          }
        });
      }
  },
  mounted() {
    myfollow({
      params: {
        id: this.$store.getters.userid
      }
    }).then(res => {
      if (_.get(res, "data.code") == 200) {
        this.$set(this, "list", _.get(res, "data.data"));
      }
    });
  }
};
</script>

<style lang="less" scoped>
.follow-list {
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
  .user-item {
    border-bottom: 1px solid #f2f6fc;
    display: flex;
    align-items: center;
    padding: 20px;
    .avatar {
      height: 30px;
      width: 30px;
      border-radius: 30px;
      margin-right: 20px;
    }
    .unfollow{
        color:turquoise;
    }
  }
}
</style>