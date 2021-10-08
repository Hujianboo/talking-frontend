<!--
 * @Author: Hujianbo
 * @Date: 2021-10-08 23:45:46
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-10-09 00:45:23
 * @FilePath: /talking-frontend/src/components/Login.vue
-->
<template>
  <div class="login-component">
    <div @click="login">登录</div>
  </div>
</template>
<script>
import {defineComponent} from '@vue/composition-api'
export default defineComponent({
  name: "Login",
  setup(){
    
  },
  methods: {
    login(){
      console.log('login');
    }
  }
});
</script>
<style scoped lang="scss">
.login-component{
  background: #1a73e8;
  color: #fff;
  width: 80px;
  height: 34px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    box-shadow: 0 1px 2px 0 rgba(66,133,244,30%), 0 1px 3px 1px rgba(66,133,244,15%);
    cursor: pointer;
  }
}
</style>