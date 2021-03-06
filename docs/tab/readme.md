# Tab

---

一个带过渡效果的Tab面板切换组件，支持手势滑动

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-tab;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-tab;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.tab.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.tab.css">
</head>
```

### 2.HTML Layout

配置 `id` 作为组件的快速入口以及唯一标识 , `data-js` 是js钩子

```html
<div class="mod-tab" id="tab">
    <div class="mod-tab__hd" data-js="nav">
        <div class="mod-tab__hdItem act">01</div>
        <div class="mod-tab__hdItem">02</div>
        <div class="mod-tab__hdItem">03</div>
    </div>
    <div class="mod-tab__bd" data-js="content">
        <div class="mod-tab__bdItem act">1</div>
        <div class="mod-tab__bdItem">2</div>
        <div class="mod-tab__bdItem">3</div>
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
    seajs.use(['module/tab'], function(Tab) {
        var tab = new Tab('#tab');
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var Tab = require('modulePath/tab');
	var tab = new Tab('#tab');
});
```

## 配置说明

### 1.属性列表

#### options.index `Number`

该属性设置初始化显示的面板

Default: `0`

## 查看Demo

chrome模拟器查看 [Demo](http://legomobi.sinaapp.com/demo/Tab.html)