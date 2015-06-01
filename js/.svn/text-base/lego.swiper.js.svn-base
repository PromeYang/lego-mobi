define(function(require, exports, module) {
    
    $('.swiper-container').hide();
    // var Widget= require('module/widget');
    var SwiperCss='http://assets.dwstatic.com/common/lib/swiper/2.7.0/idangerous.swiper.css',
        SwiperJs='http://assets.dwstatic.com/common/lib/swiper/2.7.0/idangerous.swiper.min';
    

    require.async([SwiperCss, SwiperJs], function(c, d) {
        $('.swiper-container').css({opacity:0}).show();
        $('.swiper-slide').css({width:'100%'});
        var mySwiper = new Swiper('#swiper-container-1', {
            runCallbacksOnInit:function(){
                $('.swiper-container').css({opacity:1});
            }
        });
    });



    // function Swiper(elem,opts){
    //  this._opts={
    //      index:0
    //  };
    //  this.$mod=$(elem);
    //  this.$nav=this.$mod.find('[data-js="J_nav"]');
    //  this.$content=this.$mod.find('[data-js="J_content"]');
    //  this._init();
    // }
    // Tab.prototype=$.extend({},Widget,{
    //  bindEvent:function(){
    //      var obj=this;
    //      obj.$nav.children().on('tap',function(){
    //          if(!$(this).hasClass('act')){
    //              $(this).addClass('act').siblings().removeClass('act');
    //              obj.$content.children().removeClass('act').eq($(this).index()).addClass('act');
    //          }
    //      });
    //  }
    // });
    // Tab.prototype.constructor = Tab;

    // return function(elem,opts){ return new Tab(elem,opts) };

});