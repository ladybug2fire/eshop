<template>
<div>
    <div class="fixed-cart" @click="jumpCart" v-if="isShow">
        <mt-badge type="error" class="cart-badge">
            {{goodcount}}
        </mt-badge>
        <i class="iconfont icon-gouwuche"></i>
    </div>
</div>
</template>

<script>
    export default {
        computed:{
            goodcount(){
                return this.$store.getters.goodcount;
            },
            username(){
                return this.$store.getters.username;
            },
            isShow(){
                return ['home', 'cat'].some(e=>this.$route.path.match(e))
            }
        },
        methods:{
            jumpCart(){
                this.$router.replace('order')
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
    border-radius: 4px;
    // &:hover{
    //     background: @theme-color;
    //     color: white;
    // }
    .cart-badge{
        position: absolute;
        right: 0;
        top: 0;
        max-width:20px; 
        text-overflow:ellipsis; 
        overflow:hidden;
        border: 3px solid white;
        transform: translate(50%, -50%)
    }
}
</style>