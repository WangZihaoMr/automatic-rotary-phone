// // 导入公共地址
import { APIConfig } from '../config/config'
import wxToPromise from '../utils/wx'
import exceptionMessage from '../config/exceptionMessage'

// const exceptionMessage = {
//   201: '功能未开发'
// }

class Http {
  // static test() {
  //   console.log('永不放弃');
  // }

  static async request({ url, method = 'GET', data = {} }, options) {
    console.log({ ...options });
    const response = await wxToPromise('request', {
      url: APIConfig.baseURL + url,
      method,
      data,
      ...options
    })

    if (response.statusCode < 400) {
      return response.data
    }

    if (response.statusCode === 401) {
      // token过期、登录超时
      return
    }

    console.log(response);
    Http._showError(response.data.code, response.data.msg)
    return response
  }

  static _showError(code, msg) {
    let title;
    title = exceptionMessage[code] || msg || '发生未知错误'
    wx.showToast({
      title,
      icon: 'none',
      duration: 3000
    })
  }
}

// const http = new Http()
// http.test()
// Http.test()

export default Http