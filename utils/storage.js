import field from '../utils/storage'

class Storage {
  // 存储数据
  static set(key, value) {
    wx.setStorageSync(key, value)
  }
  // 获取数据
  static get(key) {
    return wx.getStorageSync(key) || ''
  }
  // 删除单条本地数据
  static remove(key) {
    wx.removeStorageSync(key)
  }
  // 删除所有本地数据
  static removeAll() {
    wx.clearStorageSync()
  }
  // token字段处理
  setToken(token) {
    wx.setStorageSync(field.Login_Key, token)
  }
  // userInfo字段处理

}

export default Storage