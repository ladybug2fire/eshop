<template>
  <el-carousel :interval="5000" arrow="always" height="300px" type="card">
    <el-carousel-item v-for="(item,i) in data" :key="item+i">
      <img :src="HOST + item" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import {HOST} from '@/config/myconfig'
export default {
  props:['data'],
  data() {
    return {
      HOST,
    };
  },
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item img {
  object-fit: cover;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>