// pages/cart/cart.js
import Storage from '../../utils/storage'
import ShopModel from '../../model/shop'
import { addCart } from '../../common/cart'

Page({
  // 获取本地商品数据
  getCartList() {
    const cartList = Storage.get('cart') || []
    console.log(cartList);
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
    this.setData({
      cartList: this.data.cartList
    })
    Storage.set('cart', this.data.cartList)
  },
  // 总计
  handleTotalPrice() {
    let totalPrice = 0;
    this.data.cartList.forEach(item => {
      // const total = (item.num * item.price).toFixed(2)
      // totalPrice += Number.parseFloat(total)
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
        this.handleNumAdd()
        const cartList = Storage.get('cart') || []
        console.log('123', cartList);
        this.setData({
          cartList
        })
        console.log('456', this.data.cartList);
        console.log(res);
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

    } catch (error) {
      console.log(error);
    }
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