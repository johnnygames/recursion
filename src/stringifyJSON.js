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

};
