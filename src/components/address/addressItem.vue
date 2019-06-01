<template>
  <div>
    <mt-cell v-if="address" :title="address.address" :label="label" is-link :to="route"></mt-cell>
    <mt-cell v-else title="+ 添加收获地址" :label="label" is-link :to="route"></mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: {
        path: "/address",
        query: {
          pre: "/buy"
        }
      },
    };
  },
  computed:{
      address(){
          return this.$store.getters.address || null
      },
      label(){
          if(this.address){
              return `${this.address.username}  ${this.address.phone}`
          }
          return '';
      }
  }
};
</script>

<style lang="less" scoped>
.addBtn {
    border: 1px solid #e8e8e8;
    padding: 10px;
    text-align: center;
  }
</style>