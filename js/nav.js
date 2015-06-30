/*
 * @file: 导航条组件
 * @update: 2015-06-30 10:20:55
 */

define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');
    require('iscroll');

    function Nav(elem,opts){
        var self=this;
        this.elem=elem;
        this.$mod=$(elem);
        this.$scroller=this.$mod.find('[data-js="scroller"]');
        this.$list=this.$mod.find('[data-js="list"]');

        this._opts={
            index: 0
        };

        this._opts=$.extend({},this._opts,opts);

        this._init();
    }
    Nav.prototype=$.extend({},Widget,{
        bindEvent:function(){
            var self=this;
            self.iscrollWrap = new IScroll(self.elem,{
                scrollX: true,
                scrollY: false,
                mouseWheel: true,
                snap: '.mod-nav__item',
                preventDefault: true
            });
            if(self._opts.index>self.$list.children().length-1) self._opts.index=0;
            self.iscrollWrap.scrollToElement(self.$list.children().eq(self._opts.index)[0],0);
        },
        resetCSS:function(){
            var childrens=this.$list.children();
            this.$scroller.css({width: childrens.eq(0).width()*childrens.length+'px'});
        }
    });
    Nav.prototype.constructor = Nav;

    // LEGO.nav=function(elem,opts){ return new Nav(elem,opts) };
    return Nav

});