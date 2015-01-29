var stringifyJSON = function(obj) {
  //fail cases
   //console.log("starting");
   
    if (obj === null) {
        console.log("parameter is null");	
        return 'null';
  }

  else if (obj === undefined) {
    console.log("parameter is undefined");
  	return undefined;
  }
    
  else if (typeof obj === 'number') {
        return obj + '';
    }
    
  else if (typeof obj === 'string') {
  	console.log(obj + " is a string");
    obj = '"' + obj + '"';
  	return obj;
  }

  else if (Array.isArray(obj)) {
  	var holder = [];
  	var length = obj.length;
    //console.log(length);

  	//Here is where we are going to iterate through the obj (if its an array) 
  	//So what we do is use a for loop and then recursively call stringify

  	for (var i = 0; i <= length; i++) {
  		console.log(holder);
        holder.push(stringifyJSON(obj[i]));
  	}
  	return '[' + holder + ']';
  }

  else if (typeof obj === 'object') {
  	var holder = [];
  	for (var keys in obj) {
        console.log(holder);
  		holder.push(stringifyJSON(keys) + ":" + stringifyJSON(obj[keys]));
  	}
  	return '{' + holder + '}';
  }

  else {
  	return obj.toString();
  }
};
