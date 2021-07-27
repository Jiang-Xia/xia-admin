/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-03-24 09:43:12
 * @LastEditTime: 2021-07-27 14:50:54
 * @Description:
 * @FilePath: \xia-admin\src\api\config.js
 */

const getConfig = () => {
  const BASECONFIG = {
    smaiuac_service_base_url: 'https://127.0.0.0'
  }
  const config = {}
  for (const k in BASECONFIG) {
    config[k] = ''
  }
  return config
}
export default getConfig()
