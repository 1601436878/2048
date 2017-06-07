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
$(window).keydown(function(){
	keyDirect();
	generateNode();
	reFreshNum();
});


// 0:左 1:上  2:右  3:下
function moveTo(dir){
	switch (dir){
		case 0: moveLeft();  break;
		case 1: moveUp();	 break;
		case 2: moveRight(); break;
		case 3: moveDown();	 break;
	}
}

// 左移
function moveLeft (){
	var i,j;  
	for(i=0;i<4;i++){  
		for(j=0;j<3;j++){  
			if(contain[i][j] == contain[i][j+1]){
				contain[i][j] += contain[i][j+1];
				contain[i][j+1] = 0 ;
			}
			clearLeft();
		}
	}
}

// 右移
function moveRight (){
	var i,j;  
	for(i=0;i<4;i++){  
		for(j=0;j<3;j++){  
			if(contain[i][j] == contain[i][j+1]){
				contain[i][j+1] += contain[i][j];
				contain[i][j] = 0 ;
			}
			clearRight();
		}
	}
}

// 上移
function moveUp (){
	var i,j;  
	for(j=0;j<4;j++){  
		for(i=0;i<3;i++){  
			if(contain[i][j] == contain[i+1][j]){
				contain[i][j] += contain[i+1][j];
				contain[i+1][j] = 0 ;
			}
			clearUp();
		}
	}
}	

// 下移
function moveDown (){
	var i,j;  
	for(j=0;j<4;j++){  
		for(i=3;i>0;i--){  
			if(contain[i][j] == contain[i-1][j]){
				contain[i][j] += contain[i-1][j];
				contain[i-1][j] = 0 ;
			}
			clearDown();
		}
	}
}


// 清0
function clearLeft(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4  ; j++){
			for(var k = j ; k >= 0 ; k-- ){
				if(contain[i][j]!= 0 && contain[i][k] == 0){
					contain[i][k] = contain[i][j];
					contain[i][j] = 0 ;
				}
			}
		}
	}
}

function clearRight(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 3 ; j >= 0  ; j-- ){
			for(var k = j ; k < 4  ; k++ ){
				if(contain[i][j]!= 0 && contain[i][k] == 0){
					contain[i][k] = contain[i][j];
					contain[i][j] = 0 ;
				}
			}
		}
	}
}

function clearUp(){
	for(var j = 0 ; j < 4 ; j++){
		for(var i = 0 ; i <4  ; i++){
			for(var k = i ; k >=0  ; k-- ){
				if(contain[i][j]!= 0 && contain[k][j] == 0){
					contain[k][j] = contain[i][j];
					contain[i][j] = 0 ;
				}
			}
		}
	}
}

function clearDown(){
	for(var j = 0 ; j < 4 ; j++){
		for(var i = 3 ; i >= 0 ; i--){
			for(var k = i ; k < 4 ; k++ ){
				if(contain[i][j]!= 0 && contain[k][j] == 0){
					contain[k][j] = contain[i][j];
					contain[i][j] = 0 ;
				}
			}
		}
	}
}


function generateNode(){
	var x = parseInt(Math.floor(Math.random()*4));
	var y = parseInt(Math.floor(Math.random()*4));
	while(contain[x][y] != 0){
		var x = parseInt(Math.floor(Math.random()*4));
		var y = parseInt(Math.floor(Math.random()*4));		
	}

	contain[x][y] = Math.random()>0.2 ?2:4;
}
