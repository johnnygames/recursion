// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //establish an empty array to hold the results
  var results;

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

  return results
  	**/
};
