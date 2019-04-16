<template>
<div class="container">
    <div class="profile-card">
        <div class="left">
            <img class="avatar" src="@/assets/cake.jpeg" alt="">
        </div>
        <div class="right">
            <div>熊猫爱吃鱼</div>
            <div>137******708</div>
        </div>
    </div>
    <div class="group">
        <div class="section">
            <span class="iconfont icon-like_fill"></span>我的收藏
        </div>
        <div class="section">
            <span class="iconfont icon-icon"></span>我的订单
        </div>
        <div class="section">
            <span class="iconfont icon-label_fill"></span>我的关注
        </div>
    </div>
    <div class="profile-section">
        <div class="section-title">我的订单<span class="seemore">查看更多</span></div>
        <order-item></order-item>
    </div>
    <div class="profile-section">
        <div class="section-title">我的收藏<span class="seemore">查看更多</span></div>
        <order-item></order-item>
    </div>
</div>
</template>

<script>
    import OrderItem from '@/components/order/OrderItem'
    export default {
        components:{
            OrderItem,
        }
    }
</script>

<style lang="less" scoped>
.container{
    background: #f8f8f8;
    padding: 20px 0;
}
.profile-card{
    width: calc(~'100% - 40px');
    box-sizing: border-box;
    margin: 20px;
    background-color: #fff;
    box-shadow: 2px 2px 5px grey;
    padding: 20px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    .left{
        .avatar{
            width: 60px;
            height: 60px;
            border-radius: 60px;
            object-fit: cover;
        }
        margin-right: 10px;
    }
    // border-bottom: 1px solid #EBEEF5;
}
.group{
    display: flex;
    flex-direction: row;
    // border-bottom: 1px solid #EBEEF5;
    .section{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        box-sizing: border-box;
        margin-right: 10px;
        width: calc(~'(100% - 40px)/3');
        text-align: center;
        background-color: #fff;
        margin-bottom: 20px;
        font-size: 14px;
        .icon-like_fill{
            color: pink;
            font-size: 25px;
        }
        .icon-icon{
            color: #00d2d3;
            font-size: 20px;
        }
        .icon-label_fill{
            color: #ee5253;
            font-size: 25px;
        }
        border: 1px solid #F2F6FC;
        &:first-of-type{
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            margin-left: 20px;
        }
        &:not(:last-of-type){
            margin-right: 0;
            border-right: none;
        }
        &:last-of-type{
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
}
.section-title{
    font-size: 14px;
    color: #606266;
    padding: 10px 20px;
    border-bottom: 1px solid #EBEEF5; 
}
.profile-section{
    background: white;
    margin-bottom: 20px;
    .seemore{
        float: right;
        color: #00d2d3;
    }
}
</style>