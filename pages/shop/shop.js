// pages/shop/shop.js
import ShopModel from '../../model/shop'
import { navigateTo } from '../../utils/navigate'
import { addCart } from '../../common/cart'
Page({
  // 获取商品Code，拿到商品数据
  async handleGetShopCode(e) {
    const qcode = e.detail;
    // 如果一维码不存在则终止调用商品信息接口，否则调用商品信息接口
    if (!qcode) return;
    console.log('qcode', qcode);
    try {
      // 获取商品信息
      const res = await ShopModel.getShopingInfo(qcode)
      console.log(res);
      // 如果商品信息获取失败，则终止执行
      if (!res.success) return
      // 获取商品信息
      const result = res.result
      // 商品信息数组长度小于0，则终止执行
      if (result.length <= 0) return
      // 商品添加到本地：addCart之所以定义成一个方法，是因为别的页面需要使用
      console.log(result[0]);
      addCart(result[0])
      console.log(result);
      navigateTo('/pages/cart/cart')
      /**
       * 不需要任何权限就可以访问的页面
       * 
       * 需要权限才能访问的页面
       */
      /**
       * 如何把商品的数据在购物车进行显示
       * 1.通过路由传参，传递到购物车页面
       * 2.存储到本地
       * 3.给后台存储一份
       */
    } catch (error) {
      console.log(error);
    }
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