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
}
