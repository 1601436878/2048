var contain = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
 var game_div = get_divs();

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

// 生成 y
function getPosTop(i,j){
	return 20 + 120 * i;
}

// 生成 x
function getPosLeft(i,j){
	return 20 + 120 * j;
}