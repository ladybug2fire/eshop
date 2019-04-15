<template>
<div class="slide-container">
    <div class="side-tabs">
        <div :class="['tab', i==5?'active':'']" v-for="i in 15" :key="i"></div>
    </div>
    <div class="content">
        <good-item></good-item>
    </div>
</div>
</template>

<script>
import GoodItem from '@/components/good/GoodItem'

export default {
    components:{
       GoodItem 
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
        width: 100px;
        background: #f8f8f8;
        height: 100%;
        flex-shrink: 0;
        .tab{
            width: 100%;
            height: 40px;
            padding: 10px;
            box-sizing: border-box;
            &.active{
                background: white;
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