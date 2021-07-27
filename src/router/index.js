/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 10:16:50
 * @LastEditTime: 2021-07-27 11:57:32
 * @Description: 
 * @FilePath: \xia-admin\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/router/modules/dashboard.js'
// 固定路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index-transfer.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  }
]
// 异步路由根据权限配置
export const asyncRoutes = [
  Dashboard,
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]
export function resetRouter() {
    // const newRouter = createRouter()
  // router.matcher = newRouter.matcher
}
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
