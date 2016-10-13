window.onload = function main (){
	//alert('Hey How you doing');
	var edge = document.getElementById('boundary1');
	function mouseon(){
		edge.setAttribute("style","border-color: red");
	};
	function mouseoff(){
		edge.setAttribute("style","border-color: black");
		};
	edge.onmouseover=function(e) {
	        mouseon();
	};
	edge.onmouseout=function(e) {
	        mouseoff();
	};

};
