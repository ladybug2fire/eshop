<template>
  <div>
      <div class="summary">
        <div>
            总体满意度
        </div>
        <el-rate
            v-model="star"
            disabled
        ></el-rate>
        <div class="star">
            5.0<span>分</span>
        </div>
    </div>
    <template v-for="(reviewItem,i) in reviews">
      <review :data="reviewItem" :key="i"/>
    </template>
  </div>
</template>

<script>
import Review from "@/components/Review";
export default {
    components:{
        Review,
    },
    data() {
        return {
            star: 5.0,
            reviews: new Array(10).fill({
                addTime: '2019-04-17',
                username: '小米',
                star: 3.5,
                desc: '不错不错',
            })
        }
    },
};
</script>

<style lang="less" scoped>
.summary{
    display: flex;
    flex-direction: row;
    background: #f8f8f8;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .star{
        color: red;
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
        span{
            font-size: 14px;
        }
    }
}
</style>