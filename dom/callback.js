var callback = {
	fnList: {},

	add:function(event,fn){
	
		if(this.fnList[event] === undefined){
			this.fnList[event] = [];
			this.fnList[event].push(fn);
		}else{
			this.fnList[event].push(fn);
		}
	},
	fire: function(event){
		
		for(var i = 0; i <this.fnList[event].length; i++){
			this.fnList[event][i]();
		}
	}
}