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



// 0:左 1:上  2:右  3:下
function moveTo(dir){
	switch (dir){
		case 0: break;
		case 1: break;
		case 2: toRight(); break;
		case 3: break;
	}
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

document.onkeydown = keyDirect;			// 键盘的按下事件