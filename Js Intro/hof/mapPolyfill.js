// Implementing our own map function
let arr = [5,7,9,11,13,14];

function squarer(number)
{
    return number * number;
}

function cuber(number)
{
    return number * number * number;
}

//map function takes another smaller function as its arguement and returns a new array without changing the original array
function myMap(arr, cb) // cb -> callback function
{
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        let ans = cb(arr[i]); // cb mei jo function pass hoga vo har ele of arr pr apply hoga
        newArr.push(ans);
    }
    return newArr;
}

let squaredArr = myMap(arr,squarer);
console.log(squaredArr);

let cubedArr = myMap(arr,cuber);
console.log(cubedArr);
