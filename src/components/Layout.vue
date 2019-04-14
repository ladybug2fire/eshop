<template>
  <div>
    <my-header></my-header>
    <main-menu></main-menu>
    <div class="main-section">
      <router-view/>
    </div>
    <CartBtn />
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MainMenu from "@/components/menu/MainMenu";
import CartBtn from '@/components/good/CartBtn'

export default {
  components: {
    MyHeader,
    MainMenu,
    CartBtn
  }
};
</script>

<style lang="less" scoped>
.main-section{
  padding: 0 10vw;
  padding-bottom: 50px;
}
</style>