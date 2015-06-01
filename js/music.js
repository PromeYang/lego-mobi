define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');

    function Music(opts){
        this._opts={
            size: 36,
            left: 12,
            top: 12,
            right: null,
            bottom: null,
            preload: true,
            autoplay: true,
            loop: true,
            source:[],
            isSupport: false
        };

        this._opts=$.extend({},this._opts,opts);

        this.audioTest();
        
        this._init();
    }
    Music.prototype=$.extend({},Widget,{
        renderDOM:function(){
            var sourceList='';
            $.each(this._opts.source,function(i,val){
                sourceList+='<source src="'+val+'">';
            });
            var preload=this._opts.preload ? ' preload':'',
                autoplay=this._opts.autoplay ? ' autoplay':'',
                loop=this._opts.loop ? ' loop':'';
            var musicStr='\
                <div class="mod-music">\
                    <audio'+preload+autoplay+loop+'>\
                        '+sourceList+'\
                    </audio>\
                </div>\
            ';
            this.mod=$(musicStr);
        },
        bindEvent:function(){
            var self=this;
            self.audio=self.mod.find('audio')[0];
            if(self._opts.isSupport){
                self.audio.oncanplay=function(){
                    self.mod.addClass('is-play');
                    self.mod.on(self._click,function(){
                        if(!$(this).hasClass('is-pause')){
                            $(this).addClass('is-pause');
                            self.audio.pause();
                        }else{
                            $(this).removeClass('is-pause');
                            self.audio.play();
                        }
                    });
                }
            }else{
                self.mod.hide();
                console.log('浏览器不支持所提供的音频资源格式！');
            }
        },
        resetCSS:function(){
            var left,top,right,bottom;
            if(this._opts.left&&this._opts.top){
                left=this._opts.left+'px',top=this._opts.top+'px',right='',bottom='';
            }else if(this._opts.left&&this._opts.bottom){
                left=this._opts.left+'px',bottom=this._opts.bottom+'px',right='',top='';
            }else if(this._opts.right&&this._opts.top){
                right=this._opts.right+'px',top=this._opts.top+'px',left='',bottom='';
            }else if(this._opts.right&&this._opts.bottom){
                right=this._opts.right+'px',bottom=this._opts.bottom+'px',left='',top='';
            }
            this.mod.css({
                'width':this._opts.size+'px',
                'height':this._opts.size+'px',
                'left':left,
                'top':top,
                'right':right,
                'bottom':bottom
            })
        },
        audioTest:function(){
            var self=this;
            $.each(self._opts.source,function(i,val){
                if( typeof val !== 'undefined' && self.canPlayType( val ) ){
                    self._opts.isSupport = true;
                    return false;
                }
            })
        },
        canPlayType:function( file ){
            var audioElement = document.createElement( 'audio' );
            return !!( audioElement.canPlayType && audioElement.canPlayType( 'audio/' + file.split( '.' ).pop().toLowerCase() + ';' ).replace( /no/, '' ) );
        },
        play:function(){
            this.mod.removeClass('is-pause');
            this.audio.play();
        },
        pause:function(){
            this.mod.addClass('is-pause');
            this.audio.pause();
        }
    });
    Music.prototype.constructor = Music;

    return Music

});