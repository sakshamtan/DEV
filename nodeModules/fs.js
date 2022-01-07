// Node Modules are used to perform different tasks as required

//File System Module -

// Files -> 
//1. we will be reading, writing , updating , deleting files from our script

const fs = require('fs')      // fileSystem module
const path = require('path')  // path module

// let content = fs.readFileSync('f1.txt');
//readFileSync() -> reads a file
// console.log('This is f1 file data -> ' + content);

// Writing to a file
// writeFileSync method is used to put data(write data) to a file.
// If the file passed doesnt exist it creates a new file and writes to it.

// fs.writeFileSync('f2.txt',"Hello from f2");

// Append a file
// appendFileSync() -> adds data to the previously written file
// Basically it appends a file with new data passed

// fs.appendFileSync('f2.txt',' this is f2 data');

// Delete a file by passing it's path -> unlinkSync()

// fs.unlinkSync('f2.txt');
// console.log('file removed');


// Directories ->

// Create 
// mkdirSync is used to create a new directory

// fs.mkdirSync('myDirectory');

// Delete
// rmdirSync is used to remove or delete a directory

// fs.rmdirSync('myDirectory');

// To check whether a directory exists or not we can use existsSync function
// If the directory exists the function will return true else false

// let doesExist = fs.existsSync('myDirectory');
// console.log(doesExist);

// Stats of a path (details of a folder)
// lstatSync provides us with all the statistics of a directory

// let statsOfPath = fs.lstatSync('myDirectory');
// console.log(statsOfPath);

// console.log('isFile ?', statsOfPath.isFile());
// isFile() -> checks whether a passed path is a file or not
// console.log('isDirectory ?', statsOfPath.isDirectory());
// isDirectory() -> checks whether a passed path is a directory or not

// readdirSync function is used to check the content of a particular directory
let folderPath = '/Users/mac/Documents/DEV/nodeModules/myDirectory';
let folderContent = fs.readdirSync(folderPath);
console.log('directory content : ' + folderContent);


// Copy files

// src file, destFolder

let srcFilePath = '/Users/mac/Documents/DEV/nodeModules/f3.txt';
let destFolder = '/Users/mac/Documents/DEV/nodeModules/myDirectory2';

let toBeCopiedFileName = path.basename(srcFilePath);
console.log(toBeCopiedFileName); // f3.txt
// basename() method gets the actual name of the file or directory

let destPath = path.join(destFolder,toBeCopiedFileName);
console.log(destPath);

fs.copyFileSync(srcFilePath,destPath);
console.log('File copied');




