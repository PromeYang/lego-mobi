# 表单及表单元素mixin

---

## 1.说明
LegoUI for Mobile 是一套轻量级为移动端而生的前端UI库。把移动端实际项目中较为通用常用的UI组件独立成库，Sass mixin的方式让使用者最大程度上灵活地描绘出自身理想的层叠样式。

## 2.使用步骤
1. 在需要使用UI库的sass文件中，导入本库sass文件。如：`@import "lego";`
2. 在需要使用组件的样式中，导入组件mixin。如
```scss	
	/* 表单 */
	.ui-form{
		@include ui-form();
	}
	
	/* 开关 */
	.ui-switch{
		@include ui-switch();
	}
	
	/* 单选 */
	.ui-radio{
		@include ui-radio();
	}
	
	/* 复选 */
	.ui-checkbox{
		@include ui-checkbox();
	}
```	
3.	html中使用，如：
```html
	<div class="ui-lego ui-form">
	
        <div class="ui-form__header">表单样式 1</div>
        
        <div class="ui-form__group">
            <input type="text" placeholder="姓名">
        </div>

        <div class="ui-form__group">
            <input type="password" placeholder="密码">
        </div>

        <div class="ui-form__group ui-form__space">
            <input type="text" placeholder="邮箱地址">
        </div>

        <div class="ui-form__group">
            <input type="text" placeholder="手机号">
        </div>

        <div class="ui-form__group">
            <div class="ui-switch">
                <input type="checkbox">
                <div class="ui-switch__btn"></div>
                <div class="ui-switch__lbl"></div>
            </div>
        </div>

        <div class="ui-form__group">
            <div class="ui-radio">
                <input type="radio" name="sex" checked>
                <div class="ui-radio__lbl">男</div>
            </div>
        </div>
        <div class="ui-form__group">
            <div class="ui-radio">
                <input type="radio" name="sex">
                <div class="ui-radio__lbl">女</div>
            </div>
        </div>

        <div class="ui-form__group">
            <div class="ui-checkbox">
                <input type="checkbox" name="hobby" checked>
                <div class="ui-checkbox__lbl">阅读</div>
            </div>
        </div>
        <div class="ui-form__group">
            <div class="ui-checkbox">
                <input type="checkbox" name="hobby">
                <div class="ui-checkbox__lbl">唱歌</div>
            </div>
        </div>
        <div class="ui-form__group">
            <div class="ui-checkbox">
                <input type="checkbox" name="hobby">
                <div class="ui-checkbox__lbl">跳舞</div>
            </div>
        </div>

        <div class="ui-form__header">表单样式 2</div>
        <div class="ui-form__group2">
            <label>姓名</label>
            <input type="text" placeholder="请输入">
        </div>
        <div class="ui-form__group2">
            <label>密码</label>
            <input type="text" placeholder="请输入">
        </div>
        <div class="ui-form__group2 ui-form__space">
            <label>邮箱地址</label>
            <input type="text" placeholder="请输入">
        </div>
        <div class="ui-form__group2">
            <label>手机号</label>
            <input type="text" placeholder="请输入">
        </div>
    </div>			
```

## 3.参数说明

表单ui-form
* 单行高度   		`$height: 50px`
* 边框   			`$border: solid 1px #f5f5f5`
* 标识宽度  			`$labelWidth: 70px`
* 头部背景色  		`$headerBgColor: #f5f5f5`	
* 头部字体颜色		`$headerFontColor: #333`	

开关ui-switch
* 宽度   			`$width: 55px`
* 高度  				`height: 30px`
* 背景色  			`$bgColor: blue`

单选ui-radio
* 宽度   			`$width: 100%`
* 高度  				`$height: 50px`
* 图标宽度  			`$labelWidth: 50px`
* 未选中图标			`$defImg: (图片地址/64位图)`
* 选中图标			`$checkedImg: (图片地址/64位图)`

多选ui-checkbox
* 宽度   			`$width: 100%`
* 高度  				`$height: 50px`
* 图标宽度  			`$labelWidth: 50px`
* 未选中图标			`$defImg: (图片地址/64位图)`
* 选中图标			`$checkedImg: (图片地址/64位图)`

## 4.查看Demo

chrome模拟器查看 [Demo](http://ued.yypm.com/legomobi/3.0.0/src/demo/Form.html)
					
		