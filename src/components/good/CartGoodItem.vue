<template>
  <div>
    <div class="good-item" v-if="item.count">
      <div class="checkbox-info" v-if="false">
          <span :class="['checkbox', 'iconfont', checked ?'icon-check-circle-fill': 'icon-yuancircle46']" @click="checked=!checked"></span>
      </div>
      <div class="left-container">
        <img class="left-img" :src="HOST + item.picUrl" alt>
      </div>
      <div class="right-info">
        <div class="title">{{item.goodname}}</div>
        <div class="price-info">
          <span class="price">
            ¥
            <span class="amount">{{item.price}}</span>
          </span>
          <span class="rule">{{item.specify}}</span>
        </div>
        <div class="cart-action">
            <div class="minus" @click="modify(-1)">-</div>
            <div class="count">{{item.count}}</div>
            <div class="plus" @click="modify(1)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HOST } from "@/config/myconfig";
export default {
  props: ["item"],
  data() {
    return {
      HOST,
      checked: false,
      currentDate: new Date()
    };
  },
  computed: {
    username() {
      return this.$store.getters.username;
    }
  },
  methods: {
    modify(count) {
      this.$store.commit("addGood", {
        ...this.item,
        count,
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
  .checkbox-info{
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      .iconfont{
          font-size: 20px;
      }
      .icon-check-circle-fill{
          color: #00d2d3;
      }
  }
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
        color: red;
        font-weight: bold;
        .amount {
          font-size: 16px;
        }
        margin-right: 10px;
      }
      position: absolute;
      bottom: 0;
    }
    .cart-action{
        display: flex;
        position: absolute;
        right: 0;
        bottom: 0;
        div{
            width: 20px;
            overflow: hidden;
            text-overflow: ellipsis; 
            text-align: center;
        }
        .minus{
            border: 1px solid #ebeef5;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        .plus{
            border: 1px solid #ebeef5;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        .count{
            border: 1px solid #ebeef5;
            border-right: none;
            border-left: none;
            padding: 0 5px;
        }
    }
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #ebeef5;
  }
}
</style>