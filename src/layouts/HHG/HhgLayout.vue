<style lang="scss" scoped>
    .tlc-layout-main {
        width: 100%;
        .tlc-layout-footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: 5px 0;
            z-index: 100000;
        }
    }

</style>
<template>
    <div class="tlc-layout-main">
        <a-layout>
            <a-layout-content class="tlc-layout-content">
                <router-view/>
            </a-layout-content>
            <a-layout-footer class="tlc-layout-footer">
                <tab-menu :tabs="tabs" acType="3"></tab-menu>
            </a-layout-footer>
        </a-layout>

    </div>

</template>

<script>
    export default {
        name: "HhgLayout",
        data(){
            return{
                tabs:[
                    {type: "bell", name: "通知",path:'/notice'},
                    {type: "appstore", name: "菜单",path:'/menus'},
                    {type: "user", name: "我的",path:'/user'},
                ]
            }
        }
    }
</script>


