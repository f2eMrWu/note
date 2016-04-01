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

# WeakSet
* 成员只能是对象
* 其次，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。
* WeakSet的一个用处，是储存DOM节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

# Map
* 键值对中的键可以不是字符串
* var map = new Map([["name", "张三"], ["title", "Author"]]); 
  //Map {"name" => "张三", "title" => "Author"}
* 实际上键名与内存绑定，解决了同名属性碰撞的问题
## 方法
* set(key, value)
* get(key)
* size属性
* has(key)
* delete(key)
* clear()
## 遍历方法
* keys()：返回键名的遍历器。
* values()：返回键值的遍历器。
* entries()：返回所有成员的遍历器。
* forEach()：遍历Map的所有成员。

## Q
* NaN的判断




