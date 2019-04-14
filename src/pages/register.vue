<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <h2>注册一个新的账号</h2>
        <el-form ref="form" :model="form" label-width="80px" size="small">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { register } from "@/api/user";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      register(this.form)
        .then(res => {
          let data = res.data;
          this.$message({
            message: data.msg,
            type: data.code === 200 ? "success" : "error"
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>