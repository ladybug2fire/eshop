<template>
  <div>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    </div>
    <div class="btn-group">
      <mt-button class="mt-btn primary" size="small" type="default" @click="onSubmit">登录</mt-button>
      <mt-button class="mt-btn second" size="small" type="primary" plain @click="goSignUp">注册</mt-button>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
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
      login(this.form).then(res => {
        let data = res.data;
        this.$message({
          message: data.msg,
          type: data.code === 200 ? "success" : "error"
        });
        if(data.code === 200){
          this.$store.commit('logInfo', data.data);
          this.$router.replace('/home')
        }
      });
    },
    goSignUp(){
      this.$router.push('/register')
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