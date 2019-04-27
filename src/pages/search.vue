<template>
  <div class="page">
    <mt-header class="header" title="搜索" :autofocus="true" :show="true">
      <router-link :to="pre" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search v-model="value" @input="input">
        <template v-if="list.length">
            <div class="good-list">
                <good-item :list="list"/>
            </div>
        </template>
    </mt-search>
  </div>
</template>

<script>
import GoodItem from "@/components/good/GoodItem";
import _ from "lodash";
import { search } from "@/api/good";
export default {
  components: {
    GoodItem
  },
  computed:{
      pre(){
          return this.$route.query.pre
      }
  },
  data() {
    return {
      list: [],
      value: "",
    };
  },
  methods: {
    doSearch() {
      search({
        params: {
          tag: this.value
        }
      }).then(res => {
        this.$set(this, "list", res.data.data);
      });
    },
    // 防抖1s
    input: _.debounce(function(v) {
      if (v) this.doSearch();
    }, 300)
  }
};
</script>

<style lang="less">
.good-list{
    margin-top: 60px;
}
.mint-search{
  height: calc(100vh - 105px);
  overflow: scroll;
}

</style>