// functions expects arguments

function sayHi(name)
{
    console.log("My Name is", name);
}

// sayHi("Saksham");  // function call

// Dynamic behaviour of js
// sayHi(10);

let array = [10,20,30,40];

let obj = {firstName : "Saksham"};

function anotherFunction()
{
    console.log("I am another Function");
}

sayHi(array);

sayHi(obj);

// Function is also a variable
sayHi(anotherFunction)

// function add(a, b)
// {
//     // console.log(a + b);
//     return a + b;  // anything can be returned
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