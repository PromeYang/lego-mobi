# 模态窗mixin

---

## 1.说明
LegoUI for Mobile 是一套轻量级为移动端而生的前端UI库。把移动端实际项目中较为通用常用的UI组件独立成库，Sass mixin的方式让使用者最大程度上灵活地描绘出自身理想的层叠样式。

## 2.使用步骤
1. 在需要使用UI库的sass文件中，导入本库sass文件。如：`@import "lego";`
2. 在需要使用组件的样式中，导入组件mixin。如：
```scss	
	.ui-window{
		@include ui-window();
	}
```	
3.	html中使用，如：
```html
	<div class="ui-lego ui-window">
        <div class="ui-window__middle">
            <div class="ui-window">
                <div class="ui-window__header">标题</div>
                <div class="ui-window__content">内容</div>
                <div class="ui-window__footer">
                    <a href="#"><div class="ui-window__btn">取消</div></a>
                    <a href="#"><div class="ui-window__btn">确定</div></a>
                </div>
            </div>
        </div>
    </div>
```	

## 3.查看Demo

chrome模拟器查看 [Demo](http://legomobi.sinaapp.com/demo/Window.html)




	
					