var contain = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];		// 储存每个方块中的数字
var numbercells = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];	// 可移动的16个方块的对象
var game_div = get_divs();
var color = ["#EEE4DA","#EDE0C8","#C39061","#F59563","#F67C5F","#F65E3B","#72CFED","#61CCED","#2AC0E4","#13BAE2","#00C4EC"];


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


// 完成游戏界面（第二层）的初始化
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
	var father = $("#game-container");
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			var temp = $("<div></div>");
			temp.attr("class","number-cell");
			numbercells[i][j] = temp ;
			father.append(temp);
		}
	}

	reFreshNum();		// 根据创建的位置，刷新界面
}

function reFreshNum(){
	// 给所有的方块设定位置，有数字的方块加上样式，没有数字的方块的大小是0，位置一层方块的中心一点
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			if(contain[i][j] == 0){
				numbercells[i][j].html("");
				// numbercells[i][j].css("top",getPosTop(i,j)+50+"px");
				// numbercells[i][j].css("left",getPosLeft(i,j)+50+"px");
				// numbercells[i][j].css("width",0);
				// numbercells[i][j].css("height",0);
				numbercells[i][j].animate({
					top:getPosTop(i,j)+50+"px",
					left:getPosLeft(i,j)+50+"px",
					width:0,
					height:0
				},200);
			}else{
				// numbercells[i][j].css("top",getPosTop(i,j)+"px");
				// numbercells[i][j].css("left",getPosLeft(i,j)+"px");
				// numbercells[i][j].css("width",100+"px");
				// numbercells[i][j].css("height",100+"px");
				numbercells[i][j].animate({
					top:getPosTop(i,j)+"px",
					left:getPosLeft(i,j)+"px",
					width:"100px",
					height:"100px"
				},200);
				numbercells[i][j].css("background-color",getColor(contain[i][j]))

				numbercells[i][j].html(contain[i][j]);
			}

			console.log("num:%d  x :%s  y:%s",contain[i][j],numbercells[i][j].css("left"),numbercells[i][j].css("top"))
		}
	}	console.log("------------------------------")
}


// 初始化第一层(底层面板)的4*4游戏界面
function init(){
	refreshForRestart();
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4; j++){
			var cell = $("#"+i+"-"+j);
			cell.css("top",getPosTop(i,j)+"px");
			cell.css("left",getPosLeft(i,j)+"px");
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

function getColor(num){
	for(var i = 1 ; i < 13; i++){
		if (Math.pow(2,i) == num){
			return color[i-1];
		}
	}
	return "green";
}

function refreshForRestart(){
	contain = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	numbercells = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	$(".number-cell").remove();
}

// 加载完成时执行initGrid()
$(function(){
	init();
});

