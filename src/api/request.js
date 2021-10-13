/*
 * @Author: Hujianbo
 * @Date: 2021-10-14 00:01:08
 * @LastEditors: Hujianbo
 * @LastEditTime: 2021-10-14 00:49:08
 * @FilePath: /talking-frontend/src/api/request.js
 */
import axios from 'axios'

const request = axios.create({
  timeout: 1000,
})

export default request