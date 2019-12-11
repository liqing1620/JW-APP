<style lang="scss" scoped>
    .hhg-login-main {
        .hhg-login-bg{
            height: 18rem;
            background: url('../../../../static/images/HHG/bg@3x.png') no-repeat;
            background-size: 100% 100%;
            text-align: center;
            img{
                width: 10rem;
                margin-top: 4rem;
            }
        }
        .hhg-login-form {
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 90%;
            top: 10rem;
            background-color: white;
            padding: 15px 25px;
            box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
            border-radius: 10px;

        }

        .hhg-form-title {
            p {
                text-align: center;
                color: rgb(40, 205, 156);
                font-size: 1rem;
                width: fit-content;
                margin: 5px auto;
            }

            hr {
                background: rgb(40, 205, 156);
                height: 0.2rem;
                outline: none;
                border: none;
                border-radius: 3px;
                width: 7rem;
            }
        }

        .hhg-form-item /deep/ .ant-form-item-children {
            display: flex;
            padding-bottom: 20px;
            border-bottom: 1px solid #eaeaea;
            .hhg-form-icon{
                font-size: 1.5rem;
                color: rgb(40, 205, 156);
            }
            input, .ant-input {
                border: unset;
                outline: none;
                box-shadow: unset;
                padding-left: 3rem;
            }

            input:focus, .ant-input:focus {
                border: unset;
                outline: none;
                box-shadow: unset;
            }
        }
        .hhg-form-btn{
            color: white;
            border: none;
            width: 80%;
            height: 3rem;
            margin: 10px 10% 60px 10%;
            border-radius: 30px;
            background: linear-gradient(to right, rgb(40, 205, 156),rgb(40, 205, 156));
        }
    }
</style>
<template>
    <div class="hhg-login-main">
        <div class="hhg-login-bg">
            <img src="@images/HHG/logo.jpg@3x.png" alt="">
        </div>
        <div class="hhg-login-form">
            <a-form :form="form" @submit="handleSubmit">
                <a-form-item class="hhg-form-title">
                    <p>手机快捷登录</p>
                    <hr>
                </a-form-item>
                <a-form-item class="hhg-form-item">
                    <a-input
                            v-decorator=rules.mobile
                            placeholder="请输入手机号">
                        <a-icon class="hhg-form-icon" slot="prefix" type="mobile"/>
                    </a-input>
                </a-form-item>
                <a-form-item class="hhg-form-item">
                    <a-input
                            v-decorator=rules.code
                            placeholder="请输入验证码">
                        <a-icon class="hhg-form-icon" slot="prefix" type="safety"/>
                    </a-input>
                    <sms-code :type="type"
                              :phone="form.getFieldValue('mobile')"
                              style="margin-left: 15px"
                              @sms-click="smsClick"></sms-code>
                </a-form-item>
            </a-form>
            <a-button class="hhg-form-btn" @click="handleSubmit">登录</a-button>
        </div>
    </div>
</template>

<script>
    import {rules} from './rules'
    export default {
        name: "index",
        data() {
            return {
                type: 'c1',
                form:this.$form.createForm(this),
                rules,
            }
        },
        methods:{
            smsClick(phone){
                console.log('Received: ', phone);
            },
            handleSubmit(e){
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            }
        }
    }
</script>


