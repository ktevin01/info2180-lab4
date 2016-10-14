window.onload = function main (){
	var edges = document.querySelectorAll(".boundary");
	var lose=false;
	var end = document.getElementById('end');
	var start=document.getElementById('start');
	var init=document.getElementById("status").textContent;

	for(var i=0;i< edges.length;i++){
		edges[i].onmouseover=function(){
			//console.log(this);
			lose=true;
			if(lose){
				for (var h=0;h< edges.length;h++){
					//console.log(h);
					edges[h].setAttribute("class","youlose boundary");
					document.getElementById("status").innerHTML = "Try again buddy, you lose";
				}
			}
		}
	}
	end.onmouseover=function(){
			if (lose===false){
				document.getElementById("status").innerHTML = "Winner Winner chicken dinner!";
				//alert ('Way to go. \n Now please wait one decade for your fake glod medal.');
			}else{
				document.getElementById("status").innerHTML = "Try again buddy, you lose";
				//alert ('That was a failure and you might not survive the winter');
			}
	};

	start.onclick=function(){
		//alert("3,2,1 GOOO!!!");
		for (var h=0;h< edges.length;h++){
			edges[h].setAttribute("class","boundary");
			lose=false;
			document.getElementById("status").innerHTML =init;
		}
	};
};
