<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <template v-for="item in goodlist">
      <div :key="item.goodid" class="good-container" v-if="item.count > 0">
        <img class="snap" :src="HOST + item.picUrl">
        <div class="good-name">{{item.goodname}}</div>
        <div class="price">¥ {{item.price}}</div>
        <div class="good-info">
          <div class="count">
            <el-button size="small" @click="modify(item, -1)" icon="el-icon-minus" circle></el-button>
            <div class="count-text">{{item.count}}</div>
            <el-button size="small" @click="modify(item, 1)" icon="el-icon-plus" circle></el-button>
          </div>
        </div>
      </div>
    </template>
    <el-button
      type="primary"
      size="small"
      v-if="goodCount > 0"
      @click="buyNow"
    >立减购买&nbsp;{{totalPrice? `${totalPrice}元`: ''}}</el-button>
    <div v-else>
      这是一个空空如也的菜篮子，去
    </div>
  </div>
</template>

<script>
/**
 * 菜单详情
 */
import GoodItem from "@/components/good/GoodItem";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import { HOST } from "@/config/myconfig";
import { buy } from "@/api/order";
import _ from "lodash";
export default {
  components: {
    myBreadCrumb,
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
      this.$confirm(`确定购买吗¥ ${this.totalPrice}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.doBuy();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
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