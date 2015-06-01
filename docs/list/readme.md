# 列表mixin

---

## 1.说明
LegoUI for Mobile 是一套轻量级为移动端而生的前端UI库。把移动端实际项目中较为通用常用的UI组件独立成库，Sass mixin的方式让使用者最大程度上灵活地描绘出自身理想的层叠样式。


## 2.使用步骤
1. 在需要使用UI库的sass文件中，导入本库sass文件。如：`@import "lego";`
2. 在需要使用组件的样式中，导入组件mixin。如
```scss
	.ui-list{
		@include ui-list();
	}
```	
3.	html中使用，如：
```html
	<div class="ui-lego ui-list">
        <div class="ui-list__header">列表样式 1</div>
        <ul>
            <li>
                <a href="">item 1</a>
            </li>
            <li>
                <a href="">item 2</a>
            </li>
            <li>
                <a href="">item 3</a>
            </li>
        </ul>
    </div>
    
    <div class="ui-lego ui-list">
        <div class="ui-list__header">列表样式 2</div>
        <ul>
            <li class="ui-list__arrow">
                <a href="">item 1</a>
            </li>
            <li class="ui-list__arrow">
                <a href="">item 2</a>
            </li>
            <li class="ui-list__arrow">
                <a href="">item 3</a>
            </li>
        </ul>
    </div>
    
    <div class="ui-lego ui-list">
        <div class="ui-list__header">列表样式 3</div>
        <ul>
            <li class="ui-list__shape">
                <a href="">item 1<span class="_shape">2</span></a>
            </li>
            <li>
                <a href="">item 2</a>
            </li>
            <li>
                <a href="">item 3</a>
            </li>
        </ul>
    </div>
```

## 3.参数说明
* 单行高度   		`$height: 40px`
* 头部背景色    		`$headerBgColor: #f5f5f5`
* 头部字体颜色  		`$headerfontColor: #333`
* 定义形状宽度  		`$shapeWidth: 20px`		
* 定义形状高度		`$shapeHeight: 20px`		
* 定义形状圆角   		`$shapeRadius: 50%`			
* 定义形状背景色 		`$shapeBgColor: #ec185b`
* 定义形状字体色 		`$shapeFontColor: #fff`

## 4.查看Demo

chrome模拟器查看 [Demo](http://legomobi.sinaapp.com/demo/List.html)
					
