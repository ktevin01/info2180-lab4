window.onload = function main (){
	var edges = document.querySelectorAll(".boundary");
	var lose=false;
	var end = document.getElementById('end');
	var start=document.getElementById('start');
	var init="Maze Time";
	var maze=document.getElementById("maze");

	for (var h=0;h< edges.length;h++){
		//console.log(h);
		edges[h].setAttribute("class","youlose boundary");
		document.getElementById("status").innerHTML = "Ready, Lets go";
	}

	for(var i=0;i< edges.length;i++){
		edges[i].onmouseover=function(){
			//console.log(this);
			lose=true;
			if(lose){
				for (var h=0;h< edges.length;h++){
					//console.log(h);
					edges[h].setAttribute("class","youlose boundary");
					document.getElementById("status").innerHTML = "Try again buddy, you lose. Press 'S' to try again";
				}
			}
		}
	}
	end.onmouseover=function(){
			if (lose===false){
				document.getElementById("status").innerHTML = "Winner Winner chicken dinner!";
				//alert ('Way to go. \n Now please wait one decade for your fake glod medal.');
			}else{
				document.getElementById("status").innerHTML = "Try again buddy, you lose. Press 'S' to try again";
				//alert ('That was a failure and you might not survive the winter');
			}
	};

	start.onclick=function(){
		//alert("3,2,1 GOOO!!!");
		for (var h=0;h< edges.length;h++){
			edges[h].setAttribute("class","boundary");
		}
		lose=false;
		document.getElementById("status").innerHTML =init;
	};
	maze.onmousemove=function(num){
			var right=maze.offsetLeft+maze.offsetWidth;
			var left=maze.offsetLeft;
			var x = num.clientX;
			var y = num.clientY;
			console.log(right,x);
			//if(x<left){
			if(x<=left||x>=right-2){
				//alert('yes');
				for (var h=0;h< edges.length;h++){
					edges[h].setAttribute("class","youlose boundary");
					// document.getElementById("status").innerHTML = "Try again buddy, you lose";
					if(lose){
						document.getElementById("status").innerHTML = "And back to start you go";
					}
				}
				lose=true;
			}

	};

};
