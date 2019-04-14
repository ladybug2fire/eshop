<template>
  <div>
      <div class="slide-container">
        <slide :data="imgList"/>
      </div>
      <div class="card-container">
        <h2 class="section-title">新秀菜谱</h2>
        <food :list="list"/>
      </div>
  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue'
import Slide from '@/components/Slide.vue'
import Food from '@/components/Food.vue'
import {getList} from '@/api/food'

  export default {
    components:{
      MainHeader,
      Slide,
      Food,
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
        getList().then(res=>{
          let data = res.data;
          if(data.code === 200){
            this.list.push(...data.data);
          }
        })
      }
    },
    created(){
      console.log('get list')
      this.getList();
    }
  }
</script>

<style lang="less" scoped>
.card-container{
    .section-title{
        color: #c0ae7d;
    }
}
.slide-container{
    margin-top: 10px;
    padding: 0 20px;
}
</style>