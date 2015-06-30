/*
 * @file: 组件基类
 * @update: 2015-06-30 09:52:32
 */

define(function(require, exports, module) {
    // 所有组件的基类，依赖seajs-lego
    require('zepto'),require('touch');

    function Widget(){
        // 组件主体
        this.mod=null;
    }
    Widget.prototype={
        // 单击类型
        _click:'touchstart' in document ? 'tap' : 'click',
        // 初始化，生命周期开始
        _init:function(container){
            this.renderDOM();
            if(this.mod) $(container||document.body).append(this.mod);
            this._handlers={};
            this.resetCSS();
            this.bindEvent();
        },
        // 绑定自定义事件
        on:function(type,handler){
            if(typeof this._handlers[type] == 'undefined') this._handlers[type]=[];
            this._handlers[type].push(handler);
            return this;
        },
        // 触发自定义事件
        trigger:function(type,data){
            if(this._handlers[type] instanceof Array){
                var handlers=this._handlers[type];
                for(var i=0;i<handlers.length;i++){
                    handlers[i](data);
                }
            }
        },
        // 解除绑定事件
        off:function(type){
            if(this._handlers[type] instanceof Array) delete this._handlers[type];
        },
        // 接口:添加dom节点，用于弹窗类、消息类
        renderDOM:function(){},
        // 接口:监听事件
        bindEvent:function(){},
        // 接口:重写样式
        resetCSS:function(){},
        // 动画处理函数
        animate:function(){},
        // 接口:销毁前的处理函数
        destructor:function(){},
        // 销毁，生命周期结束
        _destroy:function(){
            this.destructor();
            if(this.mod) this.mod.off().remove();
        }
    };
    
    return new Widget();
});