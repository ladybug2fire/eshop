<template>
    <div class="review-footer">
        <div class="input-block"><textarea class="review-input" type="text" v-model="review"></textarea></div>
        <div class="block" @click="like = !like"><div :class="['iconfont', {'icon-like': !like}, {'icon-like_fill': like}]"></div><div>收藏</div></div>
        <div class="block" @click="doReview">
            <div class="btn">发送</div>
        </div>
    </div>
</template>

<script>
import {review} from '@/api/article'
import _ from 'lodash'
    export default {
        props: ['articleid'],
        data() {
            return {
                like: false,
                review: ''
            }
        },
        methods:{
            doReview(){
                review({
                    username: this.$store.getters.username,
                    userid: this.$store.getters.userid,
                    avatar: _.get(this.$store.getters, 'userInfo.avatar'),
                    desc: this.review,
                    articleid: this.articleid
                }).then(res=>{

                })
            }
        }
    }
</script>

<style lang="less" scoped>
.review-footer{
    display: flex;
    background: white;
    flex-direction: row;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 5px;
    box-sizing: border-box;
    .input-block{
        flex-grow: 1;
        padding: 0 10px;
        .review-input{
            border-radius: 4px;
            width: 100%;
            height: 40px;
            outline: none;
            font-size: 16px;
            background: #f8f8f8;
            border: none;
        }
    }
    .block{
        margin: 5px;
        text-align: center;
        font-size: 14px;
        .iconfont{
            font-size: 25px;
            &.icon-like_fill{
                color: pink;
            }
        }
        .btn{
            color: white;
            background: pink;
            padding: 10px 5px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}
</style>