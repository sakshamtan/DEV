// Closure -> Feature of js through which inner functions can access all the variables of outer
// functions even after outer functions have been removed from the call stack

function outer(first)
{
    console.log("Inside Outer");
    return function inner(second)
    {
        console.log("Inside Inner");
        return first * second; // inner function mei outer function ke saare variables ka access rehta hai
    }                          //  even if outer function stack se wipe ho jaaye through closure
}

let rVal = outer(2);
console.log("Befiore calling rVal that contains inner");
let ans = rVal(4);
console.log(ans);

// Closures example 2 ->
function enterFirstName(firstName)
{
    return function enterLastName(lastName)
    {
        return function enterAge(age)
        {
            return function printDetails()
            {
                console.log("Your Name is", firstName, lastName, "and your age is", age);
            }
        }
    }
}

let enterLastName = enterFirstName("Saksham");
let enterAge = enterLastName("Taneja");
let printDetails = enterAge(22);
printDetails();

// Question 1 -> Predict the output
function fun_01()
{
    var arr = [];
    for(var i = 0; i < 3; i++)
    {
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}

console.log("Before calling fun");
var arr = fun_01();
// arr = [8k, 10k, 12k] -> addresses of inner functions
// After calling fun(), i = 3 passed through closure to the inner functions stored inside arr
arr[0](); // 3
arr[1](); // 3
arr[2](); // 3
console.log("After calling fun");

// Question 2 -> Predict the output
// Execution context
function fun_02()
{
    var arr = [];
    for(var i = 0; i < 3; i++)
    {
        function inner_02()
        {
            var j = i; // har function ke liye new j ban rha hai
            j++;
            return function()
            {
                console.log(j);
            }
        }
        arr.push(inner_02()); // inner function saath saath call
    }
    return arr;
}

console.log("Before calling fun");
var arr_02 = fun_02();
arr_02[0](); // 0 -> because j har baar naya bana and function bhi naya bna har iteration pr
arr_02[1](); // 1    so j ki value saath saath pass hogyi through closure
arr_02[2](); // 2
console.log("After calling fun");

// Question ->

// function powerCreator(exp)
// {
//     let fun = function(base)
//     {
//         return Math.pow(base, exp);
//     }

//     return fun;
// }

// let squarer = powerCreator(2);
// let val = squarer(8);
// console.log(val);

// Change powerCreator to make it a producer of such functions whose exponenent we can change on a later stage.

function powerCreator(obj)
{
    let fun = function(base)
    {
        return Math.pow(base, obj.exp);
    }

    return fun;
}

let obj = {
    exp: 2
};

let squarer = powerCreator(2);
let val = squarer(8);
console.log(val);

obj.exp = 3;
let val2 = squarer(8); // sqaurer is now cuber
console.log(val2);