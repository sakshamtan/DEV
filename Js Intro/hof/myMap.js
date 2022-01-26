// Creating our own map function using prototype 

//map function takes another smaller function as its arguement and returns a new array without changing the original array
Array.prototype.myMap = function(cb) // cb -> callback function
{
    let newArr = [];
    for(let i = 0; i < this.length; i++)
    {
        let ans = cb(this[i]); // cb mei jo function pass hoga vo har ele of arr pr apply hoga
        newArr.push(ans);
    }
    return newArr;
}

let arr = [5,7,9,11,13,14];

function squarer(number)
{
    return number * number;
}

function cuber(number)
{
    return number * number * number;
}

let squaredArr = arr.myMap(squarer);
console.log(squaredArr);

let cubedArr = arr.myMap(cuber);
console.log(cubedArr);