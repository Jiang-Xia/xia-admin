/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 09:55:23
 * @LastEditTime: 2021-07-27 16:27:41
 * @Description: 
 * @FilePath: \xia-admin\src\main.js
 */
import { createApp } from 'vue'
import router from './router'
import store from './store'
import '@/styles/base.scss'
import './permission'
import '@/mock/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
// import '@/styles/element-variables.scss'
// import 'element-plus/packages/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')

import * as echarts from 'echarts';
/*
  常用方法挂载
*/
import { getToken } from '@/utils/cookie'
import axios from '@/utils/request'
import { getCode, getOpenType } from '@/utils/common'
const globalProperties = app.config.globalProperties
globalProperties.$getCode = getCode
globalProperties.$getOpenType = getOpenType
globalProperties.devtools = false
globalProperties.$getToken = getToken
globalProperties.$axios = axios
globalProperties.$echarts = echarts
export default app