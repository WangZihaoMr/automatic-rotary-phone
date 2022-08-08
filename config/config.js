const APIConfig = {
  'api1': {
    baseURL: 'https://admin.hxwendeng.com',
  },
  'api2': {
    baseURL: 'http://weixin.itying.com'
  }
}

/**
 * 定义白名单
 */
const whiteList = ['pages/login/login', 'pages/401/401', 'pages/404/404', 'pages/settings/settings']

/**
 * token、userInfo
 */
const field = {
  Login_Key: 'token'
}

export { APIConfig, whiteList, field }