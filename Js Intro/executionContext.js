// Execution context -> Created each time we run our js code.
// It's the wrap around code for our js code which does various tasks ->
// 1) Memory allocation of functions and variables (variables set to undefined)
// 2) Execution of code line by line
// By default we have global execution context which works for the global code written

// Global Execution Context ->
console.log("Before declaration 8:", a);
var a;
console.log("After declaration 10:", a);
a = 10;
console.log("After Initialization 12:", a);

// Functional Execution Context -> A new execution context fires when a function is called
function fn()
{
    console.log("Before declaration 17:", a);
    var a;
    console.log("After declaration 19:", a);
    a = 20;
    console.log("After Initialization 21:", a);
}

fn();