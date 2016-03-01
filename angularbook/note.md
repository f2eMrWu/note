* {{}}内部通过|符号调用过滤器
* currency 过滤成货币
* date过滤时间

## 表单验证
<input type="text" ng-minlength = '5'>
<input type="text" ng-pattern = '[a-z]'>
<input type="email" name='email' ng-model='user.email'>
<input type="number" name='age' ng-model='user.age'>

<my-test></my-test>
angular.module('app',[])
	.directive('myTest', function(){
		return {
			restrict: 'E',
			template: '<a href="www.baidu.com">click</a>'
			replace:true //删除原始代码
		}
})
标签用-来区分，api中有驼峰区分
restrict E 元素 A属性 C 类 M注释