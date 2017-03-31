var contain = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var numbercells = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var game_div = get_divs();


// 获取16个小方格
function get_divs(){
	var divs = document.getElementsByTagName("div");
	var data = new Array();
	for(var i = 0 ; i < divs.length; i++){
		if(divs[i].getAttribute("class") == "game-col"){

			data.push(divs[i]);
		};
	}
	return data;
}

// 初始化4*4的游戏界面
function init(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4; j++){
			var data = document.getElementById(i+"-"+j);
			data.style.top = getPosTop(i,j)+"px";
			data.style.left = getPosLeft(i,j)+"px";
			console.log("x :%d  y:%d",getPosLeft(i,j),getPosTop(i,j))
		}
	}
	initGrid();
	init_block();
}


// 随机产生游戏最开始时的两个方块
function initGrid(){
	// var x1 = random(0,3);
	// var y1 = random(0,3);
	// var x2 = random(0,3);
	// var y2 = random(0,3);

	var x1 = parseInt(Math.floor(Math.random()*4));
	var y1 = parseInt(Math.floor(Math.random()*4));
	var x2 = parseInt(Math.floor(Math.random()*4));
	var y2 = parseInt(Math.floor(Math.random()*4));

	while(x1 == x2 && y1==y2){
		var x2 = parseInt(Math.floor(Math.random()*4));
		var y2 = parseInt(Math.floor(Math.random()*4));
	}

	contain[x1][y1] = Math.random()>0.5 ?2:4;;
	contain[x2][y2] = Math.random()>0.5 ?2:4;;									//alert(x1+" "+y1+" "+x2+" "+y2);	

	// for(var i = 0 ; i< contain.length; i++){
	// 	for(var j = 0 ; j < contain[i].length; j++){
	// 		document.write("<font size='7' >"+contain[i][j]+" </font>");
	// 	};
	// 	document.write("<br/>");
	// }
}


// 生成 y
function getPosTop(i,j){
	return 20 + 120 * i;
}

// 生成 x
function getPosLeft(i,j){
	return 20 + 120 * j;
}





// 最先执行initGrid()
window.onload = function(){

	init();
}