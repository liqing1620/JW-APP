<style lang="scss" scoped>
    .hhg-download-main{
        .hhg-download-body{
            width: 84%;
            margin: 15% 8%;
            background-color: white;
            padding: 15px;
            text-align: center;
            position: absolute;
            box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);

            p{
                text-align: center;
                margin: 50px auto;
                font-size: 1rem;
            }
            img{
                width: 50%;
            }
            .hhg-form-btn{
                color: white;
                border: none;
                width: 80%;
                height: 3rem;
                margin: 50px 10% 60px 10%;
                border-radius: 30px;
                background: linear-gradient(to right, rgb(40, 205, 156),rgb(40, 205, 156));
            }
        }
    }

</style>

<template>
    <div class="hhg-download-main">
        <div class="hhg-download-body">
            <p>欢迎下载人卫智网学习客户端</p>
            <img src="../../../../static/images/HHG/timg@2x.png" alt="">
            <a-button class="hhg-form-btn" @click="download">点击下载</a-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{

            }
        },
        methods:{
            download(){
                this.$router.push('/user')
            }
        }
    }
</script>

