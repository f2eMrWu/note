pblishExternalAPI
setupModuleLoader
provider $parse $rootScope
angularInit
bootstrap: 创建injector

if(window.angular.bootstrap){
	console.log()
}

bindJQuery();

publishExternalAPI(angular)

angular方法

bootstrap
copy
extend
equals
forEach
injector
noop
bind
toJson
fromJson
identity
isUndefined
isDefined
isString
isFunction
isObject
isNumber
isElement
isArray
version
isDate
lowercase
uppercase
callbacks
$$minErr
$$csp
module

var myModule = angular.module('MyModule',[]);
var MyCtrl = myModule.controller('',[])

推断型注入： 函数参数名称必须和被注入的对象相同（压缩有bug）
声明注入 MyCtrl.$inject($scope)
内联注入 myModule.controller('MyCtrl',['$scope', function($scope){
	
}])

myModule.factory('game',function(){
	return {
		gameName:'吃豆子'
	}
})

myModule.controller(
	$injector.invoke(function(game){
	
	})
)

