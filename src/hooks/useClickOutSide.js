/*
 * @Author: Hujianbo
 * @Date: 2021-10-11 23:54:29
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-10-12 01:03:10
 * @FilePath: /talking-frontend/src/hooks/useClickOutside.js
 */
import {ref,onMounted,onUnmounted} from '@vue/composition-api'

const useClickOutSide = (elementRef) => {
  const isClickOutSide = ref(false)
  const handler = (e) => {
    if(elementRef){
      if(elementRef.value.contains(e.target)){
        isClickOutSide.value = false
      } else {
        isClickOutSide.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler);
  })
  onUnmounted(() => {
    document.removeEventListener('click',handler)
  })
  return isClickOutSide
}
export default useClickOutSide