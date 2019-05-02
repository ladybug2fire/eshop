 <template>
  <div class="page">
    <div class="bar">
      <router-link :to="pre">
        <mt-button class="back-btn bar-btn" icon="back"></mt-button>
      </router-link>
      <input class="search-input" type="text" @input="input" v-model="value">
      <mt-button class="cancel-btn bar-btn" @click="clear">取消</mt-button> 
    </div>
    <template v-if="value">
      <div>
        <div class="good-list" v-if="list.length">
            <good-item :list="list"/>
        </div>
        <div v-else style="padding:20px">
          没有你要的东西～
        </div>
      </div>
    </template>
    <template v-else>
      <div class="holder">
        <h4>热门搜索</h4>
        <div class="tag-section">
          <el-tag type="info" class="tag" v-for="k in hot" :key="k" @click="doSearch(k)">{{k}}</el-tag>
        </div>
        <h4 v-if="history.length" >历史搜索</h4>
        <div class="tag-section">
          <el-tag type="info" class="tag" v-for="k in history" :key="k" @click="doSearch(k)">{{k}}</el-tag>
          <div v-if="history.length" @click="clearHistory" class="iconfont icon-empty_fill">清空</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import GoodItem from "@/components/good/GoodItem";
import _ from "lodash";
import { search } from "@/api/good";
import {history, addHistory, clearHistory} from '@/api/user'
export default {
  components: {
    GoodItem
  },
  computed:{
      pre(){
          return this.$route.query.pre
      },
      userid(){
        return this.$store.getters.userid
      },
      history(){
        return this.$store.getters.history
      }
  },
  data() {
    return {
      hot:['猪肉','水果','鱼', '虾'],
      list: [],
      value: "",
    };
  },
  methods: {
    clearHistory(){
      this.$store.dispatch('clearHistory')
    },
    clear(){
      this.value = null;
      this.doSearch();
    },
    doSearch(key) {
      if(key)this.$set(this, 'value', key);
      if(!this.value)return;
      this.$store.dispatch('addHistory', this.value)
      search({
        params: {
          tag: this.value
        }
      }).then(res => {
        if(_.get(res, 'data.code')==200){
          this.$set(this, "list", res.data.data);
        }else{
          this.$set(this, "list", []); 
        }
      });
    },
    // 防抖1s
    input: _.debounce(function(v) {
      if (v) this.doSearch();
    }, 300)
  },
  mounted(){
    this.$store.dispatch('getHistory')
  }
};
</script>

<style lang="less">
.good-list{

}
.bar{
  .bar-btn{
    background: none;
    border:none;
    box-shadow: none;
  }
  .cancel-btn{
    color: #409EFF;
  }
  display: flex;
  align-items: center;
  .search-input{
    flex-grow: 1;
    border: 1px solid #F2F6FC;
    height: 30px;
    border-radius: 30px;
    outline: none;
    padding: 0 10px;
  }
}
.holder{
  padding: 0 20px;
  h4{
    margin: 0;
  }
  .tag-section{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px 0px;
    .tag{
      margin: 5px;
    }
  }
}

</style>