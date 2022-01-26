// Creating our own filter function using prototype


Array.prototype.myFilter = function(testCB)
{
    let newArr = [];
    for(let i = 0; i < this.length; i++)
    {
        if(testCB(this[i]))
        {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let arr = [2, 3, 4, 5, 6, 7, 8, 9];

function checkOdd(num)
{
    return num % 2 == 1;
}

let newArr = arr.myFilter(checkOdd);
console.log(newArr);