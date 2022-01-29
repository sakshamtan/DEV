// Execution context -> Created each time we run our js code.
// It's the wrap around code for our js code which does various tasks ->
// 1) Memory allocation of functions and variables (variables set to undefined)
// 2) Execution of code line by line
// By default we have global execution context which works for the global code written

console.log("Before declaration", a);
var a;
console.log("After declaration", a);
a = 10;
console.log("After Initialization", a);