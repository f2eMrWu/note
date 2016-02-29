# FLEXBOX 
## 基本概念
* main axis direction depend on justify-content
* main-start main-end
* main-size width or height
* cross axis
* cross-start cross-end
* cross size height or width

## flexbox属性
* display: flex | inline-flex
* flex-direction row | row-reverse | column | column-reverse
* flex-wrap: nowrap | wrap | wrap-reverse //有使用固定尺寸情况下
* flex-flow: 复合属性 <flex-direction> || flex-wrap
* justify-content: flex-start | flex-end | center | spce-between | spce-around
* align-items: flex-start | flex-end | center | baseline | stretch

## 子元素
* order
* flex-grow  number
* flex-shrink ??? 
http://www.css88.com/book/css/properties/flex/flex-shrink.htm
简单理解为 当flex-container不换行时候，flex-item定义width 相加超过总宽度时候的比例
```
<ul id="flex">
	<li class="flex-item">1</li>
	<li class="flex-item">2</li>
	<li class="flex-item">3</li>
</ul>
<style>
	#flex{
	display:flex;
	width:300px;
	}
	.flex-item:{
		width:200px;
	}
</style>
```
* flex-basis ???
* flex: none | <flex-grow> flex-shrink? || flex-basis
* align-self

## demo and tips
flex的影响只限于子元素 不继承
设置子元素 margin: auto; 进行居中操作 整个块的居中而不是文字的居中he
flex-basis:10px; width:50px; flex-item 为10px

##question
* ul flex 子元素 li 宽度变成inline 而不是100%



