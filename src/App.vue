<!--
 * @Author: hujianbo
 * @LastEditors: Hujianbo
-->
<!--App.vue-->
<template>
  <div id="app">
    <Navigator/>
  </div>
</template>

<script>
import {ref, reactive, defineComponent, onMounted} from '@vue/composition-api'
import Navigator from './components/Navigator.vue'
export default defineComponent({
  name: "App",
  components:{Navigator},
  setup(){
    
  }
});
</script>
<style lang="scss" scoped>
#app{
  height: 100%;
}
</style>
