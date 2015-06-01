# PopupMenu

---

一个仿ios原生弹出菜单组组件，可以定制内容及控制方式

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-popupMenu;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-popupMenu;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.popupMenu.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.popupMenu.css">
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
    seajs.use(['module/popupMenu'], function(PopupMenu) {
        var popupMenu = new PopupMenu('#popupMenu',{
            itemList: ['菜单1','菜单2','菜单3'],
            trigger: 'click',
            height: 40,
            fontSize: 14,
            padding: 15,
            bgColor: '#000',
            borderColor: '#fff',
            itemEvent: function(i){
                if(i==0) alert('点击了菜单1');
                else if(i==1) alert('点击了菜单2');
            }
        }).show();
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var PopupMenu = require('modulePath/popupMenu');
	var popupMenu = new PopupMenu('#popupMenu',{
        itemList: ['菜单1','菜单2','菜单3'],
        trigger: 'click',
        height: 40,
        fontSize: 14,
        padding: 15,
        bgColor: '#000',
        borderColor: '#fff',
        itemEvent: function(i){
            if(i==0) alert('点击了菜单1');
            else if(i==1) alert('点击了菜单2');
        }
    }).show();
});
```

**注意：初始化 `new PopupMenu(selector,options)` 中第一个参数为组件依赖容器，一般为设置了弹出菜单组件的元素**

## 配置说明

### 1.属性列表

#### options.itemList `Array`

该属性设置弹出菜单的菜单项列表，内容是文本 `String`

Default: `['菜单1','菜单2','菜单3']`

#### options.trigger `String`

该属性设置触发菜单的事件类型，可选值为： `click` `tap` `longTap` `doubleTap`

Default: `tap`

#### options.height `Number`

该属性设置菜单项的高度，单位是 `px`

Default: `40`

#### options.fontSize `Number`

该属性设置菜单项字体的大小，单位是 `px`

Default: `14`

#### options.padding `Number`

该属性设置菜单项字体的左右间距，单位是 `px`

Default: `15`

#### options.bgColor `String`

该属性设置弹出菜单的背景颜色，支持rgba

Default: `#000`

#### options.borderColor `String`

该属性设置菜单项的边框颜色

Default: `#fff`

### 2.事件列表

#### itemEvent `Callback`

菜单项被点击时触发的事件回调，事件接收一个参数（触发事件的菜单项的index，从0开始）

```javascript
itemEvent: function(i){
    if(i==0) alert('点击了菜单1');
    else if(i==1) alert('点击了菜单2');
}
```

### 3.方法列表

#### show() `Method`

使用 `popupMenu.show()` 来控制弹出菜单显示

#### hide() `Method`

使用 `popupMenu.hide()` 来控制弹出菜单隐藏

## 查看Demo

chrome模拟器查看 [Demo](http://ued.yypm.com/legomobi/3.0.0/src/demo/PopupMenu.html)