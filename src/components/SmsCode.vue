<style scoped>
    .normal {
        background-color: #F5F5F5;
        border: 1px solid #d9d9d9;
    }
    .tlc-c1{
        border: none;
        color: orange;
        box-shadow: none;
    }
</style>
<template>
    <a-button v-if="type==='normal'" class="normal" @click="getSmsCode" :disabled="disabled">{{btnName}}</a-button>
    <a-button v-else-if="type==='c1'" class="tlc-c1" @click="getSmsCode" :disabled="disabled">{{btnName}}</a-button>
</template>

<script>
    export default {
        name: "SmsButton",
        props: {
            name: {
                type: String
            },
            phone: {
                type: String
            },
            type: {
                type: String,
                default:'normal'
            }
        },
        data() {
            return {
                btnName: "获取验证码",
                disabled: false
            }
        },
        created() {
            if (this.name) {
                this.btnName = this.name
            }
        },
        methods: {
            //获取验证码
            getSmsCode() {
                if (this.phone === "" || !this.phone) {
                    this.$message.error('手机号码不存在！', 2);
                    return
                }
                this.disabled = true;
                let time = 60
                this.$emit('sms-click', this.phone);
                this.valtime = setInterval(() => {
                    if (time > 1) {
                        time--;
                        this.btnName = `剩余${time}s`
                    } else {
                        clearInterval(this.valtime);
                        this.btnName = this.name;
                        this.disabled = false;
                    }
                }, 1000)
            }
        }
    }
</script>
