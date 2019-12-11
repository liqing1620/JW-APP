<style lang="scss" scoped>
    .hhg-usercode-main {
        .hhg-usercode-info {
            width: 84%;
            margin: 15% 8%;
            background-color: white;
            padding: 20px;
            text-align: center;
            position: absolute;
            box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
            div{
                display: flex;
                align-items: flex-end;
                img{
                    width: 4rem;
                }
                div{
                    display: block;
                    p{
                        margin:10px 0 0 15px;
                        text-align: left;
                    }
                    p:nth-child(1){
                        font-size: 1rem;
                        font-weight: bold;
                    }
                }
            }
            .hhg-usercode-code{
                margin: 7.5%;
                width: 85%;
            }
        }
    }

</style>
<template>
    <div class="hhg-usercode-main">
        <div class="hhg-usercode-info">
            <div>
                <img :src="user.avator" alt="头像">
                <div>
                    <p>{{user.nickName}}</p>
                    <p>{{user.mobile}}</p>
                </div>
            </div>
            <img class="hhg-usercode-code" :src="user.code" alt="二维码">
        </div>
    </div>
</template>

<script>
    export default {
        name: "userCode",
        data() {
            return {
                user: {
                    id: 'tlc0000000001',
                    name: '周冬雨',
                    nickName: '白天不懂夜的黑',
                    mobile: '18810357780',
                    avator: require('../../../../static/images/HHG/蒙版组 1@2x.png'),
                    code: require('../../../../static/images/HHG/图像 3@2x.png'),
                }
            }
        }
    }
</script>


