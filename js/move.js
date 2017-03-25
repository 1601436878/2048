
// 随机产生游戏最开始时的两个方块
function initGrid(){
	var x1 = random(0,3);
	var y1 = random(0,3);
	var x2 = random(0,3);
	var y2 = random(0,3);

	while(x1 == x2 && y1==y2){
		var x2 = random(0,3);
		var y2 = random(0,3);
	}

	contain[x1][y1] = 2;
	contain[x2][y2] = 2;									//alert(x1+" "+y1+" "+x2+" "+y2);	

	// for(var i = 0 ; i< contain.length; i++){
	// 	for(var j = 0 ; j < contain[i].length; j++){
	// 		document.write("<font size='7' >"+contain[i][j]+" </font>");
	// 	};
	// 	document.write("<br/>");
	// }
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

// 但按下右键时，所有方块向右移，并合并
function toRight(){
	
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 3 ; j >= 0 ; j--){
			for(var k = j-1 ; k >= 0 ; k--){
				if(contain[i][j] == contain[i][k]){
					contain[i][j] = contain[i][j]+contain[i][k];
					contain[i][k] = 0 ;
				}else{
					break;
				}
			}
		}
	}

	document.write("<br/>");
	for(var i = 0 ; i< contain.length; i++){
		for(var j = 0 ; j < contain[i].length; j++){
			document.write("<font size='7' >"+contain[i][j]+" </font>");
		};
		document.write("<br/>");
	}

}

function random(a,b){
	while(true){
		var ran = Math.random();
		ran = ran*10;	
		ran = parseInt(ran);
		if(ran>=a && ran<=b){
			return ran;
		}
	}
}


// 最先执行initGrid()
//window.onload = initGrid();
window.onload = function(){

	init();
}