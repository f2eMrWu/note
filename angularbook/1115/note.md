## 运行块
```
angular.module('myApp',[])
.run(function($rootScope, AuthService){
	$rootScope.$on('$routeChangeStart', function(evt,next,current){
	//no login
	if(!AuthService.userLoggedIn()){
		if(next.templateUrl === 'login.html'){
			//do nothing
		}else{
			$location.path('/login');
		}
	}
	})
})
```
run接受一个参数
initializeFn(函数)AngularJS在注入器创建后会执行这个函数

## 多重视图和路由
```
angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/login',{
		templateUrl: 'views/login.html',
		controller: 'loginController'
	})
	.otherwise({//没有如何路由的时候跳转到/路由
		redirectTo: '/'
	})
}]);
```
用config进行控制
* $location服务
1 path() 参数为空get 设置参数set
2 replace() 不能后退
3 absUrl() 获取完成url
4 hash() 获取hash片段
5 host() get host
6 port() get port
7 protocaol get url 协议
8 search() 获取查询串
	我们可以向这个方法中传入新的查询参数，来修改URL中的查询串部分：
	// 用对象设置查询
	$location.search({name: 'Ari', username: 'auser'});
	// 用字符串设置查询
	$location.search('name=Ari&username=auser');

## 路由模式

### 标签模式
### html5模式

## Service
创建服务,test就是angular一个服务的名字
angular.module()
.factory('test', function(){
	var service = {};
	return service;
})

## $http
$http.jsonp("/api/users.json?callback=JSON_CALLBACK");
必须包含JSON_CALLBACK

