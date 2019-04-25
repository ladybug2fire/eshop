<template>
  <div>
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

<style scoped>
</style>