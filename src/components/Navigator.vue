<!--
 * @Author: Hujianbo
 * @Date: 2021-10-09 00:02:30
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-10-09 00:26:02
 * @FilePath: /talking-frontend/src/components/Navigator.vue
-->
<template>
  <div class="navigator">
    <Login/>
  </div>
</template>
<script>
import Login from './Login.vue'
import {defineComponent} from '@vue/composition-api'
export default defineComponent ({
  name: 'Navigator',
  components: {Login},
  setup(){
    console.log('navigator');
  }
})
</script>
<style scoped lang="scss">
.navigator{
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  padding:  20px;
  // background: blue;
}
</style>