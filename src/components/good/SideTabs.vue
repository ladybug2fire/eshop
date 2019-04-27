<template>
<div class="slide-container">
    <div class="side-tabs">
        <div :class="['tab', i==activeIndex?'active':'']" v-for="(t,i) in tabs" :key="i" @click="activeIndex = i">{{t}}</div>
    </div>
    <div class="content">
        <good-item></good-item>
    </div>
</div>
</template>

<script>
import GoodItem from '@/components/good/GoodItem'
import {types} from '@/util/constants'
export default {
    components:{
       GoodItem 
    },
    data() {
        return {
            activeIndex: 0,
        }
    },
    computed:{
        tabs(){
            return types;
        }
    }
}
</script>

<style lang="less" scoped>
.slide-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .side-tabs{
        width: 90px;
        background: #f8f8f8;
        height: 100%;
        flex-shrink: 0;
        text-align: center;
        .tab{
            width: 100%;
            height: 40px;
            padding: 10px;
            font-size: 10px;
            box-sizing: border-box;
            &.active{
                background: white;
                border-left: 4px solid #00d2d3;
            }
        }
    }
    .content{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }

}
</style>