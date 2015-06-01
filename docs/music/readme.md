# Music

---

一个支持背景音乐播放的组件，提供默认的控制按钮以及播放控制

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-music;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-music;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.music.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.music.css">
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
    seajs.use(['module/music'], function(Music) {
        var music = new Music('#music',{
            size: 36,
            left: 12,
            top: 12,
            right: null,
            bottom: null,
            preload: true,
            autoplay: true,
            loop: true,
            source:[
                'http://osvaldas.info/examples/audio-player-responsive-and-touch-friendly/audio.mp3'
            ]
        });
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var Music = require('modulePath/music');
	var music = new Music('#music',{
        size: 36,
        left: 12,
        top: 12,
        right: null,
        bottom: null,
        preload: true,
        autoplay: true,
        loop: true,
        source:[
            'http://osvaldas.info/examples/audio-player-responsive-and-touch-friendly/audio.mp3'
        ]
    });
});
```

## 配置说明

### 1.属性列表

#### options.size `Number`

该属性设置控制按钮的大小，单位为：`px`

Default: `36`

#### options.left `Number`

该属性设置控制按钮距离屏幕左边的长度，单位为：`px`

Default: `0`

#### options.top `Number`

该属性设置控制按钮距离屏幕顶部的长度，单位为：`px`

Default: `0`

#### options.right `Number`

该属性设置控制按钮距离屏幕右边的长度，单位为：`px`

Default: `0`

#### options.bottom `Number`

该属性设置控制按钮距离屏幕底部的长度，单位为：`px`

Default: `0`

#### options.preload `Boolean`

该属性设置音频文件是否预加载

Default: `true`

#### options.autoplay `Boolean`

该属性设置音频文件是否自动播放

Default: `true`

#### options.loop `Boolean`

该属性设置音频文件是否预循环播放

Default: `true`

#### options.source `Array`

该属性设置音频文件多浏览器支持的文件列表，主要包括 `mp3` `ogg` `wav`

Default: `[]`

### 2.方法列表

#### play() `Method`

使用 `music.play()` 来控制背景音乐播放

#### pause() `Method`

使用 `music.pause()` 来控制背景音乐暂停

## 查看Demo

chrome模拟器查看 [Demo](http://ued.yypm.com/legomobi/3.0.0/src/demo/Music.html)