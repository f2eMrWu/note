# angular学习笔记

* ng-app声明angular脚本的作用域

## 双向数据绑定
```
Your name: <input type="text" ng-model='yourname'>
<hr>
Hello {{yourname || 'World'}}
```
* ng-model绑定模型变量

* 通过ng-controller 来获取控制器 
```
<html ng-app>
<head>
  ...
  <script src="lib/angular/angular.js"></script>
  <script src="js/controllers.js"></script>
</head>
<body ng-controller="PhoneListCtrl">

  <ul>
    <li ng-repeat="phone in phones">
      {{phone.name}}
    <p>{{phone.snippet}}</p>
    </li>
  </ul>
</body>
</html>
```
# control代码
```
function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}
```
***
一开始引用的1.5版本的报错，引用1.2版本后ok.不同版本api有区别，一下的api文档链接;
1.2版本中 ng-controler = fn下面的代码都处在 fn的$scope中
https://code.angularjs.org/1.3.0-beta.1/docs/api/ng/directive/ngController

## ng-repeat 遍历渲染 等同于一个for循环

## filter:query 删选 看demo3
## orderBy:orderProp 排序 demo3


## Question
* Angular作用域对象？
* AngularJS通过作用域来保持数据模型与视图界面UI的双向同步。一旦模型状态发生改变，AngularJS会立即刷新反映在视图界面中，反之亦然。
* 底层服务包括依赖注入，XHR、缓存、URL路由和浏览器抽象服务。???
* angular手动引导
1. 注入器(injector)将用于创建此应用程序的依赖注入(dependency injection)；
2. 注入器将会创建根作用域作为我们应用模型的范围；
3. AngularJS将会链接根作用域中的DOM，从用ngApp标记的HTML标签开始，逐步处理DOM中指令和绑定。
第二个input增加了ng-model的情况下为什么value值会改变但是不显示
```
<input type="text" ng-model='age'>
<input type="text" ng-model='oldAge' value='{{age}}'>
```


