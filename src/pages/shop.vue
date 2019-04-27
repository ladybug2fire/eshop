<template>
  <div class="shop">
    <mt-header class="header" title="商城">
    </mt-header>
    <good-item :list="goods"/>
  </div>
</template>

<script>
/**
 * 商城
 */
import GoodItem from "@/components/good/GoodItem";
import {list} from '@/api/good'
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
    list().then(res=>{
      let data = res.data;
      this.$set(this, 'goods', data.data);
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
  }
}
</style>