<template>
  <div class="shop-cart">
    <mt-header class="header" title="购物车"></mt-header>
    <div v-if="goodlist.length" class="item-container">
      <good-item v-for="item in goodlist" :key="item._id" :item="item"/>
      <div class="footer-bar" v-if="goodCount > 0">
        <div></div>
        <div class="right">
          <div class="price-info">
            <div>
              合计:
              <span class="price">{{totalPrice? `${totalPrice}元`: ''}}</span>
            </div>
            <div class="tip">点击结算进去购买哟</div>
          </div>
          <div class="action-btn" @click="buyNow">去结算</div>
        </div>
      </div>
    </div>
    <div v-else style="padding: 0 20px;">这里是空的～</div>
  </div>
</template>

<script>
/**
 * 菜单详情
 */
import GoodItem from "@/components/good/CartGoodItem";
import { HOST } from "@/config/myconfig";
import { buy } from "@/api/order";
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
import _ from "lodash";
export default {
  components: {
    GoodItem
  },
  computed: {
    goodlist() {
      return this.$store.getters.goodlist;
    },
    goodCount() {
      return this.$store.getters.goodcount;
    },
    username() {
      return this.$store.getters.username;
    },
    userid() {
      return this.$store.getters.userid;
    },
    totalPrice() {
      return this.goodlist.reduce((sum, e) => {
        return sum + e.price * e.count;
      }, 0);
    }
  },
  data() {
    return {
      HOST,
      routes: [{ name: "首页", url: "/home" }, { name: "菜篮子" }]
    };
  },
  methods: {
    modify(item, count) {
      this.$store.commit("addGood", {
        ...item,
        count
      });
    },
    doBuy() {
      let goods = _.map(_.cloneDeep(this.goodlist), e => {
        e.goodid = e._id;
        delete e._id;
        return e;
      });
      if (!_.isEmpty(goods)) {
        buy({
          goods,
          price: this.totalPrice,
          username: this.username,
          userid: this.userid,
          addTime: new Date().toLocaleString()
        }).then(res => {
          let data = res.data;
          if (data.code === 200) {
            this.$notify({
              title: "购买成功",
              type: "success"
            });
            this.$store.commit("clearCart");
          }
        });
      }
    },
    buyNow() {
      MessageBox.confirm(`确定购买吗¥ ${this.totalPrice}?`).then(action => {
        console.log(action, 'confirm')
       this.doBuy(); 
      }).catch(cancel=>{
        Toast({
          message: '已取消',
          iconClass: 'icon icon-error'
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.shop-cart {
  height: 100%;
  overflow: scroll;
  .header {
    height: 50px;
    background-color: white;
    color: black;
    border-bottom: 1px solid #ebeef5;
    display: fixed;
    top: 0;
  }
  .item-container {
    padding-bottom: 50px;
  }
  .footer-bar {
    border-top: 1px solid #ebeef5;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .action-btn {
      background-color: red;
      color: white;
      height: 50px;
      line-height: 50px;
      align-self: end;
      padding: 0 20px;
    }
    .right {
      display: flex;
      flex-direction: row;
      .price-info {
        margin: 0 10px;
        .price {
          color: #f56c6c;
          font-weight: bold;
        }
      }
      .tip {
        color: #909399;
      }
    }
  }
}
.good-container {
  width: 40vw;
  display: flex;
  align-items: center;
  border: 1px solid #e4e7ed;
  justify-content: flex-start;
  border-radius: 2px;
  padding: 5px;
  margin: 2px 2px 2px 0px;
  cursor: pointer;
  .snap {
    object-fit: cover;
    height: 50px;
    width: 50px;
  }
  &:hover {
    background-color: #f2f6fc;
  }
  .good-name {
    margin: 0 10px;
    color: #606266;
  }
  .price {
    text-align: center;
    width: 5em;
    font-weight: bold;
    color: #f56c6c;
  }
  .good-info {
    flex-grow: 1;
    text-align: right;
    display: flex;
    font-size: 10px;
    color: #909399;
    .count {
      width: 3em;
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .count-text {
        margin: 0 5px;
      }
    }
  }
}
</style>