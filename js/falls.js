/*
 * @file: 两列瀑布流布局实现的组件
 * @update: 2015-06-30 10:19:51
 */

define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');
    require('iscroll');

    function Falls(elem,opts){
        var self=this;
        this.elem=elem;
        this.$mod=$(elem);
        this.$col=this.$mod.find('[data-js="col"]');
        this.$tip=this.$mod.find('[data-js="tip"]');
        this.$loading=this.$mod.find('[data-js="loading"]');

        this._opts={
            top:0,
            bottom:0,
            isLoading:false,
            pullUpLoading:function(){
                self._opts.getList();
            },
            getList:function(page){
                if(!self._opts.isLoading){
                    self._opts.isLoading=true;
                    self.$tip.hide();
                    self.$loading.show();
                    setTimeout(function(){
                        self._opts.addList();
                    },1000);
                }
            },
            addList:function(data){
                var data=[0,1,2,3,4,5];
                var PicList_0='',PicList_1='',PicItem='';
                $.each(data,function(i,val){
                    PicItem=self._opts.createItem(val);
                    if(i%2==0) PicList_0+=PicItem;
                    else PicList_1+=PicItem;
                });        
                self.$col.eq(0).append(PicList_0);
                self.$col.eq(1).append(PicList_1);
                setTimeout(function(){
                    self.iscrollWrap.refresh();
                    self._opts.isLoading=false;
                },100);

                self.$tip.show();
                self.$loading.hide();
            },
            createItem:function(data){
                var random=Math.round(Math.random()*100+150);
                var PicItem='\
                    <a href="#">\
                        <li class="mod-falls__item">\
                            <div class="custom">\
                                <img src="http://art.yypm.com/200x'+random+'">\
                            </div>\
                        </li>\
                    </a>\
                ';
                return PicItem;
            }
        };

        this._opts=$.extend({},this._opts,opts);
        
        this._init();
    }
    Falls.prototype=$.extend({},Widget,{
        bindEvent:function(){
            var obj=this;
            obj.iscrollWrap = new IScroll(obj.elem,{
                preventDefault: true
            });
            obj.iscrollWrap.on('scrollEnd', function(){
                if(this.maxScrollY>=this.y){
                    obj._opts.pullUpLoading();
                }
            });
        },
        resetCSS:function(){
            this.$mod.css({top:this._opts.top+'px',bottom:this._opts.bottom+'px'});
        }
    });
    Falls.prototype.constructor = Falls;

    // LEGO.falls=function(elem,opts){ return new Falls(elem,opts) };
    return Falls

});