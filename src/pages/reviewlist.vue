<template>
  <div class="page">
    <mt-header class="header" title="评论详情">
      <router-link :to="pre || '/home'" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="summary">
      <div>总体满意度</div>
      <el-rate :value="star" disabled></el-rate>
      <div class="star">
        {{star}}
        <span>分</span>
      </div>
    </div>
    <template v-for="(reviewItem,i) in reviewItems">
      <review :data="reviewItem" :key="i"/>
    </template>
  </div>
</template>

<script>
import Review from "@/components/Review";
import _ from "lodash";
export default {
  components: {
    Review
  },
  computed: {
    pre() {
      return this.$route.query.pre;
    },
    reviewItems() {
      return this.$store.getters.goodReviews;
    },
    star() {
      const reviews = this.reviewItems;
      if (reviews.length) {
        const res = _.reduce(
          reviews,
          (sum, e) => {
            sum += Number(e.star);
            return sum;
          },
          0
        );
        return (res / reviews.length).toFixed(1);
      } else {
        return 0;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.summary {
  display: flex;
  flex-direction: row;
  background: #f8f8f8;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .star {
    color: red;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    span {
      font-size: 14px;
    }
  }
}
</style>