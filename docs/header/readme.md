# 头部mixin

---

## 1.说明
LegoUI for Mobile 是一套轻量级为移动端而生的前端UI库。把移动端实际项目中较为通用常用的UI组件独立成库，Sass mixin的方式让使用者最大程度上灵活地描绘出自身理想的层叠样式。

## 2.使用步骤
1. 在需要使用UI库的sass文件中，导入本库sass文件。如：`@import "lego";`
2. 在需要使用组件的样式中，导入组件mixin。如：
```scss
	.ui-header{
		@include ui-header();
	}
```
3.	html中使用，如：
```html
	<header class="ui-lego ui-header">
        <div class="ui-header__left"></div>
        头部样式
        <div class="ui-header__right"></div>
    </header>
```

## 3.参数说明
* 宽度    	`$width: 100%`
* 高度    	`$height: 50px`					
* 背景色  	`$bgColor: #fff`				
* 字体色  	`$fontColor: #ec185b`		
* 字体大小	`$fontSize: 20px`			
* 定位   	`$position: relative`			
* 底边框 	`$bdbottom: solid 1px #ddd`		
* 右边图标 	`$rightIcon:(图片地址/64位图)`						

## 4.查看Demo

chrome模拟器查看 [Demo](http://legomobi.sinaapp.com/demo/Header.html)