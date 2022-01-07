const fs = require('fs')

// callback functions -> 
// Any function that is passed as an argument to another function
// Any function that is called after a function has finished executing

// function printFirstName(firstName , cb)
// {
//     console.log(firstName)
//     cb("Taneja")
// }

// function printLastName(lastName)
// {
//     console.log(lastName)
// }

// printFirstName("Saksham" , printLastName)


// Synchhronus way of reading file
// console.log('Before')
// let data = fs.readFileSync("f1.txt")
// console.log(" "+ data)

// console.log("after")


// Asynchronus way of reading File
console.log("before")

fs.readFile("f1.txt" , cb)
// error first callbacks -> Pehle error dekhta hai then apna data
function cb(err , data){
       if(err)
        {
            console.log(err)
        }

    console.log(""+data)
}

console.log("after")