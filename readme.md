---
layout: default
title: Getting started &middot; Ratchet
---
# ui-slide

{% highlight html %}
<script>
var doms=$('#logo-yy').children().length;
$('#logo-yy').children().each(function(){
doms+=$(this).children().length;
})
console.log('doms : '+doms); // --> doms : 42
</script>
{% endhighlight %}

---

* *组件说明：* Slide图片轮播UI组件，请设置模块类名前缀 `classPrefix: null` 与 触发器被选中时的class `activeTriggerClass: 'is-active'`.
* *依赖JS：* `arale/switchable/xxx/slide.js`；（xxx表示版本号）
* *依赖CSS：* `_ui-slide.scss`；

---

## 点状导航的图片轮播 `@extend: .ext-dotted`

````html
<div class="ui-slide ext-dotted" data-role="slide-demo1">
    <ul class="ui-slide__content" data-switchable-role="content">
        <li class="ui-slide__panel">
            <a href="#"><img src="http://art.yypm.com/740x300x1" /></a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#"><img src="http://art.yypm.com/740x300x2" /></a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#"><img src="http://art.yypm.com/740x300x3" /></a>
        </li>
    </ul>
    <ul class="ui-slide__nav" data-switchable-role="nav">
        <li class="ui-slide__trigger is-active">1</li>
        <li class="ui-slide__trigger">2</li>
        <li class="ui-slide__trigger">3</li>
    </ul>
</div>
````

````javascript
seajs.use(['arale/switchable/1.0.2/slide'], function(Slide) {
    var slide1 = new Slide({
        element: '[data-role="slide-demo1"]',
        classPrefix: null,
        activeTriggerClass: 'is-active',
        autoplay: false,
        effect: 'scrollx'
    }).render();
});
````

## 带上下页切换的图片轮播 `@extend: .ext-dotted`

````html
<div class="ui-slide ext-dotted" data-role="slide-demo2">
    <ul class="ui-slide__content" data-switchable-role="content">
       <li class="ui-slide__panel">
            <a href="#"><img src="http://art.yypm.com/740x300x1" /></a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#"><img src="http://art.yypm.com/740x300x2" /></a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#"><img src="http://art.yypm.com/740x300x3" /></a>
        </li>
    </ul>
    <ul class="ui-slide__nav" data-switchable-role="nav">
        <li class="ui-slide__trigger is-active">1</li>
        <li class="ui-slide__trigger">2</li>
        <li class="ui-slide__trigger">3</li>
    </ul>
    <span class="ui-slide__prev" data-switchable-role="prev"><i class="ui-iconfont">&#xe628;</i></span>
    <span class="ui-slide__next" data-switchable-role="next"><i class="ui-iconfont">&#xe642;</i></span>
</div>
````
<br>
**注意：带上下页切换使用的是carousel组件**

````javascript
seajs.use(['arale/switchable/1.0.2/carousel'], function(carousel) {
    var carouselSlide = new carousel({
        element: '[data-role="slide-demo2"]',
        classPrefix: null,
        activeTriggerClass: 'is-active',
        autoplay: false,
        effect: 'scrollx'
    }).render();
});
````

## 横向缩略图的图片轮播 `@extend: .ext-thumbX`

````html
<div class="ui-slide ext-thumbX" data-role="slide-demo3">
    <ul class="ui-slide__content" data-switchable-role="content">
        <li class="ui-slide__panel">
            <a href="#">
                <img src="http://art.yypm.com/740x300x1" />
                <span class="ui-slide__mask">印度洋上的彩虹，大航海里的玩家</span>
            </a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#">
                <img src="http://art.yypm.com/740x300x2" />
                <span class="ui-slide__mask">《天天挂机：混乱之治》首部资料片上线</span>
            </a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#">
                <img src="http://art.yypm.com/740x300x3" />
                <span class="ui-slide__mask">印度洋上的彩虹，大航海里的玩家</span>
            </a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#">
                <img src="http://art.yypm.com/740x300x4" />
                <span class="ui-slide__mask">《天天挂机：混乱之治》首部资料片上线</span>
            </a>
        </li>
    </ul>
    <ul class="ui-slide__nav" data-switchable-role="nav">
        <li class="ui-slide__trigger is-active">
            <img src="http://art.yypm.com/170x94x1" alt="">
            <span class="ui-slide__thumbMask"></span>
        </li>
        <li class="ui-slide__trigger">
            <img src="http://art.yypm.com/170x94x2" alt="">
            <span class="ui-slide__thumbMask"></span>
        </li>
        <li class="ui-slide__trigger">
            <img src="http://art.yypm.com/170x94x3" alt="">
            <span class="ui-slide__thumbMask"></span>
        </li>
        <li class="ui-slide__trigger">
            <img src="http://art.yypm.com/170x94x4" alt="">
            <span class="ui-slide__thumbMask"></span>
        </li>
    </ul>
</div>
````

````javascript
seajs.use(['arale/switchable/1.0.2/slide'], function(Slide) {
    var slide3 = new Slide({
        element: '[data-role="slide-demo3"]',
        classPrefix: null,
        activeTriggerClass: 'is-active',
        autoplay: false,
        effect: 'fade'
    }).render();
});
````

## 纵向缩略图的图片轮播 `@extend: .ext-thumbY`

````html
<div class="ui-slide ext-thumbY" data-role="slide-demo4">
    <ul class="ui-slide__content" data-switchable-role="content">
        <li class="ui-slide__panel">
            <a href="#">
                <img src="http://art.yypm.com/555x300x1" />
                <span class="ui-slide__mask">印度洋上的彩虹，大航海里的玩家</span>
            </a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#">
                <img src="http://art.yypm.com/555x300x2" />
                <span class="ui-slide__mask">《天天挂机：混乱之治》首部资料片上线</span>
            </a>
        </li>
        <li class="ui-slide__panel hide">
            <a href="#">
                <img src="http://art.yypm.com/555x300x3" />
                <span class="ui-slide__mask">印度洋上的彩虹，大航海里的玩家</span>
            </a>
        </li>
    </ul>
    <ul class="ui-slide__nav" data-switchable-role="nav">
        <li class="ui-slide__trigger is-active">
            <img src="http://art.yypm.com/170x90x1" alt="">
            <span class="ui-slide__thumbMask"></span>
        </li>
        <li class="ui-slide__trigger">
            <img src="http://art.yypm.com/170x90x2" alt="">
            <span class="ui-slide__thumbMask"></span>
        </li>
        <li class="ui-slide__trigger">
            <img src="http://art.yypm.com/170x90x3" alt="">
            <span class="ui-slide__thumbMask"></span>
        </li>
    </ul>
</div>
````

````javascript
seajs.use(['arale/switchable/1.0.2/slide'], function(Slide) {
    var slide3 = new Slide({
        element: '[data-role="slide-demo4"]',
        classPrefix: null,
        activeTriggerClass: 'is-active',
        autoplay: false,
        effect: 'fade'
    }).render();
});
````




## JS Api

注意，LEGO UI仅提供CSS层面的UI支持，JS部分由aralejs提供。最新的Slide详细Api：http://aralejs.org/switchable/

## History

### 1.0.0 *2014-09-05*

`NEW` ui-slide First version.

### 1.1.0 *2015-05-16*

`IMPROVED` 命名优化，拓展类使用`ext-`前缀代替双中划线；

`IMPROVED` 完善基础样式；

