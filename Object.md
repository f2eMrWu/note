#创建对象

## 工厂模式
```
function createObj(name, age){
	var o = new Object();
	o.name = name;
	o.age = age;
	return o;
}
var mrwu = createObj();
```

## 构造函数
```
function Person(name, age){
	this.name = name;
	this.age = age;
}
var mrwu = new Person();
```

