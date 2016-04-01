# Module

* ES6模块不是对象，而是通过export命令显式指定输出的代码，输入时也采用静态命令的形式。
```
import { stat, exists, readFile } from 'fs';
```
* 模块内默认是严格模式
## export命令
* 模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

```
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```
```
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
```
* 以上两种写法都是对外输出变量
```
export function multiply(x, y){
	return x*y;
}
```
* 用as重命名
```
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```

## import命令
```
// main.js

import {firstName, lastName, year} from './profile';

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
```
* 注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。

## 模块的整体加载 

# Q
循环加载的差异