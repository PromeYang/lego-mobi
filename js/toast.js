/*
 * @file: 集成了定制文字和图片的仿原生消息提示框组件
 * @update: 2015-06-30 10:03:03
 */

define(function(require, exports, module) {
    // 引入基类
    var Widget= require('modulePath/widget');

    function Toast(opts){
        // 初始配置
        this._opts={
            bottom:50,              // 距离屏幕底部的距离
            msg:'这是一个toast的文案', // 显示的文字内容
            duration:'2s',          // 消息停留时间
            img:null,               // 图片路径
            skin:null,              // 皮肤类名
            container:null          // 指定容器
        };
        // 扩展自定义配置
        this._opts=$.extend({},this._opts,opts);
        // 初始化入口
        this._init(this._opts.container);
    }

    Toast.prototype=$.extend({},Widget,{
        renderDOM:function(){
            var img=this._opts.img?'<img src="'+this._opts.img+'"><br>':'';
            var toastStr='\
                <div class="mod-toast">\
                    <div class="mod-toast__bd">\
                        '+img+'\
                        <p>'+this._opts.msg+'</p>\
                    </div>\
                </div>\
            ';

            this.mod=$(toastStr);
        },
        bindEvent:function(){
            var self=this;
            self.mod.on('webkitTransitionEnd',function(){
                self.mod.css({'-webkit-animation-name':'toastFade'});
            });
            self.mod.on('webkitAnimationEnd',function(){
                self._destroy();
            });
            if(self._opts.img){
                var image=document.createElement('img');
                image.onload=function(){ self.animate(); };
                image.src=self._opts.img;
            }else{
                self.animate();
            }
        },
        resetCSS:function(){
            if(this._opts.skin) this.mod.addClass(this._opts.skin);
            this.mod.css({'-webkit-animation-delay':this._opts.duration});
        },
        animate:function(){
            this.mod.css({'-webkit-animation-delay':this._opts.duration});
            this.mod.css({'-webkit-transform':'translate3d(0,-'+(this._opts.bottom+this.mod.height())+'px,0)'});
        }
    });
    Toast.prototype.constructor = Toast;

    return Toast

});