// 1) forEach -> It does a task for every element of the array
let arr1 = ['A','B','C'];

function printElement(element)
{
    console.log(element);
}

// for loop ka subsitute hai ye hof.
// arr1.forEach(printElement);

// 2) every -> returns true if all the elements of the array pass the test implemented by the provided function.
// It returns a boolean value.
let arr2 = [1, 30, 39, 29, 10, 13];

function isBelowThreshold(currentValue)
{
    return currentValue < 40;
}

// Agr saare elements isBelowThreshold(testFunction) ko pass krenge to true return krega every().
// console.log(arr2.every(isBelowThreshold)); 

// 3) some -> returns true if atleast one element of the array passes the test function
let arr3 = [1, 2, 3, 5, 7];

function even(element)
{
    return element % 2 === 0;
}

// console.log(arr3.some(even)); // 2 even ko true return kr rha hai to some bhi true return krega

// 4) findIndex -> returns the index of the element that pass the test function (the first found index )
let arr4 = [5, 12, 8, 130, 44];

function isLargerNumber(element)
{
    return element > 13;
}

console.log(arr4.findIndex(isLargerNumber));

// polyFills of the above functions -------->

// 1) forEach
Array.prototype.myForEach = function(testFunction)
{
    for(let i = 0; i < this.length; i++)
    {
        testFunction(this[i]);
    }
}

// arr1.myForEach(printElement);

// 2) every
Array.prototype.myEvery = function(testFunction)
{
    for(let i = 0; i < this.length; i++)
    {
        if(!testFunction(this[i]))
        return false;
    }
    return true;
}

// console.log(arr2.myEvery(isBelowThreshold));

// 3) some
Array.prototype.mySome = function(testFunction)
{
    for(let i = 0; i < this.length; i++)
    {
        if(testFunction(this[i]))
        return true;
    }
    return false;
}

// console.log(arr3.mySome(even));

// 4) findIndex
Array.prototype.myFindIndex = function(testFunction)
{
    for(let i = 0; i < this.length; i++)
    {
        if(testFunction(this[i]))
        return i;
    }
    return -1;
}

console.log(arr4.myFindIndex(isLargerNumber));


