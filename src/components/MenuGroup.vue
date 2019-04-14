<template>
  <div class="menu-group">
    <div class="left">
      <div class="snap-container">
        <div
          class="img-item"
          v-for="(img,i) in imageList"
          :key="img+i"
          :style="{height: width, width: width }"
        >
          <img class="avatar" :src="HOST + img" alt="菜单头图">
        </div>
      </div>
    </div>
    <div class="right">
      <div class="menu-name">{{data.menuname}}</div>
      <div class="menu-author">{{data.username}}</div>
      <div class="menu-desc">{{data.desc}}</div>
    </div>
  </div>
</template>

<script>
import { HOST } from "@/config/myconfig";
import _ from 'lodash';
export default {
  props: ["data"],
  data(){return {HOST}},
  computed: {
    imageList() {
      return _.map(_.get(this.data, 'foods'), e=>e.picUrl);
    },
    width() {
      const len = this.imageList.length;
      if (len <= 4 && len > 1) return "50%";
      if (len == 1) return "100%";
      if (len > 4) return "33%";
    }
  }
};
</script>

<style lang="less" scoped>
.menu-group {
  margin: 10px 0;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  .snap-container {
    width: 100px;
    height: 100px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .img-item {
      box-sizing: border-box;
      padding: 1px;
    }
  }
  .avatar {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 4%;
  }
  display: flex;
  .left {
    background: #ebeef5;
    border-radius: 4px;
    height: 100px;
  }
  .right {
    margin-left: 10px;
    margin-top: 5px;
    .menu-name {
      color: #303133;
    }
    .menu-author {
      color: #909399;
      font-size: 12px;
    }
    .menu-desc {
      color: #606266;
      font-size: 14px;
      line-height: 1.5;
    }
  }
}
</style>