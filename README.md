##说明

微信小程序提供了[底部 tabbar 的配置方案](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html)。但是如果想把 tabbar 放在其他位置，需要自己实现。

尝试把这个需求封装成一个组件。

![](http://7vzort.com1.z0.glb.clouddn.com/mptabbar.gif)

##应用

假设把 mptabbar 放在 common 目录下：

###1）在 .wxss 文件中引入样式
 
		@import "../../common/mptabbar/mptabbar.wxss";


###2）在 .js 文件中引入 js 并实现点击事件
		var mptabbar = require("../../common/mptabbar/mptabbar.js");

点击事件：

		
		willTapMpTabbarItem: function(e){
		    mptabbar.didTapMpTabbarItem.call(this, e);
		}
  		
###3）在 .wxml 文件中载入模版
 
 		<import src="../../common/mptabbar/mptabbar.wxml" />
 		
 		
在合适的位置调用并绑定数据：

		<template is="mptabbar" data="{{mptabbar_data: mptabbar_data, mptabbar_animation: mptabbar_animation}}"></template>

###4）在 .js 的 data 中配置 tabbar 数据源

完整的 .js

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