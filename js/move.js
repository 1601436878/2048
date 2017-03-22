var contain = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];



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

	for(var i = 0 ; i< contain.length; i++){
		for(var j = 0 ; j < contain[i].length; j++){
			document.write(contain[i][j]+" ");
		};
		document.write("<br/>");
	}
}

function moveTo(){

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

window.onload = initGrid();