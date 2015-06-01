# Video

---

一个快速插入视频的组件，通过视频区域控制控制的播放和暂停

## 快速使用

### 1.样式依赖

如果你有sass编译环境，可以通过 [LegoUI-mobi Github](https://github.com/duowan/LegoUI-mobi) 克隆一份`_lego.scss` 文件到你的sass目录下

然后用引入该scss，并且`@include mod-video;`

```scss
// 引入LegoUI-mobi
@import 'lego';
// 引用导航组件mixin
@include mod-video;
```

如果没安装sass，你也可以直接在 `head` 里面引入 `mod.video.css` 文件

```html
<head>
    ...
    <link rel="stylesheet" href="http://assets.dwstatic.com/legomobi/3.0.0/css/mod.video.css">
</head>
```

### 2.HTML Layout

配置 `id` 作为组件的快速入口以及唯一标识

```html
<div id="video" style="width:100%;height:240px;"></div>
```

**注意：如果视频比例和容器比例不一致，视频会居中显示，而不是拉伸充满全屏**

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
    seajs.use(['module/video'], function(Video) {
        var video = new Video('#video',{
            bgColor: '#000',
            controls: false,
            preload: false,
            autoplay: false,
            loop: false,
            source:['http://video-js.zencoder.com/oceans-clip.mp4']
        });
    });
</script>
```

调用方式2：也可以在自定义的模块中通过 `require` 来调用

```javascript
define(function(require, exports, module) {
	var Video = require('modulePath/video');
	var video = new Video('#video',{
        bgColor: '#000',
        controls: false,
        preload: false,
        autoplay: false,
        loop: false,
        source:['http://video-js.zencoder.com/oceans-clip.mp4']
    });
});
```

**注意：初始化 `new video(selector,options)` 中第一个参数为组件依赖容器，一般为一个已经定义好区域的容器**

## 配置说明

### 1.属性列表

#### options.bgColor `String`

该属性设置视频播放区域的背景色，支持rgba

Default: `#000`

#### options.controls `Boolean`

该属性设置视频播放器是否显示控制器

Default: `false`

#### options.preload ` Boolean`

该属性设置视频是否预加载

Default: `false`

#### options.autoplay `Boolean`

该属性设置视频是否自动播放

Default: `false`

#### options.loop `Boolean`

该属性设置视频是否循环播放

Default: `false`

#### options.source `Array`

该属性设置视频文件多浏览器支持的文件列表，主要包括 `mp4` `ogg` `webm`

Default: `[]`

### 2.方法列表

#### play() `Method`

使用 `video.play()` 来控制视频播放

#### pause() `Method`

使用 `video.pause()` 来控制视频暂停

## 查看Demo

chrome模拟器查看 [Demo](http://ued.yypm.com/legomobi/3.0.0/src/demo/Video.html)