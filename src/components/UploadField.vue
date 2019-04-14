<template>
  <el-upload
    :action="uploadaction"
    name="file"
    list-type="picture-card"
    :limit="1"
    :on-success="onSuccess"
    :on-remove="handleRemove"
  >
    <i class="el-icon-plus"></i>
  </el-upload>
</template>

<script>
import { HOST } from "@/config/myconfig";

export default {
  props: ["model", "prop"],
  data() {
    return {
      uploadaction: `${HOST}/api/food/upload`
    };
  },
  methods: {
    onSuccess(res) {
      if (res.code === 200) {
        this.$set(this.model, this.prop, res.data);
      }
    },
    handleRemove(){
        this.$delete(this.model, this.prop);
    }
  }
};
</script>

<style scoped>
</style>