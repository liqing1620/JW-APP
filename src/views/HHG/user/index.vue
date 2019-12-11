<style lang="scss" scoped>
    .hhg-user-main {
        .hhg-user-header {
            padding: 40px 15px 30px 15px;
            background-color: white;
            display: flex;
            align-items: flex-end;

            img {
                width: 5rem;
            }
            .hhg-user-header-n{
                margin-left: 20px;
                flex: 1;
                p{
                    font-size: 1rem;
                    font-weight: bold;
                }
            }
        }

        .hhg-user-nav {
            background-color: white;
            margin-top: 10px;
            padding: 15px;
            .hhg-user-nav-item{
                padding-bottom: 15px;
                margin-bottom: 15px;
                border-bottom: 1px solid #eaeaea;
            }
        }
    }

</style>
<template>
    <div class="hhg-user-main">
        <div class="hhg-user-header">
            <img :src="user.avator" alt="">
            <div class="hhg-user-header-n">
                <p>{{user.name}}</p>
                <icon-nav name="18810357780" arrow="right" @go-next="goNext('mobile',user.id)"></icon-nav>
            </div>
        </div>
        <div class="hhg-user-nav">
            <icon-nav class="hhg-user-nav-item" icon="icon-erweima" name="我的二维码" arrow="right" @go-next="goNext('code',user.id)"></icon-nav>
            <icon-nav class="hhg-user-nav-item" icon="icon-purchaseorder" name="关于" arrow="right" @go-next="goNext('about',user.id)"></icon-nav>
            <icon-nav icon="icon-kefu1" name="客服电话:">
                <a style="color:rgb(18, 150, 219)" href="tel:400-0000-688">400-0000-688</a>
            </icon-nav>
        </div>
        <div class="hhg-user-nav">
            <icon-nav icon="icon-tuichu" name="退出" @go-next="goNext('exit',user.id)"></icon-nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                user: {
                    id:'tlc0000000001',
                    name: '白天不懂夜的黑',
                    mobile: '18810357780',
                    avator: require('../../../../static/images/HHG/蒙版组 1@2x.png')
                }
            }
        },
        methods:{
            goNext(t,d){
              switch (t) {
                  case 'mobile':
                      this.$router.push(`/userInfo/${d}`)
                      break
                  case 'code':
                      this.$router.push(`/userCode/${d}`)
                      break;
                  case 'about':
                      this.$router.push('app')
                      break;
                  case 'exit':
                      break;
              }
            }
        }
    }
</script>


