<template>
  <div class="good-detail">
    <mt-header class="header" title="商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="header-info">
      <img class="detail-img" src="@/assets/cake.jpeg" alt>
      <div class="title">晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕</div>
      <div
        class="desc"
      >茂密森林中的可爱麋鹿、深蓝海洋中可爱蓝鲸、睡意朦胧中可爱的你。一组美食图片之创意甜点分享，愿你的城市有归途。小编推荐一组萌萌的美食图片之创意甜点，希望你们喜欢，如果还想欣赏更多图片，那就不妨收藏下本站吧。</div>
      <div class="price-info">
        <span class="price">
          ¥
          <span class="amount">10</span>
        </span>
        <span class="rule">500g/包</span>
      </div>
      <div class="addtion-desc">不支持7天无理由退货</div>
    </div>
    <div class="review-info">
      <div class="card-header">
        <div class="header-title">商品评论(100)</div>
        <div class="header-action">查看更多评论</div>
      </div>
      <review :data="reviewItem"/>
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
export default {
  components: {
    Review
  },
  data() {
    return {
      reviewItem: {
        addTime: "2019-04-17",
        username: "小米",
        star: 3.5,
        desc: "不错不错"
      },
      goodItem: {}
    };
  },
  computed: {
    goodcount() {
      return this.$store.getters.goodcount;
    }
  },
  methods: {
    addGood() {
      this.$message.success("已加入购物车");
      this.$store.commit("addGood", {
        ...this.goodItem,
        count: 1
      });
    },
    jumpCart() {
      this.$router.replace("order");
    }
  },
  mounted() {
    // TODO: 加个打点
  }
};
</script>

<style lang="less" scoped>
.good-detail {
  background-color: #f8f8f8;
  padding-bottom: 70px;
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