// All JavaScript objects inherit properties and methods from a prototype.

Array.prototype.sayHello = function(ele) // functions upar declare krne hai and then unko call neeche krna hai because line by line chlti hai js
{
    console.log("Hello", ele);
}

let arr1 = [1, 2];
let arr2 = [3, 4];

arr1.sayHello(arr1);  // .function() krke use krne ke liye prototype use hota hai
arr2.sayHello(arr2);

// this -> this is a predefined keyword in js which refers to the entity that is calling the method
Array.prototype.sum = function() // implementing our own sum function
{
    let sum = 0; // jis array pe sum call hoga to this ki value vo array ho jaayegi
    for(let i = 0; i < this.length; i++) // Aisa isliye kra kyuki arr hum sum ke parenthesis mei pass nhi krna tha
    {
        sum += this[i];
    }
    return sum;
}

Array.prototype.product = function()
{
    let pro = 1;
    for(let i = 0; i < this.length; i++)
    {
        pro *= this[i];
    }
    return pro;
}

console.log(arr1.sum());
console.log(arr2.product());