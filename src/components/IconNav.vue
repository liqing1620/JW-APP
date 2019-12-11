<!--基于阿里图标库和antd的nav-->
<style lang="scss" scoped>
    .tlc-iconnav-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
        p{
            margin: 0;
        }
        .tlc-iconnav-icon {
            margin-right: 5px;
        }
        .tlc-iconnav-aicon{
            color:#a9a9a9;
        }
    }

</style>
<template>
    <div class="tlc-iconnav-main" @click="goNext">
        <p>
            <icon-font class="tlc-iconnav-icon" :type="icon" v-if="icon!==''"></icon-font>
            {{name}}
            <slot></slot>
        </p>
        <a-icon class="tlc-iconnav-aicon" :type="arrow" v-if="arrow!==''"/>
    </div>
</template>

<script>
    export default {
        name: "IconNav",
        props: {
            icon: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            arrow: {
                type: String,
                default: ''
            },
        },
        methods:{
            goNext(){
                this.$emit('go-next')
            }
        }
    }
</script>

