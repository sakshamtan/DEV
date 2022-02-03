
function fn(param1, param2)
{
    console.log("Inside fn", param1, param2);
}

// fn("Hello", "Hi");

// If there is something missing in js then by defualt -> undefined
// fn("Hello");

// fn();

// This also works fine as js is dynamic in nature
// fn("Hello", "Hi", "Bye");

// arguments(Array like) -> parameters passed to the function is stored inside arguments array
function fn(param1, param2)
{
    console.log(arguments);
    console.log(param1);
    console.log(param2);
}

// arguments[0] copied into param1, arguments[1] copied into param2 and so on to emulate working of java
fn("Hello", "Hi");

fn("Hello");

fn();

// Question -> Predict the output
// 1
function f()
{
    console.log(arguments);
}

// 2
function f(a, b)
{
    return a + b;
}

console.log(f(2, 3, 4, 5));

// 3
function f(x, y, z, t)
{
    return x + y + z + t;
}

console.log(f(2, 3, 4, 5));
// The 3rd function will be called both times because ->
// 1) Memory allocation of functions take place before the execution of code
// 2) There is no function overloading in js

