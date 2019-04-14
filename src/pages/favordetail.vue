<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <food :list="foods" v-if="foods && foods.length > 0"/>
    <h3 v-else>这里空空如也</h3>
  </div>
</template>

<script>
/**
 * 菜单详情
 */
import Food from "@/components/Food";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import {getMenu} from '@/api/menu'
import {searchFood} from '@/api/food'
import _ from 'lodash'
export default {
  components: {
    myBreadCrumb,
    Food
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
      foods: []
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
    getFood(){
      getMenu({params: {id: this.menuid}}).then(res=>{
        if(res.data.code === 200){
          this.$set(this, 'foods', _.get(res, 'data.data.foods', []))
        }
      })
    },
    search(){
      console.log('search')
      searchFood({params: {tag: this.$route.query.tag}}).then(res=>{
        if(res.data.code === 200){
          this.$set(this, 'foods', _.get(res, 'data.data', []))
        } 
      })
    }
  },
  mounted(){
    if(this.menuid) this.getFood();
    if(this.tag) this.search()
  }
};
</script>

<style scoped>
</style>