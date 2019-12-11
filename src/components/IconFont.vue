<!--阿里图标库引入-->
<style lang="scss" scoped>

</style>
<template>
    <my-icon :type=type />
</template>

<script>
    import { Icon } from 'ant-design-vue';
    import {SCRIPT_DEFAULT_Url} from '../configs/baseConfigs'
    const MyIcon = Icon.createFromIconfontCN({
        scriptUrl:SCRIPT_DEFAULT_Url, // 在 iconfont.cn 上生成
    });
    export default {
        name: "IconFont",
        components:{
            'my-icon': MyIcon,
        },
        props:{
            type:{
                type:String,
                default:"icon-jinshengfuwu"
            }
        }
    }
</script>


