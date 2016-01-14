1.jquery.js
	总的结构 ，对外暴露出jQuery 和 $ 两个接口

	define( [
		一堆依赖模块
	], function( jQuery ) {

	return ( window.jQuery = window.$ = jQuery );

	} );

2. core.js
    //构造函数jQuery
    jQuery = function(selector,context){
		return new jQuery.fn.init(selector, context); 
    }

    //将jQuery原型对象赋值给jQuery.fn
    jQuery.fn = jQuery.prototype = {};

    //分别给jQuery 和 jQuery原型对象添加extend方法
    jQuery.extend = jQuery.fn.extend = function(){}

    //拓展jQeury静态方法
    jQuery.extend({

    })

    function isArrayLike(){};

    return jQuery;

3.init.js
	//对外暴露的构造函数 , sizzle 选择器使用
	init = jQuery.fn.init = function( selector, context, root ) {
		return jQuery.makeArray( selector, this );
	}

	init.prototype = jQuery.fn;

	return init
