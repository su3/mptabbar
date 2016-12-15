function didTapMpTabbarItem (e){

    var _this = this;
    var toIndex = 0;
    if (e){
        toIndex = e.target.dataset.idx;
    }

    var mptabbar_data = _this.data.mptabbar_data;

    //切换高亮样式
    for (var i = 0; i < mptabbar_data.length; i++){
      var item = mptabbar_data[i];
      if (i == toIndex){
        item.selected = "selected";
      }else{
        item.selected = " ";
      }
    }

    //移动下划线
    var mptabbar_animation;
    var num = 100 / mptabbar_data.length * toIndex;
    var per = num + "%";

    var mptabbar_animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease-in-out",
      delay: 0
    })
    mptabbar_animation.left(per).step();

    _this.setData({
      mptabbar_data: mptabbar_data,
      mptabbar_animation: mptabbar_animation.export()
    })
}

module.exports = {
    didTapMpTabbarItem: didTapMpTabbarItem
}