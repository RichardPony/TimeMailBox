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
  checkboxChange: function (e) {
    console.log("选择值：" + e.detail.value)
  },
  back_to_write: function(e){
    console.log("back-to-write")
    wx.navigateBack({
    })
  },
  post: function(e){
    console.log("POST!!!")
  }

})
