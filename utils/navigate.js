import { whiteList, field } from '../config/config'

/**
 * 不需要任何权限就可以访问的页面
 */
export const navigateTo = (url) => {
  wx.navigateTo({
    url,
  })
}

/**
 * 需要权限才能访问的页面
 */
export const navigateAuthTo = (url) => {
  const path = whiteList.includes(url)
  if (path) {
    wx.navigateTo({
      url,
    })
    return
  }

  const token = wx.getStorageSync(field.Login_Key)
  if (token) {
    wx.navigateTo({
      url,
    })
    return
  }

  wx.navigateTo({
    url: '../pages/login/login.wxml'
  })
}