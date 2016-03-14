#class的用法
将属性定义在constructor里面，函数之间不需要逗号隔开，写逗号会报错
```
class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  toString(){
     return '(' + this.x + ', ' + this.y + ')';
  }
}

const Point = class po{
	
}

let test = new Point();
```

```
const Point = class po{
	this.name = 1
	getName(){
		return po.name
	}
}
```
##这种定义下，po在内部可以调用，外部是通过Point调用
##不存在变量提升
***
#class继承
```
class ColorPoint extends Point {

  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }

}
```
##子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。(this的使用必须在使用super方法之后)


