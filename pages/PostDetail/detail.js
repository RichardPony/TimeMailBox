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
      { 'id': '6', 'name': '自定义' },
    ],
    btnId:'1'
  },

  onLoad: function (options) {
    
  },
  timeClick: function(e){
    var btnId = e.currentTarge.dataset.id;
    this.setData({
      btnId: btnId
    })
  },
  addr_input: function(e){
    this.setData({
      rec_addr: e.detail.value
    })
    // console.log(this.data.rec_addr)
  }


})