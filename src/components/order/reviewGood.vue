<template>
  <div class="review-good">
    <div class="item-header">
      <img :src="HOST + item.picUrl" class="avatar" alt>
      <div>{{item.goodname}}</div>
    </div>
    <div class="star">
        <el-rate v-model="item.star"></el-rate>
    </div>
    <mt-field placeholder="评价内容" type="textarea" rows="4" v-model="item.review"></mt-field>
  </div>
</template>

<script>
import { HOST } from "@/config/myconfig";
export default {
  props: ["item"],
  data() {
    return {
      HOST
    };
  }
};
</script>

<style lang="less" scoped>
.review-good{
    .item-header{
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .avatar{
            height: 30px;
            width: 30px;
            border-radius: 4px;
            object-fit: cover;
            margin-right: 10px;
        }
    }
    .star{
        padding: 10px;
    }
}
</style>