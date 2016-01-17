// 实现append prepend inserbefore inserafter remove empty replacewith wrap on off diggate css html text attr addClass trigger

(function(window,document){



	function dom(eles){

		if(arguments.length === 0){
			this.elements = [];
		}else{
			this.elements = document.querySelectorAll(eles[0]);
		}
		// for(var i = 0; i < eles.length; i++){
		// 	var ele = document.getElementById(eles[i]);
		// 	this.elements.push(ele);
		// }
	};

	dom.prototype = {
		extend:function(obj){

			for(var i in obj){
				this[i] = obj[i]
			}

		},

		each:function(callback){
			for(var i = 0; i < this.elements.length; i ++){
				callback.call(this.elements[i],i,this.elements[i])
			}
		},

		css: function (style,value){
				if(arguments.length == 1){
					return window.getComputedStyle(this.elements[0])[style];
				}else{
					this.each(function(n,v){
						v.style[style] = value;
						// this.elements[0].style[style] = value;
					})
					
					return this;
				}
			},

		attr:function(name,value){
			if(arguments.length == 1){
				return this.elements[0].getAttribute(name);
			}else{
				this.each(function(n,v){
					v.setAttribute(name,value);
				})
				
				return this;
			}
		}

	};

	dom.prototype.extend({

		addClass:function(className){
			if(arguments.length === 0){
				return this;
			}
			var that = this;
			var nameList = className.split(/\s+/);
			this.each(function(n,v){
				var list = v.classList;
				// nameList.each(function(name,item){
				// 	list.add(item)
				// })
				for(var i = 0; i < nameList.length; i++){
					list.add(nameList[i]);
				}
	
			})
		},
		removeClass:function(className){

			if(arguments.length === 0){
				this.each(function(n,v){
					v.className = '';
				})
				
			}else{

				
				var nameList = className.split(/\s+/);
				this.each(function(n,v){
					var list = v.classList;
					// nameList.each(function(name,item){
					// 	list.add(item)
					// })
					for(var i = 0; i < nameList.length; i++){
						list.remove(nameList[i]);
					}
		
				})

			}

			return this;
		},
		toggleClass:function(className){
			if(arguments.length !== 0){
				var nameList = className.split(/\s+/);
				this.each(function(n,v){
					var list = v.classList;
					// nameList.each(function(name,item){
					// 	list.add(item)
					// })
					for(var i = 0; i < nameList.length; i++){
						list.toggle(nameList[i]);
					}
		
				})
			}
			return this;
		},
		html:function(string){
			if(arguments.length == 0){
				return this.elements[0].innerHTML;
			}else{

				this.each(function(n,v){
					v.innerHTML = string;
				})
				return this;

			}
		},
		remove:function(){
			if(arguments.length === 0){
				this.each(function(n,v){
					v.parentNode.removeChild(v)	
				})
			}
		},
		empty:function(){

			this.each(function(n,v){
				v.innerHTML = '';
			})

			return this;
		},

		append:function(htmlString){

			//插入子节点,nodeType == 1 是
			if(htmlString.nodeType == 1){

				this.each(function(n,v){
					//这里使用appendChild复制htmlString 每次都为把节点取出后再插入,所以这次每次都执行一次克隆
					v.appendChild(htmlString.cloneNode(true))
				})
			}else if(typeof htmlString === 'string' || typeof htmlString === 'number'){
				this.each(function(n,v){

					v.innerHTML += htmlString

				})
				
			}else{
				console.error('typeof htmlString is invalid')
			}
		},

		prepend:function(node){
				this.each(function(n,v){
					//这里使用appendChild复制htmlString 每次都为把节点取出后再插入,所以这次每次都执行一次克隆
					v.insertBefore(node,v.children[0])
				})
		},

		after:function(htmlString){

			if(htmlString.nodeType == 1){
				this.each(function(n,v){

					v.parentNode.insertBefore(htmlString.cloneNode(true),v.nextSibling)

				})
			}else if(typeof htmlString === 'string' || typeof htmlString === 'number'){
				this.each(function(n,v){
					var html = v.innerHTML;

					/*insertAdjacentText 
					  insertAdjacentText
					*/
					v.insertAdjacentText('afterEnd',htmlString)
				})
			}
			
		},

		wrap:function(ele){
			if(ele.nodeType === 1){
				this.each(function(k,v){
					ele.appendChild(v.cloneNode(true));
					v.parentNode.replaceChild(ele,v);
				})
			}
		}

	}) 

	dom.prototype.extend({
		on:function(event,selector,handle){ //selector暂时
			if(handle === undefined){
				handle = selector;
				this.each(function(k,v){
					v.addEventListener(event,handle);
				})
			}else{
				if(typeof selector === 'string'){
					this.each(function(k,v){
						v.addEventListener(event,function(e){
							var target = e.target;
							//这里为了使得selector后代元素点击也触发事件，写了一个判断parent是否存在的方法
					
						})
					})			}
			}
		},
		hasParent:function(ele,target){
			var parent = ele.parentNode;
			if(parent.nodeName == 'BODY'){
				return false;
			}
			if(parent == target){
				return true;
			}else{
				ele = parent;
				arguments.callee();
			}
		}
	})



	// //增

	/*
	HTMLElement .classList 原型对象
	DOMTokenList {
		
		add:增加，如不传入参数不操作
		remove:删除，如不传入参数不操作
		toggle:有删除 没有增加
		contains:是否包含
		item:索引


	}

	*/



	


	window.$ = function(){
		return new dom(arguments)
	}

})(window,document)	








