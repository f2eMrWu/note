(function(){
	var root = this;

	//缓存对象，效率更好
	var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	//
	var 
		push = ArrayProto.push,
		slice = ArrayProto.slice,
		toString = ObjProto.toString,
		hasOwnProperty = ObjProto.hasOwnProperty;


	//es5方法

	var 
		nativeIsArray = Array.isArray,
		nativeKeys = Object.keys,
		nativeBind = FuncProto.bind,
		nativeCreate = Object.create;

	// Naked function reference for surrogate-prototype-swapping.
  	var Ctor = function(){};

  	/*
	** instanceof 需要制定具体类型
	** ele instance of Object 
	** eg. function a(){};
		a instanceof Function //true
  	*/ 

  	var _ = function(obj){
  		if(obj instanceof _) return obj;
  		if(!(this instanceof _)) return new _(obj);
  		this._wrapped = obj;
  	};

  	//如果模块化调用的话,作为模块的exports输出
  	//否则 保存在root对象上
  	if(typeof exports !== 'undefined'){
  		if (typeof module !== 'undefined' && module.exports){
  			exports = module.exports = _;
  		};
  		exports._ = _;
  	} else {
  		root._  = _;
  	};

  	//current version
  	_.VERSION = '1.0.0';

  	// Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  //具体用处未知。。
  var optimizeCb = function(func, context, argCount) {
    //void 0指向真正的undeifned，防止undefined被修改，高版本
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };
  

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result 鈥� either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  //创建一个对象 如果有Object.create(nativeCreate)方法就执行
  //否则用Ctor构造函数中介
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  //定义最大数
  //定义判断类数组方法，有length属性的的对象
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var isArrayLike = function(collection) {
    var length = collection != null && collection.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

   //集合方法
   _.each = _.forEach = function(obj, iteratee, context){
   	iteratee = optimizeCB(iteratee, context);
   }


})()