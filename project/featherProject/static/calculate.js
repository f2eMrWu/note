

require.async(['common:jquery','./raphael.js'], function($){
	//画笔颜色设置成于背景色相同
	var strokeColor = '#f6f6f6';


	var paper = Raphael('paper', 320, 320);
	paper.customAttributes.arc = function (value, total, R) {
	    var alpha = 360 / total * value,	//将360度分成total份，再乘以value
	        a = (90 - alpha) * Math.PI / 180,	//算出角度a
	        x = 160 + R * Math.cos(a),			//算出x坐标
	        y = 160 - R * Math.sin(a),			//算出y左边
	        color = "#ffa544",
	        path;
	    if (total == value) {//path第一个参数为画布长度一半,
	    	/*
			 M参数为
			 终点坐标X
			 终点坐标Y
	    	*/
	    	/*A参数为
			 椭圆半轴大小
			 椭圆半轴大小
			 椭圆的X轴与水平方向顺时针方向夹角
			 1表示大角度弧线，0为小角度弧线
			 1为顺时针，0为逆时针
			 终点坐标X
			 终点坐标Y
	    	*/ 
	        path = [["M", 160, 160], ["A", R, R, 0, 1, 1, 159.99, 160 - R]];
	    } else {
	        path = [["M", 40, 160], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
	    }
	    //返回一个path 和画笔颜色
	    return {path: path, stroke: color}; 
	};
	//圆从大到小
	var c = paper.path("M10 10L90 90");
	var  R = 120,
    init = true,
    param = {stroke: '#000000', "stroke-width": 26 , "fill":'rgba(0,0,0,0)'}; 
	var sec = paper.path().attr(param).attr({arc: [1, 3, R]});
	window.a = sec;
	window.paper = paper;
	sec.attr({arc: [2, 3, R]});

});