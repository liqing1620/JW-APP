<style lang="scss" scoped>
    .tlc-empty-main{
        position: absolute;
        top: 0;
        bottom: 0;
        padding-top: 35%;
        width: 100%;
        text-align: center;
    }
</style>
<template>
    <div class="tlc-empty-main">
        <img src="@images/empty.svg" alt="">
        <p>{{description}}</p>
    </div>
</template>

<script>
    export default {
        name: "EmptyData",
        props:{
            description:{
                type:String,
                default:'暂无数据'
            }
        }
    }
</script>


