import Http from '../utils/http'

class TestModel extends Http {
  static getNav() {
    return Http.request({
      url: '/api/app/nav',
      method: 'GET',
      data: {},
      name: 'api1'
    })
  }
  static getBanner() {
    return Http.request({
      url: '/api/focus',
      method: 'GET',
      data: {},
      name: 'api2'
    })
  }
}

export default TestModel