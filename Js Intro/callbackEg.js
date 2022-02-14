let fs = require('fs');

// Question 1 -> If number is prime add that to primes.txt file and if number is non prime then add that to non-primes.txt file
function primeSieve(primeHandler, nonPrimeHandler) // two cb functions passed
{
    let oarr = this;
    primeHandler.calledForTheFirstTime = true; // using function as objects (adding properties using '.' operator)
    nonPrimeHandler.calledForTheFirstTime = true;

    for(let i = 0; i < oarr.length; i++)
    {
        let num = oarr[i];

        let isPrime = true;
        for(let div = 2; div * div <= num; div++)
        {
            if(num % div == 0)
            {
                isPrime = false;
                break;
            }
        }
        if(isPrime)
        primeHandler(num);
        else
        nonPrimeHandler(num);
    }
}

Array.prototype.sieve = primeSieve;

let arr1 = [11, 18, 34, 37, 49, 53, 71, 84, 97];
arr1.sieve(logAllPrimes, logAllNonPrimes);

function logAllPrimes(num)
{
    if(logAllPrimes.calledForTheFirstTime == true)
    {
        if(fs.existsSync("Primes.txt"))
        {
            fs.rmSync("Primes.txt");
        }
        logAllPrimes.calledForTheFirstTime = false;
    }
    fs.appendFileSync("Primes.txt", num + "->", 'utf-8');
}

function logAllNonPrimes(num)
{
    if(logAllNonPrimes.calledForTheFirstTime == true)
    {
        if(fs.existsSync("Non-primes.txt"))
        {
            fs.rmSync("Non-primes.txt");
        }
        logAllNonPrimes.calledForTheFirstTime = false;
    }
    fs.appendFileSync("Non-primes.txt", num + "->", 'utf-8');
}

// Question - 2 -> Add a function to all arrays which takes as input two callbacks
// One for small string (< 50 in length) and the other for long strings

// Short string callback should do the following 
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => Malik Sumeet is name My. teacher a am I. programming teach I.

// long string callback should do the following to the string
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => I teach programming. I am a teacher. My name is Sumeet Malik.

let arr2 = [
    "My name is Sumeet Malik. I am a teacher. I teach programming.",
    "India won in Australia but England won't.",
    "My name is Saksham Taneja.",
    "India went to South Africa. India started well but it rains",
];

Array.prototype.processStrings = function(shortStringCB, longStringCB, criteria)
{
    let oarr = this;
    for(let i = 0; i < oarr.length; i++)
    {
        let str = oarr[i];
        if(str.length >= criteria)
        longStringCB(str);
        else
        shortStringCB(str);
    }

    return this; // for chaining like processStrings().map().filter() etc.
}

function handleShortStrings(str)
{
    let res1 = str.split(".");  // strings se array bnaya splitted on '.'
    let res2 = res1.filter(s => s.length > 0); // 0 length ki strings remove krdi from array
    let res3 = res2.map(s => s.trim());  // saari strings inside array trim krdi
    let res4 = res3.map(s => s.split(" ")); // array ke har ele ko spit krdia to form 2D array
    let res5 = res4.map(a => a.reverse()); // now reversing each array inside 2D array
    let res6 = res5.map(a => a.join(" ")); // join is opposite to split -> converts array to string (" ") here with space in between each element
    let res7 = res6.join(". ");  // Now joining each array with full stops to form sentences again
    let res8 = res7 + "."; // last mei full stop nhi aata to add krdia
    console.log("Short String = " + res8);
}

function handleLongStrings(str)
{
    let res1 = str.split(".");
    let res2 = res1.filter(s => s.length > 0);
    let res3 = res2.map(s => s.trim());
    let res4 = res3.reverse();
    let res5 = res4.join(". ");
    let res6 = res5 + ".";
    console.log("Long String = " + res6);
}

arr2.processStrings(handleShortStrings, handleLongStrings, 40);
