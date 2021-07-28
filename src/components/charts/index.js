/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 22:02:56
 * @LastEditTime: 2021-07-28 22:21:34
 * @Description:
 * @FilePath: \xia-admin\src\components\charts\index.js
 */

// const req = require.context('./common', false, /\.vue$/)
// const requireAll = (requireContext) => requireContext.keys().map(requireContext)
// const list = requireAll(req)
console.log(import.meta)
const list = []
export const componentfn = app => {
  list.forEach(v => {
    app.component(v.default.name, v.default)
  })
}
