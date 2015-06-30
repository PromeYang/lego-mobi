/*
 * @file: 弹出层组件
 * @update: 2015-06-30 09:52:32
 */


define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');

    function Popup(elem,opts){
        var self=this;
        this.$mod=$(elem);
        this.$bg=this.$mod.find('[data-js="bg"]');
        this.$custom=this.$mod.find('[data-js="custom"]');

        this._opts={
            hasBg:true,
            hasBgEvent:true,
            hasSelfEvent:true,
            container:null
        };

        this._opts=$.extend({},this._opts,opts);

        this._init(this._opts.container);
    }
    Popup.prototype=$.extend({},Widget,{
        bindEvent:function(){
            var self=this;
            self.$custom.on('webkitAnimationEnd',function(){
                if($(this).hasClass('is-popupIn')){
                    self.$mod.hide();
                    self.$bg.removeClass('is-popupFadeOut');
                    self.$custom.removeClass('is-popupIn');
                }
            });
            if(self._opts.hasBg&&self._opts.hasBgEvent){
                self.$bg.on(self._click,function(){
                    self.hide();
                });
            }
            if(!self._opts.hasBg&&self._opts.hasSelfEvent){
                self.$custom.on('tap',function(){
                    self.hide();
                });
            }
        },
        resetCSS:function(){
            if(!this._opts.hasBg) this.$bg.hide();
        },
        show:function(){
            this.$mod.show();
            this.$bg.removeClass('is-popupFadeIn').addClass('is-popupFadeOut');
            this.$custom.removeClass('is-popupIn').addClass('is-popupOut');
        },
        hide:function(){
            this.$custom.removeClass('is-popupOut').addClass('is-popupIn');
        }
    });
    Popup.prototype.constructor = Popup;

    return Popup

});