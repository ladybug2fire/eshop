<template>
  <div>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
      <mt-field label="手机号" placeholder="手机号" v-model="form.phone"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    </div>
    <div class="btn-group">
      <mt-button class="mt-btn second" size="small" type="default" @click="goLogin" plain>登录</mt-button>
      <mt-button class="mt-btn primary" size="small" type="primary" @click="onSubmit">注册</mt-button>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/user";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        phone: "",
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
    },
    goLogin(){
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="less" scoped>
.btn-group{
  margin-top: 20px;
  width: 100vw;
  .mt-btn{
    margin: 0 10px;
    box-sizing: border-box;
    width: calc(~'50% - 20px');
    &.primary{
      color: white;
      background-color: #00d2d3;
    }
    &.second{
      color: #00d2d3;
      border-color: #00d2d3;
    }
  }
}
</style>