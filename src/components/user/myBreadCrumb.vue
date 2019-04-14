<template>
    <div class="my-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="route in routes" :key="route.url" :to="{ path: route.url }">{{route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        props: ['routes']
    }
</script>

<style scoped>
.my-breadcrumb {
  margin: 20px 20px 20px 0;
}
</style>