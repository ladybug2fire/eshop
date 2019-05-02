<template>
  <div>
    <div class="order-item" v-if="item">
      <div class="header">
        <div class="order-no">订单编号: {{item && item._id}}</div>
        <div class="order-status">交易成功</div>
      </div>
      <div class="container">
        <div class="img-list">
          <img :src="HOST+g.picUrl" alt v-for="g in item.goods" @click="seeDetail(g.goodid)" :key="g && g._id">
        </div>
        <div class="count">共{{item.goods.length}}个</div>
      </div>
      <div class="price">
        <div class="buy-time">{{item.addTime}}</div>
        <div class="price-label">
          合计:
          <div class="price-info">
            <span class="price-tag">¥</span>
            <span class="price-amount">{{item.price}}</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="del-btn btn" @click="del">删除订单</div>
        <div class="del-btn btn" v-if="!item.isReview" @click="review">评价</div>
      </div>
    </div>
  </div>
</template>

<script>
import { HOST } from "@/config/myconfig";
import { del } from "@/api/order";
import { MessageBox, Toast } from "mint-ui";
export default {
  props: ["item"],
  data() {
    return {
      HOST
    };
  },
  methods: {
    del() {
      MessageBox.confirm(`确定删除嘛？`)
        .then(action => {
          this.$store.dispatch("delOrder", this.item._id).then(res => {
            if (_.get(res, "data.code") === 200) {
              this.$store.commit("del", this.item._id);
              Toast({
                message: "删除成功",
                iconClass: "icon icon-success"
              });
            }
          });
        })
        .catch(cancel => {
          Toast({
            message: "已取消",
            iconClass: "icon icon-error"
          });
        });
    },
    seeDetail(goodid){
      this.$router.push({
        path: '/home/detail',
        query:{
          id: goodid
        }
      }) 
    },
    review(){
      this.$router.push({
        path: '/review/edit',
        query:{
          id: this.item._id
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.order-item {
  background: #fff;
  .container {
    background: #f8f8f8;
    border-radius: 10px;
    height: 80px;
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .img-list {
      display: flex;
      flex-direction: row;
      padding: 10px 20px;
      overflow-x: scroll;
      width: calc(~"100% - 100px");
      img {
        object-fit: cover;
        height: 60px;
        width: 60px;
        flex-shrink: 0;
        border-radius: 10px;
        background-color: white;
        margin-right: 10px;
      }
      border-radius: 10px;
    }
    .count {
      width: 100px;
      text-align: center;
      font-size: 10px;
    }
  }
  .price {
    padding: 10px 20px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price-label {
      display: flex;
      flex-direction: row;
    }
    .price-info {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      color: red;
      .price-amount {
        margin-left: 5px;
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
      }
    }
  }
  .header {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    .order-no {
      color: #8395a7;
    }
    .order-status {
      color: #54a0ff;
    }
  }
  .footer {
    box-sizing: border-box;
    padding: 5px 20px;
    background-color: #f8f8f8;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .del-btn {
      border: 1px solid #dcdfe6;
      font-size: 10px;
      line-height: 20px;
      padding: 3px 10px;
      height: 20px;
      border-radius: 20px;
      cursor: pointer;
    }
    .btn:not(:last-of-type) {
      margin-right: 10px;
    }
  }
}
</style>