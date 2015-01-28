// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //fail cases
  if (obj === null) {
  	return null;
  }

  if (obj === undefined) {
  	return undefined;
  }

  if (typeof obj === 'string') {
  	obj = '"' + obj + '"';
  	return String(obj);
  }

  if (Array.isArray(obj)) {
  	var holder = '';
  	var length = obj.length;

  	//Here is where we are going to iterate through the obj (if its an array) 
  	//So what we do is use a for loop and then recursively call stringify

  	for (var i = 0; i < length; i++) {
  		holder = holder.concat(stringifyJSON(obj[i]));
  	}
  	return holder;
  	console.log(holder);

  }
};
