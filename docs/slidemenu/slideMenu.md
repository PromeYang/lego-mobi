# SlideMenu

---

一个抽屉式的侧边菜单栏，支持手势事件

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-slideMenu;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-slideMenu;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.slideMenu.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.slideMenu.css">
</head>
```

### 2.HTML Layout

配置 `id` 作为组件的快速入口以及唯一标识 , `data-js` 是js钩子

```html
<div class="mod-slideMenu" id="slideMenu">
    <div class="mod-slideMenu__bar" data-js="bar">
        <p class="mod-slideMenu__listTitle">菜单列表1</p>
        <ul class="mod-slideMenu__list">
            <a href="#"><li class="mod-slideMenu__listItem">菜单项1</li></a>
            <a href="#"><li class="mod-slideMenu__listItem">菜单项2</li></a>
            ...
        </ul>
        <p class="mod-slideMenu__listTitle">菜单列表2</p>
        <ul class="mod-slideMenu__list">
            <a href="#"><li class="mod-slideMenu__listItem">菜单项1</li></a>
            <a href="#"><li class="mod-slideMenu__listItem">菜单项2</li></a>
            ...
        </ul>
        ...
    </div>
    <div class="mod-slideMenu__bd" data-js="body">
        <!-- innerHtml here just like the element is 'body' -->
        ...
    </div>
</div>
```

**注意：使用该组件必须用上面的结构，把页面内容放在 `div.mod-slideMenu__bd` 中，把菜单内容放在 `div.mod-slideMenu__bar` 中**

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
    seajs.use(['module/slideMenu'], function(SlideMenu) {
        var slideMenu = new SlideMenu('#slideMenu',{
            barWidth : '50%',
            speed : '0.3s',
            allowSwipe : false
        });
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var SlideMenu = require('modulePath/slideMenu');
	var slideMenu = new SlideMenu('#slideMenu',{
        barWidth : '50%',
        speed : '0.3s',
        allowSwipe : false
    });
});
```

## 配置说明

### 1.属性列表

#### options.barWidth `Array`

该属性设置菜单栏的宽度，单位可以设置 `px` 也可以设置 `%`

Default: `100px`

#### options.speed `Array`

该属性设置菜单栏动画的速度，单位可以设置 `s` 也可以设置 `ms`

Default: `0.4s`

#### options.allowSwipe `Boolean`

该属性设置菜单栏是否监听手势操作

Default: `true`

### 2.方法列表

#### show() `Method`

使用 `slideMenu.show()` 来控制菜单栏显示

#### hide() `Method`

使用 `slideMenu.hide()` 来控制菜单栏隐藏

## 查看Demo

chrome模拟器查看 [Demo](http://ued.yypm.com/legomobi/3.0.0/src/demo/SlideMenu.html)