

//写一个服务
var myServiceApp = angular.module('MyServiceApp',[]);
myModule.controller('LoadDataCtrl', ['$scope', '$http', function($scope){
	 $http({
	 	method:'get',
	 	url: 'data.json'
	 }).success(function(){

	 }).error()

	 return {
	 	userList:function(username){
	 		return doRequest(username, 'userList');
	 	}
	 }

}])

myServiceApp.controller('ServiceController', ['$scope', '$timeout', 'userListService', function($scope){
	var timeout;
	$scope.$wtach('username', function(newUserName){
		if(newUserName){
			if(timeout){
				$timeout.cancel(timeout);
				timeout = $timeout(function(){
					userListService.userList(newUserName).success(function(){

					})
				},350)
			}
		}
	})
}])

/*
Service单例
由$injector负责实例化
整个应用生命周期存在
依赖注入
自己的服务在最后
*/

//Service, Provider, Factory本质都是Provice