<template>
  <div class="shop">
    <mt-header class="header" title="我的收藏">
        <router-link to="profile" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <good-item :list="goods"/>
  </div>
</template>

<script>
/**
 * 商城
 */
import GoodItem from "@/components/good/GoodItem";
import {myfavor} from '@/api/good'
import _ from 'lodash'
export default {
  components: {
    GoodItem
  },
  data() {
    return {
      goods: null,
    };
  },
  mounted(){
    myfavor({
        params:{
            id: this.$store.getters.userid
        }
    }).then(res=>{
      this.$set(this, 'goods', _.get(res, 'data.data.goods'));
    })
  }
};
</script>

<style lang="less" scoped>
.shop{
  padding-top: 50px;
  .header {
    height: 50px;
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: white;
    color: black;
    border-bottom: 1px solid #ebeef5;
    .iconfont{
      color: #00d2d3;
      font-size: 20px;
    }
  }
}
</style>