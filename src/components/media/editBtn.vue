<template>
<div>
    <div class="fixed-cart" @click="post" v-if="isShow">
        <i class="iconfont icon-brush_fill"></i>
    </div>
</div>
</template>

<script>
    export default {
        computed:{
            username(){
                return this.$store.getters.username;
            },
            isShow(){
                return ['discover'].some(e=>this.$route.path.match(e))
            }
        },
        methods:{
            post(){
                this.$router.replace('/discover/publish')
            }
        }
    }
</script>

<style lang="less" scoped>
@theme-color: #1dd1a1;
.fixed-cart{
    position: fixed;
    bottom: 100px;
    right: 20px;
    height: 20px;
    width: 20px;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
    color: #c8d6e5;
    background-color: white;
    border: 1px solid #c8d6e5;
    border-radius: 20px;
}
</style>