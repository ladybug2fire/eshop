<template>
  <div class="media-item" @click="seeDetail">
    <div class="header-container">
      <div class="username">
        <img class="avatar" :src="HOST + data.avatar" alt>
        {{data.username || "匿名用户" }}
      </div>
      <div class="addtime">{{data.addTime}}</div>
    </div>
    <div>
      <img :src="HOST + data.picUrl" class="media-pic" alt>
    </div>
    <div class="title">{{data.title}}</div>
    <div class="footer">
      <div>浏览{{data.views}}</div>
      <div @click.stop="sheetVisible=true">
        <span class="iconfont icon-send"></span>分享
      </div>
    </div>
    <div v-if="data.userid === userid" class="del-btn" @click.stop="delItem(data._id)">
      <span class="iconfont icon-empty_fill"></span>删除
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
import { HOST } from "@/config/myconfig";
import {delArticle} from '@/api/article'
export default {
  props: ['data'],
  data() {
    return {
      HOST,
      actions: [
        {
          name: "朋友圈",
          method: () => {
            this.$message.success("分享成功");
          }
        }
      ],
      sheetVisible: false,
    };
  },
  computed:{
    userid(){
      return this.$store.getters.userid;
    }
  },
  methods: {
    seeDetail() {
      this.$router.replace({
        path: "/discover/detail",
        query: {
          id: this.data._id,
          pre: this.$route.fullPath
        }
      });
    },
    delItem(id){
      delArticle({
        params:{
          id,
        }
      }).then(res=>{
        if(res && res.data && res.data.code == 200){
          this.$emit('update')
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.media-item {
  padding: 10px 20px;
  .media-pic {
    margin: 10px 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
  .title {
    font-weight: bold;
    font-size: 18px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .del-btn{
    text-align: right;
    color: #54a0ff;
  }
  border-bottom: 1px solid #ebeef5;
}
@width: 100%;
.header-container {

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: @width;
  .username {
    .avatar {
      @size: 30px;
      height: @size;
      width: @size;
      object-fit: cover;
      border-radius: @size;
      margin-right: 10px;
      background-color: #f8f8f8;
    }
    display: flex;
    align-items: center;
    color: #303133;
    font-size: 14px;
  }
  .addtime {
    color: #909399;
    font-size: 10px;
  }
}
</style>