<style lang="scss" scoped>
    .tlc-loadcore-main{
        position: fixed;
        z-index: 10000;
        width: 100%;
        height: 100%;
        border: 1px solid rgba(145,213,255,0.5);
        background-color: rgba(145,213,255,0.1);
        padding: 30px;
        .tlc-loadcore-spining{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
        }
    }

</style>
<template>
    <div class="tlc-loadcore-main" v-if="loading">
        <a-spin class="tlc-loadcore-spining"  :spinning="loading" size="large">
            <slot></slot>
        </a-spin>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "LoadCore",
        data () {
            return {

            }
        },
        computed:{
        ...mapState({
            loading: "loading"
        }),
        }
    }
</script>


