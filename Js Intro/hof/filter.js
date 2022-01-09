let arr = [1,2,3,4,5];

// number jo function mei pass hoga vo new array mei aayega vrna nhi aayega (array filtered)

function oddTest(number)
{
    return number % 2 == 1; // saare odd numbers pass ho jaayenge and new array mei aa jaayenge 
}

function evenTest(number)
{
    return number % 2 == 0;
}

let oddArray = arr.filter(oddTest);
let evenArray = arr.filter(evenTest);

console.log(oddArray);
console.log(evenArray);
console.log(arr); // old array remains unchanged