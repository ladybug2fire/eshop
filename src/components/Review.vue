<template>
    <div>
        <div class="review-container">
            <div class="username">{{data.username  || "匿名用户" }}</div> <div class="addtime">{{data.addTime}}</div>
        </div>
        <el-rate
            v-model="data.star"
            disabled
            show-score
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
@width: 60%;
.review-content{
    color: #303133;
    padding: 5px;
    font-size: 12px;
    width: @width;
    padding-bottom: 10px;
    border-bottom: 1px solid #E4E7ED;
}
.review-container{
    display: flex;
    justify-content: space-between;
    width: @width;
}
.username{
    color: #606266;
    font-size: 14px;
}
.addtime{
    color: #909399;
    font-size: 10px;
}

</style>