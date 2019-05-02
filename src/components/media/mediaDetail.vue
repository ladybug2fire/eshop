<template>
  <div class="good-detail">
    <mt-header class="header" title="文章详情">
      <router-link :to="pre || '/discover'" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="header-info">
      <img class="detail-img" :src="HOST + article.picUrl" alt="">
      <div class="title">{{article.title}}</div>
      <div class="author-block">
        <div class="author-name"><img class="avatar" :src="HOST + article.avatar" alt>{{article.username || '匿名作者'}}</div>
        <div v-if="article.username && article.userid != userid" :class="['follow-btn', {'active': active}]" @click="doFollow">{{active?'已关注':'关注'}}</div>
      </div>
      <div class="content" v-html="article.detail">
      </div>
    </div>
    <div class="review-info" v-if="reviews.length">
      <div class="card-header">
        <div class="header-title">评论({{reviews.length}})</div>
        <div class="header-action">查看更多评论</div>
      </div>
      <template v-for="reviewItem in reviews">
        <review :data="reviewItem" :key="reviewItem._id"/>
      </template>
    </div>
    <review-footer :articleid="article._id"/>
  </div>
</template>

<script>
import Review from "@/components/media/review"
import reviewFooter from '@/components/media/reviewFooter'
import {getArticle, view, follow} from '@/api/article'
import { HOST } from "@/config/myconfig";
  export default {
    components:{
      Review,
      reviewFooter
    },
    data() {
      return {
        HOST,
        article: {},
        active: false,
      }
    },
    computed:{
      pre(){
        return this.$route.query.pre;
      },
      userid(){
        return this.$store.getters.userid;
      },
      follows(){
        return this.$store.getters.userInfo.follow;
      },
      reviews(){
        return this.$store.getters.reviews;
      },
    },
    methods:{
      doFollow(){
        follow({
          id: this.$store.getters.userid,
          userid: this.article.userid,
          like: !this.active
        }).then(res => {
          if (_.get(res, "data.code") == 200) {
              this.active = !this.active
            this.$store.commit('follow', {
                id:  this.article.userid,
                like: this.active
            })
          } else {
            Toast({
              message: "收藏失败",
            });
          }
        });
      },
      checkLogin() {
        return this.$store.dispatch("checkLogin", {
          route: this.$route.fullPath,
          router: this.$router
        });
      }
    },
    mounted(){
      const id = this.$route.query.id;
      getArticle({params: {
        id,
      }}).then(res=>{
        this.$set(this, 'article', res.data.data)
        console.log(res.data.data.userid, this.follows)
        this.active = _.includes(this.follows, _.get(res, 'data.data.userid'));
      })
      view({
        params: {
          id,
        }
      })
      this.$store.dispatch('getReviewList', id)
    }
  }
</script>

<style lang="less" scoped>
.good-detail{
  background-color: #f8f8f8;
  padding-bottom: 70px;
  position: relative;
  height: 100vh;
  overflow: scroll;
  .content{
    padding: 10px 20px;
  }
}
.author-block{
  display: flex;
  flex-direction: row;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 8px;
  justify-content: space-between;
  margin: 10px 20px;
  font-size: 14px;
  align-items: center;
  .author-name{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .avatar{
    height: 30px;
    width: 30px;
    object-fit: cover;
    border-radius: 30px;
    margin-right: 10px;
    background-color: white;
  }
  .follow-btn{
    padding: 5px 10px;
    background: pink;
    color: white;
    border-radius: 4px;
    box-sizing: border-box;
    height: 24px;
    line-height: 14px;
    &.active{
      background: white;
      color: pink;
      border: 1px solid pink;
    }
  }
}

@sub-color: #8395a7;
.header{
  height: 50px;
  background-color: white;
  color:black;
  border-bottom: 1px solid #EBEEF5;
}
.detail-img{
  height: 250px;
  width: 100vw;
  object-fit: cover;
}
.title {
  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 控制多行的行数
  -webkit-box-orient: vertical;
}
.desc{
  padding: 0 20px;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;  // 控制多行的行数
  -webkit-box-orient: vertical;
  color: @sub-color;

}
.addtion-desc{
  border-top: 1px solid #EBEEF5;
  padding: 5px 20px;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;  // 控制多行的行数
  -webkit-box-orient: vertical;
  color: @sub-color; 
}
.header-info{
  background-color: #fff;
  .price-info{
    padding: 10px 20px;
    font-size: 10px;
    color: #576574;
    .price{
      font-weight: bold;
      color: red;
      .amount{
        font-size: 25px;
      }
      margin-right: 10px;
    }
  }
}
.review-info{
  margin-top: 20px;
  background-color: #fff;
  .card-header{
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      border-bottom: 1px solid #EBEEF5;
      .header-title{
          color: #303133;
          font-size: 14px;
      }
      .header-action{
          color: #909399;
      }
  }
}
.footer-bar{
  box-sizing: border-box;
  position: fixed;
  width: 100vw;
  height: 50px;
  border-top: 1px solid #EBEEF5;
  background: white;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .cart-info{
    position: relative;
    height: 20px;
    width: 20px;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    padding: 10px 20px;
    color: #303133;
    background-color: white;
    .cart-badge{
        position: absolute;
        right: 0;
        top: 0;
        max-width:20px; 
        font-size: 10px;
        text-overflow:ellipsis; 
        overflow:hidden;
        transform: translate(0%, -25%)
    }
  }
  .action-btn{
    background-color: #00d2d3;
    box-sizing: border-box;
    color:white;
    padding: 0 20px;
    text-align: center;
    line-height: 50px;
  }
}
</style>