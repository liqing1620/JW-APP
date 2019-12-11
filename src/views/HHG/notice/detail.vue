<style lang="scss" scoped>
  .hhg-detail-main{
      background-color: white;
      padding:30px 20px;
      text-align: center;
      p:nth-child(1){
          color: #333333;
          font-size: 1rem;
          font-weight: bold;
      }
      p:nth-child(2){
          color: #9E9E9E;
          font-size: 0.5rem;
      }
      hr{
          border: none;
          height: 1px;
          background-color: #CECECE;
      }
  }
</style>
<template>
    <div class="hhg-detail-main">
        <p>{{message.title}}</p>
        <p>{{message.createTime}}</p>
        <hr>
        <div v-html="message.detail" class=""></div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
             message:{
                 title:'关于系统更新的通知',
                 createTime:'2019-12-09 10:25:00',
                 detail:"<p>系统将于2019年11月15日升级，给您带来不便非常抱歉，以下为升级原因： 一般手机系统更新一般分为两种，一种是手机本身系统升级，另一种是手机上的应用软件系统升级。一般手机系统升级是修复漏洞，如果手机已经用了很长时间，还是不要去更新了，因为新系统都是以最流行的机型和配置为主研发的，老款手机的配置怕和新升级的系统不匹配，从而影响手机的运行速度，使得手机变得非常慢，有些卡顿，从而影响使用效果，你会受不了的！还有就是手机没有任何问题也不要盲目更新，因为它本身的缺点会被覆盖的。</p>"
             }
            }
        }
    }
</script>


