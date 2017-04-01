var color = ["EEE4DA","C8E0ED","79B1F2","548DEC","5F7CF6","3759EA","72CFED","61CCED","2AC0E4","13BAE2","00C4EC"];

// 判断按键的类型----判断方向
function keyDirect(){
	var keyNum = event.keyCode;
	var dir ;
	if(keyNum == 37){
		dir = 0;
	}else if(keyNum == 38){
		dir = 1;
	}else if(keyNum == 39){
		dir = 2;
	}else if(keyNum == 40){
		dir = 3;
	}

	moveTo(dir);
}


// 键盘的按下事件
document.onkeydown = function(){
	keyDirect();
	generateNode();
}			



function toLeft(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 1 ; j < 4 ; j++){
			if(contain[i][j] != 0 ){
				for(var k = 0 ; k < j ; k++){
					if(contain[i][k] == 0 && isNoObstacle(i,k,j)){
						// 从contain[i][j] ---> contain[i][k] 

						var from = document.getElementById(i+"-"+j);
						var to = document.getElementById(i+"-"+k);

						from.style.top = getPosTop(i,k);
						from.style.left = getPosLeft(i,k);

						contain[i][k] = contain[i][j];
						contain[i][j] = 0;
					}
					else if(contain[i][k] == contain[i][j] && isNoObstacle(i,k,j)){
						// 从contain[i][j] ---> contain[i][k] 并且更新 contain[i]][j]的值

						var from = document.getElementById(i+"-"+j);
						var to = document.getElementById(i+"-"+k);

						from.style.top = getPosTop(i,k);
						from.style.left = getPosLeft(i,k);

						contain[i][k] += contain[i][j];		// 更新方块上的数字
						contain[i][j] = 0 ;
					}
				}
			}
			continue;
		}
	}
	reFreshNum();
}

// 判断两个方块之间是否有障碍
function isNoObstacle(row,start,end){
	for(var i = start ; i < end; i++){
		if(contain[row][i] != 0 ){
			return false;
		}
	}
	return true;
}

// 判断是否可以移动
function canMove(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 1 ; j < 4 ; j++){
			if(contain[i][j-1] == 0 || contain[i][j] == contain[i][j-1]){
				return true;
			}
		}
	}
	return false;
}

// 0:左 1:上  2:右  3:下
function moveTo(dir){
	switch (dir){
		case 0: toLeft();  break;
		case 1: break;
		case 2: toRight(); break;
		case 3: break;
	}
}


