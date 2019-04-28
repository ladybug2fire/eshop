<template>
  <div>
    <div class="good-item" v-for="i in list" :key="i._id" @click.stop="seeDetail(i)">
      <div class="left-container">
        <img class="left-img" :src="HOST+i.picUrl" alt>
      </div>
      <div class="right-info">
        <div class="title">{{i.goodname}}</div>
        <div class="desc">{{i.desc}}</div>
        <div class="price-info">
          <span class="price">
            ¥
            <span class="amount">{{i.price}}</span>
          </span>
          <span class="rule">{{i.specify}}</span>
        </div>
        <div class="mini-cart iconfont icon-gouwuche" @click.stop="addGood(i)"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { HOST } from "@/config/myconfig";
import { Toast } from "mint-ui";
export default {
  props: ["list"],
  data() {
    return {
      HOST,
      currentDate: new Date()
    };
  },
  computed: {
    username() {
      return this.$store.getters.username;
    }
  },
  methods: {
    addGood(o) {
      Toast({
        message: "已加入购物车",
        iconClass: "icon icon-success"
      });
      this.$store.commit("addGood", {
        ...o,
        count: 1
      });
    },
    seeDetail(o) {
      console.log(o)
      this.$router.push({
        path: "/home/detail",
        query:{
          id:o._id
        } 
      });
    }
  }
};
</script>
<style lang="less" scoped>
@sub-color: #8395a7;
.good-item {
  display: flex;
  padding: 10px 20px;
  .left-container {
    .left-img {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .right-info {
    height: 100px;
    flex-grow: 1;
    position: relative;
    padding-left: 10px;
    .title {
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
    }
    .desc {
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
      color: @sub-color;
    }
    .price-info {
      font-size: 10px;
      color: #576574;
      .price {
        font-weight: bold;
        color: red;
        .amount {
          font-size: 16px;
        }
        margin-right: 10px;
      }
      position: absolute;
      bottom: 0;
    }
    .mini-cart {
      @cart-size: 25px;
      width: @cart-size;
      height: @cart-size;
      border-radius: @cart-size;
      line-height: @cart-size;
      box-sizing: border-box;
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: #00d2d3;
      color: white;
      text-align: center;
    }
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #ebeef5;
  }
}
</style>