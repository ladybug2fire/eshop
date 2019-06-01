<template>
  <div class="page">
    <mt-header class="header" title="个人中心">
        <router-link :to="pre" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button class="post-btn" type="primary" slot="right" @click="publish">发表</mt-button>
    </mt-header>
    <template v-for="(item) in goodlist">
      <review-good :item="item" :key="item._id"></review-good>
    </template>
  </div>
</template>

<script>
import reviewGood from "@/components/order/reviewGood";
import {get, review} from '@/api/order'
import _ from 'lodash'
export default {
  components: {
    reviewGood
  },
  data() {
    return {
      goodlist: [],
      pre: this.$route.query.pre || '/profile'
    };
  },
  methods:{
      publish(){
          review({
              userid: this.$store.getters.userid,
              username: this.$store.getters.username,
              avatar: _.get(this.$store, 'getters.userInfo.avatar'),
              id: this.$route.query.id,
              reviews: this.goodlist
          }).then(res=>{
              console.log(res.data.data)
              this.$router.push('/profile')
          })
      }
  },
  mounted(){
      get({
          params:{
              id: this.$route.query.id
          }
      }).then(res=>{
          const goodlist = _.get(res, 'data.data.goods');
          this.$set(this, 'goodlist', goodlist)
      })
  }
};
</script>

<style lang="less" scoped>
.post-btn{
    padding: 3px 10px;
    height: 25px;
    background-color: #26a2ff;
    color: white;
}
</style>