<template>
  <div>
    <mt-button size="small">small</mt-button>
    <span class="iconfont">&#xe7f8;</span>
  </div>
</template>

<script>
// import MainHeader from '@/components/Header.vue'
// import Slide from '@/components/Slide.vue'
// import Food from '@/components/Food.vue'
// import {getList} from '@/api/food'

  export default {
    components:{
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