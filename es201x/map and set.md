# Set

## 用法
* ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set本身是一个构造函数，用来生成Set数据结构。
```
var s = new Set();

[2,3,5,4,5,2,2].map(x => s.add(x)) //Set{2,3,5,4},通过add方法添加

for (let i of s) {console.log(i)} //用for of循环
```

var set = new Set([1,2]);
Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。
注：我在用chrome测试的时候，参数是类数组报错

set.size //2
size属性来知道个数

set.add(NaN);set.add(NaN);
set // Set{NaN}
在set内部NaN是相等的

## 实例的属性和方法
### 操作方法
* add(value)：添加某个值，返回Set结构本身。
* delete(value)：删除某个值，**返回一个布尔值，表示删除是否成功。
* has(value)：返回一个布尔值，表示该值是否为Set的成员。
* clear()：清除所有成员，**没有返回值。

es6下的函数去重
function dedupe(array){
	return Array.from(new Set(array));
}

Array.from 讲类数组转变为数组 通过Set不能重复的形式去重（[].slice.call(arrayLike) es5中的方法）

## 遍历方法

* keys()：返回一个键名的遍历器
* values()：返回一个键值的遍历器
* entries()：返回一个键值对的遍历器
* forEach()：使用回调函数遍历每个成员





## Q
* NaN的判断




