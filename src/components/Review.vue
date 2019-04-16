<template>
    <div class="review-item">
        <div class="review-container">
            <div class="username"><img class="avatar" src="@/assets/cake.jpeg" alt="">{{data.username  || "匿名用户" }}</div> <div class="addtime">{{data.addTime}}</div>
        </div>
        <el-rate
            v-model="data.star"
            disabled
        >
        </el-rate>
        <div class="review-content">
            {{data.desc}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang="less" scoped>
@width: 100%;
.review-item{
    padding: 10px 20px;
    border-bottom: 1px solid #E4E7ED;
}
.review-content{
    color: #303133;
    padding: 5px 0;
    width: @width;
    font-size: 14px;
    padding-bottom: 10px;
}
.review-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: @width;
    .avatar{
        @size: 30px;
        height:  @size;
        width:  @size;
        object-fit: cover;
        border-radius:  @size;
        margin-right: 10px;
    }
}
.username{
    display: flex;
    align-items: center;
    color: #303133;
    font-size: 14px;
}
.addtime{
    color: #909399;
    font-size: 10px;
}

</style>