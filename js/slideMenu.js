define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');

    function SlideMenu(elem,opts){
        this.$mod=$(elem);
        this.$bar=this.$mod.find('[data-js="bar"]');
        this.$body=this.$mod.find('[data-js="body"]');

        this._opts={
            barWidth: '100px',
            speed: '0.4s',
            allowSwipe: true
        };

        this._opts=$.extend({},this._opts,opts);

        this._init();
    }
    SlideMenu.prototype=$.extend({},Widget,{
        bindEvent:function(){
            var self=this;
            if(self._opts.allowSwipe){
                self.$mod.on('swipeLeft',function(){
                    self.hide();
                }).on('swipeRight',function(){
                    self.show();
                });
            }
        },
        resetCSS:function(){
            if(this._opts.barWidth.match('px')){
                this._moveX=Number(this._opts.barWidth.slice(0,-2))*-0.5+'px';
            }else if(this._opts.barWidth.match('%')){
                this._moveX=Number(this._opts.barWidth.slice(0,-1))*-0.5+'%';
            }
            this.$bar.css({'transform':'translate3d('+this._moveX+',0,0)',width:this._opts.barWidth,'transition-duration':this._opts.speed});
            this.$body.css({'transition-duration':this._opts.speed})
        },
        show:function(){
            this.$body.css({'transform':'translate3d('+this._opts.barWidth+',0,0)'});
            this.$bar.css({'transform':'translate3d(0,0,0)'});
            return this
        },
        hide:function(){
            this.$body.css({'transform':'translate3d(0,0,0)'});
            this.$bar.css({'transform':'translate3d('+this._moveX+',0,0)'});
            return this
        }
    });
    SlideMenu.prototype.constructor = SlideMenu;

    // LEGO.slideMenu=function(elem,opts){ return new slideMenu(elem,opts) };
    return SlideMenu

});