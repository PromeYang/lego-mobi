# Popup

---

一个弹出层组件，可以定制内容及控制方式

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-popup;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-popup;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.popup.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.popup.css">
</head>
```

### 2.HTML Layout

配置 `id` 作为组件的快速入口以及唯一标识 , `data-js` 是js钩子

```html
<div class="mod-popup" id="popup">
    <div class="mod-popup__bg" data-js="bg"></div>
    <div class="mod-popup__panel">
        <div class="mod-popup__panelBd">
            <div class="mod-popup__custom" data-js="custom"></div>
        </div>
    </div>
</div>
```

### 3.最佳实践

组件依赖 `seajs` , 调用组件前必须引入 `sea-lego.js` 文件

```html
<body>
    ...
    <script src="http://assets.dwstatic.com/mobile/src/js/main/seajs/sea-lego.js" id="seajsnode"></script>
</body>
```

如果你已经在项目中使用了seajs，你可以直接extand一份config配置来使用

```javascript
seajs.config({
    paths: {
        'legoPath': 'http://assets.dwstatic.com/mobile/src/js/',
        'modulePath': 'http://assets.dwstatic.com/legomobi/3.0.0/js/'
    },
    alias: {
        'zepto': 'legoPath/main/zepto/zepto.min.js',
        'touch': 'legoPath/main/zepto/zepto.touch.js',
        'iscroll': 'legoPath/module/iscroll/iscroll.js'
    }
});
```

**注意： `paths` 的配置是依赖必须的， `alias` 中的配置项如果你在项目中已有使用，你可以选择使用自己项目的路径或者使用CDN上的路径**

调用方式1：你可以直接在页面中通过 `seajs.use()` 来调用该组件

```html
<script>
    seajs.use(['module/popup'], function(Popup) {
        var popup = new Popup('#popup',{
            hasBg: true,
            hasBgEvent: true,
            hasSelfEvent: true
        });
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var Popup = require('modulePath/popup');
	var popup = new Popup('#popup',{
        hasBg: true,
        hasBgEvent: true,
        hasSelfEvent: true
    });
});
```

## 配置说明

### 1.属性列表

#### options.hasBg `Boolean`

该属性设置弹出层是否有背景蒙版

Default: `true`

#### options.hasBgEvent `Boolean`

该属性设置背景蒙版是否有事件触发

Default: `true`

#### options.hasSelfEvent `Boolean`

该属性设置弹出层主体内容是否有事件触发

Default: `true`

### 2.方法列表

#### show() `Method`

使用 `popup.show()` 来控制弹出层显示

#### hide() `Method`

使用 `popup.hide()` 来控制弹出层隐藏

## 查看Demo

chrome模拟器查看 [Demo](http://legomobi.sinaapp.com/demo/Popup.html)