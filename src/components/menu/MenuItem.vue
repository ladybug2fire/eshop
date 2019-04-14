<template>
  <div :class="['menu-item', {'active': active}]" @mouseover="hoverable=true" @mouseleave="hoverable=false">
    {{title}}
    <div :class="['detail-items', {'hover': hoverable}]">
      <div v-for="g in groups" :key="g.label">
        <div class="title">{{g.label}}</div>
        <div class="children">
          <div class="type" v-for="tag in g.children" :key="tag" @click="filterTag(tag)">{{tag}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "active", "groups"],
  data() {
    return {
      hoverable: false,
    };
  },
  methods:{
    filterTag(tag){
      this.$router.push({
        path: '/favordetail',
        query:{
          tag,
        }
      })
    }
  }
};
</script>
<style lang="less">
@import url("./index.less");
.detail-items {
  box-sizing: border-box;
  line-height: 1.5;
  overflow: scroll;
  height: 0;
  opacity: 0;
  transition: 0.3s height,opacity ease-in-out;
  &.hover{
    height: 300px !important;
    opacity: 1;
  }
  .title {
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    color: #c0ae7d;
    pointer-events: none;
  }
  .children {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    .type {
      margin: 5px;
      font-size: 10px;
      cursor: pointer;
      color: #909399;
      &:hover{
        color: #B4010F;
      }
    }
  }
}
</style>