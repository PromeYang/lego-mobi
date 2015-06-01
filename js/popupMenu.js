define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');

    function PopupMenu(elem,opts){
        this.$mod=$(elem);
        this.elem=elem;

        this._opts={
            itemList: ['菜单1','菜单2','菜单3'],
            trigger: 'tap',
            height: 40,
            fontSize: 14,
            padding: 15,
            bgColor: '#000',
            borderColor: '#fff',
            itemEvent: function(index){
                // if(i==0) do something;
                // else if(i==2) do something;
            }
        };

        this._opts=$.extend({},this._opts,opts);

        this._init(elem);
    }
    PopupMenu.prototype=$.extend({},Widget,{
        renderDOM:function(){
            var itemList='';
            $.each(this._opts.itemList,function(i,val){
                itemList+='<li class="mod-popupMenu__item">'+val+'</li>';
            });
            var popupMenuStr='\
                <ul class="mod-popupMenu">\
                    '+itemList+'\
                </ul>\
            ';
            
            this.mod=$(popupMenuStr);
        },
        bindEvent:function(){
            var self=this;
            $(document.body).on('touchstart click',function(e){
                if(!$(e.target).hasClass('mod-popupMenu')&&!$(e.target).hasClass('mod-popupMenu__item')&&e.target.id!=self.$mod[0].id){
                    if(self._isShow) self.hide();
                }
            });
            self.$mod.on(self._opts.trigger,function(){
                if(!self._isShow) self.show();
            }).on(self._click,'.mod-popupMenu__item',function(){
                self.hide();
                self._opts.itemEvent($(this).index());
            });
            self.mod.on('webkitTransitionEnd',function(){
                if(!self._isShow) self.mod.css({'display':'none'});
            });
        },
        resetCSS:function(){
            var modPosition=this.$mod[0].style.position;
            var modOffset=this.$mod.offset();
            var menuWidth=0,menuLeft=0,menuTop=0,beforeLeft=0;
            if(modPosition!='absolute'&&modPosition!='fixed'&&modPosition!='relative'){
                this.$mod.css({position:'relative'})
            }
            this.mod.find('.mod-popupMenu__item').css({
                'height': this._opts.height+'px',
                'line-height': this._opts.height+'px',
                'font-size': this._opts.fontSize+'px',
                'padding': '0 '+this._opts.padding+'px',
                'background-color': this._opts.bgColor,
                'border-color': this._opts.borderColor
            })
            this.mod.find('.mod-popupMenu__item').each(function(){
                menuWidth+=$(this).width();
            });

            if(modOffset.left+0.5*modOffset.width<0.5*menuWidth){
                menuLeft=0;
                menuTop=modOffset.height+3;
                beforeLeft=0.5*modOffset.width;
            }else if(window.innerWidth-(modOffset.left+0.5*modOffset.width)<0.5*menuWidth){
                menuLeft=modOffset.width-menuWidth;
                menuTop=modOffset.height+3;
                beforeLeft=menuWidth-0.5*modOffset.width;
            }else{
                menuLeft=modOffset.width*0.5-menuWidth*0.5;
                menuTop=modOffset.height+3;
                beforeLeft=menuWidth*0.5;
            }

            this.mod.css({
                'width': menuWidth+'px',
                'left': menuLeft+'px',
                'top': menuTop+'px',
                'display': 'none'
            });
            $('<style>'+this.elem+' .mod-popupMenu::before{border-color: transparent transparent '+this._opts.bgColor+' transparent; left:'+beforeLeft+'px;}</style>').appendTo('head');
        },
        show:function(){
            var self=this;
            self.mod.css('display','inline-block');
            setTimeout(function(){
                self.mod.css('opacity',1)
            },50);
            self._isShow=true;
            return this
        },
        hide:function(){
            this.mod.css('opacity',0);
            this._isShow=false;
            return this
        }
    });
    PopupMenu.prototype.constructor = PopupMenu;

    // LEGO.popupMenu=function(elem,opts){ return new popupMenu(elem,opts) };
    return PopupMenu

});