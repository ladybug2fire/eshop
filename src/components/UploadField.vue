<template>
  <!-- <el-upload
    :action="uploadaction"
    name="file"
    list-type="picture-card"
    :limit="1"
    :on-success="onSuccess"
    :on-remove="handleRemove"
  >
    <i class="el-icon-plus"></i>
  </el-upload>-->
  <el-upload
    class="avatar-uploader"
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

export default {
  props: ["model", "prop"],
  data() {
    return {
      uploadaction: `${HOST}/api/article/upload`,
      imageUrl: '',
    };
  },
  methods: {
    onSuccess(res) {
      if (res.code === 200) {
        this.$set(this.model, this.prop, res.data);
        this.$set(this, 'imageUrl', HOST + res.data);
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

<style>
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
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 100vw;
  object-fit: cover;
  height: 178px;
  display: block;
}
</style>