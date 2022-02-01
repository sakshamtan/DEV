// var is function scoped or globally scoped
var a;
a = 10;

// with a function call a new execution context is also fired that's why a is undefined in line 8, 10
function fn()
{
    console.log("Before Declaration :", a);
    var a;
    console.log("After Declaration :", a);
    a = 20;
    if(true)
    {
        var a = 30;
        console.log("Inside Block :", a);
    }
    console.log("After Initialization :", a);
}

fn();

// 1) Var ->
// Can be reassigned, redeclared
// function scoped, you can access a var variable before declaration

console.log(x);
var x;
x = 10;
var x;
console.log(x);

// 2) Let ->
// Can't redeclare, block scoped
// Can't access a let variable before declaration -> because it resides in temporal dead zone

// console.log(y); // error
let y;
// let y; // not allowed to redeclare
console.log(y);

