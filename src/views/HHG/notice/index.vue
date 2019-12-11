<style lang="scss" scoped>
    .hhg-notice-main {
        .hhg-notice-list {
            background-color: #ffffff;
            margin-top: 10px;
            padding: 10px;
            display: flex;
            align-items: center;

            img {
                width: 3rem;
                height: auto;
            }

            .hhg-notice-list-item {
                flex: 1;
                p:nth-child(1) {
                    display: flex;
                    justify-content: space-between;
                    margin: 5px 0px 5px 10px;
                    i{
                        font-size: 1rem;
                    }
                    span:nth-child(2){
                        font-size: 0.8rem;
                        color: #989EA0;
                    }
                }

                p:nth-child(2) {
                    margin: 5px 0px 5px 10px;
                    font-size: 0.8rem;
                    color: #989EA0;
                    overflow:hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    white-space:normal;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }

</style>
<template>
    <div class="hhg-notice-main">
        <template v-if="message.length>0">
            <div class="hhg-notice-list" v-for="item in message" @click="goDetail(item.id)">
                <img src="@images/HHG/notice@2x.png" alt="通知">
                <div class="hhg-notice-list-item">
                    <p><span>通知 <icon-font type="icon-new"></icon-font></span><span>{{item.createTime}}</span></p>
                    <p>{{item.message}}</p>
                </div>
            </div>
        </template>
        <template v-else>
            <empty-data></empty-data>
        </template>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                message: [
                    {id: 'tlc00001', message: '系统将于2019年11月15日升级，给您带来不便非常', createTime: '2019-12-09'},
                    {id: 'tlc00001', message: '系统将于2019年11月15日升级，给您带来不便非常', createTime: '2019-12-09'},
                    {id: 'tlc00001', message: '系统将于2019年11月15日升级，给您带来不便非常', createTime: '2019-12-09'},
                    {id: 'tlc00001', message: '系统将于2019年11月15日升级，给您带来不便非常', createTime: '2019-12-09'},
                    {id: 'tlc00001', message: '系统将于2019年11月15日升级，给您带来不便非常', createTime: '2019-12-09'},
                ]
            }
        },
        methods:{
            goDetail(id){
               this.$router.push(`/ndetail/${id}`)
            }
        }
    }
</script>

