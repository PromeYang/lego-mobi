define(function(require, exports, module) {
    
    var Widget= require('modulePath/widget');

    function Video(container,opts){
        this._opts={
            bgColor: '#000',
            controls: false,
            preload: false,
            autoplay: false,
            loop: false,
            source:[],
            isSupport: false
        };

        this._opts=$.extend({},this._opts,opts);

        this.videoTest();

        this._init(container);
    }
    Video.prototype=$.extend({},Widget,{
        renderDOM:function(){
            var self=this;
            var sourceList='';
            $.each(this._opts.source,function(i,val){
                sourceList+="<source src='"+val+"' type='"+self.sourceType(val)+"'>";
            });
            var preload=this._opts.preload ? ' preload':'',
                autoplay=this._opts.autoplay ? ' autoplay':'',
                loop=this._opts.loop ? ' loop':'';
                controls=this._opts.controls ? ' controls':'';
            var videoStr='\
                <div class="mod-video">\
                    <video'+controls+preload+autoplay+loop+'>\
                        '+sourceList+'\
                    </video>\
                    <div class="mod-video__mask"></div>\
                </div>\
            ';
            this.mod=$(videoStr);
        },
        bindEvent:function(){
            var self=this;
            self.video=self.mod.find('video')[0];
            if(self._opts.isSupport){
                self.mod.addClass('is-play');
                self.video.oncanplay=function(){
                    self.mod.on(self._click,function(){
                        if($(this).hasClass('is-play')||$(this).hasClass('is-pause')){
                            self.play();
                        }else{
                            self.pause();
                        }
                    });
                }
            }else{
                self.mod.hide();
                console.log('浏览器不支持所提供的视频资源格式！');
            }
        },
        resetCSS:function(){
            this.mod.css({
                'background-color': this._opts.bgColor
            })
            if(this._opts.controls) this.mod.find('.mod-video__mask').hide();
        },
        videoTest:function(){
            var self=this;
            $.each(self._opts.source,function(i,val){
                if( typeof val !== 'undefined' && self.canPlayType( val ) ){
                    self._opts.isSupport = true;
                    return false;
                }
            })
        },
        canPlayType:function( file ){
            var videoElement = document.createElement( 'video' );
            return !!( videoElement.canPlayType && videoElement.canPlayType( 'video/' + file.split( '.' ).pop().toLowerCase() + ';' ).replace( /no/, '' ) );
        },
        sourceType:function( file ){
            var sourceType='';
            switch( file.split( '.' ).pop().toLowerCase() ){
                case 'mp4' : sourceType='video/mp4; codecs="avc1.4D401E, mp4a.40.2"';break;
                case 'ogg' : sourceType='video/ogg; codecs="theora, vorbis"';break;
                case 'webm' : sourceType='video/webm; codecs="vp8.0, vorbis"';break;
            }
            return sourceType;
        },
        play:function(){
            this.mod.removeClass('is-play is-pause');
            this.video.play();
        },
        pause:function(){
            this.mod.addClass('is-pause');
            this.video.pause();
        }
    });
    Video.prototype.constructor = Video;

    return Video

});