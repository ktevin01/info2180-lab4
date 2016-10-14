window.onload = function main (){
	var edges = document.querySelectorAll(".boundary");
	var lose=false;

	for(var i=0;i< edges.length;i++){
		edges[i].onmouseover=function(){
			//console.log(this);
			lose=true;
			if(lose){
				for (var h=0;h< edges.length;h++){
					//console.log(h);
					edges[h].setAttribute("class","youlose boundary");
				}
			}
		}
	}
};
