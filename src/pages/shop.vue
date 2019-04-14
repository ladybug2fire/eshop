<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <good-item :list="goods"/>
  </div>
</template>

<script>
/**
 * 商城
 */
import GoodItem from "@/components/good/GoodItem";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import {list} from '@/api/good'
export default {
  components: {
    myBreadCrumb,
    GoodItem
  },
  data() {
    return {
      routes: [
        { name: "首页", url: "/home" },
        { name: "商城"},
      ],
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

<style scoped>
</style>