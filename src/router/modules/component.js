/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-08-11 17:14:08
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\component.js
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Component = {
  path: '/component',
  name: 'Component',
  component: layout,
  redirect: { path: '/component/custom' },
  icon: 'xia xia-tag',
  title: '组件',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'custom',
      component: () => import('@/views/component/custom/index.vue'),
      title: '自定义组件',
      meta: {
        activeMenu: '/component/custom'
      }
    },
    {
      path: 'element',
      component: () => import('@/views/component/element/index.vue'),
      title: 'element组件',
      meta: {
        activeMenu: '/component/element'
      }
    }
  ]
}
export default Component
