const app = getApp();
Page({
  data: {
    rec_addr: null,
    time: null,
    chooseTime:[
      { 'id': '1', 'name': '两个月' },
      { 'id': '2', 'name': '三个月' },
      { 'id': '3', 'name': '半&nbsp;&nbsp;&nbsp;年' },
      { 'id': '4', 'name': '一&nbsp;&nbsp;&nbsp;年' },
      { 'id': '5', 'name': '两&nbsp;&nbsp;&nbsp;年' },
      // { 'id': '6', 'name': '自定义' },
    ],
    userDefdate: null,
    btnId: null,
    isuserDef: false,
    public: true,
    permit: true,
    notice: "&nbsp;&nbsp;您承诺信件内容符合本程序内容规范及法律法规，不发送垃圾邮件和骚扰信件，并承担发送信件行为的全部责任。"
  },
  
  onReady() {
  },

  bindDateChange: function(e){
    console.log("时间：" + e.detail.value);
    this.setData({
      btnId: '0',
      userDefdate: e.detail.value,
      isuserDef: true
    })
  },

  timeClick: function(e){
    var btnId = e.currentTarget.dataset.id;
    this.setData({
      btnId: btnId,
      isuserDef: false,
      userDefdate: null
    })
    console.log("按钮：" + this.data.btnId);
  },
  addr_input: function(e){
    this.setData({
      rec_addr: e.detail.value
    })
  },
  changePublic: function (e) {
    this.data.public = true;
    if(e.detail.value == '')
      this.data.public = false;
    console.log("Public选择值：" + this.data.public)
  },
  changePermit: function (e) {
    this.data.permit = true;
    if (e.detail.value == '')
      this.data.permit = false;
    console.log("Permit选择值：" + this.data.permit)
  },
  back_to_write: function(e){
    console.log("back-to-write")
    wx.navigateBack({
    })
  },
  //发送邮件！
  post: function(e){
    if(this.data.permit == false)
    {
      wx.showModal({
        title: '使用须知',
        content: '请先同意使用须知再发送邮件',
      })
      return;
    }
    console.log("isMail " + this.isMail(this.data.rec_addr))
    if(!this.isMail(this.data.rec_addr))
      return;
    var rec_date = this.data.userDefdate;
    var choose = this.data.btnId
    if(choose != '0')
    {
      var date = new Date();
      if(choose == '1')
        date.setMonth(date.getMonth() + 2);
      else if(choose == '2')
        date.setMonth(date.getMonth() + 3);
      else if(choose == '3')
        date.setMonth(date.getMonth() + 6);
      else if(choose == '4')
        date.setFullYear(date.getFullYear() + 1);
      else
        date.setFullYear(date.getFullYear() + 2);
      rec_date = date.toLocaleDateString();
      console.log(rec_date)
    }
    //get write content
    this.setData({
      textArea: wx.getStorageSync('textArea'),
      imgArr: wx.getStorageSync('imgArr'),
      record: wx.getStorageSync('record')
    })
    wx.setStorageSync('mail_addr', this.data.rec_addr);
    wx.setStorageSync('time', rec_date)
    console.log("POST!!!")
    // console.log(this.data.textArea)

    //Post datas to background
    wx.request({
      url: app.globalData.baseUrl + 'post',
      method: "POST",
      data: {
        textArea: this.data.textArea,
        mail_addr: this.data.rec_addr,
        time: rec_date
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
  },
  isMail: function(e)
  {
    if(e == null)
      return false;
    return true;
  }
})
