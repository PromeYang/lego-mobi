define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');

    function Tab(elem,opts){
        this.$mod=$(elem);
        this.$nav=this.$mod.find('[data-js="nav"]');
        this.$content=this.$mod.find('[data-js="content"]');
        
        this._opts={
            index:0
        };
        
        this._opts=$.extend({},this._opts,opts);

        this._init();
    }
    Tab.prototype=$.extend({},Widget,{
        bindEvent:function(){
            var self=this;
            self.$nav.children().on(self._click,function(){
                if(!$(this).hasClass('act')){
                    $(this).addClass('act').siblings().removeClass('act');
                    self.$content.children().removeClass('act').eq($(this).index()).addClass('act');
                }
            });
        },
        resetCSS:function(){
            var self=this;
            self.$nav.children().removeClass('act').eq(self._opts.index).addClass('act');
            self.$content.children().removeClass('act').eq(self._opts.index).addClass('act');
        }
    });
    Tab.prototype.constructor = Tab;

    // LEGO.tab=function(elem,opts){ return new Tab(elem,opts) };
    return Tab

});