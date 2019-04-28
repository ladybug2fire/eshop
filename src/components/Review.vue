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
        <div v-if="data.userid === userid" class="del-btn" @click="delItem"><span class="iconfont icon-empty_fill"></span>删除</div>
    </div>
</template>

<script>
import { MessageBox, Toast } from "mint-ui";
    export default {
        props: ['data'],
        computed:{
            userid(){
                return this.$store.getters.userid
            }
        },
        methods:{
            delItem(){
                this.$store.dispatch('delGoodReview', this.data._id).then(res=>{
                    if (_.get(res, "data.code") === 200) {
                        this.$store.commit("delGoodReview", this.data._id);
                        Toast({
                            message: "删除成功",
                            iconClass: "icon icon-success"
                        });
                    }
                })
            }
        }
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
.del-btn{
    color: #54a0ff;
    text-align: right;
    cursor: pointer;
}

</style>