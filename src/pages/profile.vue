<template>
  <div class="page">
    <mt-header class="header" title="编辑资料">
      <router-link to="/profile" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <el-form
        size="small"
        :model="form"
        ref="form"
        :rules="rule"
        label-width="100px"
        class="profile-edit"
      >
        <el-form-item label="头像">
          <my-upload :model="form" prop="avatar" :avatar="true"/>
        </el-form-item>
        <el-form-item label="昵称" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="保密"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday"></el-date-picker>
        </el-form-item>

        <el-form-item label="收获地址" prop="address">
          <el-input placeholder="地址" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input placeholder="手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="个人简介" prop="desc">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <mt-button class="mt-btn primary confirm-btn" type="danger" @click="submitForm('form')">确认修改</mt-button>
    </div>
  </div>
</template>

<script>
import { updateUser } from "@/api/user";
import myUpload from "@/components/UploadField.vue";

export default {
  components: {
    myUpload
  },
  data() {
    return {
      form: {
        username: "",
        birthday: "",
        sex: "",
        address: "",
        desc: "",
        phone: ""
      },
      rule: {
        username: [{required: true, message: "用户名必填", trigger: "blur" }],
        phone: [
          { required: true, message: "手机号", trigger: "blur" },
          { max: 11, message: "长度不超过11个字符", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      updateUser(this.form).then(res => {
        let data = res.data;
        this.$message({
          message: data.msg,
          type: data.code === 200 ? "success" : "error"
        });
        if (data.code === 200) {
          this.$store.commit("logInfo", this.form);
        }
      });
      console.log(this.form);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    this.form = this.$store.getters.userInfo;
  }
};
</script>

<style lang="less" scoped>
.profile-edit {
  margin-top: 20px;
  padding-right: 20px;
  text-align: left;
}
.confirm-btn {
  width: calc(100% - 40px);
  margin: 20px;
}
</style>