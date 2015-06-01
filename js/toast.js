define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');

    function Toast(opts){
        var self=this;

        this._opts={
            bottom:50,
            msg:'这是一个toast的文案',
            duration:'2s',
            img:null,
            skin:null,
            container:null
        };

        this._opts=$.extend({},this._opts,opts);

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

    // LEGO.toast=function(opts){ return new Toast(opts) };
    return Toast

});