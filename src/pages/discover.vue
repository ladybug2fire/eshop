<template>
  <div class="home">
    <mt-header class="header" title="发现">
      <mt-button v-if="userid" slot="right" class="iconfont icon-mine post-btn" @click="seeMine"></mt-button>
    </mt-header>
    <media-item v-for="i in list" :data="i" :key="i._id"></media-item>
    <edit-btn />
  </div>
</template>

<script>
import mediaItem from "@/components/media/mediaItem";
import editBtn from '@/components/media/editBtn';
import {getList} from '@/api/article';
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
  computed:{
    userid(){
      return this.$store.getters.userid;
    }
  },
  methods: {
    getList() {
      getList().then(res=>{
        let data = res.data;
        if(data.code === 200){
          this.list.push(...data.data);
        }
      })
    },
    seeMine(){
      this.$router.push({
        path: '/discover/homepage',
        query:{
          username: '我的发布',
          pre: '/discover',
          type: 'mine'
        }
      })
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