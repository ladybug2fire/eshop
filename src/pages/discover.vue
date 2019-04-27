<template>
  <div class="home">
    <mt-header class="header" title="发现">
      <mt-button slot="right" class="iconfont icon-mine post-btn"></mt-button>
    </mt-header>
    <media-item v-for="i in 10" :key="i"></media-item>
    <edit-btn />
  </div>
</template>

<script>
import mediaItem from "@/components/media/mediaItem";
import editBtn from '@/components/media/editBtn';
export default {
  components: {
    mediaItem,
    editBtn
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
    this.getList();
  }
};
</script>

<style lang="less" scoped>
.post-btn{
    font-size: 20px;
}
.home {
  .header {
    height: 50px;
    background-color: white;
    color: black;
    border-bottom: 1px solid #ebeef5;
    position: fixed;
    width: 100%;
    top:0;
  }
  width: 100%;
  padding-top: 50px;
  height: 100%;
}
</style>