<template>
  <el-upload
    :class="['avatar-uploader', {'squire': avatar}]"
    :action="uploadaction"
    :show-file-list="false"
    :on-success="onSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
import { HOST } from "@/config/myconfig";
import _ from 'lodash'
export default {
  props: ["model", "prop", "avatar"],
  data() {
    return {
      uploadaction: `${HOST}/api/article/upload`,
    };
  },
  computed:{
    imageUrl(){
      return HOST + _.get(this.model, this.prop)
    }
  },
  methods: {
    onSuccess(res) {
      if (res.code === 200) {
        this.$set(this.model, this.prop, res.data);
      }
    },
    handleRemove() {
      this.$delete(this.model, this.prop);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100vw;
  box-sizing: border-box;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader.squire .el-upload{
  width: 178px !important;
} 
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.squire .avatar {
  width: 178px;
}
.avatar {
  width: 100vw;

  object-fit: cover;
  height: 178px;
  display: block;
}
</style>