# Nav

---

一个可以横向滚动的导航条组件，支持缓动、循环、定位

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-nav;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-nav;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.nav.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.nav.css">
</head>
```

### 2.HTML Layout

配置 `id` 作为组件的快速入口以及唯一标识 , `data-js` 是js钩子

```html
<div class="mod-nav" id="nav">
    <div class="mod-nav__scroller" data-js="scroller">
        <ul class="mod-nav__list" data-js="list">
            <li class="mod-nav__item">1</li>
            ...
            <li class="mod-nav__item">9</li>
        </ul>
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
    seajs.use(['module/nav'], function(Nav) {
        var nav = new Nav('#nav',{
            index: 3
        });
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var Nav = require('modulePath/nav');
	var nav = new Nav('#nav',{
        index: 3
    });
});
```

## 配置说明

### 1.属性列表

#### options.index `Number`

指定初始化时显示的菜单项，当设置一个超过菜单列表长度的值时会强制设定为默认值

Default: `0`

## 查看Demo

chrome模拟器查看 [Demo](http://ued.yypm.com/legomobi/3.0.0/src/demo/Nav.html)