<style lang="scss" scoped>
    .hhg-menus-main {
        /deep/ .ant-tabs-nav .ant-tabs-tab-active {
            color: #2DD19E;
            font-weight: 500;
        }

        /deep/ .ant-tabs-ink-bar {
            background-color: #2DD19E;
        }
        /deep/ .ant-tabs-nav .ant-tabs-tab{
            margin-left: 0;
        }
    }
</style>
<template>
    <div class="hhg-menus-main">
        <top-nav></top-nav>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                tabBarGutter:0
            }
        },
        methods: {
            change() {

            }
        }
    }
</script>


