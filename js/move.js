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
					contain[i][j] = parseInt(contain[i][j])+parseInt(contain[i][k]);
					contain[i][k] = 0 ;
				}else{
					break;
				}
			}
		}
	}
	
	resetGrid();

	// document.write("<br/>");
	// for(var i = 0 ; i< contain.length; i++){
	// 	for(var j = 0 ; j < contain[i].length; j++){
	// 		document.write("<font size='7' >"+contain[i][j]+" </font>");
	// 	};
	// 	document.write("<br/>");
	// }

}
