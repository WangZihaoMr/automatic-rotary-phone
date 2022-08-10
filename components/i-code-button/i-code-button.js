// components/i-code/i-code.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusText: '请扫描商品条形码',
    statusNum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleQrCode() {
      if (this.data.status) {
        this.triggerEvent('ShopCode')
        return
      }
      wx.scanCode({
        onlyFromCamera: true,
        success: (res => {
          this.triggerEvent('ShopCode', res.result)
        }),
        fail: (err => {
          console.log(err);
        })
      })
    }
  }
})
