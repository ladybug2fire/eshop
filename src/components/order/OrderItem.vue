<template>
<div>
    <div class="order-item" v-for="i in 10" :key="i">
        <div class="header">
            <div class="order-no">订单编号: 123123189489234189419</div>
            <div class="order-status">交易成功</div>
        </div>
        <div class="container">
            <div class="img-list">
                <img src="@/assets/cake.jpeg" alt="" v-for="j in 10" :key="j">
            </div>
            <div class="count">共10个</div>
        </div>
        <div class="price">
            <div class="price-label">合计:</div>
            <div class="price-info">
                <span class="price-tag">¥</span>
                <span class="price-amount">52.50</span>
            </div>
        </div>
        <div class="footer">
            <div class="del-btn">删除订单</div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.order-item{
    background: #fff;
    .container{
        background: #f8f8f8;
        border-radius: 10px;
        height: 80px;
        margin: 0 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .img-list{
            display: flex;
            flex-direction: row;
            padding: 10px 20px;
            overflow-x: scroll;
            width: calc(~'100% - 100px');
            img{
                height: 60px;
                width: 60px;
                border-radius: 10px;
                background-color: white;
                margin-right: 10px;
            }
            border-radius: 10px;
        }
        .count{
            width: 100px;
            text-align: center;
            font-size: 10px;
        }
    }
    .price{
        padding: 10px 20px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .price-info{
            display: flex;
            align-items: flex-end;
            color: red;
            .price-amount{
                margin-left: 5px;
                font-weight: bold;
                font-size: 16px;
                line-height: 16px;
            }
        }
    }
    .header{
        padding: 5px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        .order-no{
            color: #8395a7;
        }
        .order-status{
            color: #54a0ff;
        }
    }
    .footer{
        box-sizing: border-box;
        padding: 5px 20px;
        background-color: #f8f8f8;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        .del-btn{
            border: 1px solid #DCDFE6;
            font-size: 10px;
            line-height: 20px;
            padding: 3px 10px;
            height: 20px;
            border-radius: 20px;
            cursor: pointer;
        }
    }
}
</style>