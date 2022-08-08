import Http from '../utils/http'

class ShopModel extends Http {
  // 轮播图接口
  static getShopBanner() {
    return Http.request({
      url: '/api/app/banner'
    },
      {
        header: {
          devicetype: 'H5'
        }
      })
  }
  // code码，获取商品信息
  static getShopingInfo(qcode) {
    return Http.request({
      url: '/api/getProduct',
      data: {
        qcode
      },
      name: 'api2'
    })
  }
}

export default ShopModel