// hof on arrays
// It takes a function (test function) as input and returns a new filtered array ->
// Test function returns true or false

// Filter function calls the given function (test function) on every element of that array\
// if that function returns ->
// true then you will add that element to the new array
// false then you will not add that element to the new array

let arr = [2, 3, 4, 5, 6, 7, 8, 9];

function checkOdd(num)
{
    return num % 2 == 1;
}

// let newArr = arr.filter(checkOdd);
// console.log(newArr);

function myFilter(arr, testCB)
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(testCB(arr[i]))
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let newArr = myFilter(arr, checkOdd);
console.log(newArr);