<template>
  <div class="home">
    <mt-header class="header" title="分类">
      <mt-button class="iconfont icon-search" slot="right" @click="search"></mt-button>
    </mt-header>
    <side-tabs></side-tabs>
  </div>
</template>

<script>
import SideTabs from "@/components/good/SideTabs";
import mediaItem from "@/components/media/mediaItem";
export default {
  components: {
    SideTabs,
    mediaItem
  },
  data() {
    return {
      value: null,
      list: []
    };
  },
  computed: {
    imgList() {
      return this.list.map(e => e.picUrl).slice(0, 4);
    }
  },
  methods: {
    search(){
      this.$router.push({
        path: '/search',
        query:{
          pre: this.$route.path
        }
      })
    },
    getList() {
      // getList().then(res=>{
      //   let data = res.data;
      //   if(data.code === 200){
      //     this.list.push(...data.data);
      //   }
      // })
    }
  },
  mounted() {
    console.log("get list");
    // this.getList();
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .header {
    height: 50px;
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