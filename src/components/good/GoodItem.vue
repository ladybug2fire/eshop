<template>
  <!-- <el-row>
    <el-col :span="8" v-for="(o) in list" :key="o._id">
      <el-card :body-style="{ padding: '0px'}" class="food-item">
        <img :src="HOST+o.picUrl" class="image">
        <div style="padding: 14px;">
          <span>{{o.goodname}}</span>
          <div class="description">
            {{o.desc}}
          </div>
          <div class="bottom clearfix">
            <time class="time">¥ {{ o.price }}</time>
            <el-button type="text" class="button" @click="addGood(o)" v-if="username">加入菜篮子</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row> -->
  <div>
<div class="good-item" v-for="i in 10" :key="i">
    <div class="left-container">
      <img class="left-img" src="@/assets/cake.jpeg" alt="">
    </div>
    <div class="right-info">
      <div class="title">晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕晶莹剔透的草莓蛋糕</div>
      <div class="desc">茂密森林中的可爱麋鹿、深蓝海洋中可爱蓝鲸、睡意朦胧中可爱的你。一组美食图片之创意甜点分享，愿你的城市有归途。小编推荐一组萌萌的美食图片之创意甜点，希望你们喜欢，如果还想欣赏更多图片，那就不妨收藏下本站吧。</div>
      <div class="price-info"><span class="price">¥<span class="amount">10</span></span><span class="rule">500g/包</span></div>
      <div class="mini-cart iconfont icon-gouwuche"></div>
    </div>
  </div>
</div>
  
</template>
<script>
import {HOST} from '@/config/myconfig'
export default {
  props:['list'],
  data(){
    return {
      HOST,
      currentDate: new Date(),
    }
  },
  computed:{
    username(){
      return this.$store.getters.username;
    }
  },
  methods:{
    addGood(o){
      this.$notify.success('已加入菜篮子')
      this.$store.commit('addGood', {
        ...o,
        count: 1,
      })
    }
  }
};
</script>
<style lang="less" scoped>
@sub-color: #8395a7;
.good-item{
  display: flex;
  padding: 10px 0;
  .left-container{
    .left-img{
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .right-info{
    height: 100px;
    flex-grow: 1;
    position: relative;
    padding-left: 10px;
    .title{
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;  // 控制多行的行数
      -webkit-box-orient: vertical;
    }
    .desc{
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;  // 控制多行的行数
      -webkit-box-orient: vertical;
      color: @sub-color;
    }
    .price-info{
      font-size: 10px;
      color: #576574;
      .price{
        font-weight: bold;
        color: red;
        .amount{
          font-size: 16px;
        }
        margin-right: 10px;
      }
      position: absolute;
      bottom: 0;
    }
    .mini-cart{
      @cart-size: 25px;
      width: @cart-size;
      height: @cart-size;
      border-radius: @cart-size;
      line-height: @cart-size;
      box-sizing: border-box;
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: #00d2d3;
      color: white;
      text-align: center;
    }
  }
  &:not(:last-of-type){
    border-bottom: 1px solid #EBEEF5;
  }
}
</style>