angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/login',{
		templateUrl: 'views/home.html',
		controller: 'loginController'
	})
	.otherwise({//没有如何路由的时候跳转到/路由
		redirectTo: '/'
	})
}]);

angular.module('myApp.services', [])
.factory('githubService', function($http){
	var githuburl = '';
	var runUserRequest = function(username, path){
		return $http({
			method: 'JSONP',
			url: githubUrl + '/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
		});
	};
	
	return{
		events: function(username){
			return runUserRequest(username, 'events');
		}
	}
});

//使用服务
angular.module('myApp', ['myApp.services'])
.controller('ServiceController', function($scope, githubService){
	$scope.events = githubService.events('auser');
	$scope.$watch('username', function(newUserName){
		githubService.event(newUserName)
		.success(function(data, status, headers){
			$scope.events = data.data
		})
	})
})

