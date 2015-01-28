// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //establish an empty array to hold the results
  var results;

  function travelDOM (initial_node) {
  	if (!initial_node) {
  		initial_node = document.body;
	}
	for (var i = 0, counter = initial_node.childNodes.length; i < counter; i++) {
		if (initial_node.childNodes[i].childNodes.length > 0) {
			travelDOM(initial_node.childNodes[i]);
		}

		if (initial_node.childNodes[i].className && initial_node.className.indexOf(className) >= 0) {
			results.push(initial_node.childNodes[i]);
		}
	}

  }

  travelDOM(document.body);
  return results;

  /** The first thing that we need to do is write an inner function
  
  function(param) 
  	if parameter exists use that as a starting position
  		else use document.body as beginning (top of the DOM)
  	
  	now, we use for a for loop to iterate from the starting position 
  	for the length of the node list for which we can use childNodes.

  	if the ChildNode at position i, has childNodes (e.g., length > 0)
  		call the inner function again <-- recursive call

  	if the className && the indexOf(className) >= 0 exists
  		push it into the results

  return resultsg
  
  **/
};
