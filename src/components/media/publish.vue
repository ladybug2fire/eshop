<template>
  <div class="my-publish">
    <mt-header class="header" title="发布文章">
      <router-link to="/discover" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <mt-field label="标题" placeholder="文章标题" v-model="title"></mt-field>
    </div>
    <div class="container">
      <div id="editor"></div>
      <mt-button class="mt-btn primary publish-btn" type="default" plain>发表</mt-button>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import {HOST} from '@/config/myconfig'
export default {
  name: "publish",
  data() {
    return {
      title: null 
    }
  },
  mounted() {
    var editor = new E("#editor");
    editor.customConfig.uploadImgServer = HOST + "/api/food/upload";
    editor.customConfig.uploadFileName = "file";
    editor.customConfig.uploadImgHooks = {
      customInsert: function(insertImg, result, editor) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        var url = HOST + result.data;
        insertImg(url);
      }
    };
    editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "foreColor", // 文字颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "image", // 插入图片
      "video", // 插入视频
    ];
    this.editor = editor;
    editor.create();
  }
};
</script>

<style lang="less">
.my-publish{
  .header {
    height: 50px;
    background-color: white;
    color: black;
    border-bottom: 1px solid #ebeef5;
    position: fixed;
    width: 100%;
    top:0;
  }
  padding-top: 50px;
  #editor{
    margin-top: 10px;
    .w-e-text-container{
      min-height: 500px;
      height: 100%;
    }
  }
  .container{
    padding: 0 10px;
  }
  .mt-btn.publish-btn{
    margin-top: 10px;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    &.primary{
      color: white;
      background-color: #00d2d3;
      border-color: #00d2d3;
    }
  }
}
  
</style>