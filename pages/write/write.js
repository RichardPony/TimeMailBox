const app = getApp();
Page({
  data: {
    textArea: null,
    imgArr: null,
    recordPath: null
  },
  getInputValue: function(e){
    this.setData({
      textArea: e.detail.value
    })
  },
  getImg: function(e){
    let self = this;

    wx.chooseImage({
      count:9,
      sizeType:['album','carema'],
      success: function(res) {
        //tempFilePaths可作为img标签的src显示图片
        // if (self.data.imgArr==null)
          self.setData({
            imgArr:res.tempFilePaths
          })
        // else
        // {
          //可以多次选择图片
        // }
      },
    })
  },
  getRecord: function(e){
    var that = this
    wx.showModal({
      title: '录制声音',
      content: '将录制一段10s长的音频，需要获取您的录音权限',
      success: function(res){
        if(res.cancel)
          return;
        else
          that.recordDo();

      }
    })
  },
  recordDo: function(){
    let self = this;
    wx.startRecord({
      success: function (res) {
        self.setData({
          recordPath: res.tempFilePath
        })
      }
    })
    setTimeout(function () {
      wx.showModal({
        title: '录制成功',
        content: '音频已成功录制，将会与信件一同发送',
      })
      wx.stopRecord()
    }, 10000)
  },
  post:function(){
    wx.setStorageSync('textArea', this.data.textArea),
    wx.setStorageSync('imgArr', this.data.imgArr),
    wx.setStorageSync('record', this.data.recordPath),
    wx.request({
      url: app.globalData.baseUrl + 'post',
      
      method: "POST",
      data:{
        textArea: this.data.textArea,
        imgArr: this.data.imgArr,
        record: this.data.recordPath
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
    wx.navigateTo({
      url: '/pages/PostDetail/detail',
    })
  }
})