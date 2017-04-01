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


// 完成游戏界面的初始化
function resetGrid(){

	// 随机生成两个方块的位置并保存在contain中
	var x1 = parseInt(Math.floor(Math.random()*4));
	var y1 = parseInt(Math.floor(Math.random()*4));
	var x2 = parseInt(Math.floor(Math.random()*4));
	var y2 = parseInt(Math.floor(Math.random()*4));

	while(x1 == x2 && y1==y2){
		var x2 = parseInt(Math.floor(Math.random()*4));
		var y2 = parseInt(Math.floor(Math.random()*4));
	}

	contain[x1][y1] = Math.random()>0.2 ?2:4;
	contain[x2][y2] = Math.random()>0.2 ?2:4;


	// 创建16个二层方块,没有设定位置，都重叠在第一个方块上
	var father = document.getElementById("game-container");
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			var temp = document.createElement("div");
			temp.setAttribute("class","number-cell");
			numbercells[i][j] = temp;
			father.appendChild(temp);
		}
	}

	// 给所有的方块设定位置，有数字的方块加上样式，没有数字的方块的大小是0，位置一层方块的中心一点
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			if(contain[i][j] == 0){
				numbercells[i][j].style.top = getPosTop(i,j)+50+"px";
				numbercells[i][j].style.left = getPosLeft(i,j)+50+"px";
				numbercells[i][j].style.width = 0;
				numbercells[i][j].style.height = 0;
			}else{
				numbercells[i][j].style.top = getPosTop(i,j)+"px";
				numbercells[i][j].style.left = getPosLeft(i,j)+"px";
				numbercells[i][j].style.width = 100+"px";
				numbercells[i][j].style.height = 100+"px";
				numbercells[i][j].style.backgroundColor = "red";
				var textNode = document.createTextNode(contain[i][j]);		// 向方块中写入文本
				numbercells[i][j].appendChild(textNode);
			}

			console.log("num:%d  x :%s  y:%s",contain[i][j],numbercells[i][j].style.left,numbercells[i][j].style.top)
		}
	}
}


// 初始化第一层的4*4游戏界面
function init(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4; j++){
			var data = document.getElementById(i+"-"+j);
			data.style.top = getPosTop(i,j)+"px";
			data.style.left = getPosLeft(i,j)+"px";
			console.log("x :%d  y:%d",getPosLeft(i,j),getPosTop(i,j))
		}
	}
	resetGrid();
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