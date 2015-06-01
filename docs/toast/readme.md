# Tab

---

一个集成了定制文字和图片的仿原生消息提示框组件

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-toast;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-toast;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.toast.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.toast.css">
</head>
```

### 2.最佳实践

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
    seajs.use(['module/toast'], function(Toast) {
        var toast=new Toast({
            msg:'aaa',
            bottom:150,
            img:'http://art.yypm.com/300x150',
            skin:'abc',
            duration:'0.5s'
        });
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var Toast = require('modulePath/toast');
	var toast=new Toast({
        msg:'aaa',
        bottom:150,
        img:'http://art.yypm.com/300x150',
        skin:'abc',
        duration:'0.5s'
    });
});
```

## 配置说明

### 1.属性列表

#### options.msg `String`

该属性设置消息的内容

Default: `这是一个toast的文案`

#### options.bottom `Number`

该属性设置消息提示框距离屏幕底部的长度

Default: `50`

#### options.img `String`

该属性设置消息提示框中所用图片的路径，如果设置了该属性，消息框将呈现图文形式

Default: `null`

#### options.skin `String`

该属性设置消息框的皮肤 `className`

Default: `null`

#### options.duration `String`

该属性设置消息框停留显示的时间，单位可以是 `s` 也可以是 `ms`

Default: `2s`

## 查看Demo

chrome模拟器查看 [Demo](http://legomobi.sinaapp.com/demo/Toast.html)