<template>
  <el-row>
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
  </el-row>
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
.food-item{
  margin: 10px;
}
.time {
  font-size: 16px;
  color: #F56C6C;
  font-weight: bold;
}
.description{
  font-size: 12px;
  color: #909399;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 150px;
  cursor: pointer;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>