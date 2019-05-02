<template>
  <div class="good-detail">
    <mt-header class="header" title="商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="header-info">
      <img class="detail-img" :src="HOST + goodItem.picUrl" alt>
      <div class="title">{{goodItem.goodname}}</div>
      <div
        class="desc"
      >{{goodItem.desc}}</div>
      <div class="price-info">
        <span class="price">
          ¥
          <span class="amount">{{goodItem.price}}</span>
        </span>
        <span class="rule">{{goodItem.specify}}</span>
      </div>
      <div class="addtion-desc">不支持7天无理由退货</div>
    </div>
    <div class="review-info" v-if="reviewItems.length">
      <div class="card-header">
        <div class="header-title">商品评论({{reviewItems.length}})</div>
        <div class="header-action" @click="seeMoreReview">查看更多评论</div>
      </div>
      <template v-for="reviewItem in reviewItems">
        <review :data="reviewItem" :key="reviewItem._id"/>
      </template>
      
    </div>
    <div class="footer-bar">
      <div class="cart-info" @click="jumpCart">
        <mt-badge type="error" class="cart-badge">{{goodcount}}</mt-badge>
        <i class="iconfont icon-gouwuche2"></i>
      </div>
      <div class="action-btn" @click="addGood">加入购物车</div>
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review";
import {get, review} from '@/api/good'
import { HOST } from "@/config/myconfig";
import _ from 'lodash'
export default {
  components: {
    Review
  },
  data() {
    return {
      HOST,
      goodItem: {}
    };
  },
  computed: {
    goodcount() {
      return this.$store.getters.goodcount;
    },
    reviewItems(){
     return this.$store.getters.goodReviews; 
    }
  },
  methods: {
    seeMoreReview(){
      this.$router.push({
        path: '/review',
        pre: this.$route.fullPath,
        })
    },
    addGood() {
      this.$message.success("已加入购物车");
      this.$store.commit("addGood", {
        ...this.goodItem,
        count: 1
      });
    },
    jumpCart() {
      this.$router.replace("/shopcart");
    }
  },
  mounted() {
    get({
      params:{
        id: this.$route.query.id
      }
    }).then(res=>{
      if(_.get(res, 'data.code') === 200){
        this.$set(this, 'goodItem', _.get(res, 'data.data'))
      }
    })
    this.$store.dispatch('getGoodReview', this.$route.query.id)
  }
};
</script>

<style lang="less" scoped>
.good-detail {
  background-color: #f8f8f8;
  padding-bottom: 70px;
  height: calc(100vh - 70px);
  overflow: scroll;
}

@sub-color: #8395a7;
.header {
  height: 50px;
  background-color: white;
  color: black;
  border-bottom: 1px solid #ebeef5;
}
.detail-img {
  height: 250px;
  width: 100vw;
  object-fit: cover;
}
.title {
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 控制多行的行数
  -webkit-box-orient: vertical;
}
.desc {
  padding: 0 20px;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 控制多行的行数
  -webkit-box-orient: vertical;
  color: @sub-color;
}
.addtion-desc {
  border-top: 1px solid #ebeef5;
  padding: 5px 20px;
  font-size: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 控制多行的行数
  -webkit-box-orient: vertical;
  color: @sub-color;
}
.header-info {
  background-color: #fff;
  .price-info {
    padding: 10px 20px;
    font-size: 10px;
    color: #576574;
    .price {
      font-weight: bold;
      color: red;
      .amount {
        font-size: 25px;
      }
      margin-right: 10px;
    }
  }
}
.review-info {
  margin-top: 20px;
  background-color: #fff;
  .card-header {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    border-bottom: 1px solid #ebeef5;
    .header-title {
      color: #303133;
      font-size: 14px;
    }
    .header-action {
      color: #909399;
    }
  }
}
.footer-bar {
  box-sizing: border-box;
  position: fixed;
  width: 100vw;
  height: 50px;
  border-top: 1px solid #ebeef5;
  background: white;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .cart-info {
    position: relative;
    height: 20px;
    width: 20px;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    padding: 10px 20px;
    color: #303133;
    background-color: white;
    .cart-badge {
      position: absolute;
      right: 0;
      top: 0;
      max-width: 20px;
      font-size: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      transform: translate(0%, -25%);
    }
  }
  .action-btn {
    background-color: #00d2d3;
    box-sizing: border-box;
    color: white;
    padding: 0 20px;
    text-align: center;
    line-height: 50px;
  }
}
</style>