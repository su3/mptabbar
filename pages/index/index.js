//index.js

var mptabbar = require("../../common/mptabbar/mptabbar.js");

Page({
  data:{
    mptabbar_data:[
      {
        name: "选项一",
        selected: "selected"
      },
      {
        name: "选项二",
        selected: " "
      },
      {
        name: "选项三",
        selected: " "
      },
      {
        name: "选项四",
        selected: " "
      }

    ]
  },
  onLoad: function () {
    //动画初始化
    mptabbar.didTapMpTabbarItem.call(this);
  },
  willTapMpTabbarItem: function(e){
    mptabbar.didTapMpTabbarItem.call(this, e);
  }
})
