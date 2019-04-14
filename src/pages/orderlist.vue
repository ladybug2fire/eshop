<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <div class="order-list">
      <div v-for="order in orderlist" :key="order._id" class="order-item">
          <div class="header">
            <div class="order-id">订单号:{{order._id}}</div>
            <div class="order-time">{{order.addTime}}</div>
          </div>
          <div class="order-price" v-if="order.price">¥ {{order.price}}</div>
          <div v-for="good in order.goods" :key="good.goodid" class="good-container">
            <img class="snap" :src="HOST + good.picUrl">
            <div class="good-name">{{good.goodname}}</div>
            <div class="good-info"><div class="count">{{good.count}}</div> * <div class="price">¥ {{good.price}}</div></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import { HOST } from "@/config/myconfig";
import { list } from "@/api/order";
export default {
  components: {
    myBreadCrumb
  },
  data() {
    return {
      HOST,
      routes: [
        { name: "首页", url: "/home" },
        { name: "个人中心", url: "/profile" },
        { name: "我的订单" }
      ],
      orderlist: []
    };
  },
  mounted() {
    list({
      params: {
        id: this.$store.getters.userid
      }
    }).then(res => {
      console.log(res.data);
      let data = res.data;
      if (data.code === 200) {
        this.$set(this, "orderlist", data.data);
      }
    });
  }
};
</script>

<style lang="less" scoped>
.order-list {
  width: 40vw;
  padding: 0 20px 20px 0px;
  .order-item{
    border: 1px solid #DCDFE6;
    margin-bottom: 10px;
  }
  .order-price{
    margin: 5px 0 0 20px;
    font-weight: bold;
    color: #F56C6C;
  }
  .snap {
    object-fit: cover;
    height: 50px;
    width: 50px;
  }
  .header {
    display: flex;
    font-size: 10px;
    padding: 5px;
    background: #F2F6FC;
    flex-direction: row;
    justify-content: space-between;
  }
  .good-container{
    display: flex;
    align-items: center;
    border: 1px solid #E4E7ED;
    justify-content: flex-start;
    border-radius: 2px;
    padding: 5px;
    margin: 2px 2px 2px 20px;
    cursor: pointer;
    &:hover{
      background-color: #F2F6FC;
    }
    .good-name{
      margin: 0 10px;
      color: #606266;
    }
    .good-info{
      flex-grow: 1;
      text-align: right;
      display: flex;
      font-size: 10px;
      color: #909399;
      justify-content: flex-end;
      .count{
        width: 3em;
        text-align: center;
      }
      .price{
        text-align: center;
        width: 5em;
      }
    }
  }
}
</style>