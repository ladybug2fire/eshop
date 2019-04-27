<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <article :list="articles" v-if="articles && articles.length > 0"/>
    <h3 v-else>这里空空如也</h3>
  </div>
</template>

<script>
/**
 * 菜单详情
 */
import Article from "@/components/Article";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import {getMenu} from '@/api/menu'
import {searchArticle} from '@/api/article'
import _ from 'lodash'
export default {
  components: {
    myBreadCrumb,
    Article
  },
  data() {
    return {
      routes:[
        { name: "首页", url: "/home" },
        { name: "菜单", url: "/favorite" },
        { name: this.$route.query.tag || "菜单详情" }
      ],
      menuid: this.$route.query.id,
      tag: this.$route.query.tag,
      articles: []
    };
  },
  watch:{
    ['$route.query.tag'](nv, ov){
      console.log('new tag', nv)
      this.$set(this.routes[2], 'name', nv)
      this.search();
    }
  },
  methods:{
    getArticle(){
      getMenu({params: {id: this.menuid}}).then(res=>{
        if(res.data.code === 200){
          this.$set(this, 'articles', _.get(res, 'data.data.articles', []))
        }
      })
    },
    search(){
      console.log('search')
      searchArticle({params: {tag: this.$route.query.tag}}).then(res=>{
        if(res.data.code === 200){
          this.$set(this, 'articles', _.get(res, 'data.data', []))
        } 
      })
    }
  },
  mounted(){
    if(this.menuid) this.getArticle();
    if(this.tag) this.search()
  }
};
</script>

<style scoped>
</style>