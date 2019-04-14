<template>
    <div class="fixed-cart" @click="jumpCart" v-if="username">
        <el-badge :value="goodcount" class="item-badge">
            <i class="el-icon-goods icon-btn"></i>
        </el-badge>
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
            }
        },
        methods:{
            jumpCart(){
                this.$router.replace('shopcart')
            }
        }
    }
</script>

<style lang="less" scoped>
@theme-color: #B4010F;
.fixed-cart{
    position: fixed;
    bottom: 200px;
    right: 20px;
    .icon-btn{
        cursor: pointer;
        font-size: 20px;
        padding: 10px;
        color: @theme-color;
        background-color: white;
        border: 1px solid @theme-color;
        border-radius: 4px;
        &:hover{
            background: @theme-color;
            color: white;
        }
    }
}
</style>