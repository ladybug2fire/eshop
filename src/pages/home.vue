<template>
  <div class="home">
    <side-tabs></side-tabs>
  </div>
</template>

<script>
// import MainHeader from '@/components/Header.vue'
// import Slide from '@/components/Slide.vue'
// import Food from '@/components/Food.vue'
// import {getList} from '@/api/food'
import SideTabs from '@/components/good/SideTabs'
  export default {
    components:{
      SideTabs
    },
    data(){
      return {
        list: [],
      }
    },
    computed:{
      imgList(){
        return this.list.map(e=>e.picUrl).slice(0,4);
      }
    },
    methods:{
      getList(){
        // getList().then(res=>{
        //   let data = res.data;
        //   if(data.code === 200){
        //     this.list.push(...data.data);
        //   }
        // })
      }
    },
    mounted(){
      console.log('get list')
      // this.getList();
    }
  }
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>