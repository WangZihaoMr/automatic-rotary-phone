class Storage {
  // 存储数据
  static set(key, value) {
    wx.setStorageSync(key, value)
  }
  // 获取数据
  static get(key) {
    wx.getStorageSync(key)
  }
  // 删除单条本地数据
  static remove(key) {
    wx.removeStorageSync(key)
  }
  // 删除所有本地数据
  static removeAll() {
    wx.clearStorageSync()
  }
}

export default Storage