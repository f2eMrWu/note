// var myModule = angular.module('myModule', []);

// //注射器加载完所有模块时，次方法执行一次
// myModule.run(function($templateCache){
// 	$templateCache.put('hello.html','<div>Hi everyone</div>')
// });

// myModule.directive('hello', function($templateCache){
// 	return {
// 		restrict: 'AEMC',  //属性 元素 注释 class
// 		template: $templat eCache.get('hello.html'), //可以用templateUlr代替
// 		replace: true
// 	}
// });

//transclude:true,

var myModule = angular.module('myModule', []);
// myModule.controller('MyCtrl1', ['$scope', function($scope){
// 	$scope.loadData1 = function(){
// 		console.log('加载数据完成11');
// 	}
// }]);
// myModule.controller('MyCtrl2', ['$scope', function($scope){
// 	$scope.loadData2 = function(){
// 		console.log('加载数据完成22');
// 	}
// }]);

// myModule.directive('loader', function(){
// 	return {
// 		scope:{},//独立的scope
// 		restrict:'AE',
// 		link:function(scope,element,attrs){
// 			 element.bind('mouseenter',function(event){
// 			 	scope.$apply(attrs.howtoload);
// 			 })
// 		}
// 	}
// })


