// index.js
// 导入封装api
import TestModel from '../../model/api'

Page({
  // 获取nav数据
  getNavData() {
    TestModel.getNav().then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  },
  // 获取banner数据
  getBannerData() {
    TestModel.getBanner().then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options, http.request);
    this.getNavData()
    this.getBannerData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
