// functions expects arguments

function sayHi(name)
{
    console.log("My Name is", name);
}

// sayHi("Saksham");  // function call

// Dynamic behaviour of js -> Data type doesnt matter
// sayHi(10);

let array = [10,20,30,40];

let obj = {firstName : "Saksham"};

function anotherFunction()
{
    console.log("I am another Function");
}

// sayHi(array);

// sayHi(obj);

// Function is also a variable -> Function definition of anotherFunction is passed into sayHi function (address)
// sayHi(anotherFunction);

// Function as a reference type variable ->
function fn1(name)
{
    console.log("Hello", name, "from fn1");
    name(); // fn2 invoked as it's reference was passed on name variable
}

function fn2()
{
    console.log("I am fn2");
}

// fn1(fn2); // fn2 passed as a variable

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