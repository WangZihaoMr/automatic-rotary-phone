// pages/cart/cart.js
import Storage from '../../utils/storage'
import ShopModel from '../../model/shop'
import { addCart } from '../../common/cart'
import { navigateTo } from '../../utils/navigate'

Page({
  // 获取本地商品数据
  getCartList() {
    const cartList = Storage.get('cart') || []
    if (cartList.length < 0) return
    this.setData({
      cartList
    })
  },
  // 商品数量增加
  handleNumAdd(e) {
    this.handleNumOptimize(e, 'addNum')
    this.handleTotalPrice()
  },
  // 商品数量减少
  handleNumReduce(e) {
    this.handleNumOptimize(e, 'reduceNum')
    this.handleTotalPrice()
  },
  // 商品数量增加/减少优化
  handleNumOptimize(e, action) {
    let _index = e.currentTarget.dataset.index
    action === 'addNum' ? this.data.cartList[_index].num += 1 : this.data.cartList[_index].num -= 1
    this.handleNumLess(_index)
    this.setData({
      cartList: this.data.cartList
    })
    Storage.set('cart', this.data.cartList)
  },
  // 当商品数量小于1时处理方法
  handleNumLess(_index) {
    if (this.data.cartList[_index].num === 0) {
      this.data.cartList[_index].num = 1
      wx.showModal({
        title: '温馨提示',
        content: '您确定要删除该商品吗？',
        success: (res) => {
          console.log(res);
        },
        fail: (err => {
          console.log(err);
        })
      })
    }
  },
  // 总计
  handleTotalPrice() {
    let totalPrice = 0;
    this.data.cartList.forEach(item => {
      totalPrice += (item.num * (item.price * 100)) / 100
    })
    totalPrice = totalPrice.toFixed(2)
    this.setData({
      totalPrice
    })
  },
  // 继续添加
  handleContinueAddShop() {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res => {
        const event = {
          detail: res.result
        }
        this.handleGetShopCode(event)
      }),
      fail: (err => {
        console.log(err);
      })
    })
  },
  // 获取商品Code，拿到商品数据
  async handleGetShopCode(e) {
    const qcode = e.detail;
    // 如果一维码不存在则终止调用商品信息接口，否则调用商品信息接口
    if (!qcode) return;
    try {
      // 获取商品信息
      const res = await ShopModel.getShopingInfo(qcode)
      // 如果商品信息获取失败，则终止执行
      if (!res.success) return
      // 获取商品信息
      const result = res.result
      // 商品信息数组长度小于0，则终止执行
      if (result.length <= 0) return
      // 商品添加到本地：addCart之所以定义成一个方法，是因为别的页面需要使用
      addCart(result[0])
      const cartList = Storage.get('cart') || []
      this.setData({
        cartList
      })
      this.handleTotalPrice()
    } catch (error) {
      console.log(error);
    }
  },
  // 扫一扫码
  handleScanCode() {
    this.handleContinueAddShop()
  },
  // 去结算(订单页)
  handleGoOrder() {
    navigateTo('/pages/order/order')
  },
  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    totalPrice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCartList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.handleTotalPrice()
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