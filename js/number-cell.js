// 产生带数字的可移动方块
function init_block(){
	var father = document.getElementById("game-container");
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			var temp = document.createElement("div");
			temp.setAttribute("class","number-cell");
			numbercells[i][j] = temp;
			father.appendChild(temp);
		}
	}

	resetGrid();
}

function resetGrid(){
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
				var textNode = document.createTextNode(contain[i][j]);
				numbercells[i][j].appendChild(textNode);
			}

			console.log("num:%d  x :%s  y:%s",contain[i][j],numbercells[i][j].style.left,numbercells[i][j].style.top)
		}
	}	
}