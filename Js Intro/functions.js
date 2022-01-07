// functions expects arguments

// function sayHi()
// {
//     console.log("Hii");
// }

// sayHi();  // function call
// sayHi();

// function add(a, b)
// {
//     // console.log(a + b);
//     return a + b;
// }

// let sum = add(2,5);  // function call
// console.log('The sum is', sum);

// In Javascript, functions are also known as first class citizens
// Meaning functions can also be used as variables
//This is also known as function expression

// let sayHi = function(a) // anonymous function -> function with no name
// {
//     console.log(a);
// }

// sayHi(2);

// IIFE -> Immeditely Invoked Function Expression

let add = (function(a,b) {
    console.log(a+b);
})(10,20) // arguments saath saath pass krdiye

// console.log(add);