<template>
  <div>
    <div class="good-item" v-for="i in 10" :key="i">
      <div class="checkbox-info">
          <span :class="['checkbox', 'iconfont', checked ?'icon-check-circle-fill': 'icon-yuancircle46']" @click="checked=!checked"></span>
      </div>
      <div class="left-container">
        <img class="left-img" src="@/assets/cake.jpeg" alt>
      </div>
      <div class="right-info">
        <div class="title">晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕</div>
        <div class="price-info">
          <span class="price">
            ¥
            <span class="amount">10</span>
          </span>
          <span class="rule">500g/包</span>
        </div>
        <div class="cart-action">
            <div class="minus">-</div>
            <div class="count">10</div>
            <div class="plus">+</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HOST } from "@/config/myconfig";
export default {
  props: ["list"],
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
    addGood(o) {
      this.$notify.success("已加入菜篮子");
      this.$store.commit("addGood", {
        ...o,
        count: 1
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