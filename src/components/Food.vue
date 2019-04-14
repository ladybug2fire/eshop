<template>
  <div>
    <el-row v-if="list">
      <el-col :span="8" v-for="(o) in list" :key="o._id">
        <el-card :body-style="{ padding: '0px'}" class="food-item">
          <img :src="HOST+o.picUrl" class="image" @click="seeDetail(o)">
          <div style="padding: 14px;">
            <span>{{o.foodname}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ o.addTime }}</time>
              <time class="time">{{ o.username }}</time>
              <el-button type="text" class="button" @click="seeDetail(o)">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {HOST} from '@/config/myconfig'
export default {
  props: ["list"],
  data() {
    return {
      HOST,
    };
  },
  methods: {
    seeDetail(o) {
      this.$router.push({
        path: "/detail",
        query: {
          id: o._id
        }
      });
    }
  },
  mounted() {
    console.log(this.list);
  }
};
</script>
<style>
.food-item {
  margin: 10px;
}
.time {
  font-size: 13px;
  color: #999;
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