<style lang="scss" scoped>
    .tlc-tab-main {
        display: flex;
        justify-content: space-between;
        z-index: 100000;

        div {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 25%;
            font-size: 20px;

            span {
                font: 0.5rem/1rem hiragino sans gb, microsoft yahei, simsun;
            }
        }
    }

    .active {
        color: #FF2D2D;
    }

    .active1 {
        color: rgb(18, 150, 219);
    }

    .active2 {
        color: #808080;
    }

    .active3 {
        color: rgb(40, 205, 156);
    }
</style>
<template>
    <div class="tlc-tab-main">
        <div v-for="(item,index) in tabs" @click="setMenuId(item,index,item.path)" :class="ids===index?getActive():''">
            <a-icon :type="item.type"/>
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabMenu",
        props: {
            acType: {
                type: String,
                default: '0'
            },
            tabs: {
                type: Array,
                default: function () {
                    return [
                        {type: "book", name: "咨询", path: "/"},
                        {type: "read", name: "学习中心", path: '/center'},
                        {type: "message", name: "泰乐社区", path: '/community'},
                        {type: "user", name: "我的", path: '/user'},
                    ]
                }
            }
        },
        data() {
            return {
                ids: 0,
            }
        },
        methods: {
            getActive() {
                switch (this.acType) {
                    case '1':
                        return 'active1';
                        break;
                    case '2':
                        return 'active2';
                        break;
                    case '3':
                        return 'active3';
                        break;
                    default:
                        return 'active'
                }
            },
            setMenuId(o, d, p) {
                this.ids = d
                this.$router.push(p)
            }
        }
    }
</script>


