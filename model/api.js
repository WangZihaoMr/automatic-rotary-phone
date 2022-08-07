import Http from '../utils/http'

class TestModel extends Http {
  static getNav() {
    return Http.request({
      url: '/api/app/nav',
      method: 'GET',
      data: {}
    })
  }
  static getBanner() {
    return Http.request({
      url: '/api/app/banner',
      method: 'GET',
      data: {}
    })
  }
  static getRecommend() {
    return Http.request({
      url: '/api/app/recommend/appIndex',
      method: 'GET',
      data: {}
    })
  }
}

export default TestModel