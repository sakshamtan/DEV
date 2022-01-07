//child process is a node module used to create subprocess within a script to perform different tasks

const cp = require('child_process'); // similar to using packages of python`

// console.log('Trying to open calculator');
// cp.execSync('calc');  // execSync() -> to execute cmd command in our script(synchronous)
// console.log('calculator opened');


// console.log('Trying to open Vs Code')
// cp.execSync('code') 
// console.log('Vs code Opened')


// cp.execSync('start chrome https://www.pepcoding.com/')  // to start chrome and open a specific website

let output = cp.execSync('node test.js') // To fetch output of some js file
console.log(''+ output) 
//Output's format by default is in buffer format so to convert it into string concat it with a empty string


