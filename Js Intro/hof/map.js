// hof -> high order functions (functions that take other functions as their arguement)
// map function available on arrays
// It doesnt change the original array

let arr = [1,2,3,4,5];

function sqaurer(x)
{
    return x * x;
}

function cuber(x)
{
    return x * x * x;
}

// for(let i = 0; i < arr.length; i++)
// {
//     arr[i] = sqaurer(arr[i]);
// }
// console.log(arr);

// Upar ka saara kaam ek line mei map function se ho skta hai
let squaredArr = arr.map(sqaurer); // squarer function poore array mei apply ho jaayega
console.log("squared array:", squaredArr);

let cubedArr = arr.map(cuber);
console.log("cubed array:", cubedArr);