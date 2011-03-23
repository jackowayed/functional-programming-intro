// Functional Programming

// "Functional programming leads to code that is easier to write,
// read, test, and reuse." --Programming Clojure

// Point 1: First-class functions

// a function is any other piece of data

// can set it to a variable
var x = 3;
var y = function(a){
  return a * 2;
}
var z = y(3);//6

// can return it from a function
function multiplyByN(n){
	  return function(a){
        return a * n;
    }
}
var timesFive = multiblyByN(5);
var a = timeFive(2); //10

// can pass it into a function
function map(arr, fun) {
	var ret = new Array(arr.length);
	for (var i = 0 ; i < arr.length; i++) {
    ret[i] = fun(arr[i]);
	}
  return ret;
}
var squares = map([1,2,3,4,5], function(i) {
	return i * i;
}); // [1,4,9,16,25]

// can pass it to a function and return from a function
function compose(outer, inner){
	  return function(a){
        return outer(inner(a));
    }
}
var identity = compose(Math.log, Math.exp);
identity(2); //2

// Point 2: Pure functions

// does not change or depend on state
// parameters are the only things that determine the return value
// (which means that it always returns the same thing if you call it
// with the same params)

// Point 3: Bottom-up Programming?
