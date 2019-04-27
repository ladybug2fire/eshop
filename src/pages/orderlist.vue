<template>
  <div class="order-list">
    <mt-header class="header" title="我的订单">
      <router-link to="/profile" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <order-item v-for="item in orderlist" :key="item._id" :item="item"></order-item>
    </div>
  </div>
</template>

<script>
import { HOST } from "@/config/myconfig";
import OrderItem from "@/components/order/OrderItem";
import { list } from "@/api/order";
export default {
  components: {
    OrderItem
  },
  computed:{
    orderlist(){
      return this.$store.getters.orderlist;
    } 
  },
};
</script>

<style lang="less" scoped>
.order-list{
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
}
</style>