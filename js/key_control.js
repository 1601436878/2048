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

	switch(dir){
		case 0:alert("左");break;
		case 1:alert("上");break;
		case 2:alert("右");break;
		case 3:alert("下");break;
	}
}

document.onkeydown = keyDirect;			// 键盘的按下事件