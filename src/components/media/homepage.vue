<template>
  <div class="home">
    <mt-header class="header" :title="username">
      <router-link :to="pre||'/profile'" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <media-item v-for="i in list" :data="i" :key="i._id"></media-item>
  </div>
</template>

<script>
import mediaItem from "@/components/media/mediaItem";
import editBtn from "@/components/media/editBtn";
import { getList, myfavor, searchArticle } from "@/api/article";
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
    username() {
      return this.$route.query.username;
    },
    pre() {
      return this.$route.query.pre;
    }
  },
  methods: {
    getList() {
      getList().then(res => {
        let data = res.data;
        if (data.code === 200) {
          this.list.push(...data.data);
        }
      });
    },
    getFavor() {
      myfavor({
        params: {
          id: this.$store.getters.userid
        }
      }).then(res => {
        let data = res.data;
        if (data.code === 200) {
          this.list.push(...data.data);
        }
      });
    },
    // 获取关注者的文章列表
    getAuthors(){

    }
  },
  mounted() {
      const type = this.$route.query.type;
      switch (type) {
          case 'favor':
              this.getFavor()
              break;
      
          default:
              break;
      }
  }
};
</script>

<style lang="less" scoped>
.post-btn {
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
    top: 0;
  }
  width: 100%;
  padding-top: 50px;
  height: 100%;
}
</style>