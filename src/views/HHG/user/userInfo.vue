<style lang="scss" scoped>
    .hhg-userinfo-main {
        padding: 15px;
        background-color: white;
        p {
            padding: 15px 0;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
        }

        p:nth-child(1) {
            border-top: none;
            img {
                width: 4rem;
            }
        }
        .tlc-userinfo-aicon{
            margin-left: 15px;
            color: #a9a9a9;
        }
    }
</style>
<template>
    <div class="hhg-userinfo-main">
        <p><span>头像</span>
            <span>
                <img :src="user.avator" alt="头像">
            <a-icon class="tlc-userinfo-aicon" type="right"/>
            </span>
        </p>
        <p><span>用户名</span><span>{{user.name}}</span></p>
        <p><span>真实姓名</span><span>{{user.nickName}}</span></p>
        <p><span>手机号</span><span>{{user.mobile}}</span></p>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
        data() {
            return {
                user: {
                    id: 'tlc0000000001',
                    name: '周冬雨',
                    nickName: '白天不懂夜的黑',
                    mobile: '18810357780',
                    avator: require('../../../../static/images/HHG/蒙版组 1@2x.png')
                }
            }
        }
    }
</script>


