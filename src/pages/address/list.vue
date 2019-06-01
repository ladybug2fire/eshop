<template>
  <div class="page list-container">
    <mt-header class="header" title="地址管理">
      <router-link :to="pre" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="address-list">
      <div class="address-item" v-for="(item , i) in list" :key="i" @click="choseAddress(item)">
        <div class="address">{{item.address}}</div>
        <div class="info">
          <div>{{item.username}}</div>
          <div>{{item.phone}}</div>
        </div>
        <div class="footer">
          <div class="btn" @click.stop="editAddress(item)">编辑</div>
          <div class="btn" @click.stop="delAddress(item._id)">删除</div>
        </div>
      </div>
    </div>
    <div class="addBtn" @click="addAddress">新增收获地址</div>
  </div>
</template>

<script>
import { getList, delAddress } from "@/api/address";
export default {
  data() {
    return {
      list: []
    };
  },
  computed: {
    pre() {
      return this.$route.query.pre || "/profile";
    }
  },
  methods: {
    delAddress(id) {
      delAddress({
        params: {
          id,
        }
      }).then(res=>{
        if(res.data.code==200){
          this.getList();
          this.$message.success('删除成功')
        }else{
          this.$message.error('删除失败')
        }
      });
    },
    editAddress(item){
      this.$router.push({
        path: '/address/edit',
        query:{
          item
        }
      })
    },
    addAddress() {
      this.$router.push("/address/edit");
    },
    choseAddress(item) {
      this.$store.commit("choseAddress", {
        item
      });
      if (this.pre == "/buy") this.$router.push(this.pre);
    },
    getList() {
      getList({
        params: {
          id: this.$store.getters.userid
        }
      }).then(res => {
        console.log(res);
        this.$set(this, "list", res.data.data);
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="less" scoped>
.list-container {
  .addBtn {
    border: 1px solid #e8e8e8;
    padding: 10px;
    text-align: center;
  }
  padding: 20px;
  .address-list {
    .address-item {
      margin: 10px 0;
      padding: 10px 0;
      border-bottom: 1px solid #e8e8e8;
    }
    .address {
      font-size: 18px;
      font-weight: bold;
    }
    .info {
      display: flex;
      flex-direction: row;
      padding: 10px 0;
      div {
        margin-right: 10px;
      }
    }
    .footer {
      display: flex;
      flex-direction: row;
      .btn {
        border: 1px solid #e8e8e8;
        padding: 0 10px;
        border-radius: 10px;
        margin-right: 10px;
      }
    }
  }
}
</style>