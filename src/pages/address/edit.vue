<template>
  <div class="page">
    <mt-header class="header" title="编辑地址">
      <router-link :to="pre" slot="left">
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
        <el-form-item label="姓名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input placeholder="手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="详细收获地址" prop="address">
          <el-input type="textarea" v-model="form.address"></el-input>
        </el-form-item>
        <!-- <el-form-item>
            <el-checkbox v-model="defaultAddress" @change="setDefault">设为默认地址</el-checkbox>
        </el-form-item> -->
      </el-form>
      <mt-button class="mt-btn primary confirm-btn" type="danger" @click="submitForm('form')">确认修改</mt-button>
    </div>
  </div>
</template>

<script>
import { updateAddress, addAddress , setDefault} from "@/api/address";
import myUpload from "@/components/UploadField.vue";

export default {
  components: {
    myUpload
  },
  computed:{
      pre(){
          return this.$route.query.pre || '/address'
      },
      editItem(){
        return this.$route.query.item
      }
  },
  data() {
    return {
      defaultAddress: false,
      form: {
        username: "",
        address: "",
        phone: "",
      },
      rule: {
        username: [{required: true, message: "用户名必填", trigger: "blur" }],
        phone: [
          { required: true, message: "手机号必填", trigger: "blur" },
          { max: 11, message: "长度不超过11个字符", trigger: "change" }
        ],
        address: [
            { required: true, message: "地址不能为空", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let fetchMethod = null;
      if(this.editItem){
        fetchMethod = updateAddress
      }else{
        fetchMethod = addAddress
      }
      fetchMethod(Object.assign(this.form, {
        userid: this.$store.getters.userid,
      })).then(res => {
        let data = res.data;
        this.$message({
          message: data.msg,
          type: data.code === 200 ? "success" : "error"
        });
        this.$nextTick(()=>{
          this.$router.push(this.pre)
        })
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted(){
    if(this.editItem){
      this.form = this.editItem
    }
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