<!--
 * @Author: Hujianbo
 * @Date: 2021-10-08 23:45:46
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-10-12 01:03:58
 * @FilePath: /talking-frontend/src/components/Login.vue
-->
<template>
  <div class="login-component" ref="loginRef">
    <div @click="login" class="login-text">登录</div>
    <div class="login-dialog" v-if="dialogBtn">
      <div class="login-block"></div>
    </div>
  </div>
</template>
<script>
import {defineComponent,onMounted,ref,watch} from '@vue/composition-api'
import {Portal} from '@linusborg/vue-simple-portal'
import useClickOutSide from '@/hooks/useClickOutSide'
export default defineComponent({
  name: "Login",
  components: {
    Portal
  },
  setup(){
    const loginRef = ref(null)
    const dialogBtn = ref(false)
    const isClickOutSide = useClickOutSide(loginRef)
    const login = () => {
      dialogBtn.value = true
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
      login
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
  }
}

</style>