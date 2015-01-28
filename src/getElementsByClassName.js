// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //establish an empty array to hold the results
	var results = [];
	var travelDOM = function (node){
  	  	if (node) {
  	  		var list = node.classList;
	  	  	if (node.length) {
	  	  		for (var i = 0, length = node.length; i < length; i++){
	  	  			if (node[i].classList){
	  	  				travelDOM(node[i]);
	  	  			}
	  	  		}
	  	  	}
	  	  	else {
	  	  		if (list) {
		  	  		if (list.contains(className)) {
			  	  		results.push(node);
			  	  	}
		  	  		travelDOM(node.childNodes); 		  	  			
	  	  		}
	  	  	}
	  	}
  };
  travelDOM(document.body);
  return results;
};
