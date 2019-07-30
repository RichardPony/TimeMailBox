const app = getApp();
Page({
  data: {
    rec_addr:null,
    time:null,
    chooseTime:[
      { 'id': '1', 'name': '两个月' },
      { 'id': '2', 'name': '三个月' },
      { 'id': '3', 'name': '半 年' },
      { 'id': '4', 'name': '一 年' },
      { 'id': '5', 'name': '两 年' },
      // { 'id': '6', 'name': '自定义' },
    ],
    userDefdate: null,
    btnId: null,
    isuserDef: false
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
      isuserDef: false
    })
    console.log("按钮：" + this.data.btnId);
  },
  addr_input: function(e){
    this.setData({
      rec_addr: e.detail.value
    })
    // console.log(this.data.rec_addr)
  }


})