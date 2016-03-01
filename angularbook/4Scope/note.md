# 作用域

* 作用域是视图和控制器之间的胶水
* 提供了监视数据模型变化的能力
* $rootScope是所有socpe对象的最上层
* $scope是一个数据模型，不负责处理和操作

指令：将dom元素增强为可复用的dom组件的属性或与阿奴
值绑定： {{}}将表达式绑定到视图
过滤器： 在视图中使用的函数格式化
表单空间：检测输入

```
angular.module('myApp', []).controller('Ctrl', function($scope){
	$scope.name = 'world'
})
```
一直发现提示错误,然后发现需要让np-app=moduleName 才可以

scope的四个阶段（不是太了解以后再说。。）

* 穿件：$injector创建新作用域，新建控制器或指令运行将作用域传递进去
* 链接： 讲scope对象链接到视图中
* 更新
* 销毁 angular自己清理 也可以通过$scope.$destory()销毁

## 指令和作用域
* 指令通常不会创建自己的$scope
* 例外比如ng-controller和ng-repeat会穿件自作用于，附加到dom元素上