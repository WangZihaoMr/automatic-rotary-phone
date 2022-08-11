// pages/order/order.js
import Storage from '../../utils/storage'
import { navigateTo } from '../../utils/navigate'
Page({
  // 获取本地数据
  getStorageCartData() {
    const cartList = Storage.get('cart')
    this.setData({
      cartList
    })
  },
  // 总价
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
  // 状态的改变
  handleSwitchChange(e) {
    const bablanceStatus = e.detail.value;
    this.data.totalPrice = bablanceStatus ? this.data.totalPrice - this.data.bablancePrice : this.data.totalPrice + this.data.bablancePrice
    this.setData({
      bablanceStatus,
      totalPrice: this.data.totalPrice
    })
  },
  // 展开与收起 
  handleShow() {

  },
  // 确认支付
  handleConfirmPay() {
    navigateTo("/pages/success/success")
  },
  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    bablanceStatus: false,
    bablancePrice: 4,
    totalPrice: 0,
    showChangeStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getStorageCartData()
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