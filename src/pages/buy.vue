<template>
  <div class="page">
    <mt-header class="header" title="评论详情">
      <router-link :to="pre || '/home'" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <address-item></address-item>
    </div>
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
</template>

<script>
import addressItem from "@/components/address/addressItem";
import OrderItem from "@/components/order/OrderItem"
import { HOST } from "@/config/myconfig";
import { buy } from "@/api/order";
import { MessageBox, Toast } from "mint-ui";
import _ from "lodash";
export default {
  components: {
    addressItem,
    OrderItem
  },
  computed: {
    pre() {
      return this.$route.query.pre;
    },
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
  methods: {
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
            Toast({
              message: "购买成功",
              iconClass: "icon icon-success"
            });
            this.$store.commit("clearCart");
            this.$router.replace('/shopcart')
          }
        });
      }
    },
    async buyNow() {
      if (!(await this.checkLogin())) {
        return;
      }
      MessageBox.confirm(`确定购买吗¥ ${this.totalPrice}?`)
        .then(action => {
          console.log(action, "confirm");
          this.doBuy();
        })
        .catch(cancel => {
          Toast({
            message: "已取消",
            iconClass: "icon icon-error"
          });
        });
    },
    checkLogin() {
      return this.$store.dispatch("checkLogin", {
        route: this.$route.fullPath,
        router: this.$router
      });
    }
  }
};
</script>

<style lang="less" scoped>
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
</style>