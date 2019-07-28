Page({

  data: {
    textArea: null,
    imgArr: null,
    recordPath: null
  },

  getImg: function(e){
    let self = this;
    wx.chooseImage({
      count:9,
      sizeType:['album','carema'],
      success: function(res) {
        //tempFilePaths可作为img标签的src显示图片
        self.setData({
          imgArr:res.tempFilePaths
        })
      },
    })
  },
  getRecord: function(e){
    let self = this;
    wx.startRecord({
      success: function (res){
        self.setData({
          recordPath:res.tempFilePath
        })
      }
    })
    setTimeout(function(){
      wx.stopRecord()
    },10000)
  }

})