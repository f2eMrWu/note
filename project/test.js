//low的实现方式
//不懂的知识点 闭包延长变量生命周期 继承ajax 不用多次判断sendTime
var sendTime = null;
var isActive = true;
$.smartAjax = function(flag,url,type,callback){
	if(typeof flag != 'number'){
		return false;
	}

	if(flag == 0){
		
		if(!sendTime || (new Date.getTime - sendTime) < 500 ){
			sendTime = new Date().getTime();
			$.ajax();
		}else{
			return false;
		}
	
	}

	if(flag == 1){
		if(isActive){
			isActive = false;
			$.ajax().alawasy(function(){
				isActive = true;
			})
		}
	}
}