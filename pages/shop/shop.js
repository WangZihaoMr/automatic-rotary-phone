// pages/shop/shop.js
import ShopModel from '../../model/shop'
Page({
  // 获取商品Code，拿到商品数据
  handleGetShopCode(e) {
    console.log(e);
    const qrcode = e.detail;
    // 如果一维码不存在则终止调用商品信息接口，否则调用商品信息接口
    if (!qrcode) return
  },
  // 获取轮播数据
  async getBannerData() {
    const res = await ShopModel.getShopBanner()
    this.setData({
      bannerList: res.data
    })
    console.log(res.data);
  },
  /**
   * 页面的初始数据
   */
  data: {
    bannerList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})