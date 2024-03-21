//local scope
//global scope
//lexical scope
var globalVariable = "I am global variable.";

var myFunc = function () {
	var localVariable = "I am local variable.";

	console.log(globalVariable);
	console.log(localVariable);
};

myFunc();
// I am global variable.
// I am local variable.

console.log(localVariable); // undefined
