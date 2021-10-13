<!--
 * @Author: Hujianbo
 * @Date: 2021-10-08 23:45:46
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-10-14 00:51:44
 * @FilePath: /talking-frontend/src/components/Login.vue
-->
<template>
  <div class="login-component" ref="loginRef">
    <div @click="login" class="login-text">登录</div>
    <div class="login-dialog" v-if="dialogBtn">
      <div class="login-block">
        <div class="account">
          <span>账号</span>
          <input type="text" class="input" v-model="name">
        </div>
        <div class="password">
          <span>密码</span>
          <input type="text" class="input" v-model="password">
        </div>
      </div>
      <div class="login-btn" @click="loginMethod">登录</div>
    </div>
  </div>
</template>
<script>
import {defineComponent,reactive,ref,watch,toRefs} from '@vue/composition-api'
import useClickOutSide from '@/hooks/useClickOutSide'
import request from '../api/request'
export default defineComponent({
  name: "Login",
  components: {
  },
  setup(){
    const account = reactive({
      name: '',
      password: ''
    })
    const loginRef = ref(null)
    const dialogBtn = ref(false)
    const isClickOutSide = useClickOutSide(loginRef)
    const login = () => {
      dialogBtn.value = true
    }
    const loginMethod = () => {
      console.log(2323);
      request({
        url: 'https://api.talking.com/users',
      })
    }
    watch(isClickOutSide,() => {
      if(dialogBtn.value && isClickOutSide.value){
        dialogBtn.value = false
      }
    })
    return {
      dialogBtn,
      loginRef,
      isClickOutSide,
      login,
      loginMethod,
      ...toRefs(account)
    }
  }
});
</script>
<style scoped lang="scss">
.login-component{
  position: relative;
  .login-text{
    background: #1a73e8;
    color: #fff;
    width: 80px;
    height: 34px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      cursor: pointer;
      box-shadow: 0 1px 2px 0 rgba(66,133,244,30%), 0 1px 3px 1px rgba(66,133,244,15%);
    }
  }
  
  .login-dialog{
    position: absolute;
    border-radius: 8px;
    top: 45px;
    right: 0px;
    width: 356px;
    height: 356px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    .login-block{
      position: absolute;
      top: 20px;
      left: 20px;
      .input{
        border-radius: 4px;
        border: 1px solid;
        color: #202124;
        font-size: 17px;
        height: 28px;
        margin: 1px 1px 0 1px;
        padding: 13px 15px;
      }
    }
    .login-btn{
      position: absolute;
      left: 20px;
      bottom: 10px;
      user-select: none;
      color: #000000;
      padding: 5px 10px;
      border-radius: 8px;
      border: 1px solid;
      &:hover{
        color: #fff;
        cursor: pointer;
        background: #1a73e8;
      }
    }
  }
}

</style>